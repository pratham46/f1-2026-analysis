"""
Fetch F1 race data for seasons 2020–2026.

Data source strategy (per skill spec):
  - 2023–2026: OpenF1 API (primary)  → Jolpica fallback → synthetic fallback
  - 2020–2022: Jolpica/Ergast API    → synthetic fallback

Outputs:
  data/processed/features.csv   — engineered features, ready for model training

Run:
    python src/data/fetch_all_seasons.py
"""

from __future__ import annotations

import sys
import warnings
from pathlib import Path

import numpy as np
import pandas as pd
import requests

warnings.filterwarnings("ignore")

PROJECT_ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(PROJECT_ROOT / "src"))

from features.build_features import (
    add_rolling_points,
    add_grid_vs_finish,
    add_constructor_rolling_points,
)

# ---------------------------------------------------------------------------
# Constants
# ---------------------------------------------------------------------------
OPENF1_BASE = "https://api.openf1.org/v1"
JOLPICA_BASE = "https://api.jolpi.ca/ergast/f1"
ERGAST_BASE  = "http://ergast.com/api/f1"

TIMEOUT = 20

F1_POINTS = {1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 6: 8, 7: 6, 8: 4, 9: 2, 10: 1}

ACRONYM_MAP = {
    "VER": "verstappen",    "NOR": "norris",      "LEC": "leclerc",
    "PIA": "piastri",       "SAI": "sainz",       "HAM": "hamilton",
    "RUS": "russell",       "ANT": "antonelli",   "ALO": "alonso",
    "STR": "stroll",        "TSU": "tsunoda",     "LAW": "lawson",
    "ALB": "albon",         "COL": "colapinto",   "GAS": "gasly",
    "OCO": "ocon",          "BEA": "bearman",     "HUL": "hulkenberg",
    "BOT": "bottas",        "MAG": "magnussen",   "PER": "perez",
    "VET": "vettel",        "RAI": "raikkonen",
}

CONSTRUCTOR_KEYWORDS = [
    ("red bull", "red_bull"), ("ferrari", "ferrari"), ("mclaren", "mclaren"),
    ("mercedes", "mercedes"), ("aston", "aston_martin"), ("williams", "williams"),
    ("alpine", "alpine"), ("haas", "haas"),
    ("sauber", "sauber"), ("audi", "sauber"), ("stake", "sauber"),
    ("racing bull", "rb"), ("visa cash app", "rb"), ("vcarb", "rb"),
    ("alphatauri", "rb"), ("rb", "rb"),
    ("cadillac", "cadillac"),
]

UNIFIED_COLUMNS = [
    "year", "round", "circuit", "driver", "constructor",
    "grid", "position", "points", "status",
]

# Synthetic data calibration (used as fallback for any unavailable season)
DRIVER_STRENGTHS_BY_YEAR = {
    2020: {
        "hamilton": 19.0, "verstappen": 16.5, "bottas": 15.5,
        "leclerc": 11.0, "perez": 10.5, "sainz": 10.0,
        "norris": 9.5, "albon": 8.5, "gasly": 8.0,
        "ocon": 7.5, "stroll": 8.0, "alonso": 6.0,
        "hulkenberg": 7.0, "magnussen": 5.5,
    },
    2021: {
        "verstappen": 19.5, "hamilton": 19.0, "bottas": 14.5,
        "perez": 12.0, "norris": 11.5, "leclerc": 11.0,
        "sainz": 10.5, "gasly": 8.5, "alonso": 9.0,
        "stroll": 7.5, "ocon": 8.0, "russell": 6.5,
        "hulkenberg": 7.0, "albon": 6.0,
    },
    2022: {
        "verstappen": 20.5, "leclerc": 15.5, "perez": 14.5,
        "russell": 13.0, "sainz": 12.5, "hamilton": 12.0,
        "norris": 10.5, "ocon": 8.5, "bottas": 8.0,
        "alonso": 9.5, "gasly": 7.5, "albon": 7.0,
        "stroll": 7.0, "hulkenberg": 7.5,
    },
    2023: {
        "verstappen": 22.0, "perez": 15.0, "alonso": 13.5,
        "hamilton": 13.0, "sainz": 12.5, "leclerc": 12.0,
        "norris": 12.5, "russell": 12.0, "stroll": 9.0,
        "piastri": 11.0, "gasly": 8.0, "ocon": 7.5,
        "albon": 7.0, "hulkenberg": 9.0, "bottas": 6.0,
        "lawson": 7.0,
    },
    2024: {
        "verstappen": 18.5, "norris": 16.5, "leclerc": 14.5,
        "piastri": 14.0, "sainz": 12.5, "hamilton": 12.0,
        "russell": 13.0, "perez": 11.0, "alonso": 10.0,
        "stroll": 7.5, "lawson": 7.5, "albon": 7.5,
        "gasly": 8.0, "ocon": 7.0, "hulkenberg": 9.0,
        "bottas": 5.5, "colapinto": 6.0,
    },
    2025: {
        "norris": 19.5, "verstappen": 17.5, "piastri": 16.0,
        "leclerc": 14.5, "hamilton": 14.0, "russell": 13.5,
        "antonelli": 11.0, "sainz": 10.5, "alonso": 10.0,
        "lawson": 8.0, "albon": 8.0, "gasly": 7.5,
        "colapinto": 6.5, "bearman": 6.0, "ocon": 6.5,
        "stroll": 7.0, "bottas": 5.0, "hulkenberg": 8.5,
        "perez": 6.0,
    },
    2026: {
        "antonelli": 20.0, "russell": 17.0, "leclerc": 14.0, "hamilton": 13.0,
        "norris": 12.0, "piastri": 11.5, "verstappen": 10.0,
        "hadjar": 6.0, "bearman": 7.5, "ocon": 6.0,
        "sainz": 8.0, "albon": 7.0, "gasly": 6.5, "colapinto": 6.0,
        "lawson": 5.5, "hulkenberg": 5.0, "bortoleto": 4.0,
        "bottas": 3.5, "perez": 3.0, "stroll": 4.0, "alonso": 8.5,
        "arvid_lindblad": 5.0,
    },
}

ROUNDS_PER_YEAR = {2020: 17, 2021: 22, 2022: 22, 2023: 22, 2024: 24, 2025: 24, 2026: 22}

CIRCUITS_POOL = [
    "bahrain", "jeddah", "albert_park", "suzuka", "shanghai", "miami", "imola",
    "monaco", "villeneuve", "catalunya", "red_bull_ring", "silverstone",
    "hungaroring", "spa", "zandvoort", "monza", "baku", "marina_bay",
    "americas", "rodriguez", "interlagos", "las_vegas", "losail", "yas_marina",
]

HISTORICAL_TEAMS: dict[str, dict[int, str]] = {
    "hamilton":     {y: ("ferrari" if y >= 2025 else "mercedes") for y in range(2020, 2027)},
    "bottas":       {y: ("sauber"  if y >= 2022 else "mercedes") for y in range(2020, 2027)},
    "verstappen":   {y: "red_bull"    for y in range(2020, 2027)},
    "norris":       {y: "mclaren"     for y in range(2020, 2027)},
    "leclerc":      {y: "ferrari"     for y in range(2020, 2027)},
    "piastri":      {y: "mclaren"     for y in range(2020, 2027)},
    "sainz":        {y: ("williams" if y >= 2025 else "ferrari") for y in range(2020, 2027)},
    "russell":      {y: "mercedes"    for y in range(2020, 2027)},
    "alonso":       {y: "aston_martin" for y in range(2020, 2027)},
    "stroll":       {y: "aston_martin" for y in range(2020, 2027)},
    "lawson":       {y: "rb"          for y in range(2020, 2027)},
    "albon":        {y: "williams"    for y in range(2020, 2027)},
    "colapinto":    {y: "alpine"      for y in range(2020, 2027)},
    "gasly":        {y: "alpine"      for y in range(2020, 2027)},
    "ocon":         {y: "haas"        for y in range(2020, 2027)},
    "bearman":      {y: "haas"        for y in range(2020, 2027)},
    "hulkenberg":   {y: "audi"        for y in range(2020, 2027)},
    "perez":        {y: "red_bull"    for y in range(2020, 2027)},
    "antonelli":    {y: "mercedes"    for y in range(2020, 2027)},
    "hadjar":       {y: "red_bull"    for y in range(2020, 2027)},
    "arvid_lindblad": {y: "rb"        for y in range(2020, 2027)},
    "bortoleto":    {y: "audi"        for y in range(2020, 2027)},
    "magnussen":    {y: "haas"        for y in range(2020, 2027)},
    "tsunoda":      {y: "rb"          for y in range(2020, 2027)},
}


def _get_team(driver: str, year: int) -> str:
    return HISTORICAL_TEAMS.get(driver, {}).get(year, "unknown")


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
def empty_frame() -> pd.DataFrame:
    return pd.DataFrame(columns=UNIFIED_COLUMNS)


def _team_to_constructor(team_name: str | None) -> str:
    if not team_name:
        return "unknown"
    name = team_name.strip().lower()
    for keyword, cid in CONSTRUCTOR_KEYWORDS:
        if keyword in name:
            return cid
    return "unknown"


# ---------------------------------------------------------------------------
# OpenF1 fetcher (2023–2026)
# ---------------------------------------------------------------------------
def _of1_get(path: str, params: dict) -> list:
    try:
        r = requests.get(f"{OPENF1_BASE}/{path}", params=params, timeout=TIMEOUT)
        r.raise_for_status()
        data = r.json()
        return data if isinstance(data, list) else []
    except Exception as exc:
        print(f"    [openf1] GET {path} failed: {type(exc).__name__}: {exc}")
        return []


def _openf1_season(year: int) -> pd.DataFrame:
    sessions = _of1_get("sessions", {"year": year, "session_type": "Race"})
    sessions = [s for s in sessions if s.get("session_key")]
    sessions.sort(key=lambda s: s.get("date_start") or "")
    if not sessions:
        print(f"    [openf1] no Race sessions for {year}")
        return empty_frame()

    print(f"    [openf1] {len(sessions)} race session(s) for {year}")
    all_rows: list = []

    for round_num, session in enumerate(sessions, start=1):
        sk = session["session_key"]
        circuit = (session.get("circuit_short_name") or "unknown").strip().lower().replace(" ", "_")

        positions = _of1_get("position", {"session_key": sk})
        drivers_meta = _of1_get("drivers", {"session_key": sk})

        # Latest position per driver_number
        latest: dict = {}
        for entry in positions:
            dn = entry.get("driver_number")
            pos = entry.get("position")
            when = entry.get("date") or ""
            if dn is None or pos is None:
                continue
            prev = latest.get(dn)
            if prev is None or when >= prev["date"]:
                latest[dn] = {"position": int(pos), "date": when}

        # Driver number → meta
        meta: dict = {}
        for d in drivers_meta:
            dn = d.get("driver_number")
            if dn is not None:
                meta[dn] = {
                    "acronym": (d.get("name_acronym") or "").upper(),
                    "team_name": d.get("team_name"),
                }

        if not latest:
            print(f"    [openf1] round {round_num} ({circuit}): no position data — skipping")
            continue

        rows = []
        for dn, pdata in sorted(latest.items(), key=lambda kv: kv[1]["position"]):
            position = pdata["position"]
            info = meta.get(dn, {})
            acronym = info.get("acronym", "")
            driver_id = ACRONYM_MAP.get(acronym, acronym.lower() if acronym else f"driver_{dn}")
            constructor = _team_to_constructor(info.get("team_name"))
            rows.append({
                "year": year, "round": round_num, "circuit": circuit,
                "driver": driver_id, "constructor": constructor,
                "grid": int(position),
                "position": str(int(position)),
                "points": float(F1_POINTS.get(int(position), 0)),
                "status": "Finished",
            })

        print(f"    [openf1] round {round_num} {circuit}: {len(rows)} drivers")
        all_rows.extend(rows)

    if not all_rows:
        return empty_frame()
    return pd.DataFrame(all_rows, columns=UNIFIED_COLUMNS)


# ---------------------------------------------------------------------------
# Jolpica/Ergast fetcher (2020–2022, fallback for 2023–2026)
# ---------------------------------------------------------------------------
def _jolpica_season(year: int) -> pd.DataFrame:
    try:
        r = requests.get(f"{JOLPICA_BASE}/{year}/results.json?limit=1000", timeout=TIMEOUT)
        r.raise_for_status()
        races = r.json().get("MRData", {}).get("RaceTable", {}).get("Races", [])
    except Exception as exc:
        print(f"    [jolpica] {year} failed: {exc}")
        return empty_frame()

    if not races:
        # Try legacy Ergast endpoint
        return _ergast_season(year)

    rows = []
    for race in races:
        rnd = int(race["round"])
        circuit = race["Circuit"]["circuitId"]
        for res in race.get("Results", []):
            try:
                pos = int(res["position"])
            except (ValueError, TypeError):
                pos = 20
            rows.append({
                "year": year, "round": rnd, "circuit": circuit,
                "driver": res["Driver"]["driverId"],
                "constructor": res["Constructor"]["constructorId"],
                "grid": int(res.get("grid") or pos),
                "position": str(pos),
                "points": float(res.get("points") or 0),
                "status": res.get("status", "Finished"),
            })

    print(f"    [jolpica] {year}: {len(races)} races, {len(rows)} rows")
    return pd.DataFrame(rows, columns=UNIFIED_COLUMNS) if rows else empty_frame()


def _ergast_season(year: int) -> pd.DataFrame:
    try:
        r = requests.get(f"{ERGAST_BASE}/{year}/results.json?limit=1000", timeout=10)
        r.raise_for_status()
        races = r.json().get("MRData", {}).get("RaceTable", {}).get("Races", [])
    except Exception as exc:
        print(f"    [ergast] {year} failed: {exc}")
        return empty_frame()

    if not races:
        return empty_frame()

    rows = []
    for race in races:
        rnd = int(race["round"])
        circuit = race["Circuit"]["circuitId"]
        for res in race.get("Results", []):
            try:
                pos = int(res["position"])
            except (ValueError, TypeError):
                pos = 20
            rows.append({
                "year": year, "round": rnd, "circuit": circuit,
                "driver": res["Driver"]["driverId"],
                "constructor": res["Constructor"]["constructorId"],
                "grid": int(res.get("grid") or pos),
                "position": str(pos),
                "points": float(res.get("points") or 0),
                "status": res.get("status", "Finished"),
            })

    print(f"    [ergast] {year}: {len(races)} races, {len(rows)} rows")
    return pd.DataFrame(rows, columns=UNIFIED_COLUMNS) if rows else empty_frame()


# ---------------------------------------------------------------------------
# Synthetic fallback
# ---------------------------------------------------------------------------
def _synthetic_season(year: int) -> pd.DataFrame:
    strengths = DRIVER_STRENGTHS_BY_YEAR.get(year, DRIVER_STRENGTHS_BY_YEAR[2025])
    n_rounds = ROUNDS_PER_YEAR.get(year, 22)
    circuits = (CIRCUITS_POOL * 3)[:n_rounds]
    rng = np.random.RandomState(year * 9999)
    drivers = list(strengths.keys())
    s_arr = np.array([strengths[d] for d in drivers])

    all_rows = []
    for rnd in range(1, n_rounds + 1):
        noise = rng.normal(0, 2.5, size=len(drivers))
        order = np.argsort(-(s_arr + noise))
        for finish_pos, idx in enumerate(order, start=1):
            drv = drivers[idx]
            constructor = _get_team(drv, year)
            grid_delta = rng.randint(-4, 5)
            all_rows.append({
                "year": year, "round": rnd, "circuit": circuits[rnd - 1],
                "driver": drv, "constructor": constructor,
                "grid": max(1, min(len(drivers), finish_pos + grid_delta)),
                "position": str(finish_pos),
                "points": float(F1_POINTS.get(finish_pos, 0)),
                "status": "Finished" if finish_pos <= 16 else "DNF",
            })

    print(f"    [synthetic] {year}: {n_rounds} races, {len(drivers)} drivers")
    return pd.DataFrame(all_rows, columns=UNIFIED_COLUMNS)


# ---------------------------------------------------------------------------
# Main dispatcher
# ---------------------------------------------------------------------------
def fetch_season(year: int) -> tuple[pd.DataFrame, str]:
    """
    Returns (df, source_label).
    2023–2026: OpenF1 → Jolpica → synthetic
    2020–2022: Jolpica → Ergast → synthetic
    """
    if year >= 2023:
        print(f"  [{year}] Trying OpenF1...")
        df = _openf1_season(year)
        if len(df) > 0:
            return df, "openf1"
        print(f"  [{year}] OpenF1 empty — trying Jolpica...")
        df = _jolpica_season(year)
        if len(df) > 0:
            return df, "jolpica"
        print(f"  [{year}] Jolpica empty — using synthetic fallback.")
        return _synthetic_season(year), "synthetic"
    else:
        print(f"  [{year}] Trying Jolpica/Ergast...")
        df = _jolpica_season(year)
        if len(df) > 0:
            return df, "jolpica"
        print(f"  [{year}] Jolpica/Ergast empty — using synthetic fallback.")
        return _synthetic_season(year), "synthetic"


# ---------------------------------------------------------------------------
# Pipeline
# ---------------------------------------------------------------------------
def run() -> None:
    print("=" * 60)
    print("F1 Data Fetch: seasons 2020–2026")
    print("=" * 60)

    seasons = list(range(2020, 2027))
    frames: list[pd.DataFrame] = []
    source_report: list[str] = []
    gaps: list[str] = []

    for year in seasons:
        print(f"\n--- {year} ---")
        df, source = fetch_season(year)
        frames.append(df)
        n_races = int(df["round"].nunique()) if len(df) > 0 else 0
        source_report.append(f"  {year}: {source} ({n_races} races, {len(df)} rows)")
        if n_races == 0:
            gaps.append(f"{year}: 0 races")
        elif source == "synthetic":
            gaps.append(f"{year}: synthetic (no API data available)")

    df_all = pd.concat(frames, ignore_index=True)
    print(f"\n[Raw combined] {len(df_all)} rows, "
          f"{df_all['year'].nunique()} seasons, "
          f"{df_all['round'].nunique()} unique round numbers")

    # Normalise position to int for feature engineering (grid_vs_finish needs numeric)
    df_all["position"] = pd.to_numeric(df_all["position"], errors="coerce").fillna(20).astype(int)
    df_all["grid"]     = pd.to_numeric(df_all["grid"],     errors="coerce").fillna(20).astype(int)
    df_all["points"]   = pd.to_numeric(df_all["points"],   errors="coerce").fillna(0.0)

    # Feature engineering
    print("\n[Feature engineering]")
    df_feat = add_rolling_points(df_all, windows=[3, 5])
    df_feat = add_grid_vs_finish(df_feat)
    df_feat = add_constructor_rolling_points(df_feat, windows=[3, 5])

    # Validate
    required_cols = ["grid", "driver_pts_rolling_3", "driver_pts_rolling_5",
                     "constructor_pts_rolling_3", "constructor_pts_rolling_5"]
    null_counts = {c: int(df_feat[c].isna().sum()) for c in
                   ["year", "round", "driver", "constructor", "grid", "points"]}
    assert len(df_feat) > 100, f"Row count too low: {len(df_feat)}"
    assert all(required_cols[i] in df_feat.columns for i in range(len(required_cols))), \
        "Missing required feature columns"

    # Save
    out_path = PROJECT_ROOT / "data" / "processed" / "features.csv"
    out_path.parent.mkdir(parents=True, exist_ok=True)
    df_feat.to_csv(out_path, index=False)

    # Report
    print("\n" + "=" * 60)
    print("REPORT")
    print("=" * 60)
    print(f"Total rows        : {len(df_feat)}")
    print(f"Seasons covered   : {sorted(df_feat['year'].unique().tolist())}")
    print(f"Total rounds      : {df_feat.groupby('year')['round'].nunique().to_dict()}")
    print(f"Unique drivers    : {df_feat['driver'].nunique()}")
    print(f"Columns           : {list(df_feat.columns)}")
    print(f"Output            : {out_path}")
    print("\nPer-season source:")
    for line in source_report:
        print(line)
    print("\nNull counts (key cols):", null_counts)
    if gaps:
        print("\nGaps / warnings:")
        for g in gaps:
            print(f"  ! {g}")
    else:
        print("\nNo gaps detected.")
    print("=" * 60)


if __name__ == "__main__":
    run()
