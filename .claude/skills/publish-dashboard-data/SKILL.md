---
name: publish-dashboard-data
description: "Merge all F1 data sources — XGBoost predictions (_workspace/predictions.json), formula1.com scraped results (_workspace/f1_scraped_results.json), and existing dashboard media enrichments (driver_images, track_layouts) — into one unified dashboard/data.js. Use when publishing data to the dashboard, reconciling Jolpica vs scraped standings gaps (Monaco lag), preserving media enrichments across pipeline re-runs, or merging predictions with real results before UI rendering."
---

## Purpose
Three separate systems write F1 data: the pipeline (predictions.json), the scraper (f1_scraped_results.json), and the media enricher (driver_images/track_layouts in data.js). Every pipeline re-run naively overwrites data.js and wipes the other two. This skill merges all three atomically.

## Merge Script

```python
import json, os
from datetime import datetime, timezone

PREDICTIONS_PATH = "_workspace/predictions.json"
SCRAPED_PATH     = "_workspace/f1_scraped_results.json"
DATA_JS_PATH     = "dashboard/data.js"

def load_data_js(path):
    """Strip the JS wrapper and parse JSON. Returns {} on any failure."""
    try:
        with open(path, 'r', encoding='utf-8') as f:
            raw = f.read()
        prefix = "window.F1_DATA = "
        if not raw.startswith(prefix):
            return {}
        body = raw[len(prefix):]
        if body.endswith(";\n"):
            body = body[:-2]
        elif body.endswith(";"):
            body = body[:-1]
        return json.loads(body)
    except Exception as e:
        print(f"WARNING: Could not read existing data.js: {e}")
        return {}

def merge_and_publish():
    # ── 1. Load all sources ──────────────────────────────────────────
    if not os.path.exists(PREDICTIONS_PATH):
        raise FileNotFoundError("predictions.json not found — run pipeline first")
    
    with open(PREDICTIONS_PATH, encoding='utf-8') as f:
        merged = json.load(f)

    scraped = {}
    if os.path.exists(SCRAPED_PATH):
        with open(SCRAPED_PATH, encoding='utf-8') as f:
            scraped = json.load(f)
        print(f"Scraped data loaded: {len(scraped.get('races', []))} races")
    else:
        print("WARNING: No scraped data — standings may lag Jolpica")

    existing = load_data_js(DATA_JS_PATH)

    # ── 2. Override standings with scraped (more current than Jolpica) ─
    scraped_standings = {d["driver_id"]: d for d in scraped.get("driver_standings", [])}
    if scraped_standings:
        for pred in merged.get("predictions", []):
            drv = pred.get("driver_id")
            if drv in scraped_standings:
                real = scraped_standings[drv]
                pred["current_points"] = real.get("points", pred.get("current_points", 0))
                pred["wins"]           = real.get("wins", pred.get("wins", 0))

    # ── 3. Overlay real race results for completed races ──────────────
    scraped_by_slug = {}
    for r in scraped.get("races", []):
        if not r.get("blocked") and r.get("results"):
            scraped_by_slug[r.get("slug", r.get("round_slug", ""))] = r

    # circuit_id → f1.com slug mapping
    CIRCUIT_TO_SLUG = {
        "albert_park": "australia", "shanghai": "china",
        "bahrain": "bahrain", "jeddah": "saudi-arabia",
        "villeneuve": "canada", "monaco": "monaco",
        "catalunya": "barcelona-catalunya", "red_bull_ring": "austria",
        "silverstone": "great-britain", "spa": "belgium",
        "hungaroring": "hungary", "zandvoort": "netherlands",
        "monza": "italy", "madrid": "madrid", "baku": "azerbaijan",
        "marina_bay": "singapore", "americas": "united-states",
        "rodriguez": "mexico-city", "interlagos": "brazil",
        "las_vegas": "las-vegas", "losail": "qatar", "yas_marina": "abu-dhabi",
    }

    reconciliation_log = []
    for race in merged.get("race_results", []):
        cid  = race.get("circuit_id", "")
        slug = CIRCUIT_TO_SLUG.get(cid, "")
        if slug in scraped_by_slug:
            sr = scraped_by_slug[slug]
            race["scraped_results"]  = sr.get("results", [])
            race["winner"]           = sr.get("results", [{}])[0].get("driver", race.get("winner"))
            race["fastest_lap"]      = sr.get("fastest_lap")
            reconciliation_log.append({"race": cid, "used_source": "scraped"})
        else:
            reconciliation_log.append({"race": cid, "used_source": "predictions"})

    # ── 4. Preserve media enrichments from existing data.js ───────────
    if existing.get("driver_images"):
        merged["driver_images"] = existing["driver_images"]
    if existing.get("track_layouts"):
        merged["track_layouts"] = existing["track_layouts"]

    # ── 5. Add metadata ───────────────────────────────────────────────
    merged["data_sources"] = {
        "predictions_used": True,
        "scraped_used": bool(scraped),
        "scraped_races": len(scraped_by_slug),
        "last_published": datetime.now(timezone.utc).isoformat(),
        "reconciliation": reconciliation_log,
    }

    # ── 6. Atomic write ───────────────────────────────────────────────
    tmp = DATA_JS_PATH + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        f.write(f"window.F1_DATA = {json.dumps(merged, indent=2, ensure_ascii=False)};\n")
    os.replace(tmp, DATA_JS_PATH)

    size_kb = os.path.getsize(DATA_JS_PATH) / 1024
    print(f"data.js written: {size_kb:.1f}KB")
    print(f"Races reconciled: {len(reconciliation_log)}")
    print(f"  scraped: {sum(1 for r in reconciliation_log if r['used_source']=='scraped')}")
    print(f"  predictions: {sum(1 for r in reconciliation_log if r['used_source']=='predictions')}")
    return merged

if __name__ == "__main__":
    merge_and_publish()
```

## Verification After Write
Always read back and verify before reporting success:
```python
check = load_data_js(DATA_JS_PATH)
assert "predictions" in check, "predictions key missing"
assert len(check.get("predictions", [])) > 0, "predictions array empty"
if existing.get("driver_images"):
    assert "driver_images" in check, "driver_images wiped — BUG"
print("Verification: OK")
```

## Common Failures
| Symptom | Cause | Fix |
|---------|-------|-----|
| `driver_images` gone after publish | existing data.js parse failed silently | Check data.js encoding, run enrichment script again |
| Monaco shows 131pts not 156pts | scraped_standings not loaded | Verify `f1_scraped_results.json` exists and has `driver_standings` |
| Race result shows prediction not real | circuit_id→slug mapping missing | Add the circuit to `CIRCUIT_TO_SLUG` |
| `.tmp` file left on disk | `os.replace` failed (permissions) | Close any process locking data.js |
