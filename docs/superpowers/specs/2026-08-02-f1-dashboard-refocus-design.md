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
- Migrating off Plotly, or introducing a bundler/framework.
- Touching `legacy/` (retired Python pipeline).

## Design

### 1. Narrative arc — 15 sections become 8

The page tells a story: *here's where the season stands → here's who's fighting for it →
here's how the model did → here's how we got here → here's the grid → here's the trend →
here's why 2026 is different.*

| # | Section | id | Built from | Purpose |
|---|---------|-----|-----------|---------|
| 1 | Cold Open | `open` | `podium` + existing hero | Full-bleed. The season's headline number: projected champion, title probability, rounds elapsed. The video's first five seconds. |
| 2 | The Title Fight | `title-fight` | `standings` + `gauges` | Championship table where each row carries its own win-probability. Two panels showing the same data become one. |
| 3 | Head-to-Head | `h2h` | `battle` | Pick any two drivers; animated stat duel. The interactive showpiece. |
| 4 | Model vs Reality | `accuracy` | `accuracy` | Per-round hit/miss on the prediction, running accuracy score, MAE. The analysis-credibility section. |
| 5 | The Season So Far | `season` | `timeline` + `calendar` | Round-by-round timeline; click a round for the result modal (podium, fastest lap, tyre strategy, track layout). Completed and upcoming rounds in one rail. |
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

Produced with the `impeccable` skill. Two artefacts:

**`dashboard/css/tokens.css`** — the only file allowed to contain raw values:
- **Colour:** surface ramp (dark base, 4 elevations), text ramp (primary/secondary/muted),
  the 11 official team colours plus an accessible-on-dark variant of each (several 2026
  team colours — Haas `#B6BABD`, Audi `#00E701`, Mercedes `#27F4D2` — fail contrast as
  text on dark and need a paired variant), semantic accents (hit/miss, gain/loss, live).
- **Type:** existing families kept (Chakra Petch display, Titillium Web body, Share Tech
  Mono numerics) but reduced to a fixed modular scale. Tabular numerals mandatory on all
  data.
- **Space:** one 4px-based scale. No arbitrary margins.
- **Elevation, radius, border** ramps.
- **Motion:** duration and easing tokens (see §3).

**`docs/DESIGN.md`** — the written standard: when to use each token, the chart style
contract (every Plotly chart must resolve colours from tokens via JS — Plotly cannot
resolve `var(--x)` strings, a bug that already shipped once and made the accuracy chart
invisible), section anatomy, accessibility floor (WCAG AA on all text, visible focus
rings, keyboard-reachable modals, `prefers-reduced-motion`), and the rule that no section
CSS may contain a raw hex or px value outside the token file.

### 3. Motion system

Guided by the `motion-design` skill. Governing rule: **motion carries meaning or it
doesn't ship.** Position changes, probability shifts, and value updates animate; nothing
animates purely to decorate.

- Duration/easing tokens in `tokens.css`: `--dur-fast` (120ms, state feedback),
  `--dur-base` (240ms, transitions), `--dur-slow` (480ms, reveals), `--dur-cinematic`
  (900ms, hero); easing tokens for entrance, exit, and spring-ish emphasis.
- Scroll reveals via a single shared `IntersectionObserver` in `js/lib/motion.js` —
  replaces the per-section `.rv` logic currently scattered through `index.html`.
- Count-ups on all headline numbers, driven from the same module.
- Chart draw-on animations on first visibility only, never on re-render.
- The Encore work survives and moves into `js/lib/motion.js`: scroll-progress race bar,
  scroll-driven side-rail cars, staggered section reveals — rebuilt on tokens instead of
  hardcoded values.
- `@media (prefers-reduced-motion: reduce)` disables transforms and count-ups globally;
  content must be fully readable with all motion off.

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
      motion.js         IntersectionObserver reveals, count-ups, scroll progress, rails
      modal.js          shared modal shell (driver modal + race modal)
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
2. `node scripts/check-tokens.mjs` (new, repo root) — asserts no raw hex or `px` values
   appear in `dashboard/css/sections/*.css` or `dashboard/css/base.css`, exiting non-zero
   if any do. Without it the design standard is a suggestion, not a standard.
3. Playwright pass over the local static site: zero console errors, all 8 sections
   present, every Plotly chart reports non-zero width and at least one trace, modals open
   and close, keyboard focus reaches the modal close button.
4. Same pass with `prefers-reduced-motion: reduce` forced — content still fully readable.
5. `sync-data.yml` exercised via `workflow_dispatch` once, confirming it either commits a
   changed `data.js` or cleanly no-ops.

## Risks

| Risk | Mitigation |
|------|-----------|
| Rebuilding 3,624 lines silently drops a working behaviour (tyre strategy, freshness guard, `PLOT_WHEN_VISIBLE`) | The "Preserved behaviours" list in §1 is a checklist; the Playwright pass covers each one |
| Plotly colour regression — `var(--token)` strings do not resolve and charts render invisible | `js/lib/charts.js` is the single place that resolves tokens to literals; no section calls Plotly directly |
| Section merges (§2, §5, §6) lose data that only the removed section displayed | Each merge is specified as a superset of both sources, not a replacement |
| Zero-build ES modules require a local server (`file://` blocks module imports) | Document `npx serve dashboard` in README; this already matches how the site is developed |
| Other AIs (gemini/glm) edit `dashboard/index.html` mid-rebuild | Announce the rebuild on `_ai_bus/bus.md` and claim the dashboard lane before starting |

## Out of scope for this spec

Live redeploy to Cloudflare Pages/Workers. Everything here is verified locally; deploying
is a separate, optional step the user may take later.
