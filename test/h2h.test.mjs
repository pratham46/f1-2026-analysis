import { test } from "node:test";
import assert from "node:assert/strict";
import { finishRank, headToHead } from "../dashboard/js/lib/h2h.js";

// Minimal two-round fixture. Round 1: A wins, B retires. Round 2: B beats A.
const CLASS = {
  1: {
    circuit_id: "australia",
    race: [
      { driver_id: "a", position: 1, points: 25, laps: 58, status: "F" },
      { driver_id: "c", position: 2, points: 18, laps: 58, status: "F" },
      { driver_id: "b", position: null, points: 0, laps: 30, status: "DNF" },
    ],
    qualifying: [
      { driver_id: "b", position: 1 },
      { driver_id: "a", position: 2 },
      { driver_id: "c", position: 3 },
    ],
  },
  2: {
    circuit_id: "china",
    race: [
      { driver_id: "b", position: 3, points: 15, laps: 56, status: "F" },
      { driver_id: "a", position: 8, points: 4, laps: 56, status: "F" },
    ],
    qualifying: [{ driver_id: "a", position: 5 }],
  },
};

test("a classified finish always outranks a retirement", () => {
  const last = { position: 20, points: 0, laps: 58, status: "F" };
  const retired = { position: null, points: 0, laps: 57, status: "DNF" };
  assert.ok(finishRank(last) < finishRank(retired));
});

test("retirements are ordered by distance covered", () => {
  const late = { position: null, points: 0, laps: 50, status: "DNF" };
  const early = { position: null, points: 0, laps: 3, status: "DNF" };
  assert.ok(finishRank(late) < finishRank(early), "the driver who got further finished ahead");
});

test("a non-start ranks behind every retirement", () => {
  const dns = { position: null, points: 0, laps: 0, status: "DNS" };
  const dnfLapOne = { position: null, points: 0, laps: 1, status: "DNF" };
  assert.ok(finishRank(dnfLapOne) < finishRank(dns));
});

test("the record counts only rounds where both drivers appear", () => {
  const h = headToHead(CLASS, "a", "c");
  // c is absent from round 2, so exactly one round is comparable.
  assert.equal(h.rounds.length, 1);
  assert.equal(h.a.points, 25, "points come from shared rounds only, not the season");
});

test("finishing order decides the race head-to-head, retirements included", () => {
  const h = headToHead(CLASS, "a", "b");
  assert.equal(h.rounds.length, 2);
  assert.equal(h.a.raceAhead, 1, "round 1: A finished, B retired");
  assert.equal(h.b.raceAhead, 1, "round 2: B finished 3rd to A's 8th");
  assert.equal(h.ties, 0);
});

test("points are summed across the shared rounds", () => {
  const h = headToHead(CLASS, "a", "b");
  assert.equal(h.a.points, 29); // 25 + 4
  assert.equal(h.b.points, 15); // 0 + 15
});

test("sprint points are included in the total but not in the race record", () => {
  const withSprint = {
    1: {
      ...CLASS[1],
      sprint: [
        { driver_id: "b", position: 1, points: 8, laps: 19, status: "F" },
        { driver_id: "a", position: 4, points: 5, laps: 19, status: "F" },
      ],
    },
    2: CLASS[2],
  };
  const h = headToHead(withSprint, "a", "b");
  assert.equal(h.a.sprintPoints, 5);
  assert.equal(h.b.sprintPoints, 8);
  assert.equal(h.a.points, 34, "29 from the GPs + 5 from the sprint");
  assert.equal(h.b.points, 23, "15 from the GPs + 8 from the sprint");
  assert.equal(h.a.raceAhead, 1, "a sprint result never changes the GP record");
  assert.equal(h.b.raceAhead, 1);
});

test("non-finishes are counted per driver", () => {
  const h = headToHead(CLASS, "a", "b");
  assert.equal(h.a.dnfs, 0);
  assert.equal(h.b.dnfs, 1);
});

test("qualifying is scored separately and skips rounds missing a time", () => {
  const h = headToHead(CLASS, "a", "b");
  // Round 2 has no qualifying entry for b, so only round 1 counts.
  assert.equal(h.qualiRounds, 1);
  assert.equal(h.b.qualiAhead, 1);
  assert.equal(h.a.qualiAhead, 0);
});

test("best finish ignores rounds the driver did not classify in", () => {
  const h = headToHead(CLASS, "a", "b");
  assert.equal(h.a.bestFinish, 1);
  assert.equal(h.b.bestFinish, 3);
});

test("a retirement is not a top-ten finish", () => {
  const h = headToHead(CLASS, "a", "b");
  assert.equal(h.a.inPoints, 2, "P1 and P8");
  assert.equal(h.b.inPoints, 1, "P3, plus a retirement that does not count");
});

test("two retirements at the same distance are a tie, not a win", () => {
  const both = {
    1: {
      circuit_id: "x",
      race: [
        { driver_id: "a", position: null, points: 0, laps: 12, status: "DNF" },
        { driver_id: "b", position: null, points: 0, laps: 12, status: "DNF" },
      ],
      qualifying: [],
    },
  };
  const h = headToHead(both, "a", "b");
  assert.equal(h.ties, 1);
  assert.equal(h.a.raceAhead, 0);
  assert.equal(h.b.raceAhead, 0);
});

test("a round neither driver started is not a dead heat", () => {
  // Both McLarens were DNS in China. Scoring that 0-0 would have called it a
  // draw between two cars that never left the garage.
  const dns = {
    1: {
      circuit_id: "china",
      race: [
        { driver_id: "a", position: null, points: 0, laps: 0, status: "DNS" },
        { driver_id: "b", position: null, points: 0, laps: 0, status: "DNS" },
      ],
      qualifying: [],
    },
  };
  const h = headToHead(dns, "a", "b");
  assert.equal(h.ties, 0);
  assert.equal(h.contested, 0);
  assert.equal(h.rounds[0].contested, false, "still listed, so the ledger can show it");
});

test("contested counts only the rounds both drivers started", () => {
  const h = headToHead(CLASS, "a", "b");
  assert.equal(h.contested, 2, "a retirement still counts — they raced");
  assert.equal(h.a.raceAhead + h.b.raceAhead + h.ties, h.contested);
});

test("an empty classification yields an empty record rather than throwing", () => {
  const h = headToHead({}, "a", "b");
  assert.equal(h.rounds.length, 0);
  assert.equal(h.a.raceAhead, 0);
  assert.equal(h.qualiRounds, 0);
});
