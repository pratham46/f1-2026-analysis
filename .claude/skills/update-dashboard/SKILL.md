---
name: update-dashboard
description: "Convert prediction output to dashboard/data.js and publish the F1 dashboard. Use whenever writing dashboard data, refreshing the F1 prediction dashboard, publishing new race predictions, updating championship standings in the web UI, or regenerating data.js. Must be used by the dashboard-updater agent."
---

## Output File

`dashboard/data.js` — must begin with `window.F1_DATA = ` and end with `;\n`.

The dashboard's `index.html` loads this via `<script src="data.js"></script>`, so JSON validity is critical. A malformed write will break the entire dashboard.

## Required Data.js Structure

```javascript
window.F1_DATA = {
  "generated_at": "YYYY-MM-DD",
  "model_cv_mae": 2.34,
  "seasons_used": [2020, 2021, 2022, 2023, 2024, 2025],

  "driver_info": {
    "verstappen": {"name": "Max Verstappen", "short": "VER", "team": "red_bull",
                   "team_name": "Red Bull Racing", "color": "#3671C6", "number": 1},
    // ... all 20 drivers
  },

  "team_colors": {
    "red_bull": "#3671C6", "ferrari": "#E8002D", "mclaren": "#FF8000",
    "mercedes": "#27F4D2", "aston_martin": "#358C75", "williams": "#64C4FF",
    "alpine": "#FF87BC", "rb": "#6692FF", "haas": "#B6BABD", "sauber": "#52E252"
  },

  "driver_standings_2026": [
    {"rank": 1, "driver_id": "...", "predicted_points": 380.0,
     "win_probability": 0.42, "podium_probability": 0.74,
     "avg_predicted_position": 2.1}
    // sorted desc by predicted_points, rank added here
  ],

  "constructor_standings_2026": [
    {"rank": 1, "constructor_id": "...", "name": "Red Bull Racing",
     "color": "#3671C6", "predicted_points": 620.0}
    // sorted desc, rank added here
  ],

  "historical_driver_points": {
    "2020": {"hamilton": 347, "verstappen": 214, ...},
    "2021": {...}, "2022": {...}, "2023": {...}, "2024": {...}, "2025": {...}
  },

  "historical_constructor_points": {
    "2020": {"mercedes": 573, "red_bull": 319, ...},
    // ...
  },

  "race_predictions": [
    {"round": 1, "circuit_id": "bahrain", "name": "Bahrain Grand Prix",
     "top5": [{"driver_id": "verstappen", "win_prob": 0.38}, ...]}
    // 24 entries
  ],

  "driver_rolling_form": {
    "verstappen": {"seasons": [2020,2021,2022,2023,2024,2025],
                   "points": [214,395,454,575,461,380],
                   "avg_finish": [3.2,2.1,1.8,1.4,2.0,2.3]},
    // all 20 drivers
  },

  "regulation_impact_2026": {
    "description": "New 2026 regs: smaller cars, active aero (ManualDRS), revised hybrid formula (50/50 ICE + ERS).",
    "constructor_competitiveness_change": {
      "red_bull": -5, "ferrari": 8, "mclaren": 3, "mercedes": 5,
      "aston_martin": -2, "williams": 1, "alpine": -3, "rb": -1, "haas": 0, "sauber": -2
    }
  }
};
```

## Write Protocol

1. Build the full dict in Python
2. Convert to JSON: `json.dumps(data, indent=2, ensure_ascii=False)`
3. Wrap: `f"window.F1_DATA = {json_str};\n"`
4. Write to `dashboard/data.js` atomically (write to `.tmp` then rename)
5. Read back and verify: strip prefix/suffix, `json.loads()` must succeed
6. Confirm all required top-level keys are present
7. Log: `"Published dashboard/data.js — {size} bytes, {n_drivers} drivers, {n_races} races"`

## Atomic Write Pattern

```python
import os, json
tmp = "dashboard/data.js.tmp"
with open(tmp, "w", encoding="utf-8") as f:
    f.write(f"window.F1_DATA = {json.dumps(data, indent=2)};\n")
os.replace(tmp, "dashboard/data.js")  # atomic on same filesystem
```

## Driver Info Constants

All 20 drivers with their 2026 team assignments:
```python
DRIVER_META = {
    "verstappen": {"name": "Max Verstappen", "short": "VER", "team": "red_bull",
                   "team_name": "Red Bull Racing", "color": "#3671C6", "number": 1},
    "norris":     {"name": "Lando Norris",   "short": "NOR", "team": "mclaren",
                   "team_name": "McLaren",    "color": "#FF8000", "number": 4},
    "leclerc":    {"name": "Charles Leclerc","short": "LEC", "team": "ferrari",
                   "team_name": "Ferrari",    "color": "#E8002D", "number": 16},
    "piastri":    {"name": "Oscar Piastri",  "short": "PIA", "team": "mclaren",
                   "team_name": "McLaren",    "color": "#FF8000", "number": 81},
    "sainz":      {"name": "Carlos Sainz",   "short": "SAI", "team": "williams",
                   "team_name": "Williams",   "color": "#64C4FF", "number": 55},
    "hamilton":   {"name": "Lewis Hamilton", "short": "HAM", "team": "ferrari",
                   "team_name": "Ferrari",    "color": "#E8002D", "number": 44},
    "russell":    {"name": "George Russell",  "short": "RUS", "team": "mercedes",
                   "team_name": "Mercedes",   "color": "#27F4D2", "number": 63},
    "antonelli":  {"name": "Andrea Antonelli","short": "ANT", "team": "mercedes",
                   "team_name": "Mercedes",   "color": "#27F4D2", "number": 12},
    "alonso":     {"name": "Fernando Alonso","short": "ALO", "team": "aston_martin",
                   "team_name": "Aston Martin","color": "#358C75", "number": 14},
    "stroll":     {"name": "Lance Stroll",   "short": "STR", "team": "aston_martin",
                   "team_name": "Aston Martin","color": "#358C75", "number": 18},
    "tsunoda":    {"name": "Yuki Tsunoda",   "short": "TSU", "team": "red_bull",
                   "team_name": "Red Bull Racing","color": "#3671C6", "number": 22},
    "lawson":     {"name": "Liam Lawson",    "short": "LAW", "team": "rb",
                   "team_name": "RB",         "color": "#6692FF", "number": 30},
    "albon":      {"name": "Alex Albon",     "short": "ALB", "team": "williams",
                   "team_name": "Williams",   "color": "#64C4FF", "number": 23},
    "colapinto":  {"name": "Franco Colapinto","short": "COL", "team": "alpine",
                   "team_name": "Alpine",     "color": "#FF87BC", "number": 43},
    "gasly":      {"name": "Pierre Gasly",   "short": "GAS", "team": "alpine",
                   "team_name": "Alpine",     "color": "#FF87BC", "number": 10},
    "ocon":       {"name": "Esteban Ocon",   "short": "OCO", "team": "haas",
                   "team_name": "Haas",       "color": "#B6BABD", "number": 31},
    "bearman":    {"name": "Oliver Bearman", "short": "BEA", "team": "haas",
                   "team_name": "Haas",       "color": "#B6BABD", "number": 87},
    "hulkenberg": {"name": "Nico Hulkenberg","short": "HUL", "team": "sauber",
                   "team_name": "Sauber",     "color": "#52E252", "number": 27},
    "bottas":     {"name": "Valtteri Bottas","short": "BOT", "team": "sauber",
                   "team_name": "Sauber",     "color": "#52E252", "number": 77},
    "magnussen":  {"name": "Kevin Magnussen","short": "MAG", "team": "sauber",
                   "team_name": "Sauber",     "color": "#52E252", "number": 20},
}
```
