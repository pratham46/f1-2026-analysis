// Parity test: JS predictor must reproduce the trained XGBoost 2026 ranking.
import { predict } from "../src/predict.js";

let failures = 0;
const ok = (cond, msg) => { console.log(`${cond ? "PASS" : "FAIL"}  ${msg}`); if (!cond) failures++; };

const p = predict(); // preseason (no live data) → must match the model anchor

ok(p.champion === "piastri", `preseason champion is piastri (got ${p.champion})`);

const expectedTop6 = ["piastri", "leclerc", "max_verstappen", "russell", "norris", "hamilton"];
const gotTop6 = p.driver_standings.slice(0, 6).map((d) => d.driver);
ok(JSON.stringify(gotTop6) === JSON.stringify(expectedTop6), `top-6 order matches model (${gotTop6.join(",")})`);

ok(p.driver_standings.length === 22, `22 drivers on the 2026 grid (got ${p.driver_standings.length})`);
ok(p.constructor_standings.length === 11, `11 constructors incl. Audi + Cadillac (got ${p.constructor_standings.length})`);

const probSum = p.driver_standings.reduce((s, d) => s + d.championship_win_probability, 0);
ok(probSum >= 0.95 && probSum <= 1.05, `championship prob sum in [0.95,1.05] (${probSum.toFixed(4)})`);

const maxPts = Math.max(...p.driver_standings.map((d) => d.predicted_points));
ok(maxPts <= 600, `max points <= 600 (${maxPts})`);
ok(p.constructor_standings[0].constructor === "mclaren", `preseason constructor leader is mclaren (got ${p.constructor_standings[0].constructor})`);
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

// In-season reality check: with the actual 2026-06-12 standings (Antonelli 156/6
// rounds, 5 wins), the projected champion must be Antonelli and his banked points
// must be respected (projection >= current real points).
const real = predict({
  liveStandings: [
    { driver_id: "antonelli", points: 156, wins: 5 },
    { driver_id: "hamilton", points: 90 },
    { driver_id: "russell", points: 88, wins: 1 },
    { driver_id: "leclerc", points: 75 },
    { driver_id: "piastri", points: 60 },
    { driver_id: "norris", points: 58 },
    { driver_id: "max_verstappen", points: 43 },
    { driver_id: "hadjar", points: 29 },
    { driver_id: "lawson", points: 26 },
    { driver_id: "gasly", points: 26 },
  ],
  racesCompleted: 6,
});
ok(real.champion === "antonelli", `live champion is antonelli (got ${real.champion})`);
const antRow = real.driver_standings.find((d) => d.driver === "antonelli");
ok(antRow.predicted_points >= 156, `antonelli projection respects banked points (${antRow.predicted_points})`);
ok(antRow.championship_win_probability > 0.5, `antonelli title prob > 50% (${antRow.championship_win_probability})`);
ok(real.metadata.n_races === 22, `season simulated over 22 real rounds (got ${real.metadata.n_races})`);

console.log(failures === 0 ? "\nALL PREDICT TESTS PASSED" : `\n${failures} TEST(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
