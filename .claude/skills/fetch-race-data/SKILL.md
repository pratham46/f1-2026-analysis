---
name: fetch-race-data
description: "Fetch F1 race results from OpenF1 API (2023–2026) and Ergast API (2020–2022), normalize to the unified race-result schema, and build ML features. Use whenever fetching race data, ingesting new race results, refreshing historical data, or adding 2026 live data to the pipeline. Must be used by the data-pipeline agent for all data acquisition tasks."
---

## Data Source Priority

Always try in this order. Log which source was used.

### 1. OpenF1 API (primary for 2023–2026)

Base URL: `https://openf1.org/v1/`

**Fetch sessions for a year:**
```
GET /sessions?year={year}&session_type=Race
```
Returns: `session_key`, `circuit_short_name`, `date_start`, `meeting_key`

**Fetch race results for a session:**
```
GET /position?session_key={key}
```
Returns: `driver_number`, `position`, `date` — take the LAST position entry per driver (final classification).

**Map driver_number → driver_id:**
```
GET /drivers?session_key={key}
```
Returns: `driver_number`, `name_acronym`, `team_name`, `full_name`

**Points calculation:** Apply standard F1 scoring yourself (25-18-15-12-10-8-6-4-2-1 for P1–P10, 0 for P11–P20, 1 bonus for fastest lap if in top 10).

**Retired drivers:** If a driver's last position entry is from an early lap and session ended significantly after, flag status as "Retired".

### 2. Ergast API (fallback for 2020–2022)

Base URL: `http://ergast.com/api/f1`

```
GET /{year}/results.json?limit=1000
```

Response path: `MRData.RaceTable.Races[]` → `Results[]`

Key fields: `Driver.driverId`, `Constructor.constructorId`, `grid`, `position`, `points`, `status`

Set `timeout=10s`. On any exception or non-200, catch and fall back immediately.

### 3. Synthetic fallback

Use the `_generate_synthetic_data()` function in `src/data/pipeline.py`.
This produces realistic data calibrated to known F1 history. Log: `"Data source: synthetic"`.

## Unified Schema Normalization

After fetching from any source, normalize every row to:
```python
{
    "year": int,
    "round": int,          # 1-indexed race number in season
    "circuit": str,        # e.g. "bahrain", "jeddah"
    "driver": str,         # driver_id snake_case, e.g. "verstappen"
    "constructor": str,    # team_id snake_case, e.g. "red_bull"
    "grid": int,           # starting position 1–20
    "position": str,       # "1"–"20" or "R" for retirement
    "points": float,       # 0.0–26.0
    "status": str,         # "Finished" or failure reason
}
```

**Driver ID normalization** (OpenF1 uses acronyms; map to lowercase full surname):
```python
ACRONYM_MAP = {
    "VER": "verstappen", "NOR": "norris", "LEC": "leclerc", "PIA": "piastri",
    "SAI": "sainz", "HAM": "hamilton", "RUS": "russell", "ANT": "antonelli",
    "ALO": "alonso", "STR": "stroll", "TSU": "tsunoda", "LAW": "lawson",
    "ALB": "albon", "COL": "colapinto", "GAS": "gasly", "OCO": "ocon",
    "BEA": "bearman", "HUL": "hulkenberg", "BOT": "bottas", "MAG": "magnussen",
    "PER": "perez", "VET": "vettel", "RAI": "raikkonen",  # historical
}
```

## Feature Engineering

After normalization, call in order:
1. `add_rolling_points(df, windows=[3, 5])` — driver rolling avg points
2. `add_grid_vs_finish(df)` — positions_gained column
3. `add_constructor_rolling_points(df, windows=[3, 5])` — constructor rolling avg points

All functions are in `src/features/build_features.py`.

## Output Validation

Before saving `data/processed/features.csv`, verify:
- Row count > 100
- No nulls in: year, round, driver, constructor, grid, points
- Columns include all 5 FEATURES used by the model: grid, driver_pts_rolling_3, driver_pts_rolling_5, constructor_pts_rolling_3, constructor_pts_rolling_5
