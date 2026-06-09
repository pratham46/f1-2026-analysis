# F1 2026 Analysis — Context Snapshot
_Generated: 2026-06-08 | Project: C:\Users\prath\f1-2026-analysis_

---

## 1. Project Purpose

End-to-end F1 2026 Championship Prediction system. Fetches historical race data (2020–2025) via Jolpica/Ergast API and 2026 live results via formula1.com scraping, engineers features, trains an XGBoost regression model to predict finishing positions, runs a 500-iteration Monte Carlo simulation for championship win probabilities, then publishes everything to a static HTML dashboard with Plotly.js charts and a game-like F1 UI.

---

## 2. Tech Stack

- **Language:** Python 3 (pipeline), vanilla JavaScript (dashboard)
- **ML:** XGBoost regression (position prediction) + Monte Carlo (championship probability)
- **Data sources:** Jolpica API (Ergast-compatible, historical 2020–2025), formula1.com scraping (live 2026 results), ICS calendar for race schedule
- **Dashboard:** Static `dashboard/index.html` — no server, `window.F1_DATA` binding from `dashboard/data.js`, Plotly.js charts, Titillium Web font, CSS custom properties
- **Agent harness:** 12 agents + 12 skills in `.claude/agents/` and `.claude/skills/`

---

## 3. Current Pipeline State

| Item | Value |
|------|-------|
| Pipeline last run | 2026-06-07 (predictions.json exists) |
| Predicted champion | Norris (McLaren) — 414 pts, 86.2% per-race win prob |
| Predicted P2 | 399 pts |
| Predicted P3 | 302 pts |
| data.js size | 97.7 KB |
| index.html size | 157.6 KB |

> Note: `predictions.json` uses `driver_id` keys only (no `driver_name`/`team`). DRIVER_META in `dashboard/index.html` maps IDs to display names.

---

## 4. 2026 Real Standings (scraped from formula1.com, 2026-06-07)

| Pos | Driver | Team | Pts |
|-----|--------|------|-----|
| 1 | Kimi Antonelli | Mercedes | 156 |
| 2 | (driver_id unknown) | Ferrari | 90 |
| 3 | (driver_id unknown) | Mercedes | 88 |
| 4 | (driver_id unknown) | Ferrari | 75 |
| 5 | (driver_id unknown) | McLaren | 60 |

- 6 races scraped, scraper NOT mostly blocked
- `driver_display` has full names (e.g. "Kimi Antonelli ANT"), `driver_id` = "antonelli"

---

## 5. Dashboard State

| Item | Value |
|------|-------|
| data.js size | 97.7 KB |
| index.html size | 157.6 KB |
| Last scraped | 2026-06-07T18:22:38Z |
| Races with results | 6 completed |

**Dashboard sections:**
- Race Center — last race official result + next race prediction
- Championship Review — standings table (real pts green, predicted pts animated, title % gold bar)
- Historical Performance — driver/constructor line charts from historical_driver_points
- Game UI: `#f1g-podium`, `#f1g-gauges`, `#f1g-h2h`, `#f1g-timeline`, `#f1g-constructors`

---

## 6. Agent Inventory (12 agents)

| Agent | Role |
|-------|------|
| context-snapshot | Generates portable session handoff snapshot |
| dashboard-updater | Writes initial data.js from predictions |
| data-pipeline | Fetches race data, engineers features.csv |
| data-publisher | Merges all sources → unified atomic data.js |
| f1-media-scraper | Scrapes official F1 driver images + track layouts |
| f1-results-scraper | Scrapes live 2026 results from formula1.com |
| live-monitor | Checks OpenF1 for new 2026 race sessions |
| media-fetcher | General media asset fetcher |
| prediction-engine | Trains XGBoost, runs Monte Carlo, writes predictions.json |
| qa-validator | Gate 1 (features.csv) and Gate 2 (predictions.json) QA |
| ui-designer | Adds game-like F1 UI sections to index.html |
| ui-enhancer | General UI enhancement / fixes |

---

## 7. Skill Inventory (12 skills)

| Skill | Purpose |
|-------|---------|
| capture-context | Build portable project context snapshot |
| design-f1-ui | CSS/JS templates for 5 game UI sections |
| enhance-ui | General dashboard UI enhancement patterns |
| f1-orchestrator | **Master orchestrator** — routes all pipeline/scrape/publish/UI requests |
| fetch-media | General media asset fetching |
| fetch-race-data | Jolpica/OpenF1 data fetch + feature engineering |
| live-race-monitor | OpenF1 live session monitoring |
| publish-dashboard-data | Merge predictions + scraped + media → atomic data.js write |
| scrape-f1-official-media | Official F1 driver images + track layout CDN URLs |
| scrape-f1-results | Scrape formula1.com race results and standings |
| train-predict | XGBoost training + Monte Carlo championship simulation |
| update-dashboard | Generate data.js from predictions.json |

---

## 8. Key Files & Entry Points

| File | Purpose |
|------|---------|
| `src/data/pipeline.py` | Full pipeline — `python src/data/pipeline.py` |
| `src/data/enrich_dashboard.py` | Re-applies driver images + track layouts after pipeline |
| `dashboard/index.html` | Static dashboard (open in browser) — 157.6 KB |
| `dashboard/data.js` | Unified pipeline + scraper output — 97.7 KB |
| `_workspace/predictions.json` | XGBoost predictions (driver_id, predicted_points, win_probability, podium_probability) |
| `_workspace/f1_scraped_results.json` | formula1.com scraped results (6 races) |
| `_workspace/publish_log.json` | Last data-publisher reconciliation log |
| `CLAUDE.md` | Project guide + harness trigger + change history |

---

## 9. Architecture: Data Flow

```
Jolpica API ──→ data-pipeline ──→ features.csv ──→ qa-gate-1
                                                        ↓
                                               prediction-engine ──→ predictions.json ──→ qa-gate-2
                                                                                               ↓
formula1.com ──→ f1-results-scraper ──→ f1_scraped_results.json ──────────────────────→ data-publisher
formula1.com ──→ f1-media-scraper ───→ driver_images + track_layouts ──────────────────→ data-publisher
                                                                                               ↓
                                                                                       unified data.js
                                                                                               ↓
                                                                                        ui-designer → index.html
```

**Data priority in data-publisher:** scraped standings > Jolpica for completed races. Media always preserved.

---

## 10. Dashboard JavaScript Architecture

**Critical: TEAM_COLORS must be declared BEFORE the normalization adapter**

```javascript
// Declared ~line 1903 (before const F1 = window.F1_DATA)
const TEAM_COLORS = { red_bull: '#3671C6', ferrari: '#E8002D', mclaren: '#FF8000', ... };
function teamColor(id) { return TEAM_COLORS[id] || '#ffffff'; }

const F1 = window.F1_DATA || FALLBACK_DATA;

// Normalization adapter runs immediately at load:
F1.races  = (F1.race_predictions || []).map(r => { /* adds name, completed (date-based), top5full, winProb */ });
F1.drivers = (F1.driver_standings_2026 || []).map(d => { /* adds abbr, points, winProb, team color */ });
F1.drivers.forEach(d => { d.championshipProb = ...; d.avgPosition = ...; });
// F1.history rebuilt from historical_driver_points + historical_constructor_points if empty
// F1.season_summary rebuilt from historical_driver_points if empty
```

**Two probability metrics (different!):**
- `d.winProb` = per-race win probability (win_probability in predictions.json)
- `d.championshipProb` = Monte Carlo title probability (championship_win_probability in driver_standings_2026)

Championship battle chart: gold bars = `championshipProb`, diamond markers = `winProb` (right axis).

---

## 11. Bug Fix History (this session)

| Bug | Fix |
|-----|-----|
| TEAM_COLORS TDZ crash at line 2193 | Moved `const TEAM_COLORS` + `teamColor()` before adapter (2026-06-08) |
| Championship battle showing per-race prob | Changed to `d.championshipProb`, added dual-trace chart (2026-06-08) |
| Monaco showing as "Next Race" | Adapter uses real `raceDate < new Date()` not stored flag |
| All win probs = 30.0% | Preserved `top5full` (full objects) not just string IDs |
| F1.history empty → charts blank | Rebuilt from `historical_driver_points` / `historical_constructor_points` |
| F1.season_summary empty | Rebuilt from historical year champions |
| championship_win_probability missing from F1.drivers | Added to normalization adapter |
| animateTableCounters wiping badge | Targets `.pts-counter` span, animates `.prob-bar-fill` via CSS |
| driver_images lost on pipeline re-run | data-publisher preserves media from existing data.js |

---

## 12. Pending Items

- Verify Year Explorer (`initYearExplorer`) and history charts render correctly in browser
- Verify Monaco shows "OFFICIAL RESULT" in Race Center (scraped_results mapping)
- Consider refreshing standings after Canadian GP (round 9, ~June 15) via f1-results-scraper

---

## 13. How to Resume in a New Chat

Paste this prompt into any new Claude Code session:

---

**CONTEXT HANDOFF:**

Continuing work on F1 2026 Championship Prediction.
**Project:** `C:\Users\prath\f1-2026-analysis`
**Dashboard:** open `dashboard/index.html` in browser
**Pipeline:** `python src/data/pipeline.py`
**Orchestrator skill:** `f1-orchestrator` — use for any pipeline/scrape/publish/UI task

**State (2026-06-08):**
- 6 races done. Real leader: Kimi Antonelli (Mercedes) 156 pts.
- Model leader: Norris (McLaren) 414 pred pts, 86.2% per-race win prob.
- data.js = 97.7 KB, index.html = 157.6 KB. All major bugs fixed.

**Critical JS note:** `TEAM_COLORS` const MUST stay before `const F1 = window.F1_DATA` (~line 1903). Moving it after causes a TDZ crash.

**Two distinct probabilities:** `d.winProb` = per-race win rate. `d.championshipProb` = Monte Carlo title probability. Championship battle chart uses `championshipProb`.

**Pending:** Verify Year Explorer + history charts work. Refresh standings after Canadian GP.

---
