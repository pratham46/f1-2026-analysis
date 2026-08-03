// The daily sync overwrites the committed seed from upstream. These cover the
// guard that decides whether the replacement is allowed to happen.

import { test } from "node:test";
import assert from "node:assert/strict";
import { coverage, compare } from "../scripts/check-seed-regression.mjs";

const seed = (over = {}) => ({
  openf1_race_data: {
    1: { stints: { a: [{}, {}], b: [{}] }, pit_stops: { a: [{}, {}] } },
    2: { stints: { a: [{}] }, pit_stops: {} },
  },
  circuit_paths: { australia: {}, china: {} },
  race_classification_2026: { 1: {}, 2: {} },
  real_race_results_2026: [{}, {}],
  calendar_2026: [{}, {}, {}],
  driver_standings_2026: [{}, {}],
  driver_bios_2026: { a: {}, b: {} },
  team_cars: { mercedes: "", ferrari: "" },
  ...over,
});

const deltaFor = (before, after, key) =>
  compare(before, after).find((r) => r.key === key).delta;

test("counts nested stints and pit stops across every round", () => {
  const c = coverage(seed());
  assert.equal(c["openf1 rounds"], 2);
  assert.equal(c["stints"], 4);
  assert.equal(c["pit stops"], 2);
});

test("an identical seed loses nothing", () => {
  assert.ok(compare(seed(), seed()).every((r) => r.delta === 0));
});

test("a dropped round is a negative delta — the real failure of 2026-08-03", () => {
  const after = seed();
  delete after.openf1_race_data[2];
  assert.equal(deltaFor(seed(), after, "openf1 rounds"), -1);
  assert.equal(deltaFor(seed(), after, "stints"), -1);
});

test("growth is not a regression", () => {
  const after = seed();
  after.openf1_race_data[3] = { stints: { a: [{}, {}, {}] }, pit_stops: {} };
  assert.equal(deltaFor(seed(), after, "openf1 rounds"), 1);
  assert.equal(deltaFor(seed(), after, "stints"), 3);
});

test("a round that keeps its key but loses its stints still counts as loss", () => {
  // The exact shape upstream returned: the round is present, and empty.
  const after = seed();
  after.openf1_race_data[1] = { stints: {}, pit_stops: {} };
  assert.equal(deltaFor(seed(), after, "openf1 rounds"), 0);
  assert.equal(deltaFor(seed(), after, "stints"), -3);
});

test("missing blocks read as zero rather than throwing", () => {
  const c = coverage({});
  assert.equal(c["openf1 rounds"], 0);
  assert.equal(c["stints"], 0);
  assert.equal(c["calendar rounds"], 0);
});
