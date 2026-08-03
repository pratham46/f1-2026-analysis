# F1 2026 Dashboard Refocus — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `dashboard/` from a single 3,624-line HTML file into a zero-build, 8-section cinematic scroll narrative governed by a machine-enforced design standard, with two Three.js features and automated repo data sync.

**Architecture:** Static site, no bundler. `index.html` holds structure only; ES modules load directly from `js/`. One CSS token file is the single source of raw values, enforced by a checker that fails the build. Each section is one JS module exporting `render(data, root)` that may import from `js/lib/*` and never from another section. Three.js and GSAP arrive as CDN ES modules via an import map.

**Tech Stack:** Vanilla ES modules · Plotly (CDN) · Three.js r170+ (CDN) · GSAP 3 + ScrollTrigger (CDN) · native CSS scroll-driven animations · `node --test` for unit tests · Playwright MCP for browser verification · GitHub Actions for data sync

## Global Constraints

- **Zero-build.** No bundler, no framework, no `npm install` to view the dashboard. Every dependency is a CDN ES module referenced through the import map in `index.html`.
- **`DESIGN.md` at the repo root is the design authority.** Read it before any CSS. Do not restate or re-derive its values.
- **`dashboard/css/tokens.css` is the only file permitted to contain raw hex or `px` values.** All other CSS consumes `var(--token)`. Enforced by `scripts/check-tokens.mjs`.
- **Plotly cannot resolve `var(--x)` strings.** Every colour reaching a Plotly trace must be a literal, resolved through `js/lib/charts.js`. This has already shipped as a live bug once.
- **Content is visible by default.** Reveals enhance an already-rendered page; never gate visibility behind a class that a transition must remove. This project has shipped blank sections twice from exactly that mistake.
- **`window.F1_DATA` is flat.** There is no `.data` property. `F1_DATA.driver_standings_2026`, not `F1_DATA.data.driver_standings_2026`. This has also already shipped as a live bug.
- **The data contract is frozen.** No changes to `assemble()`, `predict.js`, `scrape.js`, or the payload schema, with the single exception of the additive `circuit_paths` key in Task 14.
- **Semantic state uses lightness and form, never hue alone** — filled/hollow marks, ▲/▼, ✓/✗. The 11 liveries occupy the hue wheel.
- **No uppercase tracked eyebrows above section headings.** No numbered section markers as scaffolding. No gradient text. No side-stripe borders. No nested cards.
- **`prefers-reduced-motion: reduce` is a designed path.** With motion off the page must read as a complete document; both 3D scenes fall back to static imagery.
- **Local server:** `python -m http.server 4173 --directory dashboard` (Python is already a project dependency; `file://` cannot load ES modules).
- **Commit prefix:** `[claude]`, per `AI_COLLAB.md`.
- **Branch:** all work on `feat/dashboard-refocus`, cut from the current branch.

## File Structure

| Path | Responsibility |
|---|---|
| `dashboard/index.html` | Semantic structure + import map only. Target ≤300 lines. |
| `dashboard/css/tokens.css` | The design standard. Only file with raw values. |
| `dashboard/css/base.css` | Reset, type, layout primitives, nav, ticker, modal shell, reduced-motion block. |
| `dashboard/css/sections/*.css` | One per section. Eight files. |
| `dashboard/js/main.js` | Boot: load data, paint, upgrade, wire sections. |
| `dashboard/js/lib/format.js` | Pure formatters. No DOM. |
| `dashboard/js/lib/data.js` | Seed-first load, live upgrade + freshness guard, accessors. |
| `dashboard/js/lib/charts.js` | Plotly wrapper: token resolution, width-gating, base layout. |
| `dashboard/js/lib/motion.js` | GSAP setup, reveal fallback, count-ups, scroll progress. |
| `dashboard/js/lib/modal.js` | Shared modal shell for the race and driver modals. |
| `dashboard/js/lib/three/stage.js` | Renderer/scene/camera factory + lifecycle. |
| `dashboard/js/lib/three/car.js` | Procedural low-poly car. |
| `dashboard/js/lib/three/track.js` | `circuit_paths` → 3D ribbon. |
| `dashboard/js/sections/*.js` | One per section. Eight files, each exporting `render`. |
| `scripts/check-tokens.mjs` | Design-standard enforcement + contrast verification. |
| `test/*.test.mjs` | `node --test` unit tests for pure logic. |
| `cloudflare/worker/scripts/enrich-circuit-paths.mjs` | OpenF1 telemetry → `circuit_paths`. |
| `.github/workflows/sync-data.yml` | Daily data sync commit. |

**Deleted:** `dashboard/index.html`'s inline everything; the `years` and `news` sections; the Pit Wall chatbot (`#pitwall-btn`, `#pitwall-chat`, `pwFindDriver`, `pwFindTeam`, `pitWallAnswer`, `pwAppend`, `pwSend`, `initPitWall`); all 11 files in `.claude/agents/_archive/`.

---

## Task 1: Design tokens and the contrast checker

The foundation. Everything else consumes these tokens, and the checker is what stops the standard from rotting into a document nobody obeys.

**Files:**
- Create: `dashboard/css/tokens.css`
- Create: `scripts/check-tokens.mjs`
- Create: `test/contrast.test.mjs`

**Interfaces:**
- Consumes: nothing.
- Produces: `scripts/check-tokens.mjs` exports `oklchToLuminance(L, C, H) -> number`, `hexToLuminance(hex) -> number`, `contrast(lumA, lumB) -> number`. `tokens.css` exposes the token names used by every later task.

- [ ] **Step 1: Write the failing test**

Create `test/contrast.test.mjs`:

```js
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
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test test/contrast.test.mjs`
Expected: FAIL — `Cannot find module '../scripts/check-tokens.mjs'`

- [ ] **Step 3: Write the colour maths and the checker**

Create `scripts/check-tokens.mjs`:

```js
#!/usr/bin/env node
// Enforces DESIGN.md mechanically. A design standard that is only a document rots.
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
  const src = readFileSync(join(CSS, "tokens.css"), "utf8");
  const map = {};
  for (const [, name, value] of src.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
    map[name] = value.trim();
  }
  return map;
}

function luminanceOf(value) {
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
      const px = line.match(/(?<![\w-])(?!0|1px)(\d*\.?\d+)px/g);
      const hex = line.match(/#[0-9a-fA-F]{3,8}\b/g);
      if (px) failures.push(`${file}:${i + 1} raw px ${px.join(",")}`);
      if (hex) failures.push(`${file}:${i + 1} raw hex ${hex.join(",")}`);
    }
  }
}

// 2. Ink ramp clears WCAG on every surface it can sit on.
function checkInkRamp(tokens) {
  const surfaces = ["--surface-0", "--surface-1", "--surface-2", "--surface-3"];
  const inks = { "--ink-0": 4.5, "--ink-1": 4.5, "--ink-2": 4.5 };
  for (const [ink, min] of Object.entries(inks)) {
    const li = luminanceOf(tokens[ink] || "");
    if (li === null) { failures.push(`missing or unparsable ${ink}`); continue; }
    for (const s of surfaces) {
      const ls = luminanceOf(tokens[s] || "");
      if (ls === null) { failures.push(`missing or unparsable ${s}`); continue; }
      const c = contrast(li, ls);
      if (c < min) failures.push(`${ink} on ${s} = ${c.toFixed(2)}:1, needs ${min}`);
    }
  }
}

// 3. Every team -txt variant clears 4.5:1 on --surface-1.
function checkTeamTextVariants(tokens) {
  const s1 = luminanceOf(tokens["--surface-1"] || "");
  for (const [name, value] of Object.entries(tokens)) {
    if (!name.endsWith("-txt")) continue;
    const c = contrast(luminanceOf(value), s1);
    if (c < 4.5) failures.push(`${name} on --surface-1 = ${c.toFixed(2)}:1, needs 4.5`);
  }
}

const tokens = tokenValues();
checkNoRawValues();
checkInkRamp(tokens);
checkTeamTextVariants(tokens);

if (failures.length) {
  console.error("check-tokens FAILED:\n" + failures.map((f) => "  " + f).join("\n"));
  process.exit(1);
}
console.log("check-tokens OK");
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --test test/contrast.test.mjs`
Expected: PASS, 5/5.

If the `-txt` variant test fails, the hex values in Step 5 are wrong — recompute them rather than lowering the threshold. That is the checker doing its job.

- [ ] **Step 5: Write `tokens.css`**

Create `dashboard/css/tokens.css` implementing DESIGN.md exactly. Fonts load via `@import` in `index.html`, not here.

```css
/* The design standard. See DESIGN.md. The ONLY file permitted raw values. */
:root {
  /* Surface — chroma 0. Neutral because 11 liveries must read true. */
  --surface-0: oklch(0.14 0 0);
  --surface-1: oklch(0.18 0 0);
  --surface-2: oklch(0.22 0 0);
  --surface-3: oklch(0.27 0 0);

  /* Ink */
  --ink-0: oklch(0.97 0 0);
  --ink-1: oklch(0.80 0 0);
  --ink-2: oklch(0.66 0 0);

  /* Team liveries — fills, marks, chart series (3:1 non-text threshold) */
  --team-mclaren: #FF8000;
  --team-ferrari: #E8002D;
  --team-red_bull: #3671C6;
  --team-mercedes: #27F4D2;
  --team-williams: #64C4FF;
  --team-rb: #6692FF;
  --team-aston_martin: #358C75;
  --team-haas: #B6BABD;
  --team-alpine: #FF87BC;
  --team-audi: #00E701;
  --team-cadillac: #C8A464;

  /* Text-safe livery variants — only the dark liveries need one */
  --team-ferrari-txt: #FF1A45;
  --team-red_bull-txt: #5A8FD8;
  --team-aston_martin-txt: #4FB89A;

  /* Type */
  --font-display: "Archivo", system-ui, sans-serif;
  --font-body: "Archivo", system-ui, sans-serif;
  --font-mono: "Chivo Mono", ui-monospace, monospace;
  /* Archivo is variable on wdth 62..125 — display type is the same family
     pushed to the expanded end, not a second font. */
  --stretch-display: 125%;
  --stretch-body: 100%;
  --text-hero: clamp(2.5rem, 7vw, 5.5rem);
  --text-display: clamp(2rem, 4vw, 3.25rem);
  --text-xl: 1.75rem;
  --text-lg: 1.3125rem;
  --text-base: 1rem;
  --text-sm: 0.875rem;
  --text-xs: 0.75rem;
  --measure: 68ch;

  /* Space — 4px base */
  --space-1: 4px;  --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
  --space-5: 24px; --space-6: 32px;  --space-7: 48px;  --space-8: 64px;
  --space-9: 96px; --space-10: 128px; --space-11: 192px;
  --section-pad: clamp(4rem, 10vh, 9rem);
  --shell: min(1240px, 92vw);

  /* Radius + border */
  --radius-sm: 3px; --radius: 6px; --radius-lg: 12px;
  --border: 1px solid oklch(0.27 0 0);

  /* Z — semantic, never arbitrary */
  --z-base: 0; --z-rail: 10; --z-sticky: 20; --z-nav: 30;
  --z-backdrop: 40; --z-modal: 50; --z-toast: 60; --z-tooltip: 70;

  /* Motion */
  --dur-fast: 120ms; --dur-base: 240ms; --dur-slow: 480ms; --dur-cinematic: 900ms;
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}
```

- [ ] **Step 6: Run the checker**

Run: `node scripts/check-tokens.mjs`
Expected: `check-tokens OK`. (`base.css` and `sections/` do not exist yet; the raw-value check skips missing paths.)

- [ ] **Step 7: Commit**

```bash
git checkout -b feat/dashboard-refocus
git add dashboard/css/tokens.css scripts/check-tokens.mjs test/contrast.test.mjs
git commit -m "[claude] Design tokens + contrast checker"
```

---

## Task 2: Data layer

Ports the two most bug-prone functions in the old build — `normalizeF1` (`index.html:1757-1845`) and `fetchLiveData` (`index.html:1846-1894`) — into a tested module. The freshness guard is the piece that stops a stale Worker KV from clobbering a good committed seed.

**Files:**
- Create: `dashboard/js/lib/format.js`, `dashboard/js/lib/data.js`
- Create: `test/data.test.mjs`
- Reference: `dashboard/index.html:1757-1894`

**Interfaces:**
- Consumes: `window.F1_DATA` (flat), `window.F1_WORKER_URL` from `config.js`.
- Produces:
  - `format.js`: `pct(n, digits=1) -> string`, `pts(n) -> string`, `ordinal(n) -> string`, `gap(s) -> string`, `dateShort(iso) -> string`
  - `data.js`: `isFresher(candidate, current) -> boolean`, `teamColor(teamId, {text=false}) -> string`, `loadSeed() -> object`, `upgradeFromWorker(seed) -> Promise<object|null>`

- [ ] **Step 1: Write the failing test**

Create `test/data.test.mjs`:

```js
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
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test test/data.test.mjs`
Expected: FAIL — module not found.

- [ ] **Step 3: Write `format.js`**

```js
// Pure formatters. No DOM, no data access — importable from node for tests.
export const pct = (n, digits = 1) =>
  n == null || Number.isNaN(n) ? "—" : `${(n * 100).toFixed(digits)}%`;

export const pts = (n) =>
  n == null || Number.isNaN(n) ? "—" : Number.isInteger(n) ? String(n) : n.toFixed(1);

export function ordinal(n) {
  if (n == null || Number.isNaN(n)) return "—";
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export const gap = (s) => (!s ? "—" : s.startsWith("+") ? s : s);

export const dateShort = (iso) =>
  !iso ? "—" : new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric", month: "short", timeZone: "UTC",
  });
```

- [ ] **Step 4: Write `data.js`**

```js
// Seed-first data access. The dashboard ALWAYS paints from the committed
// data.js seed, then upgrades from the Worker only if the Worker is provably
// at least as fresh. A stale KV must never clobber good committed data.
const TEAM_TEXT_SAFE = new Set(["ferrari", "red_bull", "aston_martin"]);

export function isFresher(candidate, current) {
  if (!candidate || typeof candidate !== "object") return false;
  const cd = Date.parse(candidate.generated_at);
  const sd = Date.parse(current.generated_at);
  if (Number.isNaN(cd) || Number.isNaN(sd)) return false;
  const cr = candidate.races_completed_2026;
  const sr = current.races_completed_2026;
  if (typeof cr !== "number" || typeof sr !== "number") return false;
  // Both must hold: newer or equal timestamp AND no regression in rounds.
  return cd >= sd && cr >= sr;
}

export function teamColor(teamId, { text = false } = {}) {
  const base = `--team-${teamId}`;
  const name = text && TEAM_TEXT_SAFE.has(teamId) ? `${base}-txt` : base;
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || getComputedStyle(document.documentElement).getPropertyValue("--ink-1").trim();
}

export function loadSeed() {
  const d = window.F1_DATA;
  if (!d || typeof d !== "object") throw new Error("F1_DATA missing — data.js failed to load");
  return d;
}

export async function upgradeFromWorker(seed) {
  const base = window.F1_WORKER_URL;
  if (!base) return null;
  try {
    const r = await fetch(`${base}/api/data`, { signal: AbortSignal.timeout(8000) });
    if (!r.ok) return null;
    const live = await r.json();
    return isFresher(live, seed) ? live : null;
  } catch {
    return null; // Offline is a supported state, not an error.
  }
}
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `node --test test/data.test.mjs`
Expected: PASS, 5/5.

Note `teamColor` is not unit-tested — it touches `document`. It is covered by the Playwright pass in Task 19.

- [ ] **Step 6: Commit**

```bash
git add dashboard/js/lib/format.js dashboard/js/lib/data.js test/data.test.mjs
git commit -m "[claude] Data layer: freshness guard, team colours, formatters"
```

---

## Task 3: Chart library

The single choke point where tokens become literals. Every Plotly call on the site goes through here.

**Files:**
- Create: `dashboard/js/lib/charts.js`
- Reference: `dashboard/index.html:1895-1933` (`PLOT`, `PLOT_WHEN_VISIBLE`)

**Interfaces:**
- Consumes: `teamColor` from `js/lib/data.js`.
- Produces: `resolveToken(name) -> string` (literal colour), `baseLayout(overrides) -> object`, `plot(el, traces, layout) -> Promise<void>`, `plotWhenVisible(el, buildFn) -> void`

- [ ] **Step 1: Write `charts.js`**

```js
// Plotly wrapper. Plotly CANNOT resolve `var(--token)` strings — passing one
// yields an invisible trace. This module is the only place colours are read,
// and it always hands Plotly a literal.
const css = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export function resolveToken(name) {
  const v = css(name);
  if (!v) throw new Error(`Unknown design token: ${name}`);
  if (v.startsWith("var(")) throw new Error(`Token ${name} resolved to another var()`);
  return v;
}

export function baseLayout(overrides = {}) {
  return {
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    font: { family: css("--font-body") || "Archivo, sans-serif", color: resolveToken("--ink-1"), size: 12 },
    margin: { l: 48, r: 16, t: 8, b: 40 },
    xaxis: { gridcolor: resolveToken("--surface-3"), zeroline: false, tickfont: { color: resolveToken("--ink-2") } },
    yaxis: { gridcolor: resolveToken("--surface-3"), zeroline: false, tickfont: { color: resolveToken("--ink-2") } },
    showlegend: false,
    ...overrides,
  };
}

const CONFIG = { displayModeBar: false, responsive: true };

export async function plot(el, traces, layout = {}) {
  await window.Plotly.newPlot(el, traces, { ...baseLayout(), ...layout }, CONFIG);
}

// A newPlot at width 0 crushes bars against the axis. Modal charts MUST use
// this — the element has no width until the modal is open and laid out.
export function plotWhenVisible(el, buildFn) {
  if (el.dataset.plotted === "1") return;
  const draw = () => {
    if (el.clientWidth < 1) return false;
    el.dataset.plotted = "1";
    buildFn(el);
    return true;
  };
  if (draw()) return;
  const ro = new ResizeObserver(() => { if (draw()) ro.disconnect(); });
  ro.observe(el);
}

export const resetPlot = (el) => { el.dataset.plotted = ""; window.Plotly?.purge?.(el); };
```

- [ ] **Step 2: Verify token resolution throws loudly on a bad token**

This is the guard against the exact bug that shipped. Confirm in the browser console once the shell exists (Task 5). For now, review that `resolveToken` throws rather than returning `""` — a silent empty string is what made the accuracy chart invisible.

- [ ] **Step 3: Commit**

```bash
git add dashboard/js/lib/charts.js
git commit -m "[claude] Chart lib: token resolution, width-gated plotting"
```

---

## Task 4: Motion library

**Files:**
- Create: `dashboard/js/lib/motion.js`
- Reference: `dashboard/index.html:3413-3559` (`countUp`, `initReveal`, `onScrollFX`, `initScrollFX`)

**Interfaces:**
- Consumes: nothing.
- Produces: `prefersReducedMotion() -> boolean`, `initReveals() -> void`, `countUp(el, to, {duration, decimals}) -> void`, `initScrollProgress(el) -> void`, `onVisible(el, fn, {once}) -> void`

- [ ] **Step 1: Write `motion.js`**

```js
// Two-tier motion. Native CSS scroll-driven animations do the reveals and the
// progress bar (compositor, no JS). GSAP is loaded only by the sections that
// need pinning/scrubbing. This module supplies the JS fallback for browsers
// without scroll-driven CSS, plus count-ups.
//
// Hard rule: content is visible by default. Reveals ADD motion to an already
// painted page. Nothing here may hide content.

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const supportsScrollTimeline = () => CSS.supports("animation-timeline: view()");

export function onVisible(el, fn, { once = true } = {}) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      fn(e.target);
      if (once) io.unobserve(e.target);
    }
  }, { rootMargin: "0px 0px -10% 0px" });
  io.observe(el);
}

// Fallback only. When scroll-driven CSS is supported, the stylesheet owns this
// and we do nothing — no double-animation.
export function initReveals() {
  if (supportsScrollTimeline() || prefersReducedMotion()) return;
  document.documentElement.classList.add("js-reveal");
  for (const el of document.querySelectorAll("[data-reveal]")) {
    onVisible(el, (t) => t.setAttribute("data-revealed", ""));
  }
}

export function countUp(el, to, { duration = 900, decimals = 0 } = {}) {
  if (prefersReducedMotion()) { el.textContent = to.toFixed(decimals); return; }
  const from = 0;
  const t0 = performance.now();
  const ease = (t) => 1 - Math.pow(1 - t, 4); // out-quart, matches --ease-out
  const step = (now) => {
    const t = Math.min(1, (now - t0) / duration);
    el.textContent = (from + (to - from) * ease(t)).toFixed(decimals);
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export function initScrollProgress(el) {
  if (supportsScrollTimeline()) return; // CSS owns it
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    el.style.setProperty("--progress", max > 0 ? scrollY / max : 0);
  };
  addEventListener("scroll", update, { passive: true });
  update();
}
```

- [ ] **Step 2: Commit**

```bash
git add dashboard/js/lib/motion.js
git commit -m "[claude] Motion lib: reveals, count-ups, scroll progress"
```

---

## Task 5: Shell — index.html, base.css, main.js, modal.js

First runnable page. After this task the site loads, shows the nav, ticker and an empty section per slot, with zero console errors.

**Files:**
- Create: `dashboard/css/base.css`, `dashboard/js/main.js`, `dashboard/js/lib/modal.js`
- Rewrite: `dashboard/index.html`
- Reference: `dashboard/index.html:1240-1340` (nav, ticker), `:3575+` (`initHamburger`)

**Interfaces:**
- Consumes: everything from Tasks 2–4.
- Produces: `openModal({title, body, onClose}) -> void`, `closeModal() -> void` from `modal.js`. Eight empty `<section id>` elements: `open`, `title-fight`, `h2h`, `accuracy`, `season`, `grid`, `momentum`, `regs`.

- [ ] **Step 1: Rewrite `index.html`**

Structure only. Import map declares every CDN dependency. Keep `<script src="config.js">` and `<script src="data.js">` as classic scripts before the module — they set globals the module reads.

```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>F1 2026 — Season Analysis</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..700&family=Chivo+Mono:wght@400;700&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="css/tokens.css" />
<link rel="stylesheet" href="css/base.css" />
<link rel="stylesheet" href="css/sections/open.css" />
<!-- ...one per section... -->
<script src="https://cdn.plot.ly/plotly-2.35.2.min.js" defer></script>
<script type="importmap">
{ "imports": {
    "three": "https://unpkg.com/three@0.170.0/build/three.module.js",
    "gsap": "https://unpkg.com/gsap@3.12.5/index.js",
    "gsap/ScrollTrigger": "https://unpkg.com/gsap@3.12.5/ScrollTrigger.js"
} }
</script>
<script src="config.js"></script>
<script src="data.js"></script>
<script type="module" src="js/main.js"></script>
```

Body: skip link, `<header>` nav (8 anchors, hamburger, data-status pill), PIT WALL ticker, `<main>` with eight `<section>` elements each containing an `<h2>` and an empty mount point, `<footer>`, and one `<dialog id="modal">`.

Use `<dialog>` for the modal, not a hand-rolled overlay — it gives focus trapping, Escape-to-close, and inertness for free. This replaces both the race modal and the driver modal from the old build.

- [ ] **Step 2: Write `base.css`**

Reset, typography from tokens, `.shell` container, nav, ticker, footer, `<dialog>` styling, skip link, and the reveal system:

```css
/* Reveals: visible by default, motion is additive. */
[data-reveal] { opacity: 1; transform: none; }

@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    [data-reveal] {
      animation: reveal linear both;
      animation-timeline: view();
      animation-range: entry 10% cover 35%;
    }
    @keyframes reveal { from { opacity: 0; transform: translateY(var(--space-5)); } }
  }
}

/* JS fallback for browsers without scroll-driven CSS. */
.js-reveal [data-reveal] { opacity: 0; transform: translateY(var(--space-5));
  transition: opacity var(--dur-slow) var(--ease-out), transform var(--dur-slow) var(--ease-out); }
.js-reveal [data-reveal][data-revealed] { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 1ms !important; transition-duration: 1ms !important; }
  [data-reveal], .js-reveal [data-reveal] { opacity: 1 !important; transform: none !important; }
}
```

No raw hex or px anywhere. Run the checker after writing.

- [ ] **Step 3: Write `modal.js` and `main.js`**

`modal.js` wraps the single `<dialog>`: sets title and body, calls `showModal()`, and on `close` runs the `onClose` callback so 3D scenes and Plotly instances can dispose.

`main.js`:

```js
import { loadSeed, upgradeFromWorker } from "./lib/data.js";
import { initReveals, initScrollProgress } from "./lib/motion.js";

const SECTIONS = ["open", "title-fight", "h2h", "accuracy", "season", "grid", "momentum", "regs"];

async function boot() {
  const seed = loadSeed();
  await paint(seed, "seed");
  const live = await upgradeFromWorker(seed);
  if (live) await paint(live, "live");
}

async function paint(data, source) {
  for (const id of SECTIONS) {
    const root = document.getElementById(id);
    if (!root) continue;
    try {
      const mod = await import(`./sections/${id}.js`);
      // Sections hide themselves when their data is absent — a section that
      // cannot render must not ship blank.
      const rendered = mod.render(data, root);
      root.hidden = rendered === false;
    } catch (e) {
      console.error(`[section:${id}]`, e);
      root.hidden = true;
    }
  }
  document.getElementById("data-status").dataset.source = source;
}

initReveals();
initScrollProgress(document.getElementById("progress"));
boot();
```

Each section failing independently is deliberate: one broken section must not blank the page, which is what happened when a shared `try/catch` zeroed the standings table.

- [ ] **Step 4: Verify the shell loads clean**

```bash
python -m http.server 4173 --directory dashboard
```

Then via Playwright MCP: navigate to `http://localhost:4173`, run `browser_console_messages`.
Expected: zero errors. Sections are hidden (no section modules exist yet) — that is correct behaviour, not a failure.

- [ ] **Step 5: Run the checker and commit**

```bash
node scripts/check-tokens.mjs
git add dashboard/index.html dashboard/css/base.css dashboard/js/main.js dashboard/js/lib/modal.js
git commit -m "[claude] Shell: structure, base styles, boot, dialog modal"
```

---

## Tasks 6–13: The eight sections

Every section task follows the same shape. Read this preamble once, then the per-section deltas.

**Common structure per section `X`:**
- Create: `dashboard/js/sections/X.js`, `dashboard/css/sections/X.css`
- Add the stylesheet `<link>` to `index.html`
- Export `render(data, root) -> boolean` — return `false` when required data is absent so `main.js` hides the section
- Import colours only via `teamColor()`; charts only via `js/lib/charts.js`
- Mark reveal targets with `data-reveal`
- Verify: Playwright — section visible, no console errors, every chart reports `clientWidth > 0` and ≥1 trace
- **Call `browser_close` before every verification navigate.** Playwright's browser
  context caches ES modules across navigations even when the server sends
  `Cache-Control: no-store`, so without it you will verify the previous version of the
  file and believe a change worked when it did not. Serve via `python scripts/serve.py`,
  never `python -m http.server` — the latter sends no cache headers at all.
- Run `node scripts/check-tokens.mjs`
- Commit as `[claude] Section: <name>`

### Task 6: Cold Open (`open`)

**Port from:** `renderHero` (`index.html:1970-2028`), `renderPodium` (`:2154-2178`), `startCountdown` (`:2029-2046`)
**Data:** `driver_standings_2026[0]`, `races_completed_2026`, `calendar_2026.length`, `next_race`, `driver_images`
**Requires:** `driver_standings_2026` non-empty.

Full-bleed. The projected champion's name at `--text-hero`, title probability count-up, rounds elapsed as `11 / 22` in mono. A `<div id="open-3d">` mount point is left empty here and filled in Task 15.

Do **not** rebuild the old speedometer gauges or the "big number + small label + supporting stats" hero-metric block — both are on the ban list. The headline is the driver's name; the probability is subordinate to it.

### Task 7: The Title Fight (`title-fight`)

**Port from:** `renderStandings` (`:2179-2251`), `renderGauges` (`:2327-2348`), `renderConstructorDonut` (`:2279-2299`)
**Data:** `driver_standings_2026`, `real_driver_standings_2026`, `constructor_standings_2026`
**Requires:** `driver_standings_2026` non-empty.

One table, 22 rows. Each row carries: position, driver, team colour mark, real points, predicted points, and an inline win-probability bar — the gauges section folded in rather than repeated. Use `--team-*-txt` for the driver name, raw `--team-*` for the mark. Constructor standings as a second, smaller table below; drop the donut (a donut of 11 slices is unreadable).

`renderStandings` previously wrapped everything in a `try/catch` that silently produced 0 rows. Do not reproduce that. Let it throw; `main.js` isolates the failure.

### Task 8: Head-to-Head (`h2h`)

**Port from:** `renderH2H` (`:2357-2409`), `h2hCard` (`:2349-2356`), `renderBattleChart` (`:2300-2326`)
**Data:** `driver_standings_2026`, `real_driver_standings_2026`, `driver_images`, `driver_bios_2026`
**Requires:** ≥2 entries in `driver_standings_2026`.

Two `<select>` elements, default Antonelli vs the runner-up. Animated comparison bars for points, wins, podium probability, average position. Bars animate on change, not just on first render — the change IS the information.

### Task 9: Model vs Reality (`accuracy`)

**Port from:** `renderAccuracy` (`:2430-2499`)
**Data:** `predictions_archive` (object keyed by round string → array of `{driver_id, win_prob}`), `real_race_results_2026`
**Requires:** both present and non-empty.

For each completed round, compare `predictions_archive[round][0].driver_id` against the actual winner (`real_race_results_2026[i].results.find(r => r.position === 1).driver_id`). Render a per-round strip of hit/miss marks plus a running accuracy figure and the model MAE (`model_cv_mae`).

Hit/miss must use **filled vs hollow marks and ✓/✗**, never red/green — see Global Constraints. This section is the credibility of the whole page; the misses get equal visual weight to the hits.

### Task 10: The Season So Far (`season`)

**Port from:** `renderTimeline` (`:2410-2429`), `renderCalendar` (`:2551-2588`), `openRaceModal` (`:2589-2724`), `renderTireStrategy` (`:2725-2807`), `renderSeasonPitStops` (`:2863-2895`)
**Data:** `calendar_2026`, `real_race_results_2026`, `race_predictions`, `openf1_race_data`, `track_layouts`, `circuit_data_2026`
**Requires:** `calendar_2026` non-empty.

One horizontal rail of all 22 rounds; completed rounds are solid, upcoming are outlined. Click opens the shared `<dialog>` with: top 5 finishers, fastest lap, predicted vs actual, the tyre-strategy stint chart, and the flat track layout image. A `<div id="season-3d">` mount point is left empty here and filled in Task 16.

Stint chart uses `plotWhenVisible` — it is inside a modal and will otherwise render at width 0.

### Task 11: The Grid (`grid`)

**Port from:** `renderDriversGrid` (`:2896-2913`), `renderTeams` (`:2813-2862`), `openDriverModal` (`:3105-3233`), `closeDriverModal` (`:3234-3240`)
**Data:** `driver_info`, `driver_images`, `team_cars`, `driver_bios_2026`, `constructor_standings_2026`, `historical_driver_points`
**Requires:** `driver_info` non-empty.

22 drivers grouped under their 11 teams, with the official car render per team. Clicking a driver opens the shared dialog: bio, career-points chart, 2026 form.

The career chart must use `plotWhenVisible`. Leclerc's bio has `championships: 0` and reads "2022 title runner-up" — carry that correction forward; do not regress it.

### Task 12: Form & Momentum (`momentum`)

**Port from:** `renderMomentum` (`:2500-2550`), `renderHistory` (`:2914-2961`)
**Data:** `driver_rolling_form` (`{driver: {seasons:[], points:[]}}`), `historical_driver_points` (keyed by year string)
**Requires:** `driver_rolling_form` non-empty.

One multi-line chart with a season toggle. Team-mates share a hue and separate by solid vs dashed line — never a second colour.

### Task 13: What 2026 Changed (`regs`)

**Port from:** `renderRegShift` (`:3016-3104`)
**Data:** `regulation_impact_2026` (`{description, constructor_competitiveness_change: {team: delta}}`)
**Requires:** `regulation_impact_2026.constructor_competitiveness_change` present.

Diverging bar chart of the 11 competitiveness deltas (Ferrari +8 to Red Bull −5), team-coloured, plus the regulation description as prose at `--measure`. Gain/loss uses ▲/▼ and lightness, not red/green.

---

## Task 14: Circuit path enrichment from OpenF1 telemetry

Adds the only new data in this plan. Verified working against live OpenF1: 293–352 samples per flying lap, traces closing to within 1.2–2.5% of circuit span across Melbourne, Barcelona and Shanghai.

**Files:**
- Create: `cloudflare/worker/scripts/enrich-circuit-paths.mjs`
- Create: `test/circuit-path.test.mjs`
- Modify: `cloudflare/worker/package.json` (chain into `npm run seed`)
- Reference: `cloudflare/worker/scripts/enrich-openf1-seed.mjs` (follow its structure exactly)

**Interfaces:**
- Consumes: `openf1_race_data[round].session_key` from the seed.
- Produces: additive seed key `circuit_paths: { [circuit_id]: { points: [[x,y],...], length: number } }` with integer coordinates, ~150 points per circuit, normalised so the centroid is at origin.

- [ ] **Step 1: Write the failing test**

Create `test/circuit-path.test.mjs`:

```js
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
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test test/circuit-path.test.mjs`
Expected: FAIL — module not found.

- [ ] **Step 3: Write the enrichment script**

```js
// Trace each completed 2026 circuit from OpenF1 car-location telemetry and
// store a normalised outline in the seed. Circuit geometry never changes, so
// an existing path is never refetched.
//
// Why telemetry and not the track_layouts images: those are remote raster
// .webp files on media.formula1.com. They cannot be traced (CORS blocks the
// canvas read) and there is no geometry anywhere else in the payload.
//
// Run AFTER enrich-openf1-seed.mjs:  node scripts/enrich-circuit-paths.mjs
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SEED = resolve(__dirname, "../../../dashboard/data.js");
const OPENF1 = "https://api.openf1.org/v1";
const TARGET_POINTS = 150;

export function decimate(points, target = TARGET_POINTS) {
  if (points.length <= target) return points;
  const stride = points.length / target;
  const out = [];
  for (let i = 0; i < target; i++) out.push(points[Math.floor(i * stride)]);
  const last = points[points.length - 1];
  if (out[out.length - 1] !== last) out[out.length - 1] = last;
  return out;
}

export function normalise(points) {
  const xs = points.map((p) => p[0]), ys = points.map((p) => p[1]);
  const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
  const cy = (Math.min(...ys) + Math.max(...ys)) / 2;
  const span = Math.max(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys));
  return {
    points: points.map(([x, y]) => [Math.round(x - cx), Math.round(y - cy)]),
    length: Math.round(span),
  };
}

async function getJSON(url, { tries = 4, timeout = 20000 } = {}) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, { signal: AbortSignal.timeout(timeout) });
      if (r.ok) return await r.json();
    } catch { /* retry */ }
    await new Promise((res) => setTimeout(res, 600 * (i + 1)));
  }
  return null;
}

async function tracePath(sessionKey) {
  const drivers = await getJSON(`${OPENF1}/drivers?session_key=${sessionKey}`);
  for (const d of (drivers || []).slice(0, 5)) {
    const laps = await getJSON(`${OPENF1}/laps?session_key=${sessionKey}&driver_number=${d.driver_number}`);
    const valid = (laps || []).filter((l) => l.lap_duration && l.date_start)
      .sort((a, b) => a.lap_duration - b.lap_duration);
    if (!valid.length) continue;
    const f = valid[0];
    const t0 = new Date(f.date_start);
    const t1 = new Date(t0.getTime() + f.lap_duration * 1000);
    const loc = await getJSON(
      `${OPENF1}/location?session_key=${sessionKey}&driver_number=${d.driver_number}` +
      `&date>${t0.toISOString()}&date<${t1.toISOString()}`
    );
    const pts = (loc || []).filter((p) => p.x !== 0 || p.y !== 0).map((p) => [p.x, p.y]);
    if (pts.length >= 100) return normalise(decimate(pts));
  }
  return null;
}

const raw = readFileSync(SEED, "utf8");
const start = raw.indexOf("{"), end = raw.lastIndexOf("}");
const data = JSON.parse(raw.slice(start, end + 1));

const out = { ...(data.circuit_paths || {}) };
let added = 0, kept = 0;
for (const race of data.real_race_results_2026 || []) {
  const cid = race.circuit_id;
  if (out[cid]?.points?.length) { kept++; continue; }
  const sk = data.openf1_race_data?.[race.round]?.session_key;
  if (!sk) continue;
  const path = await tracePath(sk);
  if (path) { out[cid] = path; added++; console.log(`  ${cid}: ${path.points.length} points, span ${path.length}`); }
}

data.circuit_paths = out;
writeFileSync(SEED, raw.slice(0, start) + JSON.stringify(data, null, 2) + ";\n");
console.log(`circuit_paths: added ${added}, kept ${kept}, total ${Object.keys(out).length}`);
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --test test/circuit-path.test.mjs`
Expected: PASS, 3/3.

- [ ] **Step 5: Run against live OpenF1**

```bash
cd cloudflare/worker && node scripts/enrich-circuit-paths.mjs
```
Expected: `circuit_paths: added 11, kept 0, total 11`. Confirm `dashboard/data.js` grew by roughly 15–25 KB, not megabytes. If a circuit is missing, that is acceptable — the flythrough degrades per-circuit in Task 16.

- [ ] **Step 6: Chain into the seed pipeline**

In `cloudflare/worker/package.json`, extend the `seed` script:

```json
"seed": "node scripts/gen-seed.mjs && node scripts/enrich-openf1-seed.mjs && node scripts/enrich-circuit-paths.mjs"
```

- [ ] **Step 7: Verify the data contract still holds**

Run: `cd cloudflare/worker && npm test`
Expected: PASS. `circuit_paths` is purely additive; no existing key changed.

- [ ] **Step 8: Commit**

```bash
git add cloudflare/worker/scripts/enrich-circuit-paths.mjs cloudflare/worker/package.json test/circuit-path.test.mjs dashboard/data.js
git commit -m "[claude] Circuit paths traced from OpenF1 telemetry"
```

---

## Task 15: Three.js stage and the Cold Open car

**Files:**
- Create: `dashboard/js/lib/three/stage.js`, `dashboard/js/lib/three/car.js`
- Modify: `dashboard/js/sections/open.js`, `dashboard/css/sections/open.css`

**Interfaces:**
- Consumes: `teamColor` from `js/lib/data.js`.
- Produces: `createStage(mount, {onFrame}) -> {scene, camera, renderer, dispose}`, `buildCar(color) -> THREE.Group`

- [ ] **Step 1: Write `stage.js`**

Owns renderer lifecycle. Every 3D feature goes through it, so disposal is written once.

```js
import * as THREE from "three";

export function createStage(mount, { onFrame } = {}) {
  const renderer = new THREE.WebGLRenderer({
    antialias: true, alpha: true, powerPreference: "low-power",
  });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(mount.clientWidth, mount.clientHeight);
  mount.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 1000);

  let running = false, raf = 0;
  const loop = () => { onFrame?.(); renderer.render(scene, camera); raf = requestAnimationFrame(loop); };
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !running) { running = true; loop(); }
    else if (!e.isIntersecting && running) { running = false; cancelAnimationFrame(raf); }
  });
  io.observe(mount);

  const onResize = () => {
    camera.aspect = mount.clientWidth / mount.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(mount.clientWidth, mount.clientHeight);
  };
  addEventListener("resize", onResize);

  function dispose() {
    io.disconnect();
    removeEventListener("resize", onResize);
    cancelAnimationFrame(raf);
    scene.traverse((o) => {
      o.geometry?.dispose();
      const m = o.material;
      if (Array.isArray(m)) m.forEach((x) => x.dispose());
      else m?.dispose();
    });
    renderer.dispose();
    renderer.domElement.remove();
  }
  return { scene, camera, renderer, dispose };
}

export const webglAvailable = () => {
  try { return !!document.createElement("canvas").getContext("webgl2"); }
  catch { return false; }
};
```

- [ ] **Step 2: Write `car.js`**

Procedural, from primitives. No external model — a real 2026 F1 car model is a licensing problem, and this one recolours live from the champion's team token.

Build a `THREE.Group`: a tapered box chassis, a nose cone, four `CylinderGeometry` wheels rotated onto the X axis, a front wing plane, a rear wing plane with two endplates, and a halo torus. Body material `MeshStandardMaterial({color, roughness: 0.4, metalness: 0.1})`; wheels a near-black `--surface-0` literal. Two lights: a `HemisphereLight` and one `DirectionalLight`.

- [ ] **Step 3: Wire into the Cold Open with a fallback**

In `open.js`: if `!webglAvailable() || prefersReducedMotion()`, leave `#open-3d` empty and add `data-fallback` so CSS shows the static hero composition instead. Otherwise create the stage, add the car in the leading driver's team colour, and drive camera + rotation from a GSAP ScrollTrigger pinned to the section with `scrub: true`.

- [ ] **Step 4: Verify**

Playwright: navigate, scroll through the Cold Open, confirm zero console errors and that `#open-3d canvas` exists. Then re-run with reduced motion forced and confirm the canvas is absent and `[data-fallback]` is present.

- [ ] **Step 5: Commit**

```bash
git add dashboard/js/lib/three/ dashboard/js/sections/open.js dashboard/css/sections/open.css
git commit -m "[claude] 3D: stage lifecycle + procedural Cold Open car"
```

---

## Task 16: Track flythrough

**Files:**
- Create: `dashboard/js/lib/three/track.js`
- Modify: `dashboard/js/sections/season.js`

**Interfaces:**
- Consumes: `createStage`, `webglAvailable` from `three/stage.js`; `circuit_paths` from Task 14.
- Produces: `buildTrack(path) -> {mesh, curve}` where `path` is `{points, length}`.

- [ ] **Step 1: Write `track.js`**

```js
import * as THREE from "three";

// circuit_paths points are integer [x, y] in OpenF1 track space, centred on
// the origin. Map to XZ (ground plane), scale to a unit-ish size, extrude a
// flat ribbon along the closed curve.
export function buildTrack({ points, length }) {
  const scale = 20 / (length || 1);
  const vs = points.map(([x, y]) => new THREE.Vector3(x * scale, 0, y * scale));
  const curve = new THREE.CatmullRomCurve3(vs, true, "centripetal", 0.5);
  const geometry = new THREE.TubeGeometry(curve, Math.min(points.length * 2, 600), 0.12, 4, true);
  const material = new THREE.MeshStandardMaterial({ roughness: 0.8, metalness: 0 });
  return { mesh: new THREE.Mesh(geometry, material), curve };
}
```

- [ ] **Step 2: Mount inside the race modal**

In `season.js`, on modal open: if the round's `circuit_id` has no entry in `circuit_paths`, or WebGL is unavailable, or reduced motion is set — show the existing flat `track_layouts` image instead and return. Otherwise create a stage in `#season-3d`, add the track, and fly the camera along `curve.getPointAt(t)` looking at `getPointAt(t + 0.02)`.

**Register `stage.dispose()` as the modal's `onClose` callback.** This is the leak path — Task 19 asserts it.

- [ ] **Step 3: Verify no context leak**

Playwright: open and close the race modal 20 times, then evaluate `renderer.info.memory.geometries`. Expected: returns to its baseline value, not growing by 20 tracks' worth.

- [ ] **Step 4: Commit**

```bash
git add dashboard/js/lib/three/track.js dashboard/js/sections/season.js
git commit -m "[claude] 3D: telemetry-traced track flythrough in race modal"
```

---

## Task 17: Automated data sync

Closes the real gap: the Worker cron writes to KV but nothing ever refreshes the committed seed. Needs no Cloudflare secrets and works whether or not anything is deployed.

**Files:**
- Create: `.github/workflows/sync-data.yml`

- [ ] **Step 1: Write the workflow**

```yaml
name: Sync F1 data

# The Worker's own cron writes to KV. Nothing refreshed the committed seed,
# so dashboard/data.js only moved when a human ran `npm run seed`. This does
# it daily and commits only when the data actually changed.
on:
  schedule:
    - cron: "0 7 * * *"   # 07:00 UTC daily
  workflow_dispatch: {}

concurrency:
  group: sync-data
  cancel-in-progress: false

permissions:
  contents: write

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Install Worker deps
        working-directory: cloudflare/worker
        run: npm ci

      - name: Test before regenerating
        working-directory: cloudflare/worker
        run: npm test

      - name: Regenerate the seed
        working-directory: cloudflare/worker
        run: npm run seed

      - name: Verify the payload still parses
        run: node --test test/

      - name: Commit only if changed
        run: |
          if git diff --quiet -- dashboard/data.js; then
            echo "No data change — nothing to commit."
            exit 0
          fi
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add dashboard/data.js
          git commit -m "[bot] Sync F1 data $(date -u +%Y-%m-%d)"
          git push
```

- [ ] **Step 2: Verify the seed command works locally first**

```bash
cd cloudflare/worker && npm run seed && cd ../.. && git diff --stat dashboard/data.js
```
Expected: either a diff confined to `dashboard/data.js`, or no diff during the summer break. Both are correct outcomes.

- [ ] **Step 3: Commit, then exercise once via `workflow_dispatch`**

```bash
git add .github/workflows/sync-data.yml
git commit -m "[claude] Daily data sync commits the refreshed seed"
```

After merging, trigger it manually from the Actions tab and confirm it either commits or cleanly no-ops.

---

## Task 18: Cleanup and documentation

**Files:**
- Delete: all 11 files in `.claude/agents/_archive/`
- Create: `.claude/skills/f1-ui/SKILL.md`
- Modify: `CLAUDE.md`, `README.md`

- [ ] **Step 1: Delete the archived agents**

```bash
git rm -r .claude/agents/_archive/
```

All 11 describe the retired Python pipeline and are still being registered as agent types. Git history retains them.

- [ ] **Step 2: Create the `f1-ui` skill**

`.claude/skills/f1-ui/SKILL.md` — replaces the deleted `design-f1-ui` and `enhance-ui` skills. It should be short and point outward rather than restating anything: read `DESIGN.md` for the visual system, `PRODUCT.md` for register and principles, note that `tokens.css` is the only file with raw values, that `scripts/check-tokens.mjs` must pass, and that sections live one-per-file under `dashboard/js/sections/`.

- [ ] **Step 3: Update `CLAUDE.md`**

Correct the agent inventory (11 archived agents removed), document the new `dashboard/` layout, and add a Change History row:

```
| 2026-08-02 | Dashboard refocus: 8-section narrative, DESIGN.md standard + token checker, GSAP/CSS motion, procedural 3D car, telemetry-traced track flythrough, daily data-sync workflow, 11 archived agents deleted | dashboard/ scripts/ .github/ .claude/ | Project had drifted from its purpose as a UI/UX + data-analysis portfolio piece |
```

- [ ] **Step 4: Update `README.md`**

Currently it documents only the retired Python pipeline and does not mention the Worker or the dashboard at all. Rewrite: what the project is, how to run the dashboard (`python -m http.server 4173 --directory dashboard`), how to regenerate data (`npm run seed`), and where the design standard lives.

- [ ] **Step 5: Announce on the bus**

Append to `_ai_bus/bus.md` — the dashboard was rebuilt wholesale, so gemini and glm must pull before touching anything under `dashboard/`.

- [ ] **Step 6: Commit**

```bash
git add -A .claude CLAUDE.md README.md _ai_bus/bus.md
git commit -m "[claude] Cleanup: drop 11 archived agents, add f1-ui skill, refresh docs"
```

---

## Task 19: Final verification pass

The spec's verification section, executed as one gate. Every check below must pass before this branch is considered done.

- [ ] **Step 1: Unit tests and the token checker**

```bash
node --test test/
node scripts/check-tokens.mjs
cd cloudflare/worker && npm test
```
Expected: all pass. Record the actual output; do not assert success without it.

- [ ] **Step 2: Clean-load browser pass**

Serve, then via Playwright MCP:
- Zero console errors
- All 8 sections present and visible
- Every Plotly node reports `clientWidth > 0` and at least one trace:

```js
[...document.querySelectorAll(".js-plotly-plot")].map((el) => ({
  id: el.id, width: el.clientWidth, traces: el.data?.length ?? 0,
}))
```
Expected: no entry with `width === 0` or `traces === 0`.

- [ ] **Step 3: Modal and keyboard pass**

Open the race modal and the driver modal; confirm each opens, that Escape closes it, and that focus reaches the close control by keyboard alone.

- [ ] **Step 4: Reduced-motion pass**

Re-run Step 2 with `prefers-reduced-motion: reduce` emulated. Expected: zero console errors, all 8 sections readable, both 3D mounts showing `[data-fallback]` with no `<canvas>`.

- [ ] **Step 5: WebGL-disabled pass**

Re-run with WebGL unavailable. Expected: zero console errors, Cold Open and race modal both showing static fallbacks, no section blank.

- [ ] **Step 6: 3D disposal pass**

Open and close the race modal 20 times, then check `renderer.info.memory.geometries` has returned to baseline. A rising count means `dispose()` is not wired to the modal's close callback.

- [ ] **Step 7: Responsive pass**

At 375px, 768px and 1440px: no horizontal body scroll, and no heading overflowing its container. Long circuit names at 375px are the likely failure.

- [ ] **Step 8: Report honestly and finish the branch**

Report each check with its actual output. If any failed, say so plainly rather than reporting completion. Then use `superpowers:finishing-a-development-branch` to decide integration.

---

## Self-Review

**Spec coverage:**

| Spec requirement | Task |
|---|---|
| 8-section arc, `years` + `news` deleted | 6–13, structure in 5 |
| Preserved: seed-first + freshness guard | 2 |
| Preserved: `PLOT_WHEN_VISIBLE` | 3, used in 10 + 11 |
| Preserved: progressive-enhancement hiding | 5 (`render` returns `false`) |
| Preserved: tyre strategy, driver modal, Leclerc correction | 10, 11 |
| Design standard + tokens | 1 |
| Motion: CSS scroll-driven + GSAP split | 4, 5, 15, 16 |
| Zero-build file layout | 5 |
| 3D Cold Open car | 15 |
| 3D track flythrough | 14 + 16 |
| Data auto-sync | 17 |
| Agent cleanup + `f1-ui` skill + docs | 18 |
| All 7 verification items | 19 |

**Known deviation from the spec:** the spec described the flythrough as tracing `track_layouts`. Those are remote raster `.webp` files and cannot be traced. Task 14 replaces that with OpenF1 telemetry tracing, verified working. Coverage is the 11 completed rounds; the remaining 11 circuits fall back to the flat layout image until raced. **The spec should be amended to match before execution begins.**

**Placeholder scan:** none. Every code step carries real code; every section task carries exact source line ranges to port from.

**Type consistency:** `render(data, root) -> boolean` is uniform across Tasks 6–13 and matches the `rendered === false` check in `main.js`. `createStage` returns `{scene, camera, renderer, dispose}` in Task 15 and is consumed with `.dispose` in Task 16. `normalise` returns `{points, length}` in Task 14 and is destructured as `{points, length}` in Task 16's `buildTrack`. `decimate`/`normalise` are exported for the test and used internally by the same module.
