"""
Enrich dashboard/data.js with:
  - driver_images   : driver_id → Wikipedia headshot URL (or null)
  - track_layouts   : circuit_id → {img_url, country, flag, length_km, corners}
  - next_race       : upcoming race prediction with top-3 podium
  - season_summary  : aggregated cross-year statistics

Usage:
    python src/data/enrich_dashboard.py
"""

from __future__ import annotations

import json
import os

import requests

DATA_JS = "dashboard/data.js"
REQUEST_TIMEOUT = 8

# ──────────────────────────────────────────────────────────────────────────────
# Driver Wikipedia page titles (used for thumbnail fetch)
# ──────────────────────────────────────────────────────────────────────────────
DRIVER_WIKI: dict[str, str] = {
    # Real 2026 grid
    "antonelli":      "Andrea_Kimi_Antonelli",
    "russell":        "George_Russell_(racing_driver)",
    "leclerc":        "Charles_Leclerc",
    "hamilton":       "Lewis_Hamilton",
    "norris":         "Lando_Norris",
    "piastri":        "Oscar_Piastri",
    "max_verstappen": "Max_Verstappen",
    "hadjar":         "Isack_Hadjar",
    "gasly":          "Pierre_Gasly",
    "colapinto":      "Franco_Colapinto",
    "lawson":         "Liam_Lawson",
    "arvid_lindblad": "Arvid_Lindblad_(racing_driver)",
    "bearman":        "Oliver_Bearman",
    "ocon":           "Esteban_Ocon",
    "sainz":          "Carlos_Sainz_Jr.",
    "albon":          "Alexander_Albon",
    "bortoleto":      "Gabriel_Bortoleto",
    "hulkenberg":     "Nico_Hülkenberg",
    "bottas":         "Valtteri_Bottas",
    "perez":          "Sergio_Pérez",
    "stroll":         "Lance_Stroll",
    "alonso":         "Fernando_Alonso",
}

# ──────────────────────────────────────────────────────────────────────────────
# Circuit Wikipedia article titles — used to fetch thumbnail URLs at runtime
# ──────────────────────────────────────────────────────────────────────────────
CIRCUIT_WIKI: dict[str, str] = {
    "bahrain":     "Bahrain_International_Circuit",
    "jeddah":      "Jeddah_Street_Circuit",
    "australia":   "Albert_Park_Circuit",
    "japan":       "Suzuka_International_Racing_Course",
    "china":       "Shanghai_International_Circuit",
    "miami":       "Miami_International_Autodrome",
    "imola":       "Imola_Circuit",
    "monaco":      "Circuit_de_Monaco",
    "canada":      "Circuit_Gilles_Villeneuve",
    "spain":       "Circuit_de_Barcelona-Catalunya",
    "austria":     "Red_Bull_Ring",
    "britain":     "Silverstone_Circuit",
    "hungary":     "Hungaroring",
    "belgium":     "Circuit_de_Spa-Francorchamps",
    "netherlands": "Circuit_Zandvoort",
    "italy":       "Autodromo_Nazionale_Monza",
    "azerbaijan":  "Baku_City_Circuit",
    "singapore":   "Marina_Bay_Street_Circuit",
    "usa":         "Circuit_of_the_Americas",
    "mexico":      "Autodromo_Hermanos_Rodriguez",
    "brazil":      "Autodromo_Jose_Carlos_Pace",
    "las_vegas":   "Las_Vegas_Street_Circuit",
    "qatar":       "Losail_International_Circuit",
    "abu_dhabi":   "Yas_Marina_Circuit",
}

# Static metadata — country, flag, physical specs
TRACK_META: dict[str, dict] = {
    "bahrain":     {"country": "Bahrain",      "flag": "🇧🇭", "length_km": 5.412, "corners": 15},
    "jeddah":      {"country": "Saudi Arabia", "flag": "🇸🇦", "length_km": 6.174, "corners": 27},
    "australia":   {"country": "Australia",    "flag": "🇦🇺", "length_km": 5.278, "corners": 16},
    "japan":       {"country": "Japan",        "flag": "🇯🇵", "length_km": 5.807, "corners": 18},
    "china":       {"country": "China",        "flag": "🇨🇳", "length_km": 5.451, "corners": 16},
    "miami":       {"country": "USA",          "flag": "🇺🇸", "length_km": 5.412, "corners": 19},
    "imola":       {"country": "Italy",        "flag": "🇮🇹", "length_km": 4.909, "corners": 19},
    "monaco":      {"country": "Monaco",       "flag": "🇲🇨", "length_km": 3.337, "corners": 19},
    "canada":      {"country": "Canada",       "flag": "🇨🇦", "length_km": 4.361, "corners": 14},
    "spain":       {"country": "Spain",        "flag": "🇪🇸", "length_km": 4.657, "corners": 16},
    "austria":     {"country": "Austria",      "flag": "🇦🇹", "length_km": 4.318, "corners": 10},
    "britain":     {"country": "UK",           "flag": "🇬🇧", "length_km": 5.891, "corners": 18},
    "hungary":     {"country": "Hungary",      "flag": "🇭🇺", "length_km": 4.381, "corners": 13},
    "belgium":     {"country": "Belgium",      "flag": "🇧🇪", "length_km": 7.004, "corners": 20},
    "netherlands": {"country": "Netherlands",  "flag": "🇳🇱", "length_km": 4.259, "corners": 14},
    "italy":       {"country": "Italy",        "flag": "🇮🇹", "length_km": 5.793, "corners": 11},
    "azerbaijan":  {"country": "Azerbaijan",   "flag": "🇦🇿", "length_km": 6.003, "corners": 20},
    "singapore":   {"country": "Singapore",    "flag": "🇸🇬", "length_km": 4.940, "corners": 23},
    "usa":         {"country": "USA",          "flag": "🇺🇸", "length_km": 5.513, "corners": 20},
    "mexico":      {"country": "Mexico",       "flag": "🇲🇽", "length_km": 4.304, "corners": 17},
    "brazil":      {"country": "Brazil",       "flag": "🇧🇷", "length_km": 4.309, "corners": 15},
    "las_vegas":   {"country": "USA",          "flag": "🇺🇸", "length_km": 6.201, "corners": 17},
    "qatar":       {"country": "Qatar",        "flag": "🇶🇦", "length_km": 5.380, "corners": 16},
    "abu_dhabi":   {"country": "UAE",          "flag": "🇦🇪", "length_km": 5.281, "corners": 16},
}


WIKI_HEADERS = {"User-Agent": "F1-2026-Dashboard/1.0"}


def _get_wiki_thumbnail(wiki_title: str) -> str | None:
    """Fetch page thumbnail URL from Wikipedia REST API page/summary endpoint."""
    url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{wiki_title}"
    try:
        r = requests.get(url, timeout=REQUEST_TIMEOUT, headers=WIKI_HEADERS)
        if r.status_code == 200:
            return r.json().get("thumbnail", {}).get("source")
    except Exception as exc:
        print(f"  [media] {wiki_title} fetch failed: {exc}")
    return None


def _get_driver_image(wiki_title: str) -> str | None:
    return _get_wiki_thumbnail(wiki_title)


def build_driver_images() -> dict[str, str | None]:
    import time
    print("Fetching driver images from Wikipedia...")
    images: dict[str, str | None] = {}
    for driver_id, wiki_title in DRIVER_WIKI.items():
        url = _get_driver_image(wiki_title)
        status = "ok" if url else "null"
        print(f"  {driver_id}: {status}")
        images[driver_id] = url
        time.sleep(0.3)
    return images


def build_track_layouts() -> dict[str, dict]:
    import time
    print("Fetching circuit images from Wikipedia...")
    layouts: dict[str, dict] = {}
    for cid, meta in TRACK_META.items():
        wiki_title = CIRCUIT_WIKI.get(cid, "")
        img_url = _get_wiki_thumbnail(wiki_title) if wiki_title else None
        status = "ok" if img_url else "null"
        print(f"  {cid}: {status}")
        layouts[cid] = {**meta, "img_url": img_url}
        time.sleep(0.3)
    return layouts


def build_next_race(data: dict) -> dict:
    """Determine next race after last completed round and build prediction object."""
    LAST_COMPLETED = data.get("races_completed_2026", 0)
    races = data.get("race_predictions", [])
    driver_info = data.get("driver_info", {})

    next_r = next((r for r in races if r["round"] > LAST_COMPLETED), None)
    if not next_r:
        next_r = races[-1] if races else {}

    circuit_id = next_r.get("circuit_id", "")
    track = TRACK_META.get(circuit_id, {})
    top5 = next_r.get("top5", [])

    def _enrich(entry: dict) -> dict:
        did = entry.get("driver_id", "")
        info = driver_info.get(did, {})
        return {
            "driver_id": did,
            "name": info.get("name", did),
            "abbr": info.get("short", did[:3].upper()),
            "team": info.get("team", ""),
            "team_name": info.get("team_name", ""),
            "color": info.get("color", "#888"),
            "win_prob": round(entry.get("win_prob", 0), 4),
        }

    return {
        "round": next_r.get("round"),
        "name": next_r.get("name", ""),
        "circuit_id": circuit_id,
        "country": track.get("country", ""),
        "flag": track.get("flag", "🏁"),
        "img_url": track.get("img_url"),
        "length_km": track.get("length_km"),
        "corners": track.get("corners"),
        "date_approx": "2026-06-07",
        "top3": [_enrich(t) for t in top5[:3]],
    }


def build_season_summary(data: dict) -> dict:
    """Cross-year champion, highest single-season scorer, constructor leaders."""
    hist_d = data.get("historical_driver_points", {})
    hist_c = data.get("historical_constructor_points", {})
    driver_info = data.get("driver_info", {})

    # Best single season driver
    best_driver = {"driver_id": "", "year": 0, "points": 0}
    for year_str, season in hist_d.items():
        for did, pts in season.items():
            if pts > best_driver["points"]:
                best_driver = {"driver_id": did, "year": int(year_str), "points": pts}

    # Best single season constructor
    best_constr = {"constructor_id": "", "year": 0, "points": 0}
    for year_str, season in hist_c.items():
        for cid, pts in season.items():
            if pts > best_constr["points"]:
                best_constr = {"constructor_id": cid, "year": int(year_str), "points": pts}

    # Year champions (driver with most pts per year)
    year_champs = {}
    for year_str, season in hist_d.items():
        if season:
            champ = max(season.items(), key=lambda x: x[1])
            year_champs[year_str] = {
                "driver_id": champ[0],
                "points": champ[1],
                "name": driver_info.get(champ[0], {}).get("name", champ[0]),
            }

    return {
        "best_single_season": {
            **best_driver,
            "driver_name": driver_info.get(best_driver["driver_id"], {}).get("name", best_driver["driver_id"]),
        },
        "best_constructor_season": best_constr,
        "year_champions": year_champs,
    }


def main() -> None:
    # Read existing data.js
    with open(DATA_JS, "r", encoding="utf-8") as f:
        raw = f.read()

    prefix = "window.F1_DATA = "
    suffix = ";\n"
    json_str = raw[len(prefix):-len(suffix)]
    data = json.loads(json_str)

    # Build enrichments
    driver_images = build_driver_images()
    track_layouts = build_track_layouts()
    next_race = build_next_race(data)
    season_summary = build_season_summary(data)

    # Inject
    data["driver_images"] = driver_images
    data["track_layouts"] = track_layouts
    data["next_race"] = next_race
    data["season_summary"] = season_summary

    # Write atomically
    tmp = DATA_JS + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        f.write(f"window.F1_DATA = {json.dumps(data, indent=2, ensure_ascii=False)};\n")
    os.replace(tmp, DATA_JS)

    size_kb = os.path.getsize(DATA_JS) // 1024
    print(f"\nEnriched {DATA_JS} ({size_kb} KB)")
    print(f"  Next race: R{next_race['round']} {next_race['name']}")
    print(f"  Favourite: {next_race['top3'][0]['name']} ({next_race['top3'][0]['win_prob']*100:.1f}%)")


if __name__ == "__main__":
    main()
