// Harmony-contract test: assemble() must emit every key the dashboard reads,
// and must succeed even when live fetch / scrape are unavailable (offline-safe).
import { assemble } from "../src/assemble.js";
import { resetSubrequestBudget, subrequestsUsed } from "../src/sources.js";

let failures = 0;
const ok = (cond, msg) => { console.log(`${cond ? "PASS" : "FAIL"}  ${msg}`); if (!cond) failures++; };

const REQUIRED_KEYS = [
  "generated_at", "model_cv_mae", "seasons_used", "driver_info", "team_colors",
  "driver_standings_2026", "constructor_standings_2026",
  "historical_driver_points", "historical_constructor_points",
  "historical_driver_teams", "driver_names",
  "race_predictions", "driver_rolling_form", "regulation_impact_2026",
  "calendar_2026", "cancelled_races_2026", "next_race",
  "races_completed_2026", "real_driver_standings_2026", "real_constructor_standings_2026",
  "real_race_results_2026",
  "driver_images", "track_layouts", "team_cars", "news",
  "predictions_archive",
];

const d = await assemble({ lastGood: { news: [{ title: "seed", url: "#" }] } });

for (const k of REQUIRED_KEYS) ok(k in d, `payload has key "${k}"`);

const s0 = d.driver_standings_2026[0];
ok(d.driver_standings_2026.length === 22, `22 drivers in standings (got ${d.driver_standings_2026.length})`);
for (const f of ["rank", "driver_id", "name", "short", "team", "color", "number",
                 "predicted_points", "win_probability", "championship_win_probability",
                 "podium_probability", "avg_predicted_position", "current_real_points"]) {
  ok(f in s0, `driver_standings_2026 entry has "${f}"`);
}
ok(d.constructor_standings_2026.length === 11, `11 constructors (got ${d.constructor_standings_2026.length})`);
ok(d.race_predictions.length === 22, `22 race_predictions — real 2026 calendar (got ${d.race_predictions.length})`);
ok(d.race_predictions[0].top5.length === 5, "race_predictions top5 has 5 drivers");
ok(d.race_predictions.every(r => r.race_date === r.date && r.race_name === r.name),
   "race_predictions carry race_date/race_name aliases for the dashboard");
ok(Object.keys(d.driver_images).length >= 22, `driver_images populated (${Object.keys(d.driver_images).length})`);
ok(Object.values(d.driver_images).every(u => typeof u === "string" && u.startsWith("https://")), "driver_images are URLs");
ok(Object.keys(d.track_layouts).length >= 22, `track_layouts populated (${Object.keys(d.track_layouts).length})`);
ok(Object.values(d.track_layouts).every(t => t && typeof t.img_url === "string"), "track_layouts have .img_url");
ok(Object.keys(d.team_cars).length === 11, `team_cars has all 11 teams (${Object.keys(d.team_cars).length})`);
ok(Object.values(d.team_cars).every(u => typeof u === "string" && u.includes("carright.webp")), "team_cars are f1.com car renders");
ok(Array.isArray(d.real_race_results_2026), "real_race_results_2026 is an array");

// History correctness: final 2020-2025 standings, not mid-season snapshots.
const h25 = d.historical_driver_points[2025] || d.historical_driver_points["2025"] || {};
const top25 = Object.entries(h25).sort((a, b) => b[1] - a[1])[0] || [];
ok(top25[0] === "norris" && top25[1] === 423, `2025 history champion is norris @ 423 (got ${top25[0]} @ ${top25[1]})`);
const hc25 = d.historical_constructor_points[2025] || d.historical_constructor_points["2025"] || {};
ok(hc25.mclaren === 833, `2025 constructors: mclaren 833 (got ${hc25.mclaren})`);
const h20 = d.historical_driver_points[2020] || d.historical_driver_points["2020"] || {};
ok(h20.hamilton === 347, `2020 history: hamilton 347 (got ${h20.hamilton})`);
ok((d.historical_driver_teams["2025"] || d.historical_driver_teams[2025] || {}).norris === "mclaren", "historical_driver_teams maps 2025 norris→mclaren");
ok((d.driver_names || {}).vettel === "Sebastian Vettel", "driver_names covers past drivers");
ok(Array.isArray(d.news), "news is an array (last-good preserved if scrape blocked)");
ok(d._sanity.passed, "prediction sanity passed");

// When live data is reachable, completed rounds must show the real winner and
// future rounds a forecast (this block is skipped gracefully when offline).
if (d.races_completed_2026 > 0) {
  const done = d.race_predictions.filter(r => r.completed);
  ok(done.length >= d.races_completed_2026, `completed flags cover ${d.races_completed_2026} rounds (got ${done.length})`);
  if (d.real_race_results_2026.length) {
    const r1 = d.race_predictions[0];
    const real1 = d.real_race_results_2026.find(r => r.round === 1);
    ok(r1.winner === real1.results[0].driver_id, `round 1 card shows the real winner (${r1.winner})`);
  }
  const upcoming = d.race_predictions.find(r => !r.completed);
  ok(upcoming && typeof upcoming.top5[0].win_prob === "number", "upcoming rounds carry forecast win_prob");
}

// Weather: key must exist; when populated it must be numeric and match next_race.
ok("next_race_weather" in d, 'payload has key "next_race_weather"');
if (d.next_race_weather) {
  ok(typeof d.next_race_weather.t_max === "number", "weather t_max is a number");
  ok(d.next_race_weather.circuit_id === d.next_race?.circuit_id, "weather is for the next race");
}

// Subrequest budget: assemble() reports usage and can never exceed the 40 cap
// (free tier allows 50 fetches/invocation; the margin covers the news scrape).
ok(typeof d._health.subrequests === "number" && d._health.subrequests <= 40,
   `subrequest budget respected (used ${d._health.subrequests}/40)`);
resetSubrequestBudget();
ok(subrequestsUsed() === 0, "resetSubrequestBudget zeroes the counter");

console.log("\nhealth:", JSON.stringify(d._health));

console.log(failures === 0 ? "\nALL ASSEMBLE TESTS PASSED" : `\n${failures} TEST(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
