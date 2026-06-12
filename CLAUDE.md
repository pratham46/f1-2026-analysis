# F1 2026 Analysis — Project Guide

## Harness: F1 2026 Cloudflare App

**Goal:** Cloudflare Worker fetches live 2026 data + scrapes formula1.com → computes predictions in JS (frozen XGBoost anchor + Monte Carlo) → serves `/api/data` → static Pages dashboard renders it, with a committed `data.js` seed as offline fallback. Auto-refreshes on a race-weekend cron.

**Trigger:** For any pipeline/UI/deploy task — refreshing live data, updating predictions, scraping results/news/media, regenerating the dashboard seed, enhancing the UI, or deploying to Cloudflare — use the `f1-orchestrator` skill. Simple questions (explaining code, reading a file) can be answered directly.

**Live entry point:** the Cloudflare Worker at `cloudflare/worker/` (`npm test`, `npm run dev`, `wrangler deploy`). `scheduled()` runs daily and self-gates to race weekends. `npm run seed` regenerates `dashboard/data.js`.

**Legacy (offline only):** the Python pipeline (`python src/data/pipeline.py`) and 11 archived agents (`.claude/agents/_archive/`) are kept for reference/offline seeding but are no longer the live path.

**Active agents (6):** `f1-worker`, `f1-scraper`, `f1-publish`, `f1-ui`, `f1-deploy`, `context-snapshot`.

**Change History:**
| Date | Change | Target | Reason |
|------|--------|--------|--------|
| 2026-06-07 | Initial harness build | All | Multi-agent pipeline with QA gates and live monitoring |
| 2026-06-07 | Added media-fetcher + ui-enhancer agents | agents/ | Driver images, track layouts, year explorer, next-race widget |
| 2026-06-07 | Added fetch-media + enhance-ui skills | skills/ | Media asset fetching and UI enhancement patterns |
| 2026-06-07 | Added src/data/enrich_dashboard.py | pipeline | Enriches data.js with media + next_race + season_summary |
| 2026-06-07 | Dashboard UI: 6 new sections | dashboard/index.html | Next race widget, driver grid, year explorer, track layouts in race cards |
| 2026-06-07 | Added f1-results-scraper agent + scrape-f1-results skill | agents/ skills/ | Scrape live results + news from official formula1.com |
| 2026-06-07 | Added f1-media-scraper agent + scrape-f1-official-media skill | agents/ skills/ | Official F1 driver images (f1.com) + track layouts (media.formula1.com CDN) |
| 2026-06-07 | Updated f1-orchestrator: Phase 6a/6b + new trigger keywords | skills/f1-orchestrator | Route official F1 scraping requests to new agents |
| 2026-06-08 | Added data-publisher agent + publish-dashboard-data skill | agents/ skills/ | Merges predictions + scraped + media enrichments atomically; fixes pipeline re-run wiping driver images |
| 2026-06-08 | Added ui-designer agent + design-f1-ui skill | agents/ skills/ | Game-like F1 dashboard: podium hero, speedometer gauges, head-to-head battle panel, race timeline, constructor war bars |
| 2026-06-08 | Updated f1-orchestrator: Phase 7 (data-publisher) + Phase 8 (ui-designer) | skills/f1-orchestrator | Route merge/publish and UI redesign requests to new agents |
| 2026-06-08 | Added context-snapshot agent + capture-context skill | agents/ skills/ | Portable session handoff file — paste into any AI to resume work |
| 2026-06-12 | Real-season data refresh: 22-round calendar (Bahrain+Saudi cancelled), 22-driver/11-team grid (Cadillac, Audi), real race results + team_cars in payload, news scraper fixed | worker src/ tests | Predictions now match live 2026 reality (champion Antonelli 99.8%) |
| 2026-06-12 | Racing-theme dashboard rebuild ("Race Control") + car showcase + safe reveal pattern + live-API schema/freshness guards | dashboard/ | Fix graphs stuck invisible on Pages; official 2026 car renders in team cards; stale KV can no longer clobber the seed |
