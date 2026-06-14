// ============================================================================
// assemble.js — Merge all sources into the window.F1_DATA "harmony contract".
//
// Produces exactly the object shape dashboard/index.html expects (verified against
// dashboard/data.js): driver_standings_2026, constructor_standings_2026,
// historical_*, race_predictions, driver_rolling_form, regulation_impact_2026,
// driver_info, team_colors, seasons_used, + live real_* fields + media + news.
//
// Order of trust: predictions (always) → live standings (override "real_*" +
// blend into base positions) → real per-race results (completed rounds show the
// actual podium, not a forecast) → scraped news/media (best-effort) → last-good KV.
// ============================================================================

import {
  DRIVER_INFO, TEAM_COLORS, REGULATION_IMPACT_2026, SEASONS_USED,
  HISTORICAL_DRIVER_POINTS, HISTORICAL_CONSTRUCTOR_POINTS, DRIVER_ROLLING_FORM,
  HISTORICAL_DRIVER_TEAMS, DRIVER_NAMES,
  CALENDAR_2026, CANCELLED_2026, MANUAL_RACE_PATCHES,
} from "./seed.js";
import { predict } from "./predict.js";
import { fetchLiveStandings, fetchRaceResults, fetchDriverBios, fetchCircuitData,
         fetchOpenF1Sessions, fetchOpenF1RaceResult, fetchPitStops, fetchTireStints } from "./sources.js";
import { scrapeNews } from "./scrape.js";
import { buildDriverImages, buildTrackLayouts, buildTeamCars } from "./media.js";

// team slug → display name (from the grid info).
function teamNames() {
  const out = {};
  for (const id of Object.keys(DRIVER_INFO)) out[DRIVER_INFO[id].team] = DRIVER_INFO[id].team_name;
  return out;
}

function toDriverStandings2026(pred, liveByDriver) {
  return pred.driver_standings.map((d) => {
    const info = DRIVER_INFO[d.driver] || {};
    const live = liveByDriver[d.driver] || {};
    return {
      rank: d.position,
      driver_id: d.driver,
      name: info.name || d.driver,
      short: info.short || d.driver.slice(0, 3).toUpperCase(),
      team: d.constructor,
      team_name: info.team_name || d.constructor,
      color: info.color || TEAM_COLORS[d.constructor] || "#888",
      number: info.number || 0,
      predicted_points: d.predicted_points,
      win_probability: d.race_win_probability,
      championship_win_probability: d.championship_win_probability,
      podium_probability: d.podium_rate,
      avg_predicted_position: d.base_predicted_position,
      current_real_points: live.points || 0,
      current_real_position: live.position || null,
      current_wins: live.wins || 0,
    };
  });
}

function toConstructorStandings2026(pred, liveConstructors) {
  const names = teamNames();
  const liveByTeam = {};
  for (const c of liveConstructors || []) liveByTeam[c.constructor_id] = c;
  return pred.constructor_standings.map((c) => ({
    rank: c.position,
    constructor_id: c.constructor,
    name: names[c.constructor] || c.constructor,
    color: TEAM_COLORS[c.constructor] || "#888",
    predicted_points: c.predicted_points,
    championship_win_probability: c.championship_win_probability,
    current_real_points: (liveByTeam[c.constructor] || {}).points || 0,
    current_wins: (liveByTeam[c.constructor] || {}).wins || 0,
  }));
}

// Per-round race cards: completed rounds carry the REAL result (from Jolpica),
// future rounds carry the model's forecast top-5. Emits both `name`/`date` and
// the legacy `race_name`/`race_date` aliases the dashboard normalizer reads.
//
// Returns { races, archive } — archive is the updated predictions_archive that
// must be persisted in the KV payload so completed rounds stay frozen forever.
// prevArchive comes from lastGood.predictions_archive so we never overwrite a
// round that was already snapshotted on a prior refresh.
function toRacePredictions(pred, realRaces, racesCompleted, prevArchive = {}) {
  const currentModelTop5 = pred.race_predictions[0].drivers
    .slice()
    .sort((a, b) => b.win_probability - a.win_probability)
    .slice(0, 5)
    .map((d) => ({ driver_id: d.driver, win_prob: d.win_probability }));

  const realByRound = {};
  for (const r of realRaces || []) realByRound[r.round] = r;

  // Build updated archive: first time a round appears as completed → freeze it.
  // Already-frozen rounds keep their original value unchanged.
  const archive = { ...prevArchive };
  for (const race of CALENDAR_2026) {
    const completed = !!realByRound[race.round] || race.round <= racesCompleted;
    if (completed && !archive[race.round]) {
      archive[race.round] = currentModelTop5;
    }
  }

  const races = CALENDAR_2026.map((race) => {
    const real = realByRound[race.round];
    const completed = !!real || race.round <= racesCompleted;
    const top5 = real
      ? real.results.slice(0, 5).map((res) => ({
          driver_id: res.driver_id,
          win_prob: null,            // actual result — no forecast probability
          position: res.position,
        }))
      : currentModelTop5;
    return {
      round: race.round,
      circuit_id: race.id,
      name: race.name,
      race_name: race.name,
      date: race.date,
      race_date: race.date,
      sprint: !!race.sprint,
      completed,
      winner: top5[0] ? top5[0].driver_id : null,
      top5,
      predicted_top5: archive[race.round] || currentModelTop5,
    };
  });

  return { races, archive };
}

function toRealDriverStandings(live) {
  return (live.driverStandings || []).map((s) => {
    const info = DRIVER_INFO[s.driver_id] || {};
    return {
      position: s.position,
      driver_id: s.driver_id,
      name: info.name || s.driver_id,
      short: info.short || s.driver_id.slice(0, 3).toUpperCase(),
      constructor_id: s.constructor_id,
      team: s.constructor_id,
      team_name: info.team_name || s.constructor_id,
      color: info.color || TEAM_COLORS[s.constructor_id] || "#888",
      number: info.number || 0,
      points: s.points,
      wins: s.wins,
    };
  });
}

// Upcoming-race convenience block for the dashboard hero (next on the calendar).
function toNextRace(racesCompleted, now = new Date()) {
  const upcoming = CALENDAR_2026.find((r) => r.round === racesCompleted + 1)
    || CALENDAR_2026.find((r) => new Date(r.date + "T23:59:59Z") >= now);
  if (!upcoming) return null;
  const days = Math.max(0, Math.ceil((new Date(upcoming.date + "T14:00:00Z") - now) / 86400000));
  return { ...upcoming, circuit_id: upcoming.id, days_until: days };
}

/**
 * Assemble the full dashboard payload.
 * @param {object} opts { lastGood } — previous KV payload for graceful fallback
 */
export async function assemble(opts = {}) {
  const lastGood = opts.lastGood || {};
  const health = { live: "skipped", results: "skipped", news: "skipped", scrapedAt: new Date().toISOString() };

  // 1. Live 2026 standings (authoritative for real_* + base-position blend).
  let live = { ok: false };
  try { live = await fetchLiveStandings(); } catch { /* graceful */ }
  health.live = live.ok ? `${live.source}:${live.racesCompleted}rounds` : "unavailable";

  const racesCompleted = live.ok ? (live.racesCompleted || 0) : 0;
  const liveForBlend = live.ok ? (live.driverStandings || []) : [];
  const liveByDriver = {};
  for (const s of liveForBlend) liveByDriver[s.driver_id] = s;

  // 2. Real per-race results for completed rounds (graceful; last-good fallback).
  let realRaces = lastGood.real_race_results_2026 || [];
  try {
    const rr = await fetchRaceResults(racesCompleted);
    if (rr.ok && rr.races?.length >= realRaces.length) { realRaces = rr.races; health.results = `jolpica:${rr.races.length}races`; }
    else health.results = "kept_last_good";
  } catch { health.results = "error_kept_last_good"; }

  // Merge manual patches for rounds Jolpica hasn't published yet.
  if (MANUAL_RACE_PATCHES.length) {
    const seenRounds = new Set(realRaces.map((r) => r.round));
    for (const patch of MANUAL_RACE_PATCHES) {
      if (!seenRounds.has(patch.round) && patch.round <= racesCompleted) {
        realRaces = [...realRaces, patch].sort((a, b) => a.round - b.round);
        seenRounds.add(patch.round);
        health.results += `+patch:r${patch.round}`;
      }
    }
  }

  // 2b. OpenF1: automatic backfill for Jolpica-lagged rounds + tire/pit enrichment.
  // Priority: Jolpica > MANUAL_RACE_PATCHES (already applied above) > OpenF1 positions.
  let openf1_race_data = lastGood.openf1_race_data || {};
  try {
    const of1s = await fetchOpenF1Sessions(2026);
    if (of1s.ok) {
      // circuit_id → session_key lookup
      const skByCircuit = {};
      for (const s of of1s.sessions) if (s.circuit_id) skByCircuit[s.circuit_id] = s.session_key;

      // Backfill any completed round that neither Jolpica nor MANUAL_RACE_PATCHES covered
      const seenRounds2 = new Set(realRaces.map((r) => r.round));
      for (const cal of CALENDAR_2026) {
        if (seenRounds2.has(cal.round) || cal.round > racesCompleted) continue;
        const sk = skByCircuit[cal.id];
        if (!sk) continue;
        const of1r = await fetchOpenF1RaceResult(sk);
        if (of1r.ok) {
          realRaces = [...realRaces, {
            round: cal.round, name: cal.name, date: cal.date,
            circuit_id: cal.id, results: of1r.results, _source: "openf1",
          }].sort((a, b) => a.round - b.round);
          seenRounds2.add(cal.round);
          health.results = (health.results || "") + `+of1:r${cal.round}`;
        }
      }

      // Enrich EVERY completed race with tire stints + pit stops. Already-good
      // rounds are served from the persisted cache (no refetch); only rounds that
      // are missing/empty trigger an OpenF1 call, capped per-run so a cold start
      // (nothing cached) can't blow the CPU budget — backfills over a few runs.
      const MAX_FRESH_ENRICH = 12;
      const freshData = {};
      let fetched = 0;
      for (const race of realRaces) {
        const cached = openf1_race_data[race.round];
        if (cached && cached.stints && Object.keys(cached.stints).length > 0) {
          freshData[race.round] = cached; // already good
          continue;
        }
        if (fetched >= MAX_FRESH_ENRICH) continue;
        const sk = skByCircuit[race.circuit_id];
        if (!sk) continue;
        fetched++;
        const [pits, stints] = await Promise.all([fetchPitStops(sk), fetchTireStints(sk)]);
        if (pits.ok || stints.ok) {
          freshData[race.round] = {
            session_key: sk,
            pit_stops: pits.ok ? pits.pit_stops : {},
            stints: stints.ok ? stints.stints : {},
          };
        }
      }
      openf1_race_data = { ...openf1_race_data, ...freshData };
      if (Object.keys(openf1_race_data).length) health.openf1 = `enriched:${Object.keys(openf1_race_data).length}races`;
    }
  } catch { health.openf1 = "error"; }

  // 3. Predictions (always succeeds; blends live standings when present).
  const pred = predict({ liveStandings: liveForBlend, racesCompleted });

  // Load per-round predictions archive so completed races keep their frozen snapshot.
  const prevPredictionsArchive = lastGood.predictions_archive || {};
  const { races: racePredictions, archive: predictionsArchive } =
    toRacePredictions(pred, realRaces, racesCompleted, prevPredictionsArchive);

  // 4. News (best-effort; keep last-good on block).
  let news = lastGood.news || [];
  try {
    const n = await scrapeNews(8);
    if (n.ok && n.news?.length) { news = n.news; health.news = `scraped:${n.news.length}`; }
    else health.news = n.blocked ? "blocked_kept_last_good" : "empty_kept_last_good";
  } catch { health.news = "error_kept_last_good"; }

  // 5. Driver bios + circuit data from Jolpica (best-effort; non-blocking).
  let driver_bios = lastGood.driver_bios_2026 || {};
  try {
    const db = await fetchDriverBios();
    if (db.ok && Object.keys(db.bios).length) { driver_bios = db.bios; health.bios = `jolpica:${Object.keys(db.bios).length}`; }
    else health.bios = "kept_last_good";
  } catch { health.bios = "error_kept_last_good"; }

  let circuit_data = lastGood.circuit_data_2026 || {};
  try {
    const cd = await fetchCircuitData();
    if (cd.ok && Object.keys(cd.circuits).length) { circuit_data = cd.circuits; health.circuits = `jolpica:${Object.keys(cd.circuits).length}`; }
    else health.circuits = "kept_last_good";
  } catch { health.circuits = "error_kept_last_good"; }

  // 6. Media URLs (deterministic; cheap).
  const driver_images = buildDriverImages();
  const track_layouts = buildTrackLayouts();
  const team_cars = buildTeamCars();

  const payload = {
    generated_at: pred.metadata.generated_at,
    model: pred.metadata.model,
    model_cv_mae: pred.metadata.cv_mae,
    seasons_used: SEASONS_USED,

    driver_info: DRIVER_INFO,
    team_colors: TEAM_COLORS,
    regulation_impact_2026: REGULATION_IMPACT_2026,

    driver_standings_2026: toDriverStandings2026(pred, liveByDriver),
    constructor_standings_2026: toConstructorStandings2026(pred, live.ok ? live.constructorStandings : []),
    race_predictions: racePredictions,
    predictions_archive: predictionsArchive,

    historical_driver_points: HISTORICAL_DRIVER_POINTS,
    historical_constructor_points: HISTORICAL_CONSTRUCTOR_POINTS,
    historical_driver_teams: HISTORICAL_DRIVER_TEAMS,
    driver_names: DRIVER_NAMES,
    driver_rolling_form: DRIVER_ROLLING_FORM,

    calendar_2026: CALENDAR_2026,
    cancelled_races_2026: CANCELLED_2026,
    races_completed_2026: racesCompleted,
    next_race: toNextRace(racesCompleted),
    real_driver_standings_2026: live.ok ? toRealDriverStandings(live) : [],
    real_constructor_standings_2026: live.ok ? (live.constructorStandings || []) : [],
    real_race_results_2026: realRaces,

    driver_bios_2026: driver_bios,
    circuit_data_2026: circuit_data,
    openf1_race_data,

    driver_images,
    track_layouts,
    team_cars,
    news,

    _health: health,
    _sanity: pred._sanity,
  };

  return payload;
}
