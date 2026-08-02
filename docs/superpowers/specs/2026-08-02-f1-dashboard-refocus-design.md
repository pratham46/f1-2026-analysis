# F1 2026 Dashboard — Refocus Design

**Date:** 2026-08-02
**Status:** Approved (design), pending implementation plan

## Problem

The project drifted from its purpose. It was meant to be a portfolio piece showing four
things at once: UI/UX craft, data analysis, agentic/vibe coding, and a genuine love of F1.
Instead it accumulated:

- `dashboard/index.html` — 3,624 lines / 195 KB with all CSS, all JS, and all 15 sections
  inline in a single file. Unmaintainable and unreadable.
- 15 sections with overlapping jobs (`standings` vs `gauges`, `timeline` vs `calendar`,
  `drivers` vs `teams`, `momentum` vs `history`). No narrative order.
- No design standard. Colours, spacing and motion values are hardcoded per-section, so
  every new section drifts further from the last.
- 11 retired agents in `.claude/agents/_archive/` still registered, all describing the
  dead Python pipeline.
- The committed `dashboard/data.js` seed only refreshes when a human runs `npm run seed`.
  The Cloudflare Worker cron writes to KV, never to the repo.

## Goals

1. A dashboard that reads as a **cinematic scroll narrative** — a story about the 2026
   season, not a grid of panels.
2. A **design standard** (tokens + written rules) that every section is built from, so
   the interface stays coherent as it grows.
3. **Motion that carries meaning**, not decoration.
4. **Zero-build** static output — opens with no install step, deploys anywhere.
5. Data that **auto-syncs into the repo** without any hosting.

## Non-Goals

- Live hosting. Cloudflare deploy config stays in the repo and keeps working, but nothing
  in this work depends on it. The deliverable is a local static site good enough to record.
- Rewriting the Worker's prediction logic, scrapers, or data schema. `assemble()` and the
  `window.F1_DATA` contract are stable and stay as-is.
- Migrating off Plotly, or introducing a bundler/framework. Three.js and GSAP arrive as
  CDN ES modules via an import map, which keeps the zero-build rule intact.
- Touching `legacy/` (retired Python pipeline).

## Design

### 1. Narrative arc — 15 sections become 8

The page tells a story: *here's where the season stands → here's who's fighting for it →
here's how the model did → here's how we got here → here's the grid → here's the trend →
here's why 2026 is different.*

| # | Section | id | Built from | Purpose |
|---|---------|-----|-----------|---------|
| 1 | Cold Open | `open` | `podium` + existing hero | Full-bleed, with a scroll-scrubbed **3D car** (§3b) in the champion's team livery. The season's headline number: projected champion, title probability, rounds elapsed. The video's first five seconds. |
| 2 | The Title Fight | `title-fight` | `standings` + `gauges` | Championship table where each row carries its own win-probability. Two panels showing the same data become one. |
| 3 | Head-to-Head | `h2h` | `battle` | Pick any two drivers; animated stat duel. The interactive showpiece. |
| 4 | Model vs Reality | `accuracy` | `accuracy` | Per-round hit/miss on the prediction, running accuracy score, MAE. The analysis-credibility section. |
| 5 | The Season So Far | `season` | `timeline` + `calendar` | Round-by-round timeline; click a round for the result modal (podium, fastest lap, tyre strategy, **3D track flythrough** §3b). Completed and upcoming rounds in one rail. |
| 6 | The Grid | `grid` | `drivers` + `teams` | 22 drivers grouped under 11 teams, with car renders and constructor bars. Driver modal (bio, career chart, form) preserved. |
| 7 | Form & Momentum | `momentum` | `momentum` + `history` | Rolling form over 2026 plus multi-season context in one chart with a season toggle. |
| 8 | What 2026 Changed | `regs` | `regs` | Regulation-reset impact. The angle no other F1 dashboard has. |

**Deleted:** `years` (generic year-explorer; its multi-season content is absorbed by
§7), `news` as a section (the PIT WALL ticker keeps the headlines and does it better).

**Preserved behaviours** — these are existing fixes that must survive the rebuild:
- Seed-first paint, then background `/api/data` upgrade gated on `generated_at` /
  `races_completed_2026` so a stale KV cannot clobber the committed seed (`config.js`).
- `PLOT_WHEN_VISIBLE` width-gating for charts inside modals (a `newPlot` at width≈0
  crushes bars against the axis).
- Progressive-enhancement guards: sections whose data is absent stay hidden rather than
  rendering empty (currently `accuracy` and `momentum`).
- Driver-modal career chart, tyre-strategy stint rendering, coverage-merge guard.

### 2. Design standard

Produced with the `impeccable` skill. **`DESIGN.md` at the repo root is the authority** —
it is not summarised here, to avoid two drifting copies. `dashboard/css/tokens.css`
implements it and is the only file allowed to contain raw values.

The decisions in DESIGN.md that change this spec's assumptions:

- **The palette breaks the category reflex.** The surface ramp is chroma 0 — genuinely
  achromatic, no tinted neutral — because the 11 team liveries have to read true and any
  cast would misrepresent colours we do not own. All chroma on the page is data-bearing.
- **`#e10600` "F1 red" is deleted.** A generic brand red competing with Ferrari's actual
  red was always a conflict. Ferrari red now means Ferrari.
- **The contrast hazards are the dark liveries, not the bright ones** — Ferrari `#E8002D`,
  Red Bull `#3671C6`, Aston Martin `#358C75` — each needing a lightened `-txt` variant.
- **Semantic state is carried by lightness and form, never hue.** The liveries occupy most
  of the hue wheel, so there is no free "good/bad" colour that does not collide with a
  team. Hit/miss and gain/loss use filled/hollow marks and ▲/▼.
- **Type changes:** Chakra Petch → **Archivo Expanded** (display) with **Archivo** as body,
  one family with committed width/weight contrast; Share Tech Mono → **Chivo Mono** for
  tabular timing figures. Titillium Web is dropped.

### 3. Motion system

Guided by the `motion-design` skill. Governing rule: **motion carries meaning or it
doesn't ship.** Position changes, probability shifts, and value updates animate; nothing
animates purely to decorate.

- Duration/easing tokens in `tokens.css`: `--dur-fast` (120ms, state feedback),
  `--dur-base` (240ms, transitions), `--dur-slow` (480ms, reveals), `--dur-cinematic`
  (900ms, hero); easing tokens for entrance, exit, and spring-ish emphasis.
- Two-tier scroll system, replacing the per-section `.rv` logic scattered through
  `index.html` today:
  - **Native CSS scroll-driven animations** (`animation-timeline: view()` / `scroll()`)
    for simple reveals, the progress bar, and parallax. Zero JS, runs off the compositor.
  - **GSAP ScrollTrigger** (CDN, via the `gsap-scrolltrigger` skill) only for pinned
    sections and scrubbed timelines — the Cold Open car and the track flythrough. Pinning
    and scrubbing are the two things native CSS cannot do well.
  - `js/lib/motion.js` owns the GSAP setup and an `IntersectionObserver` fallback that
    applies the reveal end-state directly in browsers without scroll-driven CSS. No
    section is ever left invisible because an animation did not run.
- Count-ups on all headline numbers, driven from the same module.
- Chart draw-on animations on first visibility only, never on re-render.
- The Encore work survives and moves into `js/lib/motion.js`: scroll-progress race bar,
  scroll-driven side-rail cars, staggered section reveals — rebuilt on tokens instead of
  hardcoded values.
- `@media (prefers-reduced-motion: reduce)` disables transforms and count-ups globally;
  content must be fully readable with all motion off.

### 3b. 3D

Three.js via CDN + an ES module import map — no bundler, so the zero-build rule holds.
Both 3D features are **progressive enhancements**: each renders into its own container,
and if WebGL is unavailable, the module fails to load, or `prefers-reduced-motion` is set,
the container is replaced by a static fallback and the surrounding section is unaffected.

**Cold Open — scroll-scrubbed car.** A low-poly stylised open-wheel car built
**procedurally in Three.js** from primitives (no external model file). This is deliberate:
a real 2026 F1 car model is a licensing problem, the procedural car is coloured live from
the champion's team token, it matches the existing SVG side-rail cars visually, and it
adds no asset download. GSAP ScrollTrigger scrubs camera position and car rotation across
the pinned hero. Static fallback: the existing hero composition, unchanged.

**The Season So Far — track flythrough.** Circuit outlines already in `track_layouts` are
traced into a `CatmullRomCurve3`, extruded into a ribbon, and a camera flies along the
curve when a round is opened. No model licensing, no new data — it reuses assets already
in the payload. Rendered inside the race modal, mounted on open and disposed on close.
Static fallback: the existing flat track-layout image.

**Shared constraints:** one `WebGLRenderer` per feature, both created lazily on first
visibility and disposed when the section leaves the viewport or the modal closes;
`powerPreference: "low-power"`; capped at `devicePixelRatio` 2; render loop paused via
`IntersectionObserver` when off-screen. GPU memory leaks across repeated modal opens are
the failure mode to watch, so disposal is explicit, not garbage-collected.

### 4. File layout — zero-build

No bundler, no `npm install` to view. `index.html` loads ES modules directly.

```
dashboard/
  index.html            ~250 lines — semantic structure only, no inline CSS or JS
  config.js             unchanged (Worker URL)
  data.js               unchanged (generated seed)
  css/
    tokens.css          the design standard — only file with raw values
    base.css            reset, typography, layout primitives, nav, ticker, modal shell
    sections/
      open.css  title-fight.css  h2h.css  accuracy.css
      season.css  grid.css  momentum.css  regs.css
  js/
    main.js             boot: load data, seed-first paint, live upgrade, wire sections
    lib/
      data.js           F1_DATA access, live-fetch + freshness guard, formatting helpers
      charts.js         Plotly wrapper: token→literal colour resolution, PLOT_WHEN_VISIBLE
      motion.js         GSAP/ScrollTrigger setup, reveal fallback, count-ups, rails
      modal.js          shared modal shell (driver modal + race modal)
      three/
        stage.js        renderer/scene/camera factory + lifecycle (lazy init, dispose)
        car.js          procedural low-poly car, team-coloured  (Cold Open)
        track.js        track_layouts → CatmullRomCurve3 ribbon (Season flythrough)
    sections/
      open.js  title-fight.js  h2h.js  accuracy.js
      season.js  grid.js  momentum.js  regs.js
```

Each `js/sections/*.js` exports a single `render(data, root)` and owns exactly one
section. It may import from `js/lib/*` and nothing else — no section imports another
section. This is the boundary that keeps the file from re-growing into a monolith.

### 5. Data auto-sync

`.github/workflows/sync-data.yml`:
- Daily cron plus `workflow_dispatch`.
- Node 22, `npm ci` in `cloudflare/worker`, `npm test`, `npm run seed`.
- Commits `dashboard/data.js` **only if it changed**; no-op otherwise so history stays
  clean during the summer break.
- Independent of Cloudflare — needs no secrets, works whether or not anything is deployed.

`deploy.yml` is untouched. The Worker's own race-weekend cron is left in place and still
correct — the perceived "cron not working" was the summer break (no rounds between
2026-07-26 and 2026-08-23), not a defect.

### 6. Cleanup

- Delete all 11 files in `.claude/agents/_archive/`. All are registered agent definitions
  describing the retired Python pipeline; git history retains them.
- Add `.claude/skills/f1-ui/SKILL.md` — a project skill that points at `docs/DESIGN.md`
  and the token file, replacing the deleted `design-f1-ui` / `enhance-ui` skills.
- Update `CLAUDE.md`: agent inventory, dashboard file layout, change-history row.

## Verification

Zero-build means no test framework here; verification is direct and runnable:

1. `cd cloudflare/worker && npm test` — existing parity/harmony suite must stay green
   (the data contract is unchanged, so it must).
2. `node scripts/check-tokens.mjs` (new, repo root) — asserts no raw hex or `px` values in
   `dashboard/css/sections/*.css` or `base.css`, and computes contrast from the OKLCH
   token values to confirm every ink/surface pairing and every team `-txt` variant clears
   its WCAG threshold. Exits non-zero on any failure. Without it the design standard is a
   suggestion, not a standard.
3. Playwright pass over the local static site: zero console errors, all 8 sections
   present, every Plotly chart reports non-zero width and at least one trace, modals open
   and close, keyboard focus reaches the modal close button.
4. Same pass with `prefers-reduced-motion: reduce` forced — content still fully readable,
   both 3D features replaced by their static fallbacks.
5. Playwright pass with WebGL disabled — no console errors, Cold Open and race modal both
   render their fallbacks, no section left blank.
6. Open and close the race modal 20 times, asserting `renderer.info.memory.geometries`
   returns to baseline — the disposal path is the one piece of 3D logic that fails
   silently and cumulatively.
7. `sync-data.yml` exercised via `workflow_dispatch` once, confirming it either commits a
   changed `data.js` or cleanly no-ops.

## Risks

| Risk | Mitigation |
|------|-----------|
| Rebuilding 3,624 lines silently drops a working behaviour (tyre strategy, freshness guard, `PLOT_WHEN_VISIBLE`) | The "Preserved behaviours" list in §1 is a checklist; the Playwright pass covers each one |
| Plotly colour regression — `var(--token)` strings do not resolve and charts render invisible | `js/lib/charts.js` is the single place that resolves tokens to literals; no section calls Plotly directly |
| Section merges (§2, §5, §6) lose data that only the removed section displayed | Each merge is specified as a superset of both sources, not a replacement |
| Zero-build ES modules require a local server (`file://` blocks module imports) | Document `npx serve dashboard` in README; this already matches how the site is developed |
| Other AIs (gemini/glm) edit `dashboard/index.html` mid-rebuild | Announce the rebuild on `_ai_bus/bus.md` and claim the dashboard lane before starting |
| 3D tanks performance on low-end machines and the recording stutters | Lazy init on visibility, paused render loop off-screen, DPR cap, low-power hint; both features degrade to static fallbacks rather than running badly |
| WebGL context leaks across repeated race-modal opens until the browser drops contexts | Explicit disposal on modal close, asserted by the 20-open geometry-count check in Verification |
| Three.js + GSAP CDN payload slows first paint | Both loaded as deferred ES modules after first paint; the seed-first render does not wait on either |
| Procedural car looks cheap rather than stylised | It is the one purely aesthetic risk here. If it does not look good, the fallback is the existing hero — the section works without it |

## Out of scope for this spec

Live redeploy to Cloudflare Pages/Workers. Everything here is verified locally; deploying
is a separate, optional step the user may take later.
