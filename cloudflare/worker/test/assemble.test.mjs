// Harmony-contract test: assemble() must emit every key the dashboard reads,
// and must succeed even when live fetch / scrape are unavailable (offline-safe).
import { assemble } from "../src/assemble.js";

let failures = 0;
const ok = (cond, msg) => { console.log(`${cond ? "PASS" : "FAIL"}  ${msg}`); if (!cond) failures++; };

const REQUIRED_KEYS = [
  "generated_at", "model_cv_mae", "seasons_used", "driver_info", "team_colors",
  "driver_standings_2026", "constructor_standings_2026",
  "historical_driver_points", "historical_constructor_points",
  "race_predictions", "driver_rolling_form", "regulation_impact_2026",
  "races_completed_2026", "real_driver_standings_2026", "real_constructor_standings_2026",
  "driver_images", "track_layouts", "news",
];

const d = await assemble({ lastGood: { news: [{ title: "seed", url: "#" }] } });

for (const k of REQUIRED_KEYS) ok(k in d, `payload has key "${k}"`);

const s0 = d.driver_standings_2026[0];
ok(d.driver_standings_2026.length === 20, "20 drivers in standings");
for (const f of ["rank", "driver_id", "name", "short", "team", "color", "number",
                 "predicted_points", "win_probability", "championship_win_probability",
                 "podium_probability", "avg_predicted_position"]) {
  ok(f in s0, `driver_standings_2026 entry has "${f}"`);
}
ok(d.constructor_standings_2026.length === 10, "10 constructors");
ok(d.race_predictions.length === 24, `24 race_predictions (got ${d.race_predictions.length})`);
ok(d.race_predictions[0].top5.length === 5, "race_predictions top5 has 5 drivers");
ok(Object.keys(d.driver_images).length === 20, "20 driver_images");
ok(Object.keys(d.track_layouts).length > 0, "track_layouts populated");
ok(Array.isArray(d.news), "news is an array (last-good preserved if scrape blocked)");
ok(d._sanity.passed, "prediction sanity passed");
console.log("\nhealth:", JSON.stringify(d._health));

console.log(failures === 0 ? "\nALL ASSEMBLE TESTS PASSED" : `\n${failures} TEST(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
