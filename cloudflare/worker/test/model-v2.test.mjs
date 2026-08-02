// Model v2: correlated season-form drift, DNF risk, sprint points, and strict
// arithmetic elimination. These lock in the fix for the degenerate output where
// one driver took ~99% and the other 21 shared ~1%.
import { predict, eliminationStatus, experienceSeasons, remainingSprintCount } from "../src/predict.js";

let failures = 0;
const ok = (cond, msg) => { console.log(`${cond ? "PASS" : "FAIL"}  ${msg}`); if (!cond) failures++; };

// Real 2026 state after 11 rounds.
const live = [
  { driver_id: "antonelli", points: 219, wins: 6 },
  { driver_id: "hamilton", points: 169, wins: 1 },
  { driver_id: "russell", points: 160, wins: 2 },
  { driver_id: "leclerc", points: 138, wins: 1 },
  { driver_id: "norris", points: 128, wins: 1 },
  { driver_id: "max_verstappen", points: 109 },
  { driver_id: "piastri", points: 92 },
  { driver_id: "bottas", points: 0 },
];
const p = predict({ liveStandings: live, racesCompleted: 11 });

// --- The degeneracy fix ----------------------------------------------------

const probs = p.driver_standings.map((d) => d.championship_win_probability);
const leader = probs[0];
ok(leader < 0.95, `leader title prob is not a near-certainty (${(leader * 100).toFixed(1)}%)`);
ok(leader > 0.4, `leader is still a clear favourite (${(leader * 100).toFixed(1)}%)`);

const nonZero = probs.filter((x) => x > 0).length;
ok(nonZero >= 4, `at least 4 drivers carry a live title chance (got ${nonZero})`);

const second = probs[1];
ok(second > 0.05, `the runner-up has a real chance, not a rounding artefact (${(second * 100).toFixed(1)}%)`);

const sum = probs.reduce((a, b) => a + b, 0);
ok(sum > 0.99 && sum < 1.01, `probabilities sum to 1 (${sum.toFixed(4)})`);

// --- Season-form drift must not average away --------------------------------
// With MORE races left there is MORE uncertainty, so the leader's probability
// must fall. The old model did the opposite: extra races let the fixed ranking
// assert itself and the leader's probability rose towards 1.
const early = predict({ liveStandings: live, racesCompleted: 4 });
const late = predict({ liveStandings: live, racesCompleted: 20 });
ok(
  early.driver_standings[0].championship_win_probability <
    late.driver_standings[0].championship_win_probability,
  `more racing left => less certainty (r4 ${(early.driver_standings[0].championship_win_probability * 100).toFixed(1)}% < r20 ${(late.driver_standings[0].championship_win_probability * 100).toFixed(1)}%)`
);

// --- Experience widens uncertainty ------------------------------------------
// Alonso scored in 5 of 2020-2025 — he was on sabbatical in 2020, so a full
// six is wrong. Antonelli's single season is the case that matters: the model
// must treat him as less predictable than a veteran.
ok(experienceSeasons("alonso") === 5, `alonso has five scoring seasons (got ${experienceSeasons("alonso")})`);
ok(experienceSeasons("alonso") > experienceSeasons("antonelli"),
  "a veteran carries more evidence than a second-year driver");
ok(experienceSeasons("antonelli") === 1, `antonelli has one (got ${experienceSeasons("antonelli")})`);
ok(experienceSeasons("nobody_at_all") === 0, "unknown driver has no history");

// --- DNF risk ---------------------------------------------------------------
const ant = p.driver_standings.find((d) => d.driver === "antonelli");
ok(ant.expected_dnfs > 0.5 && ant.expected_dnfs < 2,
  `expected DNFs over 11 remaining races is ~1 (got ${ant.expected_dnfs})`);

// --- Arithmetic elimination -------------------------------------------------
// Strict definition: max attainable < leader's CURRENT total.
const none = eliminationStatus({ a: 219, b: 0 }, 11, 0);
ok(none.maxRemaining === 275, `11 races with no sprints = 275 points (got ${none.maxRemaining})`);
ok(none.statuses.b.mathematically_eliminated === false,
  "a driver on 0 with 275 available is NOT eliminated, however unlikely");

const done = eliminationStatus({ a: 219, b: 0 }, 2, 0);
ok(done.maxRemaining === 50, `2 races = 50 points (got ${done.maxRemaining})`);
ok(done.statuses.b.mathematically_eliminated === true,
  "a driver 219 behind with 50 available IS eliminated");

// Sprint points must count towards the ceiling. 70 + 25 = 95 would be
// elimination on race points alone; the extra 8 lifts it to 103 and keeps the
// driver alive. Ignoring sprints would declare a live contender dead.
const withSprint = eliminationStatus({ a: 100, b: 70 }, 1, 1);
ok(withSprint.maxRemaining === 33, `1 race + 1 sprint = 25+8 = 33 (got ${withSprint.maxRemaining})`);
ok(withSprint.statuses.b.mathematically_eliminated === false,
  "sprint points keep a driver alive (70+33=103 >= 100)");
ok(eliminationStatus({ a: 100, b: 70 }, 1, 0).statuses.b.mathematically_eliminated === true,
  "without the sprint the same driver is out (70+25=95 < 100)");

const edge = eliminationStatus({ a: 100, b: 67 }, 1, 1);
ok(edge.statuses.b.mathematically_eliminated === false,
  "exactly reaching the leader's total is not elimination (67+33=100)");

ok(p.driver_standings.every((d) => d.mathematically_eliminated === false),
  "nobody is arithmetically out after 11 of 22 rounds");

ok(p.driver_standings.find((d) => d.driver === "bottas").points_behind_leader === 219,
  "points_behind_leader is measured against the current leader");

// --- Sprints ----------------------------------------------------------------
ok(remainingSprintCount(0) === 3, `2026 has 3 sprints in total (got ${remainingSprintCount(0)})`);
ok(remainingSprintCount(11) === 0, `all sprints are already run by round 11 (got ${remainingSprintCount(11)})`);

// --- Determinism ------------------------------------------------------------
const again = predict({ liveStandings: live, racesCompleted: 11 });
ok(JSON.stringify(again.driver_standings) === JSON.stringify(p.driver_standings),
  "identical inputs produce identical predictions");

console.log(failures === 0 ? "\nALL MODEL V2 TESTS PASSED" : `\n${failures} TEST(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
