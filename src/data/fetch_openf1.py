"""
Fetch 2026 F1 race data from the OpenF1 API and normalize it to the
unified race-result schema used by the rest of the pipeline.

Unified schema (one row per driver per race):
    year, round, circuit, driver, constructor, grid, position, points, status

Usage (standalone smoke test):
    python src/data/fetch_openf1.py

Public entrypoint:
    fetch_openf1_season(year=2026) -> pandas.DataFrame
        Returns a DataFrame in the unified schema, or an EMPTY DataFrame
        (with the correct columns) if no sessions are available or the API
        cannot be reached. Never raises on network/API issues — callers
        decide whether to fall back to synthetic data.
"""

from __future__ import annotations

import time
from typing import Optional

import pandas as pd
import requests

# OpenF1 publishes under openf1.org which redirects to api.openf1.org.
# requests follows redirects by default, but we target the API host directly
# to avoid an extra hop / redirect edge cases.
OPENF1_BASE = "https://api.openf1.org/v1"

REQUEST_TIMEOUT = 20  # seconds

# Standard F1 points for finishing positions 1-10 (no fastest-lap bonus here:
# OpenF1 position endpoint does not expose fastest lap reliably).
F1_POINTS = {1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 6: 8, 7: 6, 8: 4, 9: 2, 10: 1}

# Map OpenF1 name_acronym -> internal driver_id (lowercase surname).
ACRONYM_MAP = {
    "VER": "verstappen", "NOR": "norris", "LEC": "leclerc", "PIA": "piastri",
    "SAI": "sainz", "HAM": "hamilton", "RUS": "russell", "ANT": "antonelli",
    "ALO": "alonso", "STR": "stroll", "TSU": "tsunoda", "LAW": "lawson",
    "ALB": "albon", "COL": "colapinto", "GAS": "gasly", "OCO": "ocon",
    "BEA": "bearman", "HUL": "hulkenberg", "BOT": "bottas", "MAG": "magnussen",
    "PER": "perez", "VET": "vettel", "RAI": "raikkonen",  # historical
}

# Map an OpenF1 team_name (free text) to an internal constructor_id.
# Matching is done on a lowercased substring basis (see _team_to_constructor).
CONSTRUCTOR_KEYWORDS = [
    ("red bull", "red_bull"),
    ("ferrari", "ferrari"),
    ("mclaren", "mclaren"),
    ("mercedes", "mercedes"),
    ("aston", "aston_martin"),
    ("williams", "williams"),
    ("alpine", "alpine"),
    ("haas", "haas"),
    # Kick Sauber / Audi / Stake all map to "sauber"
    ("sauber", "sauber"),
    ("audi", "sauber"),
    ("stake", "sauber"),
    # RB / Racing Bulls / VCARB / AlphaTauri -> "rb"
    ("racing bull", "rb"),
    ("visa cash app", "rb"),
    ("vcarb", "rb"),
    ("alphatauri", "rb"),
    ("rb", "rb"),
    # Cadillac is a new-for-2026 team; map to its own id so it is never dropped.
    ("cadillac", "cadillac"),
]

UNIFIED_COLUMNS = [
    "year", "round", "circuit", "driver", "constructor",
    "grid", "position", "points", "status",
]


def empty_frame() -> pd.DataFrame:
    """Return an empty DataFrame with the unified-schema columns."""
    return pd.DataFrame(columns=UNIFIED_COLUMNS)


def _team_to_constructor(team_name: Optional[str]) -> str:
    if not team_name:
        return "unknown"
    name = team_name.strip().lower()
    for keyword, constructor_id in CONSTRUCTOR_KEYWORDS:
        if keyword in name:
            return constructor_id
    return "unknown"


def _points_for_position(pos: int) -> float:
    return float(F1_POINTS.get(pos, 0))


def _get(path: str, params: dict) -> list:
    """GET a JSON list from OpenF1; returns [] on any non-200 / error."""
    url = f"{OPENF1_BASE}/{path}"
    resp = requests.get(url, params=params, timeout=REQUEST_TIMEOUT)
    resp.raise_for_status()
    data = resp.json()
    return data if isinstance(data, list) else []


def fetch_race_sessions(year: int) -> list:
    """Return 2026 Race sessions ordered by date_start (earliest first)."""
    sessions = _get("sessions", {"year": year, "session_type": "Race"})
    sessions = [s for s in sessions if s.get("session_key") is not None]
    sessions.sort(key=lambda s: s.get("date_start") or "")
    return sessions


def _final_positions(session_key: int) -> dict:
    """
    Map driver_number -> final classified position for a session.
    Takes the LAST position entry per driver_number (latest 'date').
    """
    positions = _get("position", {"session_key": session_key})
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
    return {dn: v["position"] for dn, v in latest.items()}


def _driver_meta(session_key: int) -> dict:
    """Map driver_number -> {acronym, team_name, full_name} for a session."""
    drivers = _get("drivers", {"session_key": session_key})
    meta: dict = {}
    for d in drivers:
        dn = d.get("driver_number")
        if dn is None:
            continue
        meta[dn] = {
            "acronym": (d.get("name_acronym") or "").upper(),
            "team_name": d.get("team_name"),
            "full_name": d.get("full_name"),
        }
    return meta


def _normalize_session(session: dict, round_num: int) -> list:
    """Build unified-schema rows for a single race session."""
    session_key = session["session_key"]
    circuit_raw = session.get("circuit_short_name") or "unknown"
    circuit = circuit_raw.strip().lower().replace(" ", "_")

    final_pos = _final_positions(session_key)
    meta = _driver_meta(session_key)
    if not final_pos or not meta:
        return []

    rows = []
    for driver_number, position in sorted(final_pos.items(), key=lambda kv: kv[1]):
        info = meta.get(driver_number, {})
        acronym = info.get("acronym", "")
        driver_id = ACRONYM_MAP.get(acronym)
        if driver_id is None:
            # Unknown acronym: fall back to lowercased acronym so we don't
            # silently drop a classified driver.
            driver_id = acronym.lower() if acronym else f"driver_{driver_number}"

        constructor = _team_to_constructor(info.get("team_name"))

        rows.append({
            "year": int(session.get("year", 2026)),
            "round": round_num,
            "circuit": circuit,
            "driver": driver_id,
            "constructor": constructor,
            # OpenF1 position endpoint does not expose grid; use final position
            # as a proxy (per spec).
            "grid": int(position),
            "position": str(int(position)),
            "points": _points_for_position(int(position)),
            "status": "Finished",
        })
    return rows


def fetch_openf1_season(year: int = 2026, polite_delay: float = 0.0) -> pd.DataFrame:
    """
    Fetch all completed Race sessions for `year` from OpenF1 and return a
    unified-schema DataFrame. Returns an EMPTY frame (correct columns) if no
    sessions exist or the API is unreachable. Never raises on API/network
    failure.
    """
    try:
        sessions = fetch_race_sessions(year)
    except Exception as exc:  # noqa: BLE001 - network/JSON errors are expected
        print(f"  [openf1] sessions request failed: {type(exc).__name__}: {exc}")
        return empty_frame()

    if not sessions:
        print(f"  [openf1] no {year} race sessions returned.")
        return empty_frame()

    print(f"  [openf1] {len(sessions)} {year} race session(s) found.")
    all_rows: list = []
    for round_num, session in enumerate(sessions, start=1):
        try:
            rows = _normalize_session(session, round_num)
        except Exception as exc:  # noqa: BLE001
            ckey = session.get("circuit_short_name", "?")
            print(f"  [openf1] round {round_num} ({ckey}) failed: "
                  f"{type(exc).__name__}: {exc} — skipping.")
            continue
        if rows:
            circuit = rows[0]["circuit"]
            print(f"  [openf1] round {round_num}: {circuit} -> {len(rows)} drivers")
            all_rows.extend(rows)
        if polite_delay:
            time.sleep(polite_delay)

    if not all_rows:
        print(f"  [openf1] sessions found but no classified results parsed.")
        return empty_frame()

    df = pd.DataFrame(all_rows, columns=UNIFIED_COLUMNS)
    return df


if __name__ == "__main__":
    out = fetch_openf1_season(2026)
    print(f"\nFetched {len(out)} rows across "
          f"{out['round'].nunique() if len(out) else 0} race(s).")
    if len(out):
        print(out.head(12).to_string(index=False))
