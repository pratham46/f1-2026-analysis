// ============================================================================
// assemble.js — Merge all sources into the window.F1_DATA "harmony contract".
//
// Produces exactly the object shape dashboard/index.html expects (verified against
// dashboard/data.js): driver_standings_2026, constructor_standings_2026,
// historical_*, race_predictions, driver_rolling_form, regulation_impact_2026,
// driver_info, team_colors, seasons_used, + live real_* fields + media + news.
//
// Order of trust: predictions (always) → live standings (override "real_*" +
// blend into base positions) → scraped news/media (best-effort) → last-good KV.
// ============================================================================

import {
  DRIVER_INFO, TEAM_COLORS, REGULATION_IMPACT_2026, SEASONS_USED,
  HISTORICAL_DRIVER_POINTS, HISTORICAL_CONSTRUCTOR_POINTS, DRIVER_ROLLING_FORM,
  CALENDAR_2026,
} from "./seed.js";
import { predict } from "./predict.js";
import { fetchLiveStandings } from "./sources.js";
import { scrapeNews } from "./scrape.js";
import { buildDriverImages, buildTrackLayouts } from "./media.js";

// team slug → display name (from the grid info).
function teamNames() {
  const out = {};
  for (const id of Object.keys(DRIVER_INFO)) out[DRIVER_INFO[id].team] = DRIVER_INFO[id].team_name;
  return out;
}

function toDriverStandings2026(pred) {
  return pred.driver_standings.map((d) => {
    const info = DRIVER_INFO[d.driver] || {};
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
    };
  });
}

function toConstructorStandings2026(pred) {
  const names = teamNames();
  return pred.constructor_standings.map((c) => ({
    rank: c.position,
    constructor_id: c.constructor,
    name: names[c.constructor] || c.constructor,
    color: TEAM_COLORS[c.constructor] || "#888",
    predicted_points: c.predicted_points,
    championship_win_probability: c.championship_win_probability,
  }));
}

// Build race_predictions for the full 2026 calendar (top-5 per round).
function toRacePredictions(pred) {
  const top5 = pred.race_predictions[0].drivers
    .slice()
    .sort((a, b) => b.win_probability - a.win_probability)
    .slice(0, 5)
    .map((d) => ({ driver_id: d.driver, win_prob: d.win_probability }));
  return CALENDAR_2026.map((race) => ({
    round: race.round,
    circuit_id: race.id,
    name: race.name,
    date: race.date,
    top5,
  }));
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

/**
 * Assemble the full dashboard payload.
 * @param {object} opts { lastGood } — previous KV payload for graceful fallback
 */
export async function assemble(opts = {}) {
  const lastGood = opts.lastGood || {};
  const health = { live: "skipped", news: "skipped", scrapedAt: new Date().toISOString() };

  // 1. Live 2026 standings (authoritative for real_* + base-position blend).
  let live = { ok: false };
  try { live = await fetchLiveStandings(); } catch { /* graceful */ }
  health.live = live.ok ? `${live.source}:${live.racesCompleted}rounds` : "unavailable";

  const racesCompleted = live.ok ? (live.racesCompleted || 0) : 0;
  const liveForBlend = live.ok ? (live.driverStandings || []) : [];

  // 2. Predictions (always succeeds; blends live standings when present).
  const pred = predict({ liveStandings: liveForBlend, racesCompleted });

  // 3. News (best-effort; keep last-good on block).
  let news = lastGood.news || [];
  try {
    const n = await scrapeNews(8);
    if (n.ok && n.news?.length) { news = n.news; health.news = `scraped:${n.news.length}`; }
    else health.news = n.blocked ? "blocked_kept_last_good" : "empty_kept_last_good";
  } catch { health.news = "error_kept_last_good"; }

  // 4. Media URLs (deterministic; cheap).
  const driver_images = buildDriverImages();
  const track_layouts = buildTrackLayouts();

  const payload = {
    generated_at: pred.metadata.generated_at,
    model: pred.metadata.model,
    model_cv_mae: pred.metadata.cv_mae,
    seasons_used: SEASONS_USED,

    driver_info: DRIVER_INFO,
    team_colors: TEAM_COLORS,
    regulation_impact_2026: REGULATION_IMPACT_2026,

    driver_standings_2026: toDriverStandings2026(pred),
    constructor_standings_2026: toConstructorStandings2026(pred),
    race_predictions: toRacePredictions(pred),

    historical_driver_points: HISTORICAL_DRIVER_POINTS,
    historical_constructor_points: HISTORICAL_CONSTRUCTOR_POINTS,
    driver_rolling_form: DRIVER_ROLLING_FORM,

    calendar_2026: CALENDAR_2026,
    races_completed_2026: racesCompleted,
    real_driver_standings_2026: live.ok ? toRealDriverStandings(live) : [],
    real_constructor_standings_2026: live.ok ? (live.constructorStandings || []) : [],

    driver_images,
    track_layouts,
    news,

    _health: health,
    _sanity: pred._sanity,
  };

  return payload;
}
