# Data API Reference — window.F1_DATA

Single source of truth for what data exists. The dashboard reads `window.F1_DATA` (seeded by `dashboard/data.js`, upgraded in background from `GET /api/data` on the Worker). Everything below is available in BOTH seed and live payload. In `index.html` the normalized object is the variable `F1`.

## Worker endpoints (base: `window.F1_WORKER_URL`)

| Route | Method | Returns |
|-------|--------|---------|
| `/api/data` | GET | full payload (all fields below) |
| `/api/data?slim=1` | GET | omits static historical_* blocks (seed already has them) |
| `/api/news` | GET | `{ news, generated_at }` |
| `/api/health` | GET | last run health + sanity |
| `/api/refresh` | POST | 202; requires `Authorization: Bearer <REFRESH_TOKEN>` |

## Payload fields

| Field | Shape | Notes |
|-------|-------|-------|
| `generated_at` | ISO string | freshness guard key |
| `races_completed_2026` | number | e.g. 10 |
| `calendar_2026` | `[{round, id, name, date, sprint}]` | 22 rounds; `id` = circuit_id slug; `sprint` bool |
| `cancelled_races_2026` | `[{name, reason}]` | Bahrain + Saudi |
| `next_race` | `{round, id, circuit_id, name, date, sprint, days_until}` | null after finale |
| `next_race_weather` | `{circuit_id, date, t_max, t_min, rain_prob, wind_max}` or `null` | Open-Meteo race-day forecast; null when next race is >15 days out. °C, %, km/h. ALWAYS null-check |
| `driver_standings_2026` | `[{rank, driver_id, name, short, team, team_name, color, number, predicted_points, win_probability, championship_win_probability, podium_probability, avg_predicted_position, current_real_points, current_real_position, current_wins}]` | 22 drivers, model + live blend |
| `constructor_standings_2026` | `[{rank, constructor_id, name, color, predicted_points, championship_win_probability, current_real_points, current_wins}]` | 11 teams |
| `real_driver_standings_2026` | `[{position, driver_id, name, short, constructor_id, team, team_name, color, number, points, wins}]` | OFFICIAL current standings (Jolpica). Use for real points, not the per-race sums |
| `real_constructor_standings_2026` | `[{position, constructor_id, points, wins}]` | official |
| `real_race_results_2026` | `[{round, name, date, circuit_id, results: [{position, driver_id, constructor_id, points, status, time_or_gap, fastest_lap}]}]` | TOP-10 ONLY per race; no sprint results — per-race sums undercount vs official standings |
| `race_predictions` | `[{round, circuit_id, name/race_name, date/race_date, sprint, completed, winner, top5: [{driver_id, win_prob, position?}], predicted_top5}]` | completed rounds: top5 = REAL result, `predicted_top5` = frozen forecast |
| `predictions_archive` | `{ [round]: [{driver_id, win_prob}] }` | model's top-5 FROZEN at the time each round completed. Compare vs real results → accuracy tracking |
| `openf1_race_data` | `{ [round]: { session_key, pit_stops: {[driver_id]: [{lap, duration}]}, stints: {[driver_id]: [{compound, lap_start, lap_end, tyre_age, stint_number}]} } }` | pit `duration` = seconds (pit-lane time); compound = SOFT/MEDIUM/HARD/INTERMEDIATE/WET |
| `driver_bios_2026` | `{ [driver_id]: {dob, nationality, wiki} }` | dob "YYYY-MM-DD"; nationality is a demonym ("Italian") |
| `circuit_data_2026` | `{ [circuit_id]: {name, locality, country, lat, long, alt, wiki} }` | alt = metres above sea level |
| `driver_info` | `{ [driver_id]: {name, short, team, team_name, color, number} }` | static grid info |
| `team_colors` | `{ [team_slug]: "#hex" }` | |
| `driver_images` | `{ [driver_id]: url }` | f1.com headshots |
| `track_layouts` | `{ [circuit_id]: {img_url, name} }` | white line art — dashboard inverts colors via CSS filter |
| `team_cars` | `{ [team_slug]: url }` | 2026 car renders |
| `historical_driver_points` | `{ [year]: {[driver_id]: points} }` | 2020–2025 FINAL standings |
| `historical_constructor_points` | `{ [year]: {[team]: points} }` | 2020–2025 |
| `historical_driver_teams` | `{ [year]: {[driver_id]: team} }` | |
| `driver_names` | `{ [driver_id]: "Full Name" }` | includes past drivers (vettel, etc.) |
| `driver_rolling_form` | `{ [driver_id]: {points: [6 numbers 2020→2025]} }` | |
| `regulation_impact_2026` | object | 2026 regs impact scores |
| `news` | `[{title, url, image, date, tag}]` | scraped f1.com headlines |
| `_health` | `{live, results, news, openf1, bios, circuits, subrequests, ...}` | source status strings |
| `_sanity` | `{passed, ...}` | prediction sanity check |

## Frontend helpers already in index.html (REUSE, do not reinvent)

- `F1` — the normalized data object. `byId(id)` — getElementById.
- `esc(str)` — HTML-escape. REQUIRED around every interpolated string in innerHTML templates.
- `PLOT(id, traces, layoutExtra)` — Plotly.newPlot with house dark theme; registers chart for auto-resize.
- `PLOT_WHEN_VISIBLE(id, traces, layoutExtra)` — same but waits until the element has real width. Use for anything inside a modal or initially-hidden section.
- `drawGauge(svgEl, pct, color, label)` — SVG speedometer.
- CSS design tokens: `--asphalt --carbon --panel --accent(#e10600) --accent-hot --text --text-sec --text-dim --border --gold`. Fonts: headings `Chakra Petch`, body `Titillium Web`, data/mono `Share Tech Mono`.
- Section pattern: `<section id="x">` with a heading div styled like existing sections (copy the markup of `<section id="timeline">` as template). Existing section ids in order: race-center, podium, standings, gauges, battle, timeline, calendar, teams, drivers, history, years, regs, news.
- Plotly build is **plotly-basic** — ONLY `bar`, `pie`, `scatter` trace types exist. No heatmap/box/violin — use scatter/bar creatively.

## Constraints (hard)

- $0 budget. Free tiers only. No new JS libraries, no build step, no framework.
- Worker free tier: 50 subrequests/invocation (we self-cap at 40, currently using ~31 — headroom ≈ 9), 10ms CPU typical, KV 1k writes/day.
- Dashboard must render fully offline from the seed (never assume live fetch succeeded).
- Charts: plotly-basic types only. All images `loading="lazy"` + `onerror` hide.
