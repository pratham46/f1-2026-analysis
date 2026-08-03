# AI Collaboration Board

Three AI agents (Claude Fable 5, GLM-5.2, Gemini) work on this repo, possibly at the same time.
There is no live channel between us — **this file is the channel.** Read it first, write to it last.

## Rules (all agents)

1. **Claim before you touch.** Edit the task table below: put your name in `Owner` and set `Status: CLAIMED` in one commit BEFORE changing code. If a task is already claimed, pick another.
2. **Stay in your lane.** All three sessions share one working directory. Never edit a file outside your assigned area while another agent may be running. Lanes:
   - **Claude** → `cloudflare/worker/` (backend)
   - **Gemini** → `dashboard/` (frontend)
   - **GLM-5.2** → repo hygiene, tests, docs (everything else)
3. **Commit small, commit often**, message prefix `[claude]`, `[glm]`, or `[gemini]`.
4. **Log what you did** in the Log section (append-only, newest on top).
5. Budget: $0. Cloudflare free tier only (Workers 100k req/day, 10ms CPU, 50 subrequests/invocation, KV 1k writes/day). No paid APIs, no new hosted services, no build steps that need CI minutes we don't have.
6. Don't deploy (`wrangler deploy` / Pages) unless the human asks. Run `npm test` in `cloudflare/worker/` before committing worker changes.

## Message bus (auto-communication)

`_ai_bus/bus.md` is the live channel — append-only, one line per message:

```
[YYYY-MM-DD HH:MM] <sender> → <recipient|all>: <message>
```

- **Read** the last ~20 lines at the start of every task; act on messages addressed to you or `all`.
- **Write** a line when you claim a task, finish one, get blocked, or need another agent:
  `echo "[2026-07-22 17:00] glm → gemini: task 8 moved dashboard/../legacy, update your paths" >> _ai_bus/bus.md`
- Never edit or delete existing lines. If the file grows past ~200 lines, the human may archive it.
- Delivery: Claude Code sessions get the bus injected automatically via a UserPromptSubmit hook (`.claude/settings.json`); Gemini reads it per `GEMINI.md`; GLM per `AGENTS.md`.

## Task board

| # | Task | Area | Owner | Status |
|---|------|------|-------|--------|
| 1 | Protect `POST /api/refresh` with a token (`env.REFRESH_TOKEN` via wrangler secret; 401 without it). Unauthed spam can burn the 1k/day KV write quota. | worker | claude | DONE |
| 2 | Subrequest budget: cold-start `assemble()` can approach the free-tier 50-subrequest cap (6 Jolpica backfills + OpenF1 sessions + 12×2 enrich + news/bios/circuits). Add a shared counter, stop fetching at ~40. | worker | claude | DONE |
| 3 | Swap `plotly-2.27.0.min.js` → `plotly-basic-2.27.0.min.js` (only bar/pie/scatter are used; ~70% smaller download). One-line change + verify all charts render. | dashboard | gemini | DONE |
| 4 | Move `<script src="config.js">` and `<script src="data.js">` from `<head>` to just before the Plotly script at end of `<body>` (they render-block ~207KB now; the inline app script runs after them either way). | dashboard | gemini | DONE |
| 5 | Trim Google Fonts to weights actually used (13 variants loaded across 3 families — audit CSS, keep ~5). | dashboard | gemini | DONE |
| 6 | Fix canonical/og:url: index.html says `f1-2026-analysis.pages.dev`, CLAUDE.md says live site is `f1-2026.pages.dev`. Verify the real Pages URL, make them match. | dashboard | gemini | DONE |
| 7 | Add `loading="lazy"` to below-the-fold `<img>`s (driver grid = 22 hotlinked photos; only 8 imgs have it). | dashboard | gemini | DONE |
| 8 | Repo hygiene: `.gitignore` `_workspace/` (17MB of screenshots/scratch), commit the pending `.claude/` agent deletions, move legacy Python (`src/`, `tests/`, `notebooks/`, `reports/`, root `*.py`) under `legacy/` or delete. | hygiene | glm+claude | DONE |
| 9 | Merge to `main` and ship. Closed by merging `feat/dashboard-refocus` (53 commits, which already contained the `fix/tyre-strategy` work) → `main` → deployed. | hygiene | claude | DONE |
| 10 | Optional: edge-cache `/api/data` responses with the Cache API (5-min TTL) to cut KV reads. Only worth it if traffic grows. | worker | claude | DONE |
| 11 | Optional: slim live payload — Worker re-sends static `historical_*` blocks the seed already has. A `?slim=1` variant that omits them halves transfer. Schema change; coordinate with dashboard lane. | worker+dash | claude | DONE |
| 12 | **PLAN.md B1**: next-race weather fetcher (Open-Meteo, 1 subrequest) → `next_race_weather` | worker | claude | DONE |
| 13 | **PLAN.md B2**: regen seed with weather field + document in DATA_API.md | worker | claude | DONE |
| 14 | **PLAN.md F1** ★: "Model vs Reality" accuracy tracker section (`predictions_archive` vs real results) | dashboard | gemini | DONE |
| 15 | **PLAN.md F2**: Championship momentum cumulative-points chart (top 8) | dashboard | gemini | DONE |
| 16 | **PLAN.md F3**: Pit-stop intelligence — modal pit rows + season fastest-stop leaderboard | dashboard | gemini | DONE |
| 17 | **PLAN.md F4**: Title-fight calculator strip in standings | dashboard | gemini | DONE |
| 18 | **PLAN.md F5**: Next-race weather chip + circuit facts + driver-modal age/nationality (needs 12+13) | dashboard | gemini | DONE |
| 19 | **PLAN.md M1** (The Encore): real scroll-progress race bar — repurpose `#telemetry-bar` to fill with actual scroll %, checkered flag past ~90% | dashboard | gemini | DONE |
| 20 | **PLAN.md M2** (The Encore): punchier section reveals — stagger `.rv` children, `countUp()` helper on key stats | dashboard | gemini | DONE |
| 21 | **PLAN.md M3** (The Encore): scroll-racing side rails — inline-SVG top-down cars in fixed side lanes, position driven by M1's scroll % with per-car speed/phase offsets | dashboard | gemini | DONE |

## Log (append-only, newest first)

- 2026-07-22 [claude] "The Encore" motion pass added to PLAN.md (board tasks 19–21, M1–M3), brainstormed with the human: real scroll-progress bar, staggered/count-up section reveals, and scroll-driven top-down car side-rails. Human explicitly chose "I write a spec, gemini implements" — I have NOT touched dashboard/index.html for this pass. Order: M1 → M3 (shares scroll-percent plumbing) → M2 (independent). Read PLAN.md's new "The Encore" section before starting — it names exact existing hooks to reuse (`#telemetry-bar`, `initReveal()`/`.rv`, the driver-color-hex convention) so this doesn't collide with F1–F5 code already in place.

- 2026-07-22 [claude] CROSS-LANE BUG FIX (dashboard/index.html, commit bfad342): tasks 14/15/17 + the F3 season-pit leaderboard were silently broken since commit — all four functions read `F1.data.X` but `F1` is a flat object (`F1 = window.F1_DATA || {}`), so `F1.data` is always undefined. Caught by running the page in headless Chromium (not by code review, not by npm test — neither exercises the dashboard JS) and confirmed live by the human on localhost. Worse than 4 dark features: F4's code sits at the top of `renderStandings()` sharing its try/catch with the table-population code below, so the crash also zeroed the pre-existing Championship Standings table (22→0 rows) — a regression, not just new work failing. Fixed all 9 references (`F1.data.X` → `F1.X`); verified zero console errors post-fix, standings 22/22 rows, accuracy/momentum sections visible, pit leaderboard populated. Gemini/glm: if you're mid-edit on index.html, pull this before continuing — don't reintroduce `F1.data`.

- 2026-07-22 [claude] Task 11 DONE: `/api/data?slim=1` returns a shallow copy of the payload with historical_driver_points, historical_constructor_points, historical_driver_teams, driver_names, driver_rolling_form deleted. Default (no param) response unchanged — opt-in only, dashboard doesn't call it yet. Documented in DATA_API.md's endpoint table. npm test green, 32/40 subrequests.

- 2026-07-22 [claude] Task 10 DONE: GET /api/data and /api/news now check `caches.default.match(request)` first; on miss, build the response as before and `ctx.waitUntil(caches.default.put(request, response.clone()))`. Existing `Cache-Control: public, max-age=300` header sets the edge TTL unchanged. /api/health and /api/refresh untouched (not cacheable — refresh is POST-only and no-store already). npm test green, 32/40 subrequests.

- 2026-07-22 [claude] Verified gemini's tasks 3–7 against the code: plotly-basic swap (line 1628), config.js/data.js moved to end of body (1626–7), fonts trimmed 13→9 variants, canonical/og:url now f1-2026.pages.dev, loading="lazy" present in all JS image templates. All correct, diff is tight (10 lines changed). NOT COMMITTED yet — gemini, commit your work. glm: no activity yet, tasks 8–9 wait on you.

- 2026-07-22 [claude] Created this board after full repo review. Architecture is sound (seed-first render, graceful fallbacks, frozen prediction archive, deterministic PRNG). Everything runs on Cloudflare free tier — no payment needed to keep it hosted. Top risks: unauthenticated /api/refresh (task 1), free-tier subrequest cap on cold start (task 2). Top frontend win: Plotly basic bundle (task 3).
