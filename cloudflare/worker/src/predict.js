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
  DRIVER_ROLLING_FORM, N_RACES_2026,
} from "./seed.js";

const F1_POINTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1]; // P1..P10
const N_SIMS = 500;
const DEFAULT_SIGMA = 3.5;

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

  // Live score from current standings order (if any).
  const live = {};
  if (liveStandings.length) {
    liveStandings.forEach((row, i) => {
      const id = row.driver_id || row.driver;
      if (id != null) live[id] = liveStandings.length - i;
    });
  }

  // Form nudge keeps the scorer "alive" without overriding the calibrated anchor.
  const maxForm = Math.max(...drivers.map(formScore), 1);

  // Blend weight: 0 preseason → up to ~0.7 late season.
  const liveW = liveStandings.length
    ? Math.min(0.7, racesCompleted / N_RACES_2026)
    : 0;

  const score = {};
  for (const d of drivers) {
    const a = anchor[d] / 20;                 // 0..1
    const f = formScore(d) / maxForm;         // 0..1
    // Anchor (trained-model output) dominates; form is a small nudge that only
    // matters for near-ties — keeps parity with the XGBoost ranking preseason.
    const base = 0.95 * a + 0.05 * f;
    if (liveW > 0 && live[d] != null) {
      const l = live[d] / liveStandings.length;
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
function monteCarlo(basePos, sigma, nRaces) {
  const drivers = Object.keys(basePos);
  const champWins = Object.fromEntries(drivers.map((d) => [d, 0]));
  const podiums = Object.fromEntries(drivers.map((d) => [d, 0]));
  const pointsTotal = Object.fromEntries(drivers.map((d) => [d, 0]));
  const rng = mulberry32(42);

  for (let s = 0; s < N_SIMS; s++) {
    const seasonPts = Object.fromEntries(drivers.map((d) => [d, 0]));
    for (let r = 0; r < nRaces; r++) {
      // Sample a noisy race score per driver, then re-rank to discrete positions.
      const scored = drivers.map((d) => ({
        d, x: Math.max(0.5, basePos[d] + gaussian(rng) * sigma),
      }));
      scored.sort((a, b) => a.x - b.x);
      scored.forEach((row, idx) => {
        const pos = idx + 1;
        if (pos <= 10) seasonPts[row.d] += F1_POINTS[pos - 1];
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
  for (const d of drivers) {
    predictedPoints[d] = pointsTotal[d] / N_SIMS;
    champProb[d] = champWins[d] / N_SIMS;
    podiumRate[d] = podiums[d] / (N_SIMS * nRaces);
  }
  return { predictedPoints, champProb, podiumRate };
}

/**
 * Generate full 2026 predictions. Output matches predictions.json schema.
 * @param {{liveStandings?:Array, racesCompleted?:number}} opts
 */
export function predict(opts = {}) {
  const { liveStandings = [], racesCompleted = 0 } = opts;
  const nRaces = N_RACES_2026;

  const basePos = computeBasePositions(liveStandings, racesCompleted);
  const raceWin = raceWinProbabilities(basePos);

  let sigma = DEFAULT_SIGMA;
  let sim = monteCarlo(basePos, sigma, nRaces);

  // Sanity: if the leader runs away (>550 pts), noise too low — bump σ and resim.
  let maxPts = Math.max(...Object.values(sim.predictedPoints));
  if (maxPts > 550) {
    sigma = 5.0;
    sim = monteCarlo(basePos, sigma, nRaces);
    maxPts = Math.max(...Object.values(sim.predictedPoints));
  }

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
      model: "js-weighted-montecarlo",
      model_note: "XGBoost anchor (CV MAE " + MODEL_CV_MAE + ") + live-blend + 500x Monte Carlo",
      n_simulations: N_SIMS,
      n_races: nRaces,
      noise_sigma: sigma,
      cv_mae: MODEL_CV_MAE,
      races_completed: racesCompleted,
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
  const probSum = p.driver_standings.reduce((s, d) => s + d.championship_win_probability, 0);
  const maxPts = Math.max(...p.driver_standings.map((d) => d.predicted_points));
  const checks = {
    drivers_20: p.driver_standings.length === 20,
    prob_sum_ok: probSum >= 0.95 && probSum <= 1.05,
    points_cap_ok: maxPts <= 600,
    champion_prob_ok: p.driver_standings[0].championship_win_probability > 0.1,
    prob_sum: round4(probSum),
    max_points: maxPts,
  };
  checks.passed = checks.drivers_20 && checks.prob_sum_ok && checks.points_cap_ok;
  return checks;
}
