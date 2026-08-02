import { test } from "node:test";
import assert from "node:assert/strict";
import { decimate, normalise } from "../cloudflare/worker/scripts/enrich-circuit-paths.mjs";

test("decimate reduces to the target count and keeps endpoints", () => {
  const pts = Array.from({ length: 320 }, (_, i) => [i, i * 2]);
  const out = decimate(pts, 150);
  assert.ok(out.length <= 150 && out.length >= 140, `got ${out.length}`);
  assert.deepEqual(out[0], [0, 0]);
  assert.deepEqual(out[out.length - 1], [319, 638]);
});

test("decimate is a no-op below the target", () => {
  const pts = [[0, 0], [1, 1], [2, 2]];
  assert.deepEqual(decimate(pts, 150), pts);
});

test("normalise centres the path on the origin and rounds to integers", () => {
  const { points } = normalise([[10, 20], [30, 40]]);
  assert.deepEqual(points, [[-10, -10], [10, 10]]);
  assert.ok(points.every(([x, y]) => Number.isInteger(x) && Number.isInteger(y)));
});

test("normalise reports the longest span, not the diagonal", () => {
  // 100 wide, 40 tall -> span is 100.
  const { length } = normalise([[0, 0], [100, 0], [100, 40], [0, 40]]);
  assert.equal(length, 100);
});

test("a traced lap closes on itself", () => {
  // A circle sampled all the way round: first and last points must land close
  // together relative to the circuit's own size. This is the property that
  // makes the path usable as a closed CatmullRomCurve3.
  const pts = Array.from({ length: 200 }, (_, i) => {
    const t = (i / 200) * 2 * Math.PI;
    return [Math.cos(t) * 1000, Math.sin(t) * 1000];
  });
  const { points, length } = normalise(decimate(pts));
  const [x0, y0] = points[0];
  const [xn, yn] = points[points.length - 1];
  assert.ok(Math.hypot(xn - x0, yn - y0) / length < 0.1, "closure within 10% of span");
});
