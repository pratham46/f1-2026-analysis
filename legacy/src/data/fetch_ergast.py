"""Fetch historical race results from the Ergast API."""
import os
import requests
import pandas as pd
from pathlib import Path

BASE_URL = os.getenv("ERGAST_API_BASE", "http://ergast.com/api/f1")
OUT_DIR = Path("data/raw")


def fetch_season_results(year: int) -> pd.DataFrame:
    url = f"{BASE_URL}/{year}/results.json?limit=1000"
    r = requests.get(url, timeout=30)
    r.raise_for_status()
    races = r.json()["MRData"]["RaceTable"]["Races"]
    rows = []
    for race in races:
        for result in race["Results"]:
            rows.append({
                "year": year,
                "round": race["round"],
                "circuit": race["Circuit"]["circuitId"],
                "driver": result["Driver"]["driverId"],
                "constructor": result["Constructor"]["constructorId"],
                "grid": int(result["grid"]),
                "position": result.get("position"),
                "points": float(result["points"]),
                "status": result["status"],
            })
    return pd.DataFrame(rows)


def fetch_multiple_seasons(start: int, end: int) -> pd.DataFrame:
    frames = []
    for year in range(start, end + 1):
        print(f"Fetching {year}...")
        frames.append(fetch_season_results(year))
    return pd.concat(frames, ignore_index=True)


if __name__ == "__main__":
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    df = fetch_multiple_seasons(2018, 2025)
    out = OUT_DIR / "ergast_results_2018_2025.csv"
    df.to_csv(out, index=False)
    print(f"Saved {len(df)} rows to {out}")
