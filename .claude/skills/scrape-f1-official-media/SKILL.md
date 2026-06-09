---
name: scrape-f1-official-media
description: "Fetch official F1 driver headshot images from formula1.com/en/drivers/{name} and 2026 circuit track layout images from media.formula1.com CDN. Use when adding official F1 driver photos, fetching track layout images for the dashboard, scraping driver images from formula1.com, or building the driver_images and track_layouts fields in data.js with official sources. Must be used by the f1-media-scraper agent. Prefer this over fetch-media (Wikipedia) when official F1 CDN images are needed."
---

## Source 1: Driver Images — formula1.com

### URL Pattern
```
https://www.formula1.com/en/drivers/{slug}
```

### Driver Slug Map
```python
DRIVER_F1_SLUG = {
    "antonelli":      "kimi-antonelli",
    "russell":        "george-russell",
    "leclerc":        "charles-leclerc",
    "hamilton":       "lewis-hamilton",
    "norris":         "lando-norris",
    "piastri":        "oscar-piastri",
    "max_verstappen": "max-verstappen",
    "hadjar":         "isack-hadjar",
    "gasly":          "pierre-gasly",
    "colapinto":      "franco-colapinto",
    "lawson":         "liam-lawson",
    "arvid_lindblad": "arvid-lindblad",
    "bearman":        "oliver-bearman",
    "ocon":           "esteban-ocon",
    "sainz":          "carlos-sainz",
    "albon":          "alexander-albon",
    "bortoleto":      "gabriel-bortoleto",
    "hulkenberg":     "nico-hulkenberg",
    "bottas":         "valtteri-bottas",
    "perez":          "sergio-perez",
    "stroll":         "lance-stroll",
    "alonso":         "fernando-alonso",
}
```

### Extraction Strategy
Use `WebFetch` with a targeted prompt:
```python
url = f"https://www.formula1.com/en/drivers/{slug}"
result = WebFetch(url, prompt="""
Extract the driver's main headshot/portrait image URL.
Look for image tags or links containing 'media.formula1.com' and the driver's name or code.
Return only the full image URL, nothing else.
""")
```

The F1 CDN serves driver images from `media.formula1.com`. Expected URL pattern:
```
https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/{INITIAL}/{CODE_Name}/{code}.png.transform/2col/image.png
```

If WebFetch cannot extract a URL (Cloudflare, JS-heavy render), the result will be `null`. Do not guess or construct driver image URLs — only store confirmed URLs.

### Rate Limiting
Wait 1.5 seconds between driver page requests to avoid rate limiting.

---

## Source 2: Track Layout Images — media.formula1.com CDN

### URL Construction (no scraping needed)
Track layouts are served from a predictable CDN path. Construct directly:

```python
CDN_BASE = "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026track{slug}detailed.webp"

TRACK_CDN_SLUG = {
    "albert_park":   "melbourne",
    "bahrain":       "bahrain",
    "jeddah":        "jeddah",
    "suzuka":        "suzuka",
    "shanghai":      "shanghai",
    "miami":         "miami",
    "villeneuve":    "montreal",
    "monaco":        "montecarlo",
    "catalunya":     "barcelona",
    "red_bull_ring": "spielberg",
    "silverstone":   "silverstone",
    "hungaroring":   "budapest",
    "spa":           "spa",
    "zandvoort":     "zandvoort",
    "monza":         "monza",
    "madrid":        "madrid",
    "baku":          "baku",
    "marina_bay":    "singapore",
    "americas":      "austin",
    "rodriguez":     "mexicocity",
    "interlagos":    "saopaulo",
    "las_vegas":     "lasvegas",
    "losail":        "lusail",
    "yas_marina":    "abudhabi",
}

def track_layout_url(circuit_id: str) -> str | None:
    slug = TRACK_CDN_SLUG.get(circuit_id)
    if not slug:
        return None
    return CDN_BASE.format(slug=slug)
```

### Track Metadata (combine with CDN URL)
```python
TRACK_META = {
    "albert_park":   {"country": "Australia",    "flag": "🇦🇺", "length_km": 5.278, "corners": 16},
    "bahrain":       {"country": "Bahrain",      "flag": "🇧🇭", "length_km": 5.412, "corners": 15},
    "jeddah":        {"country": "Saudi Arabia", "flag": "🇸🇦", "length_km": 6.174, "corners": 27},
    "suzuka":        {"country": "Japan",        "flag": "🇯🇵", "length_km": 5.807, "corners": 18},
    "shanghai":      {"country": "China",        "flag": "🇨🇳", "length_km": 5.451, "corners": 16},
    "miami":         {"country": "USA",          "flag": "🇺🇸", "length_km": 5.412, "corners": 19},
    "villeneuve":    {"country": "Canada",       "flag": "🇨🇦", "length_km": 4.361, "corners": 14},
    "monaco":        {"country": "Monaco",       "flag": "🇲🇨", "length_km": 3.337, "corners": 19},
    "catalunya":     {"country": "Spain",        "flag": "🇪🇸", "length_km": 4.657, "corners": 16},
    "red_bull_ring": {"country": "Austria",      "flag": "🇦🇹", "length_km": 4.318, "corners": 10},
    "silverstone":   {"country": "UK",           "flag": "🇬🇧", "length_km": 5.891, "corners": 18},
    "hungaroring":   {"country": "Hungary",      "flag": "🇭🇺", "length_km": 4.381, "corners": 13},
    "spa":           {"country": "Belgium",      "flag": "🇧🇪", "length_km": 7.004, "corners": 20},
    "zandvoort":     {"country": "Netherlands",  "flag": "🇳🇱", "length_km": 4.259, "corners": 14},
    "monza":         {"country": "Italy",        "flag": "🇮🇹", "length_km": 5.793, "corners": 11},
    "madrid":        {"country": "Spain",        "flag": "🇪🇸", "length_km": 5.538, "corners": 20},
    "baku":          {"country": "Azerbaijan",   "flag": "🇦🇿", "length_km": 6.003, "corners": 20},
    "marina_bay":    {"country": "Singapore",    "flag": "🇸🇬", "length_km": 4.940, "corners": 23},
    "americas":      {"country": "USA",          "flag": "🇺🇸", "length_km": 5.513, "corners": 20},
    "rodriguez":     {"country": "Mexico",       "flag": "🇲🇽", "length_km": 4.304, "corners": 17},
    "interlagos":    {"country": "Brazil",       "flag": "🇧🇷", "length_km": 4.309, "corners": 15},
    "las_vegas":     {"country": "USA",          "flag": "🇺🇸", "length_km": 6.201, "corners": 17},
    "losail":        {"country": "Qatar",        "flag": "🇶🇦", "length_km": 5.380, "corners": 16},
    "yas_marina":    {"country": "UAE",          "flag": "🇦🇪", "length_km": 5.281, "corners": 16},
}
```

---

## Write Protocol
Enrich `dashboard/data.js` atomically:

```python
import json, os

def enrich_data_js(path, driver_images, track_layouts):
    with open(path, 'r', encoding='utf-8') as f:
        raw = f.read()
    # Strip JS wrapper
    data = json.loads(raw[len("window.F1_DATA = "):-len(";\n")])
    
    data["driver_images"] = driver_images
    data["track_layouts"] = track_layouts
    
    tmp = path + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        f.write(f"window.F1_DATA = {json.dumps(data, indent=2, ensure_ascii=False)};\n")
    os.replace(tmp, path)
```

---

## Execution Order
1. Build all track layout URLs first (fast, no HTTP) → complete `track_layouts` dict
2. For driver images: fetch pages sequentially with 1.5s delay → build `driver_images` dict
3. Call `enrich_data_js` once with both dicts

## Error Handling
- Driver page blocked → `driver_images[id] = null`
- CDN slug unknown → `track_layouts[circuit]["img_url"] = null`
- data.js JSON parse fails → abort, report error, do NOT overwrite

## Test Scenarios
**Normal:** Fetch antonelli page → extract `media.formula1.com` URL → write to data.js
**CDN track:** Construct `2026trackmontecarlodetailed.webp` URL → write to track_layouts
**Blocked driver page:** Cloudflare intercept → store null → dashboard renders CSS fallback
