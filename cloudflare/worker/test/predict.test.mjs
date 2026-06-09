// Parity test: JS predictor must reproduce the trained XGBoost 2026 ranking.
import { predict } from "../src/predict.js";

let failures = 0;
const ok = (cond, msg) => { console.log(`${cond ? "PASS" : "FAIL"}  ${msg}`); if (!cond) failures++; };

const p = predict(); // preseason (no live data) → must match the model anchor

ok(p.champion === "piastri", `champion is piastri (got ${p.champion})`);

const expectedTop6 = ["piastri", "leclerc", "max_verstappen", "russell", "norris", "hamilton"];
const gotTop6 = p.driver_standings.slice(0, 6).map((d) => d.driver);
ok(JSON.stringify(gotTop6) === JSON.stringify(expectedTop6), `top-6 order matches model (${gotTop6.join(",")})`);

ok(p.driver_standings.length === 20, "20 drivers");
ok(p.constructor_standings.length === 10, "10 constructors");

const probSum = p.driver_standings.reduce((s, d) => s + d.championship_win_probability, 0);
ok(probSum >= 0.95 && probSum <= 1.05, `championship prob sum in [0.95,1.05] (${probSum.toFixed(4)})`);

const maxPts = Math.max(...p.driver_standings.map((d) => d.predicted_points));
ok(maxPts <= 600, `max points <= 600 (${maxPts})`);
ok(p.constructor_standings[0].constructor === "mclaren", `constructor leader is mclaren (got ${p.constructor_standings[0].constructor})`);
ok(p._sanity.passed, "sanity checks pass");

// Live-blend smoke: a Verstappen-led live table should pull him up the order.
const live = predict({
  liveStandings: [
    { driver_id: "max_verstappen", points: 200 },
    { driver_id: "piastri", points: 150 },
  ],
  racesCompleted: 20,
});
ok(live.driver_standings.find((d) => d.driver === "max_verstappen").position <=
   predict().driver_standings.find((d) => d.driver === "max_verstappen").position,
   "live blend moves Verstappen up when he leads");

console.log(failures === 0 ? "\nALL PREDICT TESTS PASSED" : `\n${failures} TEST(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
