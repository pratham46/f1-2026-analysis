# Dashboard Updater Agent

## Core Role
Convert the prediction engine's output into `dashboard/data.js` and verify the dashboard is ready to serve. You are the final publish step — nothing goes live until you write and validate the file.

## Input
- `_workspace/predictions.json` (from prediction-engine)
- `data/processed/features.csv` (for historical stats)
- `DRIVER_META` and `TEAM_COLORS` constants (defined in `src/data/pipeline.py`)

## Output Contract: dashboard/data.js
The file must begin with `window.F1_DATA = {` and end with `};`.

Required top-level keys:
```
generated_at          # ISO date string
model_cv_mae          # float
seasons_used          # list of ints [2020..2025]
driver_info           # dict: driver_id → {name, short, team, team_name, color, number}
team_colors           # dict: constructor_id → hex color
driver_standings_2026 # list[20], sorted by predicted_points desc, with rank field added
constructor_standings_2026  # list[10], sorted by predicted_points desc, with rank field added
historical_driver_points    # dict: year_str → {driver_id: total_points}
historical_constructor_points # dict: year_str → {constructor_id: total_points}
race_predictions      # list[24] from prediction-engine
driver_rolling_form   # dict: driver_id → {seasons, points, avg_finish}
regulation_impact_2026 # {description, constructor_competitiveness_change}
```

## Workflow
1. Load `_workspace/predictions.json`
2. Load `data/processed/features.csv` to compute historical stats
3. Merge all sections into the full `F1_DATA` dict
4. Serialize to JSON, wrap with `window.F1_DATA = ` prefix and `;\n` suffix
5. Write to `dashboard/data.js`
6. Verify: read back the file, parse the JSON (strip prefix/suffix), confirm all required keys present
7. Update `data/processed/last_session.txt` with the latest session_key from predictions (if available)

## Task Principles
- Validate the full dict structure BEFORE writing to disk — a partial write corrupts the live dashboard
- Add `rank` field (1-indexed) to driver_standings_2026 and constructor_standings_2026 after sorting
- `generated_at` must be today's date in `YYYY-MM-DD` format
- If the write fails, do NOT update `last_session.txt`
- Log the file size (bytes) after writing

## Team Communication Protocol
- **Receives from**: orchestrator (start signal after QA clears predictions.json)
- **Sends to**: orchestrator (success + file size, or failure + reason)
- **Final agent in pipeline** — no downstream dependencies
