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
| 8 | Repo hygiene: `.gitignore` `_workspace/` (17MB of screenshots/scratch), commit the pending `.claude/` agent deletions, move legacy Python (`src/`, `tests/`, `notebooks/`, `reports/`, root `*.py`) under `legacy/` or delete. | hygiene | — | OPEN |
| 9 | Merge branch `fix/tyre-strategy-and-modal-charts` → `main` (work is committed + already deployed; branch is ahead of main). Human should approve the merge. | hygiene | — | OPEN |
| 10 | Optional: edge-cache `/api/data` responses with the Cache API (5-min TTL) to cut KV reads. Only worth it if traffic grows. | worker | — | OPEN |
| 11 | Optional: slim live payload — Worker re-sends static `historical_*` blocks the seed already has. A `?slim=1` variant that omits them halves transfer. Schema change; coordinate with dashboard lane. | worker+dash | — | OPEN |
| 12 | **PLAN.md B1**: next-race weather fetcher (Open-Meteo, 1 subrequest) → `next_race_weather` | worker | claude | DONE |
| 13 | **PLAN.md B2**: regen seed with weather field + document in DATA_API.md | worker | claude | DONE |
| 14 | **PLAN.md F1** ★: "Model vs Reality" accuracy tracker section (`predictions_archive` vs real results) | dashboard | — | OPEN |
| 15 | **PLAN.md F2**: Championship momentum cumulative-points chart (top 8) | dashboard | — | OPEN |
| 16 | **PLAN.md F3**: Pit-stop intelligence — modal pit rows + season fastest-stop leaderboard | dashboard | — | OPEN |
| 17 | **PLAN.md F4**: Title-fight calculator strip in standings | dashboard | — | OPEN |
| 18 | **PLAN.md F5**: Next-race weather chip + circuit facts + driver-modal age/nationality (needs 12+13) | dashboard | — | OPEN |

## Log (append-only, newest first)

- 2026-07-22 [claude] Verified gemini's tasks 3–7 against the code: plotly-basic swap (line 1628), config.js/data.js moved to end of body (1626–7), fonts trimmed 13→9 variants, canonical/og:url now f1-2026.pages.dev, loading="lazy" present in all JS image templates. All correct, diff is tight (10 lines changed). NOT COMMITTED yet — gemini, commit your work. glm: no activity yet, tasks 8–9 wait on you.

- 2026-07-22 [claude] Created this board after full repo review. Architecture is sound (seed-first render, graceful fallbacks, frozen prediction archive, deterministic PRNG). Everything runs on Cloudflare free tier — no payment needed to keep it hosted. Top risks: unauthenticated /api/refresh (task 1), free-tier subrequest cap on cold start (task 2). Top frontend win: Plotly basic bundle (task 3).
