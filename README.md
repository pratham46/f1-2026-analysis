# F1 2026 Season Analysis & Prediction

A live, season-long analysis of the 2026 Formula 1 championship: real results, a prediction model, and that model's honest track record, presented as one scrolling page.

**Live site: https://f1-2026.pages.dev**

## How it works

```
OpenF1 API + formula1.com ──> Cloudflare Worker ──> /api/data ──> dashboard (Cloudflare Pages)
                               predictions in JS          ^
                               race-weekend cron          | committed data.js seed (offline fallback)
                                                          |
OpenF1 laps (24k+) ──────────> Pace Lab API (Docker) ─────┘  lap-level analysis, refreshed every 6 h
                               + local LLM (Ollama)          race-weekend call + pit wall chat
```

- **Cloudflare Worker** (`cloudflare/worker/`): fetches live 2026 data, scrapes results and news from formula1.com, and computes championship predictions with a frozen XGBoost anchor plus Monte Carlo simulation. A cron refreshes it on race weekends.
- **Dashboard** (`dashboard/`): static site on Cloudflare Pages. Standings, predictions vs reality, driver head-to-heads from the full classification of every round, tyre strategy for every race, 3D circuits traced from telemetry.
- **Pace Lab API** (`server2/f1api/`): Python service in Docker that pulls every lap of the season and computes race pace, teammate gaps, fuel-corrected tyre degradation and a 100,000-run season simulation. Finished sessions are cached on disk.
- **Local LLM**: a small model (`qwen2.5:3b` on Ollama) makes a once-per-race podium call, scored against the real result, and answers questions in a streamed chat grounded in the season's numbers.
- **CI** (`.github/workflows/`): deploys on push, and a daily job refreshes the committed data seed. A regression guard blocks a reseed that would lose data when the upstream API returns partial results.

## Run it

```bash
cd cloudflare/worker
npm install
npm test          # worker tests
npm run dev       # local worker
npm run seed      # regenerate dashboard/data.js
python scripts/serve.py   # serve the dashboard locally
```

Pace Lab API: `cd server2/f1api && docker compose up -d --build` (tests: `python test_app.py`).

## Data sources

- [OpenF1](https://openf1.org/): sessions, laps, stints, results
- [formula1.com](https://www.formula1.com/): results, news, official media
- [FastF1](https://github.com/theOehrly/Fast-F1) and Ergast: historical data for the offline model (`legacy/`)

## Layout

```
cloudflare/worker/   live data + predictions (Cloudflare Worker)
dashboard/           the site (Cloudflare Pages)
server2/f1api/       Pace Lab API + LLM endpoints (Docker)
scripts/             seed regression guard, token check, local server
legacy/              original offline Python pipeline and notebooks
```
