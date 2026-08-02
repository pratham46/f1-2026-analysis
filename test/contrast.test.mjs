import { test } from "node:test";
import assert from "node:assert/strict";
import { oklchToLuminance, hexToLuminance, contrast } from "../scripts/check-tokens.mjs";

test("achromatic oklch luminance is L cubed", () => {
  // With chroma 0 the OKLab->linear-sRGB matrix rows sum to 1, so Y === L**3.
  assert.ok(Math.abs(oklchToLuminance(0.66, 0, 0) - 0.66 ** 3) < 1e-6);
});

test("pure white and black anchor the scale", () => {
  assert.ok(Math.abs(hexToLuminance("#ffffff") - 1) < 1e-6);
  assert.ok(Math.abs(hexToLuminance("#000000") - 0) < 1e-6);
  assert.ok(Math.abs(contrast(1, 0) - 21) < 0.01);
});

test("ink-2 on surface-3 clears AA body text", () => {
  const ink2 = oklchToLuminance(0.66, 0, 0);
  const surface3 = oklchToLuminance(0.27, 0, 0);
  assert.ok(contrast(ink2, surface3) >= 4.5, `got ${contrast(ink2, surface3)}`);
});

test("raw Ferrari and Red Bull fail as text on surface-1", () => {
  const s1 = oklchToLuminance(0.18, 0, 0);
  assert.ok(contrast(hexToLuminance("#E8002D"), s1) < 4.5);
  assert.ok(contrast(hexToLuminance("#3671C6"), s1) < 4.5);
});

test("the -txt variants rescue them", () => {
  const s1 = oklchToLuminance(0.18, 0, 0);
  for (const hex of ["#FF1A45", "#5A8FD8", "#4FB89A"]) {
    assert.ok(contrast(hexToLuminance(hex), s1) >= 4.5, `${hex} failed`);
  }
});
