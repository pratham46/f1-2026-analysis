"""
F1 2026 Data Publisher — merge_publish.py
Merges predictions.json + f1_scraped_results.json + existing data.js
into a unified dashboard/data.js with atomic write.
"""
import json
import os
import sys
from datetime import datetime, timezone

BASE_DIR         = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR      = os.path.dirname(BASE_DIR)
PREDICTIONS_PATH = os.path.join(BASE_DIR, "predictions.json")
SCRAPED_PATH     = os.path.join(BASE_DIR, "f1_scraped_results.json")
DATA_JS_PATH     = os.path.join(PROJECT_DIR, "dashboard", "data.js")
LOG_PATH         = os.path.join(BASE_DIR, "publish_log.json")

# Constructor team name → constructor_id mapping for scraped data
TEAM_DISPLAY_TO_ID = {
    "mercedes":        "mercedes",
    "ferrari":         "ferrari",
    "mclaren":         "mclaren",
    "red bull racing": "red_bull",
    "alpine":          "alpine",
    "racing bulls":    "rb",
    "haas f1 team":    "haas",
    "williams":        "williams",
    "audi":            "audi",
    "cadillac":        "cadillac",
    "aston martin":    "aston_martin",
}

# Round slug → circuit_id (for reconciliation log)
SLUG_TO_CIRCUIT = {
    "australia":  "albert_park",
    "china":      "shanghai",
    "bahrain":    "bahrain",
    "saudi-arabia": "jeddah",
    "canada":     "villeneuve",
    "monaco":     "monaco",
    "barcelona-catalunya": "catalunya",
    "austria":    "red_bull_ring",
    "great-britain": "silverstone",
    "belgium":    "spa",
    "hungary":    "hungaroring",
    "netherlands": "zandvoort",
    "italy":      "monza",
    "madrid":     "madrid",
    "azerbaijan": "baku",
    "singapore":  "marina_bay",
    "united-states": "americas",
    "mexico-city": "rodriguez",
    "brazil":     "interlagos",
    "las-vegas":  "las_vegas",
    "qatar":      "losail",
    "abu-dhabi":  "yas_marina",
    "japan":      "suzuka",
    "miami":      "miami",
}


def load_data_js(path):
    """Strip the JS wrapper and parse JSON. Returns {} on any failure."""
    try:
        with open(path, 'r', encoding='utf-8') as f:
            raw = f.read()
        prefix = "window.F1_DATA = "
        if not raw.startswith(prefix):
            print(f"WARNING: data.js does not start with expected prefix", file=sys.stderr)
            return {}
        body = raw[len(prefix):]
        body = body.rstrip()
        if body.endswith(";"):
            body = body[:-1]
        return json.loads(body)
    except Exception as e:
        print(f"WARNING: Could not read existing data.js: {e}", file=sys.stderr)
        return {}


def merge_and_publish():
    # ── 1. Load all sources ──────────────────────────────────────────────
    if not os.path.exists(PREDICTIONS_PATH):
        raise FileNotFoundError(
            f"predictions.json not found at {PREDICTIONS_PATH} — run pipeline first"
        )

    with open(PREDICTIONS_PATH, encoding='utf-8') as f:
        predictions = json.load(f)
    print(f"Predictions loaded: {len(predictions.get('driver_standings', []))} drivers")

    scraped = {}
    if os.path.exists(SCRAPED_PATH):
        with open(SCRAPED_PATH, encoding='utf-8') as f:
            scraped = json.load(f)
        scraped_races = [r for r in scraped.get("races", []) if not r.get("blocked") and r.get("results")]
        print(f"Scraped data loaded: {len(scraped_races)} races with results")
    else:
        scraped_races = []
        print("WARNING: No scraped data — standings may lag Jolpica", file=sys.stderr)

    existing = load_data_js(DATA_JS_PATH)
    if existing:
        print(f"Existing data.js loaded: {len(existing.get('driver_images', {}))} driver_images, "
              f"{len(existing.get('track_layouts', {}))} track_layouts")

    # ── 2. Start from existing data.js as the base (preserves all enrichments) ─
    # We'll update specific keys rather than overwriting everything
    merged = dict(existing)

    # ── 3. Update metadata ───────────────────────────────────────────────────
    merged["races_completed_2026"] = len(scraped_races) if scraped_races else merged.get("races_completed_2026", 0)
    merged["data_source"] = "formula1_com_scraped+jolpica_fallback"

    # ── 4. Build scraped standings lookup (by driver_id) ─────────────────────
    scraped_driver_standings = scraped.get("driver_standings", [])
    scraped_by_driver = {d["driver_id"]: d for d in scraped_driver_standings}

    # Also normalize scraped driver IDs: scraped uses "max_verstappen", existing may use "verstappen"
    # Build alias map from scraped display names
    DRIVER_ALIASES = {
        "max_verstappen": "max_verstappen",   # already aligned
        "verstappen":     "max_verstappen",   # in case predictions use short form
    }

    # ── 5. Update real_driver_standings_2026 with scraped (Monaco included) ──
    if scraped_by_driver:
        # Rebuild real_driver_standings_2026 from scraped data
        real_driver_standings = []
        for d in scraped_driver_standings:
            # Determine wins from race results
            driver_id = d["driver_id"]
            wins = sum(
                1 for r in scraped_races
                if r.get("results") and r["results"][0].get("driver_id") == driver_id
            )
            # Map team to constructor_id
            team_lower = d.get("team", "").lower()
            constructor_id = TEAM_DISPLAY_TO_ID.get(team_lower, team_lower.replace(" ", "_"))
            real_driver_standings.append({
                "position":       d["pos"],
                "driver_id":      driver_id,
                "driver_display": d.get("driver_display", ""),
                "nationality":    d.get("nationality", ""),
                "team":           d.get("team", ""),
                "points":         float(d["points"]),
                "wins":           wins,
                "constructor_id": constructor_id,
            })
        merged["real_driver_standings_2026"] = real_driver_standings
        print(f"real_driver_standings_2026 updated: {len(real_driver_standings)} drivers")

    # ── 6. Update real_constructor_standings_2026 with scraped ────────────────
    scraped_constructor_standings = scraped.get("constructor_standings", [])
    if scraped_constructor_standings:
        real_constructor_standings = []
        # Count wins per team from race results
        team_wins = {}
        for r in scraped_races:
            if r.get("results"):
                winner_team = r["results"][0].get("team", "").lower()
                team_wins[winner_team] = team_wins.get(winner_team, 0) + 1

        for c in scraped_constructor_standings:
            team_lower = c.get("team", "").lower()
            constructor_id = TEAM_DISPLAY_TO_ID.get(team_lower, team_lower.replace(" ", "_"))
            real_constructor_standings.append({
                "position":     c["pos"],
                "constructor_id": constructor_id,
                "team_display": c.get("team_display", ""),
                "points":       float(c["points"]),
                "wins":         team_wins.get(team_lower, 0),
            })
        merged["real_constructor_standings_2026"] = real_constructor_standings
        print(f"real_constructor_standings_2026 updated: {len(real_constructor_standings)} teams")

    # ── 7. Update current_real_points in driver_standings_2026 ────────────────
    reconciliation_log = []
    driver_standings_2026 = merged.get("driver_standings_2026", [])
    for entry in driver_standings_2026:
        drv = entry.get("driver_id", "")
        # Normalize: "verstappen" → "max_verstappen" for scraped lookup
        scraped_id = DRIVER_ALIASES.get(drv, drv)
        if scraped_id in scraped_by_driver:
            old_pts = entry.get("current_real_points", 0)
            new_pts = float(scraped_by_driver[scraped_id]["points"])
            entry["current_real_points"] = new_pts
            reconciliation_log.append({
                "driver_id":  drv,
                "old_points": old_pts,
                "new_points": new_pts,
                "source":     "scraped",
                "delta":      new_pts - old_pts,
            })
        else:
            reconciliation_log.append({
                "driver_id": drv,
                "source":    "predictions_only",
            })
    merged["driver_standings_2026"] = driver_standings_2026

    # ── 8. Add completed race results from scraped ─────────────────────────────
    completed_races = []
    race_recon = []
    for r in scraped_races:
        slug = r.get("round_slug", "")
        circuit_id = SLUG_TO_CIRCUIT.get(slug, slug)
        completed_races.append({
            "round_slug":  slug,
            "circuit_id":  circuit_id,
            "name":        r.get("name", ""),
            "date":        r.get("date", ""),
            "results":     r.get("results", []),
            "fastest_lap": r.get("fastest_lap"),
            "winner":      r["results"][0].get("driver_id") if r.get("results") else None,
            "winner_display": r["results"][0].get("driver_display") if r.get("results") else None,
            "source":      "formula1.com",
        })
        race_recon.append({"race": circuit_id, "slug": slug, "used_source": "scraped"})
    merged["completed_races_2026"] = completed_races
    print(f"completed_races_2026: {len(completed_races)} races embedded")

    # ── 9. Preserve driver_images and track_layouts (always from existing) ────
    if existing.get("driver_images"):
        merged["driver_images"] = existing["driver_images"]
    if existing.get("track_layouts"):
        merged["track_layouts"] = existing["track_layouts"]

    # ── 10. Add publish metadata ───────────────────────────────────────────────
    merged["data_sources"] = {
        "predictions_used":      True,
        "scraped_used":          bool(scraped),
        "scraped_races":         len(scraped_races),
        "last_published":        datetime.now(timezone.utc).isoformat(),
        "races_with_scraped":    len(race_recon),
        "driver_reconciliation": reconciliation_log,
        "race_reconciliation":   race_recon,
    }

    # ── 11. Atomic write ───────────────────────────────────────────────────────
    tmp = DATA_JS_PATH + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        f.write(f"window.F1_DATA = {json.dumps(merged, indent=2, ensure_ascii=False)};\n")
    os.replace(tmp, DATA_JS_PATH)

    size_kb = os.path.getsize(DATA_JS_PATH) / 1024
    print(f"\ndata.js written: {size_kb:.1f} KB")
    print(f"Races with scraped results embedded: {len(completed_races)}")
    print(f"Drivers updated from scraped standings: {sum(1 for r in reconciliation_log if r.get('source') == 'scraped')}")

    # ── 12. Write reconciliation log ──────────────────────────────────────────
    log_data = {
        "published_at":           datetime.now(timezone.utc).isoformat(),
        "sources": {
            "predictions":        PREDICTIONS_PATH,
            "scraped":            SCRAPED_PATH if scraped else None,
            "existing_data_js":   DATA_JS_PATH,
        },
        "output":                 DATA_JS_PATH,
        "size_kb":                round(size_kb, 2),
        "races_completed_2026":   len(scraped_races),
        "driver_reconciliation":  reconciliation_log,
        "race_reconciliation":    race_recon,
        "driver_images_preserved": len(merged.get("driver_images", {})),
        "track_layouts_preserved": len(merged.get("track_layouts", {})),
        "scraped_driver_standings": scraped_driver_standings,
    }
    with open(LOG_PATH, "w", encoding="utf-8") as f:
        json.dump(log_data, f, indent=2, ensure_ascii=False)
    print(f"Reconciliation log written: {LOG_PATH}")

    return merged


if __name__ == "__main__":
    result = merge_and_publish()

    # ── Verification ─────────────────────────────────────────────────────────
    print("\n--- Verification ---")
    from merge_publish import load_data_js
    check = load_data_js(DATA_JS_PATH)

    assert "driver_standings_2026" in check, "ERROR: driver_standings_2026 key missing"
    assert len(check.get("driver_standings_2026", [])) > 0, "ERROR: driver_standings_2026 array empty"
    assert "driver_images" in check, "ERROR: driver_images wiped — BUG"
    assert "track_layouts" in check, "ERROR: track_layouts wiped — BUG"
    assert len(check.get("driver_images", {})) == 22, f"ERROR: expected 22 driver_images, got {len(check.get('driver_images', {}))}"

    # Check Antonelli at 156pts
    ant_pts = None
    for d in check.get("real_driver_standings_2026", []):
        if d.get("driver_id") == "antonelli":
            ant_pts = d.get("points")
            break
    assert ant_pts == 156.0, f"ERROR: Antonelli points should be 156, got {ant_pts}"

    # Check current_real_points updated
    ant_current = None
    for d in check.get("driver_standings_2026", []):
        if d.get("driver_id") == "antonelli":
            ant_current = d.get("current_real_points")
            break
    assert ant_current == 156.0, f"ERROR: Antonelli current_real_points should be 156, got {ant_current}"

    print(f"driver_images:        {len(check['driver_images'])} keys — OK")
    print(f"track_layouts:        {len(check['track_layouts'])} circuits — OK")
    print(f"Antonelli real pts:   {ant_pts} — OK")
    print(f"Antonelli current:    {ant_current} — OK")
    print(f"completed_races_2026: {len(check.get('completed_races_2026', []))} races — OK")
    print("Verification: PASSED")
