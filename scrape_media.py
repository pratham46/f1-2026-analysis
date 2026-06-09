import json
import re
import time
import urllib.request
import urllib.error

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

CDN_BASE = "https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026track{}detailed.webp"

DATA_JS_PATH = "dashboard/data.js"

def fetch_url(url):
    req = urllib.request.Request(
        url, 
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
    )
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            return response.read().decode('utf-8')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def verify_head(url):
    req = urllib.request.Request(
        url, 
        method='HEAD',
        headers={'User-Agent': 'Mozilla/5.0'}
    )
    try:
        with urllib.request.urlopen(req, timeout=5) as response:
            return response.status == 200
    except Exception as e:
        return False

def main():
    print("Reading data.js...")
    with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'window\.F1_DATA\s*=\s*(\{.*?\});\s*$', content, re.DOTALL)
    if not match:
        print("Failed to parse data.js")
        return
        
    f1_data = json.loads(match.group(1))
    
    driver_images = f1_data.get('driver_images', {})
    track_layouts = f1_data.get('track_layouts', {})
    
    # 1. Fetch Driver Images
    print("Fetching driver images...")
    for driver_id, slug in DRIVER_F1_SLUG.items():
        if driver_id not in driver_images or driver_images[driver_id] is None:
            print(f"  Fetching {driver_id} ({slug})...")
            html = fetch_url(f"https://www.formula1.com/en/drivers/{slug}")
            if html:
                # Look for media.formula1.com/.../drivers/...webp|png
                img_match = re.search(r'(https://media\.formula1\.com/[^"\'\s]*?/drivers/[^"\'\s]*?\.(?:webp|png))', html)
                if img_match:
                    driver_images[driver_id] = img_match.group(1)
                    print(f"    -> Found: {driver_images[driver_id]}")
                else:
                    driver_images[driver_id] = None
                    print("    -> Not found")
            else:
                driver_images[driver_id] = None
            time.sleep(1)
            
    # 2. Track Layouts
    print("Generating track layouts...")
    for circuit_id, slug in TRACK_CDN_SLUG.items():
        if circuit_id not in track_layouts:
            track_layouts[circuit_id] = {}
            
        url = CDN_BASE.format(slug)
        # Verify URL
        print(f"  Verifying {circuit_id} ({url})...")
        if verify_head(url):
            track_layouts[circuit_id]["img_url"] = url
            print("    -> OK")
        else:
            track_layouts[circuit_id]["img_url"] = None
            print("    -> 404 Not Found")
            
    f1_data['driver_images'] = driver_images
    f1_data['track_layouts'] = track_layouts
    
    # Write back
    print("Writing back to data.js...")
    new_js = f"window.F1_DATA = {json.dumps(f1_data, indent=2)};\n"
    with open(DATA_JS_PATH, 'w', encoding='utf-8') as f:
        f.write(new_js)
    
    print("Done! Enriched data.js.")

if __name__ == "__main__":
    main()
