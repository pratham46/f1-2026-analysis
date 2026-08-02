import { test } from "node:test";
import assert from "node:assert/strict";
import { isFresher } from "../dashboard/js/lib/data.js";
import { pct, pts, ordinal } from "../dashboard/js/lib/format.js";

const seed = { generated_at: "2026-07-30", races_completed_2026: 11 };

test("a newer payload with equal rounds is fresher", () => {
  assert.equal(isFresher({ generated_at: "2026-08-01", races_completed_2026: 11 }, seed), true);
});

test("a stale payload is rejected", () => {
  assert.equal(isFresher({ generated_at: "2026-07-01", races_completed_2026: 11 }, seed), false);
});

test("fewer completed rounds is rejected even when newer", () => {
  // The exact regression this guard exists for: a cold-KV Worker run that
  // assembled with partial data would otherwise overwrite a good seed.
  assert.equal(isFresher({ generated_at: "2026-08-01", races_completed_2026: 9 }, seed), false);
});

test("malformed payloads are rejected, not thrown on", () => {
  assert.equal(isFresher(null, seed), false);
  assert.equal(isFresher({}, seed), false);
  assert.equal(isFresher({ generated_at: "nonsense", races_completed_2026: 11 }, seed), false);
});

test("formatters", () => {
  assert.equal(pct(0.2709), "27.1%");
  assert.equal(pct(0.988, 1), "98.8%");
  assert.equal(pts(426.4), "426.4");
  assert.equal(pts(219), "219");
  assert.equal(ordinal(1), "1st");
  assert.equal(ordinal(22), "22nd");
  assert.equal(ordinal(11), "11th");
});
