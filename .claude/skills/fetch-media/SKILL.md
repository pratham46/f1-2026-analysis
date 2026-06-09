---
name: fetch-media
description: "Build driver_images and track_layouts data for the F1 dashboard. Use when fetching F1 driver photos, circuit track layout images, or populating media fields in data.js. Also use when adding visual media to the F1 prediction dashboard."
---

## Driver Images

### Source: Wikipedia REST API
```python
import requests

def get_driver_image(wikipedia_title: str, width=300) -> str | None:
    url = f"https://en.wikipedia.org/api/rest_v1/page/thumbnail/{wikipedia_title}?width={width}"
    try:
        r = requests.get(url, timeout=10)
        if r.status_code == 200:
            return r.json().get("thumbnail", {}).get("source")
    except Exception:
        pass
    return None
```

### Driver Wikipedia Page Titles (2026 grid)
```python
DRIVER_WIKI = {
    "verstappen": "Max_Verstappen",
    "norris":     "Lando_Norris",
    "leclerc":    "Charles_Leclerc",
    "piastri":    "Oscar_Piastri",
    "sainz":      "Carlos_Sainz_Jr.",
    "hamilton":   "Lewis_Hamilton",
    "russell":    "George_Russell_(racing_driver)",
    "antonelli":  "Andrea_Kimi_Antonelli",
    "alonso":     "Fernando_Alonso",
    "stroll":     "Lance_Stroll",
    "tsunoda":    "Yuki_Tsunoda",
    "lawson":     "Liam_Lawson",
    "albon":      "Alexander_Albon",
    "colapinto":  "Franco_Colapinto",
    "gasly":      "Pierre_Gasly",
    "ocon":       "Esteban_Ocon",
    "bearman":    "Oliver_Bearman",
    "hulkenberg": "Nico_Hülkenberg",
    "bottas":     "Valtteri_Bottas",
    "magnussen":  "Kevin_Magnussen",
}
```

## Track Layouts

### Circuit Metadata with Wikipedia Commons Image URLs
```python
TRACK_META = {
    "bahrain":    {"country": "Bahrain",     "flag": "🇧🇭", "length_km": 5.412, "corners": 15,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Bahrain_International_Circuit--2004.svg/320px-Bahrain_International_Circuit--2004.svg.png"},
    "jeddah":     {"country": "Saudi Arabia","flag": "🇸🇦", "length_km": 6.174, "corners": 27,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Jeddah_Street_Circuit.svg/320px-Jeddah_Street_Circuit.svg.png"},
    "australia":  {"country": "Australia",   "flag": "🇦🇺", "length_km": 5.278, "corners": 16,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Albert_Park_Circuit_2022.svg/320px-Albert_Park_Circuit_2022.svg.png"},
    "japan":      {"country": "Japan",       "flag": "🇯🇵", "length_km": 5.807, "corners": 18,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Suzuka_circuit_map.svg/320px-Suzuka_circuit_map.svg.png"},
    "china":      {"country": "China",       "flag": "🇨🇳", "length_km": 5.451, "corners": 16,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Shanghai_International_Circuit.svg/320px-Shanghai_International_Circuit.svg.png"},
    "miami":      {"country": "USA",         "flag": "🇺🇸", "length_km": 5.412, "corners": 19,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Miami_International_Autodrome_track_map.svg/320px-Miami_International_Autodrome_track_map.svg.png"},
    "imola":      {"country": "Italy",       "flag": "🇮🇹", "length_km": 4.909, "corners": 19,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Imola_track_map.svg/320px-Imola_track_map.svg.png"},
    "monaco":     {"country": "Monaco",      "flag": "🇲🇨", "length_km": 3.337, "corners": 19,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Circuit_de_Monaco.svg/320px-Circuit_de_Monaco.svg.png"},
    "canada":     {"country": "Canada",      "flag": "🇨🇦", "length_km": 4.361, "corners": 14,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Circuit_Gilles_Villeneuve.svg/320px-Circuit_Gilles_Villeneuve.svg.png"},
    "spain":      {"country": "Spain",       "flag": "🇪🇸", "length_km": 4.657, "corners": 16,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Circuit_de_Barcelona-Catalunya.svg/320px-Circuit_de_Barcelona-Catalunya.svg.png"},
    "austria":    {"country": "Austria",     "flag": "🇦🇹", "length_km": 4.318, "corners": 10,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Red_Bull_Ring_track_map.svg/320px-Red_Bull_Ring_track_map.svg.png"},
    "britain":    {"country": "UK",          "flag": "🇬🇧", "length_km": 5.891, "corners": 18,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Silverstone_circuit.svg/320px-Silverstone_circuit.svg.png"},
    "hungary":    {"country": "Hungary",     "flag": "🇭🇺", "length_km": 4.381, "corners": 13,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Hungaroring.svg/320px-Hungaroring.svg.png"},
    "belgium":    {"country": "Belgium",     "flag": "🇧🇪", "length_km": 7.004, "corners": 20,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Spa-Francorchamps_of_Belgium.svg/320px-Spa-Francorchamps_of_Belgium.svg.png"},
    "netherlands":{"country": "Netherlands", "flag": "🇳🇱", "length_km": 4.259, "corners": 14,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Zandvoort_track_map.svg/320px-Zandvoort_track_map.svg.png"},
    "italy":      {"country": "Italy",       "flag": "🇮🇹", "length_km": 5.793, "corners": 11,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Monza_track_map.svg/320px-Monza_track_map.svg.png"},
    "azerbaijan": {"country": "Azerbaijan",  "flag": "🇦🇿", "length_km": 6.003, "corners": 20,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Baku_circuit_map.svg/320px-Baku_circuit_map.svg.png"},
    "singapore":  {"country": "Singapore",   "flag": "🇸🇬", "length_km": 4.940, "corners": 23,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Marina_Bay_Circuit.svg/320px-Marina_Bay_Circuit.svg.png"},
    "usa":        {"country": "USA",         "flag": "🇺🇸", "length_km": 5.513, "corners": 20,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Circuit_of_the_Americas_track_map.svg/320px-Circuit_of_the_Americas_track_map.svg.png"},
    "mexico":     {"country": "Mexico",      "flag": "🇲🇽", "length_km": 4.304, "corners": 17,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Mexico_City_Circuit.svg/320px-Mexico_City_Circuit.svg.png"},
    "brazil":     {"country": "Brazil",      "flag": "🇧🇷", "length_km": 4.309, "corners": 15,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Interlagos.svg/320px-Interlagos.svg.png"},
    "las_vegas":  {"country": "USA",         "flag": "🇺🇸", "length_km": 6.201, "corners": 17,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Las_Vegas_Street_Circuit.svg/320px-Las_Vegas_Street_Circuit.svg.png"},
    "qatar":      {"country": "Qatar",       "flag": "🇶🇦", "length_km": 5.380, "corners": 16,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Losail_Circuit.svg/320px-Losail_Circuit.svg.png"},
    "abu_dhabi":  {"country": "UAE",         "flag": "🇦🇪", "length_km": 5.281, "corners": 16,
                   "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Yas_Marina_Circuit.svg/320px-Yas_Marina_Circuit.svg.png"},
}
```

## Write Protocol
```python
import json, os

def enrich_data_js(data_js_path: str, driver_images: dict, track_layouts: dict, next_race: dict, season_summary: dict):
    with open(data_js_path, 'r', encoding='utf-8') as f:
        raw = f.read()
    prefix = "window.F1_DATA = "
    suffix = ";\n"
    json_str = raw[len(prefix):-len(suffix)]
    data = json.loads(json_str)
    
    data["driver_images"] = driver_images
    data["track_layouts"] = track_layouts
    data["next_race"] = next_race
    data["season_summary"] = season_summary
    
    tmp = data_js_path + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        f.write(f"window.F1_DATA = {json.dumps(data, indent=2, ensure_ascii=False)};\n")
    os.replace(tmp, data_js_path)
    print(f"Enriched {data_js_path} with media + next_race + season_summary")
```
