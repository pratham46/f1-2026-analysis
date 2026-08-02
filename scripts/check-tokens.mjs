#!/usr/bin/env node
// Enforces DESIGN.md mechanically. A design standard that is only a document rots.
//
//   1. No raw hex or px values outside tokens.css
//   2. Every ink/surface pairing clears its WCAG threshold
//   3. Every team -txt variant clears 4.5:1 on --surface-1
//
// Run: node scripts/check-tokens.mjs
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const CSS = join(ROOT, "dashboard/css");

// --- colour maths -----------------------------------------------------------
// OKLCH -> OKLab -> LMS -> linear sRGB -> relative luminance (WCAG 2.x).
export function oklchToLuminance(L, C, H) {
  const h = (H * Math.PI) / 180;
  const a = C * Math.cos(h);
  const b = C * Math.sin(h);
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * b;
  const l = l_ ** 3, m = m_ ** 3, s = s_ ** 3;
  const R = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  const G = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  const B = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s;
  const cl = (v) => Math.min(1, Math.max(0, v));
  return 0.2126 * cl(R) + 0.7152 * cl(G) + 0.0722 * cl(B);
}

export function hexToLuminance(hex) {
  const h = hex.replace("#", "");
  const ch = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const lin = ch.map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
}

export const contrast = (a, b) => {
  const [hi, lo] = a > b ? [a, b] : [b, a];
  return (hi + 0.05) / (lo + 0.05);
};

// --- checks -----------------------------------------------------------------
const OKLCH = /oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)/;
const failures = [];

function tokenValues() {
  const file = join(CSS, "tokens.css");
  if (!existsSync(file)) { failures.push("dashboard/css/tokens.css is missing"); return {}; }
  const src = readFileSync(file, "utf8");
  const map = {};
  for (const [, name, value] of src.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
    map[name] = value.trim();
  }
  return map;
}

function luminanceOf(value) {
  if (!value) return null;
  if (value.startsWith("#")) return hexToLuminance(value);
  const m = value.match(OKLCH);
  return m ? oklchToLuminance(+m[1], +m[2], +m[3]) : null;
}

// 1. No raw values outside tokens.css.
function checkNoRawValues() {
  const files = [];
  if (existsSync(join(CSS, "base.css"))) files.push(join(CSS, "base.css"));
  const secDir = join(CSS, "sections");
  if (existsSync(secDir)) {
    for (const f of readdirSync(secDir)) if (f.endsWith(".css")) files.push(join(secDir, f));
  }
  for (const file of files) {
    const src = readFileSync(file, "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
    for (const [i, line] of src.split("\n").entries()) {
      // 0 and 1px hairlines are permitted; everything else must be a token.
      const px = line.match(/(?<![\w-])(?!0px|1px)(\d*\.?\d+)px/g);
      const hex = line.match(/#[0-9a-fA-F]{3,8}\b/g);
      const rel = file.replace(ROOT, "").replace(/\\/g, "/").replace(/^\//, "");
      if (px) failures.push(`${rel}:${i + 1} raw px ${px.join(",")}`);
      if (hex) failures.push(`${rel}:${i + 1} raw hex ${hex.join(",")}`);
    }
  }
}

// 2. Ink ramp clears WCAG on every surface it can sit on.
function checkInkRamp(tokens) {
  const surfaces = ["--surface-0", "--surface-1", "--surface-2", "--surface-3"];
  const inks = { "--ink-0": 4.5, "--ink-1": 4.5, "--ink-2": 4.5 };
  for (const [ink, min] of Object.entries(inks)) {
    const li = luminanceOf(tokens[ink]);
    if (li === null) { failures.push(`missing or unparsable ${ink}`); continue; }
    for (const s of surfaces) {
      const ls = luminanceOf(tokens[s]);
      if (ls === null) { failures.push(`missing or unparsable ${s}`); continue; }
      const c = contrast(li, ls);
      if (c < min) failures.push(`${ink} on ${s} = ${c.toFixed(2)}:1, needs ${min}`);
    }
  }
}

// 3. Every team -txt variant clears 4.5:1 on --surface-1.
function checkTeamTextVariants(tokens) {
  const s1 = luminanceOf(tokens["--surface-1"]);
  if (s1 === null) return;
  for (const [name, value] of Object.entries(tokens)) {
    if (!name.endsWith("-txt")) continue;
    const lum = luminanceOf(value);
    if (lum === null) { failures.push(`unparsable ${name}`); continue; }
    const c = contrast(lum, s1);
    if (c < 4.5) failures.push(`${name} on --surface-1 = ${c.toFixed(2)}:1, needs 4.5`);
  }
}

// Only run the checks when invoked directly, not when imported by tests.
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const tokens = tokenValues();
  checkNoRawValues();
  checkInkRamp(tokens);
  checkTeamTextVariants(tokens);

  if (failures.length) {
    console.error("check-tokens FAILED:\n" + failures.map((f) => "  " + f).join("\n"));
    process.exit(1);
  }
  console.log("check-tokens OK");
}
