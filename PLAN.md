# The Play — "Crazy Good" upgrade (Claude backend × Gemini frontend)

Read `DATA_API.md` FIRST — it defines every data field and helper referenced below. Rules and claiming: `AI_COLLAB.md` (these are board tasks 12–18). Bus: `_ai_bus/bus.md`.

**Theme of the play:** the payload already contains gold the UI never shows — frozen model predictions vs real results, pit-stop telemetry, circuit geodata, driver bios. We surface it. Only ONE new API call is added (weather). Everything else is pure frontend over existing data.

**Order:** B1 → B2 first (Claude, small). F1–F5 (Gemini) are independent of each other and of B1/B2 except F5 which needs B1's field. Gemini: do F1 first (it's the headline feature), then F2, F3, F4, F5.

---

## B1 (claude, worker): next-race weather via Open-Meteo — 1 subrequest

- New fetcher in `cloudflare/worker/src/sources.js`: `fetchWeather(lat, long, date)` →
  `GET https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={long}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&timezone=UTC&start_date={date}&end_date={date}`
  Free, no key. Returns `{ok, weather: {t_max, t_min, rain_prob, wind_max}}`; `{ok:false}` on any error (same graceful pattern as every other fetcher).
- In `assemble.js`: after `next_race` is computed, if `next_race` exists and its date is within 15 days (Open-Meteo forecast range), look up `circuit_data_2026[next_race.circuit_id]` for lat/long and call fetchWeather. Attach as `payload.next_race_weather = {circuit_id, date, t_max, t_min, rain_prob, wind_max}` or `null`. Keep last-good on failure like news.
- Add `_health.weather` status string. Test: extend `test/assemble.test.mjs` — key exists (may be null), and if non-null has numeric t_max.
- Acceptance: `npm test` green; subrequests still ≤ 40 in health output.

## B2 (claude, worker): regen seed + document

- `npm run seed` so `dashboard/data.js` carries `next_race_weather` (or null) offline.
- Add the field to `DATA_API.md` payload table.
- Acceptance: `node -e "global.window={};require('./dashboard/data.js');console.log('next_race_weather' in window.F1_DATA)"` prints true.

---

## F1 (gemini, dashboard): "MODEL vs REALITY" — prediction accuracy tracker  ★ headline

The model's top-5 forecast for every completed round is FROZEN in `F1.predictions_archive[round]`; the real result is in `F1.real_race_results_2026`. Nobody can see how the model is doing. Show it.

- New `<section id="accuracy">` between sections `timeline` and `calendar`. Copy the heading markup style of `#timeline`.
- Per completed round compute:
  - `winnerHit` = archive[round][0].driver_id === real winner (results[0].driver_id)
  - `podiumOverlap` = |archive top3 ∩ real top3| (0–3)
  - `top5Overlap` = |archive top5 ∩ real top5| (0–5)
- Render: (a) a scoreboard strip: "Winner hit rate X/N", "Avg podium overlap Y/3", "Avg top-5 overlap Z/5" as three stat tiles styled like existing stat chips; (b) a `PLOT` bar chart, x = round short names, y = top5Overlap (0–5), bars colored `--accent` when winnerHit else `--text-dim`; (c) under the chart, one row per round: "R{round} {race name}: predicted {SHORT,SHORT,SHORT} → actual {SHORT,SHORT,SHORT}" using `driver_info[id].short`, with ✓/✗ for winner hit.
- Guards: skip rounds missing from either archive or real results; if fewer than 2 completed rounds, hide the whole section (`style.display='none'`).
- Acceptance: section renders offline from seed; no console errors; numbers hand-check against R1 (russell won R1 — does the archive's pick match?).

## F2 (gemini, dashboard): Championship momentum chart

- New `<section id="momentum">` after `#accuracy`. Cumulative points per round per driver from `F1.real_race_results_2026` (sum `results[].points` by driver over rounds), one `scatter` line (mode:'lines+markers') per driver, colored `driver_info[id].color`, for the CURRENT TOP 8 drivers of `real_driver_standings_2026` only (22 lines is soup).
- Footnote element under the chart: "Cumulative race points (top-10 finishes; sprint points not included — official totals may differ slightly)". This is required — the data genuinely undercounts.
- Hover text: "{name}: {cum} pts after R{round}". Legend on, dark-theme via `PLOT`.
- Guards: needs ≥ 2 completed rounds else hide section.
- Acceptance: renders offline; line count ≤ 8; final cumulative value for the leader is within ~15% of `real_driver_standings_2026[0].points` (sprint gap explains the delta).

## F3 (gemini, dashboard): Pit-stop intelligence

- Extend the existing race modal's strategy section (`#strategy-section`): above the stint chart add a "PIT STOPS" row: for each driver with data in `F1.openf1_race_data[round].pit_stops` show `SHORT: N stops · fastest {min duration}s`, sorted by fastest stop. Top entry gets `--gold` color and a "⚡ fastest" tag.
- New season-wide leaderboard inside the SAME modal-free context: add a small panel in `<section id="teams">` (right side or below): "SEASON FASTEST PIT STOPS" — top 5 across all rounds of `min(duration)` with driver short, team color chip, round name. Pure reduce over `openf1_race_data`.
- Guard: `pit_stops` may be `{}` for some rounds — skip empty; `duration` may be null — filter out.
- Acceptance: modal for a completed race (e.g. Canada) shows pit rows; leaderboard shows 5 entries with plausible values (pit-lane times ~18–30s); no errors on rounds with no data.

## F4 (gemini, dashboard): Title-fight calculator

- Add a compact strip inside `<section id="standings">` above the table: for the top 4 of `real_driver_standings_2026` compute `maxRemaining = Σ over calendar_2026 rounds > races_completed_2026 of (25 + (sprint ? 8 : 0))`, then each rival's status: CAN WIN (gap ≤ maxRemaining) → show "alive, needs to outscore leader by {gap} over {n} races"; else "ELIMINATED".
- If leader's lead > maxRemaining over P2 → replace strip with a "🏆 {name} IS 2026 WORLD CHAMPION" banner (accent background, Chakra Petch).
- Show `maxRemaining` itself: "{n} races left · {maxRemaining} pts still on the table".
- Acceptance: with current data (leader dominant, ~12 rounds left) all top-4 likely still alive — numbers must hand-check: 12 races incl. sprints, verify against calendar sprint flags.

## F5 (gemini, dashboard): Next-race command center upgrade (needs B1+B2 deployed to seed)

- In the existing next-race hero widget add: weather chip row from `F1.next_race_weather` (`🌡 {t_min}–{t_max}°C · 🌧 {rain_prob}% · 💨 {wind_max} km/h`) — render ONLY if the field exists and is non-null; plus circuit facts from `F1.circuit_data_2026[circuit_id]`: "{locality}, {country} · {alt}m altitude" and a "high-altitude" tag when alt > 1000 (Mexico).
- Driver-modal micro-upgrade (same task): in the driver modal header add age computed from `F1.driver_bios_2026[id].dob` ("{age} yrs") and nationality; link the name to `.wiki` (target=_blank rel=noopener). Guard: bios may be missing for a driver → omit chips.
- Acceptance: offline seed renders (weather chip hidden if null); no layout break at 360px width.

---

## Non-goals (do NOT do)

Framework/bundler, service worker, new chart lib, lap-by-lap telemetry (too many subrequests), separate pages, backend accuracy precompute (client math is enough), any paid API.

## Definition of done (each task)

Claim on board → implement → verify acceptance line → commit `[claude]`/`[gemini]` touching ONLY your lane's files → mark DONE on board → one bus line. Frontend must be verified in a real browser (open dashboard/index.html) before commit.
