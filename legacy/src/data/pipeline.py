"""
F1 2026 Prediction Pipeline — driven by real race data.

Data flow:
  1. Jolpica API → real 2026 results (5+ completed races)
  2. Synthetic 2020-2025 → historical context for rolling features
  3. XGBoost trained on combined data
  4. Predictions anchored on REAL 2026 current standings + rolling form
  5. Remaining-season forecast via Monte Carlo (500 sims)

Usage:
    python src/data/pipeline.py
"""

import json
import sys
import warnings
from datetime import date
from pathlib import Path

import numpy as np
import pandas as pd

warnings.filterwarnings("ignore")

PROJECT_ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(PROJECT_ROOT / "src"))

from features.build_features import (
    add_rolling_points,
    add_grid_vs_finish,
    add_constructor_rolling_points,
)
from models.train_xgb import load_data, FEATURES
from data.fetch_jolpica import fetch_jolpica_season, fetch_jolpica_standings

# ---------------------------------------------------------------------------
# Season-wide constants
# ---------------------------------------------------------------------------
SEASONS = list(range(2020, 2026))  # historical synthetic data span

F1_POINTS = {1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 6: 8, 7: 6, 8: 4, 9: 2, 10: 1}

# Real 2026 grid (from Jolpica standings, verified June 2026)
LINEUP_2026 = {
    "antonelli":      "mercedes",
    "russell":        "mercedes",
    "leclerc":        "ferrari",
    "hamilton":       "ferrari",
    "norris":         "mclaren",
    "piastri":        "mclaren",
    "max_verstappen": "red_bull",
    "hadjar":         "red_bull",
    "gasly":          "alpine",
    "colapinto":      "alpine",
    "lawson":         "rb",
    "arvid_lindblad": "rb",
    "bearman":        "haas",
    "ocon":           "haas",
    "sainz":          "williams",
    "albon":          "williams",
    "bortoleto":      "audi",
    "hulkenberg":     "audi",
    "bottas":         "cadillac",
    "perez":          "cadillac",
    "stroll":         "aston_martin",
    "alonso":         "aston_martin",
}

DRIVER_META = {
    "antonelli":      {"name": "Kimi Antonelli",       "short": "ANT", "number": 12},
    "russell":        {"name": "George Russell",        "short": "RUS", "number": 63},
    "leclerc":        {"name": "Charles Leclerc",       "short": "LEC", "number": 16},
    "hamilton":       {"name": "Lewis Hamilton",        "short": "HAM", "number": 44},
    "norris":         {"name": "Lando Norris",          "short": "NOR", "number": 4},
    "piastri":        {"name": "Oscar Piastri",         "short": "PIA", "number": 81},
    "max_verstappen": {"name": "Max Verstappen",        "short": "VER", "number": 1},
    "hadjar":         {"name": "Isack Hadjar",          "short": "HAD", "number": 6},
    "gasly":          {"name": "Pierre Gasly",          "short": "GAS", "number": 10},
    "colapinto":      {"name": "Franco Colapinto",      "short": "COL", "number": 43},
    "lawson":         {"name": "Liam Lawson",           "short": "LAW", "number": 30},
    "arvid_lindblad": {"name": "Arvid Lindblad",        "short": "LIN", "number": 7},
    "bearman":        {"name": "Ollie Bearman",         "short": "BEA", "number": 87},
    "ocon":           {"name": "Esteban Ocon",          "short": "OCO", "number": 31},
    "sainz":          {"name": "Carlos Sainz",          "short": "SAI", "number": 55},
    "albon":          {"name": "Alexander Albon",       "short": "ALB", "number": 23},
    "bortoleto":      {"name": "Gabriel Bortoleto",     "short": "BOR", "number": 5},
    "hulkenberg":     {"name": "Nico Hulkenberg",       "short": "HUL", "number": 27},
    "bottas":         {"name": "Valtteri Bottas",       "short": "BOT", "number": 77},
    "perez":          {"name": "Sergio Perez",          "short": "PER", "number": 11},
    "stroll":         {"name": "Lance Stroll",          "short": "STR", "number": 18},
    "alonso":         {"name": "Fernando Alonso",       "short": "ALO", "number": 14},
}

TEAM_COLORS = {
    "mercedes":    "#27F4D2",
    "ferrari":     "#E8002D",
    "mclaren":     "#FF8000",
    "red_bull":    "#3671C6",
    "alpine":      "#FF87BC",
    "rb":          "#6692FF",
    "haas":        "#B6BABD",
    "williams":    "#64C4FF",
    "audi":        "#E4002B",
    "cadillac":    "#C0C0C0",
    "aston_martin":"#358C75",
}

TEAM_NAMES = {
    "mercedes":    "Mercedes-AMG Petronas",
    "ferrari":     "Scuderia Ferrari",
    "mclaren":     "McLaren Formula 1",
    "red_bull":    "Oracle Red Bull Racing",
    "alpine":      "BWT Alpine F1 Team",
    "rb":          "Visa Cash App RB",
    "haas":        "MoneyGram Haas F1 Team",
    "williams":    "Williams Racing",
    "audi":        "Audi F1 Team",
    "cadillac":    "Cadillac Formula 1 Team",
    "aston_martin":"Aston Martin Aramco F1",
}

# Each entry: (round, circuit_id, name, race_date_utc, is_sprint)
# Dates from official ICS calendar (ecal.com); estimated dates marked with *
CALENDAR_2026 = [
    (1,  "albert_park",   "Australian Grand Prix",         "2026-03-15 05:00", False),  # *
    (2,  "shanghai",      "Chinese Grand Prix",            "2026-03-22 07:00", False),  # *
    (3,  "bahrain",       "Bahrain Grand Prix",            "2026-04-05 15:00", False),  # *
    (4,  "jeddah",        "Saudi Arabian Grand Prix",      "2026-04-19 17:00", False),  # *
    (5,  "villeneuve",    "Canadian Grand Prix",           "2026-05-24 20:00", False),  # ICS
    (6,  "monaco",        "Monaco Grand Prix",             "2026-06-07 13:00", False),  # ICS
    (7,  "catalunya",     "Spanish Grand Prix",            "2026-06-14 13:00", False),  # ICS
    (8,  "red_bull_ring", "Austrian Grand Prix",           "2026-06-28 13:00", False),  # ICS
    (9,  "silverstone",   "British Grand Prix",            "2026-07-05 14:00", True),   # ICS Sprint
    (10, "spa",           "Belgian Grand Prix",            "2026-07-19 13:00", False),  # ICS
    (11, "hungaroring",   "Hungarian Grand Prix",          "2026-07-26 13:00", False),  # ICS
    (12, "zandvoort",     "Dutch Grand Prix",              "2026-08-23 13:00", True),   # ICS Sprint
    (13, "monza",         "Italian Grand Prix",            "2026-09-06 13:00", False),  # ICS (approx)
    (14, "madrid",        "Spanish Grand Prix (Madrid)",   "2026-09-13 13:00", False),  # ICS new circuit
    (15, "baku",          "Azerbaijan Grand Prix",         "2026-09-26 11:00", False),  # ICS
    (16, "marina_bay",    "Singapore Grand Prix",          "2026-10-11 12:00", True),   # ICS Sprint
    (17, "americas",      "United States Grand Prix",      "2026-10-25 20:00", False),  # ICS
    (18, "rodriguez",     "Mexico City Grand Prix",        "2026-11-01 20:00", False),  # ICS
    (19, "interlagos",    "São Paulo Grand Prix",          "2026-11-08 17:00", False),  # ICS
    (20, "las_vegas",     "Las Vegas Grand Prix",          "2026-11-22 04:00", False),  # ICS
    (21, "losail",        "Qatar Grand Prix",              "2026-11-29 16:00", False),  # ICS
    (22, "yas_marina",    "Abu Dhabi Grand Prix",          "2026-12-06 13:00", False),  # ICS
]

# Derived from real 2026 results (6 races): mercedes dominant, red_bull/aston struggling
# Used to adjust synthetic 2025 rolling stats for drivers with no 2026 data
REGULATION_IMPACT = {
    "mercedes":    +18,   # dominant: Antonelli 4 wins, Russell 1 win
    "ferrari":     +10,   # strong: P3/P4 consistently
    "mclaren":     +5,    # competitive: P5/P6
    "red_bull":    -8,    # struggling: no wins, Verstappen P7
    "alpine":      +2,    # midfield gainers
    "rb":          +1,    # midfield
    "haas":        +3,    # Bearman showing pace
    "williams":    -2,    # still mid-low
    "audi":        -5,    # new team, 2 pts from 12 starts
    "cadillac":    -10,   # new team, 0 pts
    "aston_martin": -15,  # 0 pts, big step back
}


# ---------------------------------------------------------------------------
# Historical driver team mapping (for synthetic 2020-2025 data)
# ---------------------------------------------------------------------------
def _get_historical_team(driver: str, year: int) -> str:
    if driver == "hamilton":
        return "ferrari" if year >= 2025 else "mercedes"
    if driver == "bottas":
        return "sauber" if year >= 2022 else "mercedes"
    if driver == "antonelli":
        return "mercedes"
    mapping = {
        "max_verstappen": "red_bull", "norris": "mclaren", "leclerc": "ferrari",
        "piastri": "mclaren", "sainz": "ferrari" if year <= 2024 else "williams",
        "russell": "mercedes", "alonso": "aston_martin", "stroll": "aston_martin",
        "lawson": "rb", "albon": "williams", "colapinto": "alpine",
        "gasly": "alpine", "ocon": "haas", "bearman": "haas",
        "hulkenberg": "audi", "perez": "red_bull",
        # 2026 rookies — use midfield teams for any synthetic history
        "hadjar": "red_bull", "arvid_lindblad": "rb",
        "bortoleto": "audi",
    }
    return mapping.get(driver, "unknown")


# ---------------------------------------------------------------------------
# Synthetic data generation (2020-2025 historical context)
# ---------------------------------------------------------------------------
DRIVER_STRENGTHS_BY_YEAR = {
    2020: {
        "hamilton": 19.0, "max_verstappen": 16.5, "bottas": 15.5,
        "leclerc": 11.0, "perez": 10.5, "sainz": 10.0,
        "norris": 9.5, "albon": 8.5, "gasly": 8.0,
        "ocon": 7.5, "stroll": 8.0, "alonso": 6.0,
        "hulkenberg": 7.0, "magnussen": 5.5,
    },
    2021: {
        "max_verstappen": 19.5, "hamilton": 19.0, "bottas": 14.5,
        "perez": 12.0, "norris": 11.5, "leclerc": 11.0,
        "sainz": 10.5, "gasly": 8.5, "alonso": 9.0,
        "stroll": 7.5, "ocon": 8.0, "russell": 6.5,
        "hulkenberg": 7.0, "albon": 6.0,
    },
    2022: {
        "max_verstappen": 20.5, "leclerc": 15.5, "perez": 14.5,
        "russell": 13.0, "sainz": 12.5, "hamilton": 12.0,
        "norris": 10.5, "ocon": 8.5, "bottas": 8.0,
        "alonso": 9.5, "gasly": 7.5, "albon": 7.0,
        "stroll": 7.0, "hulkenberg": 7.5,
    },
    2023: {
        "max_verstappen": 22.0, "perez": 15.0, "alonso": 13.5,
        "hamilton": 13.0, "sainz": 12.5, "leclerc": 12.0,
        "norris": 12.5, "russell": 12.0, "stroll": 9.0,
        "piastri": 11.0, "gasly": 8.0, "ocon": 7.5,
        "albon": 7.0, "hulkenberg": 9.0, "bottas": 6.0,
        "lawson": 7.0,
    },
    2024: {
        "max_verstappen": 18.5, "norris": 16.5, "leclerc": 14.5,
        "piastri": 14.0, "sainz": 12.5, "hamilton": 12.0,
        "russell": 13.0, "perez": 11.0, "alonso": 10.0,
        "stroll": 7.5, "lawson": 7.5, "albon": 7.5,
        "gasly": 8.0, "ocon": 7.0, "hulkenberg": 9.0,
        "bottas": 5.5, "colapinto": 6.0,
    },
    2025: {
        # Pre-2026: Norris champion, Hamilton to Ferrari, Antonelli arrives
        "norris": 19.5, "max_verstappen": 17.5, "piastri": 16.0,
        "leclerc": 14.5, "hamilton": 14.0, "russell": 13.5,
        "antonelli": 11.0, "sainz": 10.5, "alonso": 10.0,
        "lawson": 8.0, "albon": 8.0, "gasly": 7.5,
        "colapinto": 6.5, "bearman": 6.0, "ocon": 6.5,
        "stroll": 7.0, "bottas": 5.0, "hulkenberg": 8.5,
        "perez": 6.0,
    },
}

ROUNDS_PER_YEAR = {2020: 17, 2021: 22, 2022: 22, 2023: 22, 2024: 24, 2025: 24}
CIRCUITS_POOL = [
    "bahrain", "jeddah", "albert_park", "suzuka", "shanghai", "miami", "imola",
    "monaco", "villeneuve", "catalunya", "red_bull_ring", "silverstone",
    "hungaroring", "spa", "zandvoort", "monza", "baku", "marina_bay",
    "americas", "rodriguez", "interlagos", "las_vegas", "losail", "yas_marina",
]


def _make_race_result(year: int, round_num: int, circuit: str, strengths: dict) -> list:
    rng = np.random.RandomState(year * 10000 + round_num)
    drivers = list(strengths.keys())
    s = np.array([strengths[d] for d in drivers])
    noise = rng.normal(0, 2.5, size=len(drivers))
    order = np.argsort(-(s + noise))
    rows = []
    for finish_pos, idx in enumerate(order, start=1):
        driver = drivers[idx]
        constructor = _get_historical_team(driver, year)
        grid_noise = rng.randint(-4, 5)
        rows.append({
            "year": year, "round": round_num, "circuit": circuit,
            "driver": driver, "constructor": constructor,
            "grid": max(1, min(len(drivers), finish_pos + grid_noise)),
            "position": finish_pos,
            "points": float(F1_POINTS.get(finish_pos, 0)),
            "status": "Finished" if finish_pos <= 16 else "DNF",
        })
    return rows


def generate_synthetic_data(seasons: list) -> pd.DataFrame:
    print("  Generating calibrated synthetic data for 2020-2025...")
    all_rows = []
    for year in seasons:
        strengths = DRIVER_STRENGTHS_BY_YEAR.get(year, DRIVER_STRENGTHS_BY_YEAR[2024])
        n_rounds = ROUNDS_PER_YEAR.get(year, 22)
        circuits = (CIRCUITS_POOL * 3)[:n_rounds]
        for rnd in range(1, n_rounds + 1):
            all_rows.extend(_make_race_result(year, rnd, circuits[rnd - 1], strengths))
        print(f"    {year}: {n_rounds} races, {len(strengths)} drivers")
    df = pd.DataFrame(all_rows)
    df["position"] = df["position"].astype(int)
    return df


# ---------------------------------------------------------------------------
# Data assembly: synthetic history + real 2026
# ---------------------------------------------------------------------------
def fetch_historical_data() -> tuple[pd.DataFrame, str, int]:
    df_hist = generate_synthetic_data(SEASONS)

    print("  Fetching real 2026 results from Jolpica...")
    df_2026 = fetch_jolpica_season(2026)

    if df_2026 is not None and len(df_2026) > 0:
        n_sessions = int(df_2026["round"].nunique())
        # Normalize Jolpica driver IDs to our internal IDs where they differ
        # (Jolpica uses "max_verstappen" which matches our LINEUP_2026)
        df_2026 = df_2026.copy()
        df_2026["position"] = pd.to_numeric(df_2026["position"], errors="coerce").fillna(20).astype(int)
        df_2026["grid"] = pd.to_numeric(df_2026["grid"], errors="coerce").fillna(20).astype(int)
        df_2026["points"] = pd.to_numeric(df_2026["points"], errors="coerce").fillna(0.0)
        df_2026["year"] = 2026
        # Also update the synthetic 2025 constructor assignments for known 2026 drivers
        df_combined = pd.concat([df_hist, df_2026], ignore_index=True)
        print(f"  Combined: synthetic 2020-2025 + {n_sessions} real 2026 races ({len(df_2026)} rows)")
        return df_combined, "jolpica", n_sessions

    print("  Jolpica returned no 2026 data — using synthetic only.")
    return df_hist, "synthetic", 0


# ---------------------------------------------------------------------------
# Feature engineering
# ---------------------------------------------------------------------------
def engineer_features(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()
    df["position"] = pd.to_numeric(df["position"], errors="coerce").fillna(20).astype(int)
    df = add_rolling_points(df)
    df = add_grid_vs_finish(df)
    df = add_constructor_rolling_points(df)
    return df


# ---------------------------------------------------------------------------
# Model training
# ---------------------------------------------------------------------------
def train_xgb_on_df(df: pd.DataFrame):
    import tempfile
    from sklearn.model_selection import GroupKFold
    from sklearn.metrics import mean_absolute_error
    import xgboost as xgb

    tmp = Path(tempfile.mktemp(suffix=".csv"))
    df.to_csv(tmp, index=False)
    train_df = load_data(str(tmp))
    X, y, groups = train_df[FEATURES], train_df["position"], train_df["year"]

    model = xgb.XGBRegressor(
        n_estimators=400, max_depth=5, learning_rate=0.05,
        subsample=0.8, colsample_bytree=0.8, random_state=42,
    )

    gkf = GroupKFold(n_splits=min(5, groups.nunique()))
    maes = []
    for fold, (tr, val) in enumerate(gkf.split(X, y, groups)):
        model.fit(X.iloc[tr], y.iloc[tr],
                  eval_set=[(X.iloc[val], y.iloc[val])], verbose=False)
        maes.append(mean_absolute_error(y.iloc[val], model.predict(X.iloc[val])))
        print(f"    Fold {fold+1} MAE: {maes[-1]:.3f}")

    cv_mae = float(np.mean(maes))
    print(f"  Mean CV MAE: {cv_mae:.3f}")
    model.fit(X, y)
    tmp.unlink(missing_ok=True)
    return model, cv_mae


# ---------------------------------------------------------------------------
# 2026 predictions — anchored on REAL current standings
# ---------------------------------------------------------------------------
def _build_driver_features_for_2026(
    historical_df: pd.DataFrame,
    real_standings: list,
) -> pd.DataFrame:
    """
    Build feature vector for each 2026 driver.
    Priority: real 2026 rolling stats → 2025 rolling stats adjusted by REGULATION_IMPACT.
    real_standings: list of dicts from fetch_jolpica_standings (driver_id, points, wins).
    """
    # Map real 2026 current points as a lookup
    real_pts_map = {s["driver_id"]: s["points"] for s in real_standings}

    # Get rolling features from actual 2026 race data if available
    df_2026 = historical_df[historical_df["year"] == 2026].copy()
    df_2025 = historical_df[historical_df["year"] == 2025].copy()

    driver_stats = {}
    for driver in LINEUP_2026:
        constructor = LINEUP_2026[driver]
        reg_delta = REGULATION_IMPACT.get(constructor, 0)
        adj_factor = 1.0 + reg_delta / 100.0

        # Try real 2026 data first
        rows_2026 = df_2026[df_2026["driver"] == driver]
        if len(rows_2026) > 0:
            last = rows_2026.sort_values("round").iloc[-1]
            driver_stats[driver] = {
                "grid": float(last.get("grid", 10) or 10),
                "driver_pts_rolling_3": float(last.get("driver_pts_rolling_3") or 3.0),
                "driver_pts_rolling_5": float(last.get("driver_pts_rolling_5") or 3.0),
                "constructor_pts_rolling_3": float(last.get("constructor_pts_rolling_3") or 5.0),
                "constructor_pts_rolling_5": float(last.get("constructor_pts_rolling_5") or 5.0),
            }
            continue

        # Fall back to 2025
        rows_2025 = df_2025[df_2025["driver"] == driver]
        if len(rows_2025) > 0:
            last = rows_2025.sort_values("round").iloc[-1]
            cp3 = float(last.get("constructor_pts_rolling_3") or 5.0) * adj_factor
            cp5 = float(last.get("constructor_pts_rolling_5") or 5.0) * adj_factor
            driver_stats[driver] = {
                "grid": float(last.get("grid", 10) or 10),
                "driver_pts_rolling_3": float(last.get("driver_pts_rolling_3") or 3.0),
                "driver_pts_rolling_5": float(last.get("driver_pts_rolling_5") or 3.0),
                "constructor_pts_rolling_3": cp3,
                "constructor_pts_rolling_5": cp5,
            }
            continue

        # Rookie or missing — estimate from regulation impact
        base_grid = 15 if reg_delta < -5 else (8 if reg_delta > 10 else 12)
        base_pts = max(0.5, 5.0 * adj_factor)
        driver_stats[driver] = {
            "grid": base_grid,
            "driver_pts_rolling_3": base_pts,
            "driver_pts_rolling_5": base_pts,
            "constructor_pts_rolling_3": base_pts * 2,
            "constructor_pts_rolling_5": base_pts * 2,
        }

    return pd.DataFrame([{"driver": d, **f} for d, f in driver_stats.items()])


def generate_2026_predictions(
    model,
    historical_df: pd.DataFrame,
    real_standings: list,
    n_completed: int,
) -> dict:
    """
    Returns driver_standings, constructor_standings, race_predictions.
    Completed races use REAL results; remaining races are forecast.
    """
    rng = np.random.RandomState(2026)

    driver_feats = _build_driver_features_for_2026(historical_df, real_standings)
    driver_feats = driver_feats.set_index("driver")
    X_pred = driver_feats[FEATURES]

    raw_positions = np.clip(model.predict(X_pred), 1.0, 22.0)
    order = np.argsort(raw_positions)
    reranked = np.empty_like(raw_positions)
    for rank, idx in enumerate(order):
        reranked[idx] = rank + 1

    driver_base_pos = {d: float(reranked[i]) for i, d in enumerate(driver_feats.index)}

    # --- Seed total points from REAL standings ---
    real_pts_map = {s["driver_id"]: s["points"] for s in real_standings}
    driver_total_points = {d: real_pts_map.get(d, 0.0) for d in LINEUP_2026}
    driver_race_positions = {d: [] for d in LINEUP_2026}

    NOISE_STD = 3.5
    race_results = []
    real_results_map = {}  # round -> real result for completed races

    # Pull real results for completed rounds
    df_2026 = historical_df[historical_df["year"] == 2026]
    for rnd in df_2026["round"].unique():
        r_df = df_2026[df_2026["round"] == rnd].sort_values("position")
        real_results_map[int(rnd)] = r_df

    for rnd, circuit_id, race_name, race_date, is_sprint in CALENDAR_2026:
        if rnd in real_results_map:
            # Use actual race result
            r_df = real_results_map[rnd]
            top5 = []
            for _, row in r_df.head(5).iterrows():
                d = row["driver"]
                if d in LINEUP_2026:
                    top5.append({
                        "driver_id": d,
                        "win_prob": round(1.0 / int(row["position"]), 4),
                    })
                    driver_race_positions[d].append(int(row["position"]))
            race_results.append({
                "round": rnd, "circuit_id": circuit_id,
                "name": race_name, "race_date": race_date,
                "is_sprint": is_sprint, "top5": top5, "completed": True,
            })
        else:
            # Forecast remaining races
            race_scores = {
                d: max(0.5, driver_base_pos[d] + rng.normal(0, NOISE_STD))
                for d in LINEUP_2026
            }
            sorted_drivers = sorted(race_scores, key=lambda d: race_scores[d])
            inv = {d: 1.0 / max(race_scores[d], 0.5) for d in sorted_drivers}
            total_inv = sum(inv.values())
            top5 = [
                {"driver_id": d, "win_prob": round(inv[d] / total_inv, 4)}
                for d in sorted_drivers[:5]
            ]
            for pos, drv in enumerate(sorted_drivers, 1):
                driver_total_points[drv] += float(F1_POINTS.get(pos, 0))
                driver_race_positions[drv].append(pos)
            race_results.append({
                "round": rnd, "circuit_id": circuit_id,
                "name": race_name, "race_date": race_date,
                "is_sprint": is_sprint, "top5": top5, "completed": False,
            })

    # --- Monte Carlo for race win probability + podium probability ---
    N_SIMS = 500
    championship_wins = {d: 0 for d in LINEUP_2026}
    race_wins_sim = {d: 0 for d in LINEUP_2026}
    driver_podiums_sim = {d: 0 for d in LINEUP_2026}
    n_remaining = len(CALENDAR_2026) - n_completed

    for sim in range(N_SIMS):
        sim_rng = np.random.RandomState(2026 + sim)
        season_pts = {d: real_pts_map.get(d, 0.0) for d in LINEUP_2026}
        for i, (rnd, _, __, ___, ____) in enumerate(CALENDAR_2026):
            if rnd in real_results_map:
                continue
            race_scores_sim = {
                d: max(0.5, driver_base_pos[d] + sim_rng.normal(0, NOISE_STD))
                for d in LINEUP_2026
            }
            sorted_sim = sorted(race_scores_sim, key=lambda d: race_scores_sim[d])
            for pos, drv in enumerate(sorted_sim, 1):
                season_pts[drv] += float(F1_POINTS.get(pos, 0))
            for drv in sorted_sim[:3]:
                driver_podiums_sim[drv] += 1
            race_wins_sim[sorted_sim[0]] += 1
        champion = max(season_pts, key=lambda d: season_pts[d])
        championship_wins[champion] += 1

    total_race_slots = N_SIMS * max(n_remaining, 1)
    # Real wins already secured this season
    real_wins_map = {s["driver_id"]: s.get("wins", 0) for s in real_standings}
    total_races = len(CALENDAR_2026)

    # --- Build standings ---
    driver_standings = []
    for driver in LINEUP_2026:
        avg_pos = float(np.mean(driver_race_positions[driver])) if driver_race_positions[driver] else 15.0
        real_wins = real_wins_map.get(driver, 0)
        avg_sim_wins = race_wins_sim[driver] / N_SIMS
        per_race_win_prob = (real_wins + avg_sim_wins) / total_races
        driver_standings.append({
            "driver_id": driver,
            "predicted_points": round(driver_total_points[driver], 1),
            "current_real_points": real_pts_map.get(driver, 0.0),
            "win_probability": round(per_race_win_prob, 4),
            "championship_win_probability": round(championship_wins[driver] / N_SIMS, 4),
            "podium_probability": round(driver_podiums_sim[driver] / total_race_slots, 4),
            "avg_predicted_position": round(avg_pos, 2),
        })
    driver_standings.sort(key=lambda x: -x["predicted_points"])
    for i, row in enumerate(driver_standings):
        row["rank"] = i + 1

    # --- Constructor standings ---
    constructor_pts = {}
    for row in driver_standings:
        team = LINEUP_2026[row["driver_id"]]
        constructor_pts[team] = constructor_pts.get(team, 0.0) + row["predicted_points"]

    constructor_standings = [
        {
            "constructor_id": team,
            "name": TEAM_NAMES[team],
            "color": TEAM_COLORS[team],
            "predicted_points": round(pts, 1),
            "rank": i + 1,
        }
        for i, (team, pts) in enumerate(sorted(constructor_pts.items(), key=lambda x: -x[1]))
    ]

    return {
        "driver_standings": driver_standings,
        "constructor_standings": constructor_standings,
        "race_predictions": race_results,
    }


# ---------------------------------------------------------------------------
# Historical stats for dashboard charts
# ---------------------------------------------------------------------------
def compute_historical_stats(df: pd.DataFrame) -> tuple:
    driver_pts, constructor_pts = {}, {}
    for year in SEASONS:
        yr = df[df["year"] == year]
        driver_pts[str(year)] = yr.groupby("driver")["points"].sum().astype(int).to_dict()
        constructor_pts[str(year)] = yr.groupby("constructor")["points"].sum().astype(int).to_dict()

    rolling_form = {}
    for driver in LINEUP_2026:
        seasons_list, pts_list, avg_list = [], [], []
        for year in SEASONS:
            yr = df[(df["year"] == year) & (df["driver"] == driver)]
            if len(yr) == 0:
                continue
            seasons_list.append(year)
            pts_list.append(int(yr["points"].sum()))
            avg_list.append(round(float(yr["position"].mean()), 1))
        rolling_form[driver] = {"seasons": seasons_list, "points": pts_list, "avg_finish": avg_list}

    return driver_pts, constructor_pts, rolling_form


# ---------------------------------------------------------------------------
# Dashboard writer
# ---------------------------------------------------------------------------
def build_driver_info() -> dict:
    info = {}
    for did, meta in DRIVER_META.items():
        team = LINEUP_2026.get(did, "unknown")
        info[did] = {
            "name": meta["name"], "short": meta["short"],
            "team": team, "team_name": TEAM_NAMES.get(team, team),
            "color": TEAM_COLORS.get(team, "#888"), "number": meta["number"],
        }
    return info


def write_dashboard_js(
    cv_mae: float,
    predictions: dict,
    historical_driver_pts: dict,
    historical_constructor_pts: dict,
    driver_rolling_form: dict,
    real_standings: list,
    constructor_real_standings: list,
    n_completed: int,
    output_path: Path,
) -> None:
    driver_info = build_driver_info()

    # Build real 2026 results section
    real_driver_standings_2026 = [
        {
            "position": s["position"],
            "driver_id": s["driver_id"],
            "points": s["points"],
            "wins": s["wins"],
            "constructor_id": s.get("constructor_id", LINEUP_2026.get(s["driver_id"], "unknown")),
        }
        for s in real_standings
    ]
    real_constructor_standings_2026 = [
        {"position": s["position"], "constructor_id": s["constructor_id"],
         "points": s["points"], "wins": s["wins"]}
        for s in constructor_real_standings
    ]

    data = {
        "generated_at": str(date.today()),
        "model_cv_mae": round(cv_mae, 3),
        "seasons_used": SEASONS,
        "races_completed_2026": n_completed,
        "data_source": "jolpica_real_2026",
        "driver_info": driver_info,
        "team_colors": TEAM_COLORS,
        # REAL current standings (what actually happened)
        "real_driver_standings_2026": real_driver_standings_2026,
        "real_constructor_standings_2026": real_constructor_standings_2026,
        # PREDICTED full-season standings (real pts for done races + forecast rest)
        "driver_standings_2026": predictions["driver_standings"],
        "constructor_standings_2026": predictions["constructor_standings"],
        "historical_driver_points": historical_driver_pts,
        "historical_constructor_points": historical_constructor_pts,
        "race_predictions": predictions["race_predictions"],
        "driver_rolling_form": driver_rolling_form,
        "regulation_impact_2026": {
            "description": (
                "2026 regulations: active aero (ManualDRS), smaller cars, "
                "revised 50/50 hybrid formula. Mercedes and Ferrari benefited "
                "most; Red Bull and Aston Martin struggling early."
            ),
            "constructor_competitiveness_change": REGULATION_IMPACT,
        },
    }

    output_path.parent.mkdir(parents=True, exist_ok=True)
    tmp = str(output_path) + ".tmp"
    Path(tmp).write_text(
        f"window.F1_DATA = {json.dumps(data, indent=2, ensure_ascii=False)};\n",
        encoding="utf-8",
    )
    Path(tmp).replace(output_path)
    print(f"  Wrote {output_path} ({output_path.stat().st_size // 1024} KB)")


# ---------------------------------------------------------------------------
# Pipeline entry point
# ---------------------------------------------------------------------------
def run_pipeline(output_path: str = "dashboard/data.js") -> None:
    print("=" * 60)
    print("F1 2026 Prediction Pipeline (real data edition)")
    print("=" * 60)

    print("\n[1/5] Fetching real 2026 data + synthetic 2020-2025 history...")
    df_raw, source, n_completed = fetch_historical_data()
    print(f"  Combined: {len(df_raw)} rows, {df_raw['year'].nunique()} seasons")
    print(f"  2026 source: {source} ({n_completed} races completed)")

    print("\n[2/5] Engineering features...")
    df_features = engineer_features(df_raw)
    features_path = PROJECT_ROOT / "data" / "processed" / "features.csv"
    features_path.parent.mkdir(parents=True, exist_ok=True)
    df_features.to_csv(features_path, index=False)

    print("\n[3/5] Training XGBoost model...")
    model, cv_mae = train_xgb_on_df(df_features)

    print("\n[4/5] Fetching real 2026 standings + generating predictions...")
    from data.fetch_jolpica import fetch_jolpica_standings
    real_drv, real_con = fetch_jolpica_standings(2026)
    print(f"  Real standings: {len(real_drv)} drivers, {len(real_con)} constructors")
    if real_drv:
        print(f"  Current leader: {real_drv[0]['driver_id']} ({real_drv[0]['points']} pts, {real_drv[0]['wins']} wins)")

    predictions = generate_2026_predictions(model, df_features, real_drv, n_completed)

    print("\n[5/5] Computing historical stats + writing dashboard...")
    hist_drv, hist_con, rolling = compute_historical_stats(df_features)
    out = PROJECT_ROOT / output_path
    write_dashboard_js(cv_mae, predictions, hist_drv, hist_con, rolling,
                       real_drv, real_con, n_completed, out)

    print("\n" + "=" * 60)
    top = predictions["driver_standings"][0]
    print(f"  Predicted champion: {DRIVER_META[top['driver_id']]['name']} "
          f"({top['predicted_points']:.0f} pts, win prob {top['win_probability']:.1%})")
    if real_drv:
        print(f"  Current real leader: {real_drv[0]['driver_id']} ({real_drv[0]['points']} pts)")
    print(f"  CV MAE: {cv_mae:.3f} positions")
    print("=" * 60)


if __name__ == "__main__":
    run_pipeline()
