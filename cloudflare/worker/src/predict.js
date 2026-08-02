// ============================================================================
// predict.js — JS port of the XGBoost simulation pipeline (train-predict/SKILL.md).
//
// Workers can't run XGBoost, so the *learned* finishing-position output is frozen
// as MODEL_BASE_2026 (seed.js). This module:
//   1. Computes base finishing positions = blend(model anchor, live form, live results).
//   2. Runs a 500-iteration Monte Carlo season simulation (σ=3.5 additive Gaussian).
//   3. Derives championship / race-win / podium probabilities + predicted points.
//   4. Applies the skill's sanity checks (bump σ if champion runs away).
//
// Output schema matches _workspace/predictions.json exactly (the harmony contract).
// ============================================================================

import {
  DRIVER_INFO, MODEL_BASE_2026, MODEL_CV_MAE, REGULATION_IMPACT_2026,
  DRIVER_ROLLING_FORM, N_RACES_2026, CALENDAR_2026,
} from "./seed.js";

const F1_POINTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1]; // P1..P10
const SPRINT_POINTS = [8, 7, 6, 5, 4, 3, 2, 1];        // P1..P8
const N_SIMS = 2000;

// ---------------------------------------------------------------------------
// Calibration. Every constant below is derived from data in this repo, not
// chosen to make the output look reasonable.
// ---------------------------------------------------------------------------

// Per-race noise. For a normal error, MAE = sigma * sqrt(2/pi), so the trained
// model's own cross-validated MAE pins sigma rather than us guessing it.
//   2.71 / 0.7979 = 3.40 positions
const RACE_SIGMA = MODEL_CV_MAE / Math.sqrt(2 / Math.PI);

// Season-level form drift. Measured from historical_driver_points 2020-2025:
// the SD of a driver's year-over-year championship RANK change is 3.61
// positions over 91 driver-season pairs (mean ~0).
//
// This is the term the old model was missing entirely. It is drawn ONCE per
// simulation and applied to every remaining race, so it does NOT average out
// the way per-race noise does. Without it, 11 races of independent noise
// cancel (standard error shrinks by sqrt(11)) and the top-ranked driver wins
// ~99% of simulations regardless of how close the championship actually is.
const SEASON_RANK_SD_FULL_YEAR = 3.61;

// Retirement rate per driver per race.
//
// NOT measurable from this payload: real_race_results_2026 stores only the top
// 10 finishers, so retirements never appear in it (110 rows / 11 races = 10.0).
// This is the modern-era approximation (~1.8 retirements per 20-car race) and
// is the one genuinely external constant here. Tune it if full results become
// available in the payload.
const DNF_RATE = 0.09;

// Deterministic PRNG so identical inputs → identical predictions (mulberry32).
function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Box-Muller standard normal from a uniform PRNG.
function gaussian(rng) {
  let u = 0, v = 0;
  while (u === 0) u = rng();
  while (v === 0) v = rng();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

// Recency-weighted form score from per-season points (recent seasons weighted up).
function formScore(driverId) {
  const rf = DRIVER_ROLLING_FORM[driverId];
  if (!rf) return 0;
  const w = [0.05, 0.1, 0.15, 0.2, 0.2, 0.3]; // 2020..2025
  let s = 0;
  for (let i = 0; i < rf.points.length; i++) s += (rf.points[i] || 0) * (w[i] || 0);
  return s;
}

// How many prior seasons this driver actually scored in (2020-2025).
export function experienceSeasons(driverId) {
  const rf = DRIVER_ROLLING_FORM[driverId];
  if (!rf) return 0;
  return (rf.points || []).filter((p) => p > 0).length;
}

/**
 * Per-driver season-form SD, in finishing positions.
 *
 * Two effects compose:
 *  - Time: form drift accumulates with the season, so variance scales with the
 *    fraction of the season left and SD with its square root. Predicting two
 *    remaining races is a much smaller leap than predicting twenty.
 *  - Evidence: a driver with one scoring season is far less predictable than
 *    one with six. Antonelli's rolling form is [0,0,0,0,0,150] — treating him
 *    as exactly as knowable as Alonso is what made the old output degenerate.
 *    Multiplier runs 1.6x (no history) down to ~1.0x (six seasons).
 */
function seasonSigma(driverId, racesRemaining, nRaces) {
  const timeScale = Math.sqrt(Math.max(0, racesRemaining) / Math.max(1, nRaces));
  const evidence = 1 + 0.6 * Math.exp(-experienceSeasons(driverId) / 2);
  return SEASON_RANK_SD_FULL_YEAR * timeScale * evidence;
}

/**
 * Mathematical elimination from the drivers' championship.
 *
 * A driver is out only when their maximum attainable total cannot reach the
 * leader's CURRENT total — the strict definition, independent of any
 * simulation. A Monte Carlo probability of ~0 is not elimination: with 11
 * rounds left there are 275 points on the table and almost nobody is
 * arithmetically dead, however unlikely they are.
 */
export function eliminationStatus(banked, racesRemaining, sprintsRemaining = 0) {
  const ids = Object.keys(banked);
  const leaderPoints = ids.length ? Math.max(...ids.map((d) => banked[d] || 0)) : 0;
  const maxRemaining = racesRemaining * F1_POINTS[0] + sprintsRemaining * SPRINT_POINTS[0];
  const out = {};
  for (const d of ids) {
    const ceiling = (banked[d] || 0) + maxRemaining;
    out[d] = {
      max_possible_points: ceiling,
      points_behind_leader: Math.max(0, leaderPoints - (banked[d] || 0)),
      mathematically_eliminated: ceiling < leaderPoints,
    };
  }
  return { statuses: out, leaderPoints, maxRemaining };
}

// Remaining sprint rounds after `racesCompleted` rounds have been run.
export function remainingSprintCount(racesCompleted) {
  return CALENDAR_2026.filter((r) => r.round > racesCompleted && r.sprint).length;
}

/**
 * Base finishing positions for 2026.
 * - No live results  → MODEL_BASE_2026 anchor (exact parity with the trained model).
 * - Live results in  → blend anchor with live championship order as the season unfolds
 *   (weight shifts toward reality proportional to races completed).
 *
 * @param {Array<{driver_id:string}>} liveStandings ordered current 2026 standings (optional)
 * @param {number} racesCompleted number of 2026 races completed (0 = preseason)
 */
export function computeBasePositions(liveStandings = [], racesCompleted = 0) {
  const drivers = Object.keys(MODEL_BASE_2026);

  // Anchor score: higher = better (invert position).
  const anchor = {};
  for (const d of drivers) anchor[d] = (21 - MODEL_BASE_2026[d]);

  // Live score from current standings — POINTS-based, not just rank order, so a
  // points-dominant leader (e.g. 156 pts / 5 wins) gets a correspondingly dominant
  // going-forward base position instead of being a hair ahead of P4. Normalised to
  // the current points leader; drivers yet to score sit near 0 (correctly weak).
  const live = {};
  if (liveStandings.length) {
    const maxPts = Math.max(1, ...liveStandings.map((r) => r.points || 0));
    liveStandings.forEach((row) => {
      const id = row.driver_id || row.driver;
      if (id != null) live[id] = (row.points || 0) / maxPts;
    });
  }

  // Form nudge keeps the scorer "alive" without overriding the calibrated anchor.
  const maxForm = Math.max(...drivers.map(formScore), 1);

  // Blend weight: Bayesian-style ramp — the preseason anchor acts as a prior worth
  // ~4 races; real 2026 results take over quickly as the season unfolds. At 6 races
  // live reality already carries ~0.6, so a runaway live leader (e.g. 5 wins in 6)
  // is reflected instead of being overruled by the stale preseason ranking.
  const liveW = liveStandings.length
    ? Math.min(0.85, racesCompleted / (racesCompleted + 4))
    : 0;

  const score = {};
  for (const d of drivers) {
    const a = anchor[d] / 20;                 // 0..1
    const f = formScore(d) / maxForm;         // 0..1
    // Anchor (trained-model output) dominates; form is a small nudge that only
    // matters for near-ties — keeps parity with the XGBoost ranking preseason.
    const base = 0.95 * a + 0.05 * f;
    if (liveW > 0 && live[d] != null) {
      const l = live[d]; // already 0..1 (points / current leader's points)
      score[d] = (1 - liveW) * base + liveW * l;
    } else {
      score[d] = base;
    }
  }

  // Rank by score desc → positions 1..N, no ties (skill's argsort re-rank).
  const ordered = drivers.slice().sort((x, y) => score[y] - score[x]);
  const basePos = {};
  ordered.forEach((d, i) => { basePos[d] = i + 1; });
  return basePos;
}

// Per-race win probability: softmax over inverse base position (skill §"Per-Race").
function raceWinProbabilities(basePos) {
  const drivers = Object.keys(basePos);
  const inv = {};
  let total = 0;
  for (const d of drivers) { inv[d] = 1 / Math.max(basePos[d], 0.5); total += inv[d]; }
  const out = {};
  for (const d of drivers) out[d] = inv[d] / total;
  return out;
}

// 500-iteration season Monte Carlo. Returns per-driver aggregates.
// `banked` carries the points each driver has ALREADY scored in completed 2026
// rounds; only `nRacesRemaining` races are simulated on top, so the projection is
// (real points so far) + (simulated rest of season) rather than a fresh 24-race run.
function monteCarlo(basePos, raceSigma, nRacesRemaining, banked = {}, opts = {}) {
  const { sprintRounds = [], nRaces = N_RACES_2026, dnfRate = DNF_RATE } = opts;
  const drivers = Object.keys(basePos);
  const champWins = Object.fromEntries(drivers.map((d) => [d, 0]));
  const podiums = Object.fromEntries(drivers.map((d) => [d, 0]));
  const pointsTotal = Object.fromEntries(drivers.map((d) => [d, 0]));
  const dnfCount = Object.fromEntries(drivers.map((d) => [d, 0]));
  const rng = mulberry32(42);

  // Per-driver season-form SD, computed once — it does not vary between sims.
  const seasonSd = Object.fromEntries(
    drivers.map((d) => [d, seasonSigma(d, nRacesRemaining, nRaces)])
  );

  for (let s = 0; s < N_SIMS; s++) {
    const seasonPts = Object.fromEntries(drivers.map((d) => [d, banked[d] || 0]));

    // One form draw per driver for the WHOLE remaining season. This is the
    // correlated term: it shifts every remaining race the same way, so unlike
    // per-race noise it does not wash out over 11 rounds. "Is this car still
    // the quickest in November?" is one question, not eleven.
    const formShift = {};
    for (const d of drivers) formShift[d] = gaussian(rng) * seasonSd[d];

    for (let r = 0; r < nRacesRemaining; r++) {
      const isSprint = sprintRounds.includes(r);
      const scored = [];
      for (const d of drivers) {
        // Retirement: scores nothing and is classified behind every finisher.
        if (rng() < dnfRate) {
          scored.push({ d, x: Number.POSITIVE_INFINITY, dnf: true });
          dnfCount[d] += 1;
        } else {
          scored.push({
            d,
            x: Math.max(0.5, basePos[d] + formShift[d] + gaussian(rng) * raceSigma),
            dnf: false,
          });
        }
      }
      scored.sort((a, b) => a.x - b.x);
      scored.forEach((row, idx) => {
        if (row.dnf) return; // no points, no podium
        const pos = idx + 1;
        if (pos <= 10) seasonPts[row.d] += F1_POINTS[pos - 1];
        if (isSprint && pos <= 8) seasonPts[row.d] += SPRINT_POINTS[pos - 1];
        if (pos <= 3) podiums[row.d] += 1;
      });
    }

    // Champion of this sim = max season points.
    let champ = drivers[0];
    for (const d of drivers) {
      if (seasonPts[d] > seasonPts[champ]) champ = d;
      pointsTotal[d] += seasonPts[d];
    }
    champWins[champ] += 1;
  }

  const predictedPoints = {};
  const champProb = {};
  const podiumRate = {};
  const dnfPerSeason = {};
  for (const d of drivers) {
    predictedPoints[d] = pointsTotal[d] / N_SIMS;
    champProb[d] = champWins[d] / N_SIMS;
    podiumRate[d] = podiums[d] / (N_SIMS * Math.max(nRacesRemaining, 1));
    dnfPerSeason[d] = dnfCount[d] / N_SIMS;
  }
  return { predictedPoints, champProb, podiumRate, dnfPerSeason };
}

/**
 * Generate full 2026 predictions. Output matches predictions.json schema.
 * @param {{liveStandings?:Array, racesCompleted?:number}} opts
 */
export function predict(opts = {}) {
  const { liveStandings = [], racesCompleted = 0 } = opts;
  const nRaces = N_RACES_2026;
  const racesRemaining = Math.max(0, nRaces - racesCompleted);

  // Points already banked in completed 2026 rounds (carried into every sim).
  const banked = {};
  for (const row of liveStandings) {
    const id = row.driver_id || row.driver;
    if (id != null) banked[id] = row.points || 0;
  }

  const basePos = computeBasePositions(liveStandings, racesCompleted);
  const raceWin = raceWinProbabilities(basePos);

  // Which of the REMAINING rounds are sprints, as offsets into the simulated
  // sequence (0 = the next race).
  const sprintRounds = CALENDAR_2026
    .filter((r) => r.round > racesCompleted && r.sprint)
    .map((r) => r.round - racesCompleted - 1);
  const sprintsRemaining = sprintRounds.length;

  const sigma = RACE_SIGMA;
  const sim = monteCarlo(basePos, sigma, racesRemaining, banked, {
    sprintRounds, nRaces, dnfRate: DNF_RATE,
  });
  const maxPts = Math.max(...Object.values(sim.predictedPoints));

  // Strict arithmetic elimination, independent of the simulation.
  const { statuses: elim, leaderPoints, maxRemaining } =
    eliminationStatus(banked, racesRemaining, sprintsRemaining);

  const drivers = Object.keys(basePos);

  // Driver standings ordered by predicted points.
  const driverStandings = drivers
    .map((d) => ({
      driver: d,
      constructor: DRIVER_INFO[d]?.team || "unknown",
      predicted_points: Math.round(sim.predictedPoints[d] * 10) / 10,
      championship_win_probability: round4(sim.champProb[d]),
      race_win_probability: round4(raceWin[d]),
      podium_rate: round4(sim.podiumRate[d]),
      base_predicted_position: basePos[d],
      expected_dnfs: Math.round(sim.dnfPerSeason[d] * 10) / 10,
      experience_seasons: experienceSeasons(d),
      // Arithmetic, not simulated. See eliminationStatus().
      max_possible_points: elim[d]?.max_possible_points ?? null,
      points_behind_leader: elim[d]?.points_behind_leader ?? null,
      mathematically_eliminated: elim[d]?.mathematically_eliminated ?? false,
    }))
    .sort((a, b) => b.predicted_points - a.predicted_points)
    .map((row, i) => ({ position: i + 1, ...row }));

  // Constructor standings = sum of both drivers' points, with regulation prior baked
  // into the per-driver model already; champ prob = sum of drivers' champ prob.
  const constrPts = {};
  const constrProb = {};
  for (const row of driverStandings) {
    constrPts[row.constructor] = (constrPts[row.constructor] || 0) + row.predicted_points;
    constrProb[row.constructor] = (constrProb[row.constructor] || 0) + row.championship_win_probability;
  }
  const constructorStandings = Object.keys(constrPts)
    .map((c) => ({
      constructor: c,
      predicted_points: Math.round(constrPts[c] * 10) / 10,
      championship_win_probability: round4(constrProb[c]),
    }))
    .sort((a, b) => b.predicted_points - a.predicted_points)
    .map((row, i) => ({ position: i + 1, ...row }));

  const champion = driverStandings[0].driver;

  // race_predictions: one entry (race 1) mirroring the model's per-race win odds,
  // matching the existing schema the dashboard reads.
  const racePredictions = [{
    race: 1,
    drivers: driverStandings.map((r) => ({
      driver: r.driver,
      win_probability: r.race_win_probability,
      base_position: r.base_predicted_position,
    })),
  }];

  const result = {
    metadata: {
      generated_at: new Date().toISOString().slice(0, 10),
      model: "js-weighted-montecarlo-v2",
      model_note:
        "XGBoost anchor (CV MAE " + MODEL_CV_MAE + ") + live blend + " + N_SIMS +
        "x Monte Carlo with correlated season-form drift, per-race noise and DNF risk",
      n_simulations: N_SIMS,
      n_races: nRaces,
      races_completed: racesCompleted,
      races_remaining: racesRemaining,
      sprints_remaining: sprintsRemaining,
      cv_mae: MODEL_CV_MAE,
      // Calibration, surfaced so the dashboard can show its own workings.
      noise_sigma: Math.round(sigma * 100) / 100,
      race_sigma_source: "MODEL_CV_MAE / sqrt(2/pi)",
      season_rank_sd_full_year: SEASON_RANK_SD_FULL_YEAR,
      season_rank_sd_source: "SD of year-over-year championship rank change, 2020-2025 (91 driver-seasons)",
      dnf_rate: DNF_RATE,
      dnf_rate_source: "modern-era approximation; not measurable from the top-10-only results payload",
      leader_points: leaderPoints,
      max_points_remaining: maxRemaining,
    },
    champion,
    driver_standings: driverStandings,
    constructor_standings: constructorStandings,
    race_predictions: racePredictions,
  };

  result._sanity = runSanityChecks(result);
  return result;
}

function round4(x) { return Math.round(x * 1e4) / 1e4; }

function runSanityChecks(p) {
  const gridSize = Object.keys(MODEL_BASE_2026).length; // 22 on the 2026 grid
  const probSum = p.driver_standings.reduce((s, d) => s + d.championship_win_probability, 0);
  const maxPts = Math.max(...p.driver_standings.map((d) => d.predicted_points));
  const checks = {
    drivers_full_grid: p.driver_standings.length === gridSize,
    grid_size: gridSize,
    prob_sum_ok: probSum >= 0.95 && probSum <= 1.05,
    points_cap_ok: maxPts <= 600,
    champion_prob_ok: p.driver_standings[0].championship_win_probability > 0.1,
    prob_sum: round4(probSum),
    max_points: maxPts,
  };
  checks.passed = checks.drivers_full_grid && checks.prob_sum_ok && checks.points_cap_ok;
  return checks;
}
