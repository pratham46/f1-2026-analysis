---
name: f1-orchestrator
description: "Orchestrate the F1 2026 Cloudflare app: refresh live 2026 data, recompute predictions, scrape formula1.com (results/news/images/tracks), regenerate the dashboard seed, update the UI, and deploy to Cloudflare. Use for: run/refresh the pipeline, update predictions, update with live data, regenerate data.js, scrape results or news, fetch driver images or track layouts, push/merge data to the dashboard, redesign or enhance the UI, add game-like sections, deploy or host on Cloudflare, set up the Worker/Pages/cron, or any multi-stage request."
---

## Architecture (post-refactor)

The Python/XGBoost pipeline was replaced by a **Cloudflare Worker** (`cloudflare/worker/`) that
fetches live 2026 data, computes predictions in JS (model anchor + Monte Carlo), scrapes
formula1.com, and serves `/api/data`. The **dashboard** (`dashboard/`) is a static Pages site that
fetches that API with a committed `data.js` seed fallback. Predictions run on a **race-weekend**
cron (daily cron, self-gated in `scheduled()`).

**Agents (6, was 12):** `f1-worker` (data+predict+assemble), `f1-scraper` (results/news/media),
`f1-publish` (KV + seed regeneration), `f1-ui` (frontend), `f1-deploy` (Cloudflare + git),
`context-snapshot` (handoff). All spawn with `model: "opus"`. QA is an inline self-check inside
`f1-worker` (`npm test`) — there is no separate gate agent.

## Routing

- **"Run / refresh / update predictions / update with live data"** → f1-worker (assemble + `npm test`)
  → f1-publish (regenerate `dashboard/data.js` seed). Report champion, races_completed, sanity.
- **"Scrape results / news / driver images / track layouts"** → f1-scraper (edits `scrape.js`/`media.js`)
  → f1-worker re-assemble → f1-publish.
- **"Push data to dashboard / regenerate data.js / fix a data gap"** → f1-publish (`npm run seed`).
- **"Tyre / tire strategy, pit stops, stints, compound chips (all tracks)"** → f1-worker
  (OpenF1 enrichment in `assemble.js` + `sources.js`). See *OpenF1 enrichment* below.
- **"Redesign UI / add game sections / head-to-head / gauges / news section / driver modal / chatbot / animations"** → f1-ui.
- **"Update driver bio, nationality, lap records, chatbot intents"** → f1-ui (hardcoded maps in dashboard/index.html: DRIVER_BIO, DRIVER_NATIONALITY, CIRCUIT_LAP_RECORDS, pitWallAnswer).
- **"Deploy / host on Cloudflare / set up Worker, Pages, cron, KV"** → f1-deploy.
- **"Save / hand off context"** → context-snapshot.
- **Simple questions** (explain code, read a file) → answer directly, no agent.

## Default full refresh (sequential, lean)

1. **f1-worker** — run `assemble()` (live Jolpica + scrape) → predictions; `npm test` self-QA.
   Hard gate: champion parity, 20 drivers/10 constructors, prob sum ∈ [0.95,1.05], points ≤ 600,
   all harmony-contract keys present. If self-QA fails, stop and report.
2. **f1-publish** — `npm run seed` to refresh `dashboard/data.js` from the same `assemble()`.
3. (If UI work requested) **f1-ui**.
4. (If deploying) **f1-deploy** — `wrangler deploy` + Pages, exact commands (needs user CF login).

## Hard rules

- The **harmony contract** is law: `assemble()`, the KV payload, and `data.js` all carry the same
  keys the dashboard reads. Never let them drift.
- Every external fetch/scrape degrades gracefully — a source outage must never break `/api/data`.
- Don't fan out subagents for trivial work; prefer inline edits. Token efficiency matters.

## OpenF1 enrichment (tyre strategy + pit stops) — gotchas

The dashboard's per-race **TYRE STRATEGY** chart and the race-card compound dots read
`openf1_race_data[round]` (`{ session_key, stints, pit_stops }`), built from the OpenF1 API
(`/stints`, `/pit`) in `assemble.js` and keyed by `circuit_id`.

- **Enrich every completed race, not just recent ones.** `assemble.js` loops all `realRaces`,
  reuses cached rounds, and only fetches uncached ones (capped `MAX_FRESH_ENRICH` per run so a cold
  start can't blow the cron CPU budget — it backfills over a few runs and KV persists each).
- **OpenF1 `circuit_short_name` ≠ city name.** The feed says `"Monte Carlo"` (not "Monaco"),
  `"Catalunya"` (not "Barcelona"), `"Hungaroring"`, `"Madring"`, `"Interlagos"`, `"Yas Marina
  Circuit"`. A mismatch in `OPENF1_CIRCUIT_MAP` (`sources.js`) silently drops that round's
  enrichment. Verify against the live `/sessions` feed when adding circuits.
- **Seeding is flaky from a cold cache.** OpenF1 is slow under the Worker's short per-request
  timeout, so a single `assemble({lastGood:{}})` pass only captures a random subset. `npm run seed`
  therefore runs `gen-seed.mjs` **then** `scripts/enrich-openf1-seed.mjs` — a deterministic backfill
  (retries + 20 s timeouts) that fills **all** completed rounds into `data.js`. Use `npm run
  seed:base` for the bare assemble only.
- **Live refresh accumulates.** A deployed Worker also only manages ~2 fresh OpenF1 fetches per
  `/api/refresh` pass; POST it repeatedly (or wait for crons) to reach `enriched:Nraces` for all N.
- **Coverage guard on the client.** `fetchLiveData()` in `index.html` unions `openf1_race_data`
  per round when upgrading to live data, keeping the seed's entry whenever the live Worker lacks
  stints for a round — so a not-yet-backfilled Worker can't erase strategy data the seed ships.

## UI patterns (dashboard/index.html)

- **Charts inside modals must wait for real width.** A `display:none → flex` modal can report
  `clientWidth ≈ 0` for a few frames after opening; `Plotly.newPlot` then bakes bar/axis geometry at
  sub-pixel size and a later `resize` won't fix it. Use `PLOT_WHEN_VISIBLE(id, …)` (rAF-polls until
  `clientWidth > 20`) instead of `PLOT(...)` for any chart rendered on modal open.
- The **driver modal** (`#driver-modal`, `openDriverModal`) is the single driver detail surface —
  stat row, bio chips (from the `DRIVER_BIOS` constant; `championships` drives the TITLES chip),
  2026-form chips, career-points bar chart (`dm-career-chart`), recent results. The old always-on
  "TELEMETRY FILE" explorer panel + `selectDriver()` were removed as redundant.

## Workspace map

| Path | Purpose |
|------|---------|
| `cloudflare/worker/src/seed.js` | Frozen 2020–2025 history + 2026 grid + model anchor |
| `cloudflare/worker/src/{sources,scrape,media,predict,assemble,index}.js` | Worker pipeline |
| `cloudflare/worker/wrangler.toml` | KV binding + race-weekend cron |
| `cloudflare/worker/scripts/gen-seed.mjs` | Regenerates `dashboard/data.js` (assemble pass) |
| `cloudflare/worker/scripts/enrich-openf1-seed.mjs` | Deterministic OpenF1 tyre/pit backfill for all rounds (chained after gen-seed in `npm run seed`) |
| `dashboard/index.html` | Static dashboard (fetches `/api/data`, News section, tyre strategy, driver/race modals) |
| `dashboard/{config.js,data.js,_redirects}` | Worker URL, offline seed, Pages API proxy |
| `cloudflare/README.md` | Deploy guide |

> Legacy Python pipeline (`src/`) and the 11 archived agents (`.claude/agents/_archive/`) are kept
> for reference/offline seeding but are no longer the live path.
