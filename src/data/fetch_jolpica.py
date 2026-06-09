"""
Fetch real 2026 F1 data from Jolpica (Ergast-compatible mirror).
API: https://api.jolpi.ca/ergast/f1/

Provides the unified race-result schema used by the pipeline:
    year, round, circuit, driver, constructor, grid, position, points, status

Public API:
    fetch_jolpica_season(year) -> pd.DataFrame
    fetch_jolpica_standings(year) -> (driver_standings_list, constructor_standings_list)
"""
from __future__ import annotations

import time
import requests
import pandas as pd

BASE = "https://api.jolpi.ca/ergast/f1"
TIMEOUT = 15

UNIFIED_COLUMNS = [
    "year", "round", "circuit", "driver", "constructor",
    "grid", "position", "points", "status",
]

F1_POINTS = {1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 6: 8, 7: 6, 8: 4, 9: 2, 10: 1}


def empty_frame() -> pd.DataFrame:
    return pd.DataFrame(columns=UNIFIED_COLUMNS)


def _get(path: str) -> dict:
    r = requests.get(f"{BASE}/{path}", timeout=TIMEOUT)
    r.raise_for_status()
    return r.json().get("MRData", {})


def fetch_jolpica_season(year: int) -> pd.DataFrame:
    """Return all completed race results for `year` in unified schema."""
    try:
        data = _get(f"{year}/results.json?limit=1000")
    except Exception as exc:
        print(f"  [jolpica] results fetch failed: {exc}")
        return empty_frame()

    races = data.get("RaceTable", {}).get("Races", [])
    if not races:
        print(f"  [jolpica] no {year} race results.")
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
                "year": year,
                "round": rnd,
                "circuit": circuit,
                "driver": res["Driver"]["driverId"],
                "constructor": res["Constructor"]["constructorId"],
                "grid": int(res.get("grid") or pos),
                "position": pos,
                "points": float(res.get("points") or 0),
                "status": res.get("status", "Finished"),
            })

    print(f"  [jolpica] {year}: {len(races)} races, {len(rows)} rows")
    return pd.DataFrame(rows, columns=UNIFIED_COLUMNS)


def fetch_jolpica_standings(year: int) -> tuple[list, list]:
    """
    Returns (driver_standings, constructor_standings) as lists of dicts
    with keys: position, driver_id/constructor_id, points, wins.
    """
    driver_list, constructor_list = [], []
    try:
        data = _get(f"{year}/driverStandings.json")
        sl = data.get("StandingsTable", {}).get("StandingsLists", [])
        if sl:
            for s in sl[0]["DriverStandings"]:
                driver_list.append({
                    "position": int(s["position"]),
                    "driver_id": s["Driver"]["driverId"],
                    "points": float(s["points"]),
                    "wins": int(s["wins"]),
                    "constructor_id": s["Constructors"][0]["constructorId"] if s.get("Constructors") else "unknown",
                })
    except Exception as exc:
        print(f"  [jolpica] driver standings failed: {exc}")

    try:
        data = _get(f"{year}/constructorStandings.json")
        sl = data.get("StandingsTable", {}).get("StandingsLists", [])
        if sl:
            for s in sl[0]["ConstructorStandings"]:
                constructor_list.append({
                    "position": int(s["position"]),
                    "constructor_id": s["Constructor"]["constructorId"],
                    "points": float(s["points"]),
                    "wins": int(s["wins"]),
                })
    except Exception as exc:
        print(f"  [jolpica] constructor standings failed: {exc}")

    return driver_list, constructor_list


if __name__ == "__main__":
    df = fetch_jolpica_season(2026)
    print(f"\n{len(df)} rows across {df['round'].nunique()} races")
    drv, con = fetch_jolpica_standings(2026)
    print("\nDriver standings:")
    for s in drv[:10]:
        print(f"  P{s['position']:2d}  {s['driver_id']:20s}  {s['points']:6.0f} pts  {s['wins']}W")
