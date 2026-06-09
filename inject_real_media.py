"""Inject verified real formula1.com driver photos + track layouts into data.js.

Runs after the Python pipeline (and enrich_dashboard.py). All URLs were
HEAD-verified against media.formula1.com. Covers both circuit-id naming styles
(OpenF1 'albert_park' and calendar 'australia') so it works regardless of which
the pipeline emitted.
"""
import json
import re

DATA_JS = "dashboard/data.js"

# driver_id -> "teamFolder/code" on the f1.com 2026 CDN (+ common aliases).
DRIVER_CODE = {
    "piastri": "mclaren/oscpia01", "norris": "mclaren/lannor01",
    "leclerc": "ferrari/chalec01", "hamilton": "ferrari/lewham01",
    "max_verstappen": "redbullracing/maxver01", "verstappen": "redbullracing/maxver01",
    "russell": "mercedes/georus01", "antonelli": "mercedes/andant01",
    "sainz": "williams/carsai01", "albon": "williams/alealb01",
    "alonso": "astonmartin/feralo01", "stroll": "astonmartin/lanstr01",
    "bearman": "haasf1team/olibea01", "ocon": "haasf1team/estoco01",
    "gasly": "alpine/piegas01", "colapinto": "alpine/fracol01",
    "hadjar": "redbullracing/isahad01", "lawson": "racingbulls/lialaw01",
    "tsunoda": "racingbulls/yuktsu01", "arvid_lindblad": "racingbulls/arvlin01",
    "hulkenberg": "audi/nichul01", "bortoleto": "audi/gabbor01",
    "perez": "cadillac/serper01", "bottas": "cadillac/valbot01",
}

# every circuit-id variant -> verified f1.com track-layout CDN slug
TRACK_SLUG = {
    "australia": "melbourne", "albert_park": "melbourne", "melbourne": "melbourne",
    "china": "shanghai", "shanghai": "shanghai",
    "japan": "suzuka", "suzuka": "suzuka",
    "bahrain": "sakhir", "sakhir": "sakhir",
    "saudi_arabia": "jeddah", "jeddah": "jeddah",
    "miami": "miami",
    "canada": "montreal", "villeneuve": "montreal", "montreal": "montreal",
    "monaco": "montecarlo",
    "spain": "catalunya", "catalunya": "catalunya", "barcelona": "catalunya",
    "madrid": "madrid", "madring": "madrid",
    "austria": "spielberg", "red_bull_ring": "spielberg", "spielberg": "spielberg",
    "britain": "silverstone", "silverstone": "silverstone",
    "belgium": "spafrancorchamps", "spa": "spafrancorchamps",
    "hungary": "hungaroring", "hungaroring": "hungaroring",
    "netherlands": "zandvoort", "zandvoort": "zandvoort",
    "italy": "monza", "monza": "monza",
    "azerbaijan": "baku", "baku": "baku",
    "singapore": "singapore", "marina_bay": "singapore",
    "americas": "austin", "austin": "austin", "cota": "austin",
    "mexico": "mexicocity", "rodriguez": "mexicocity", "mexico_city": "mexicocity",
    "brazil": "interlagos", "interlagos": "interlagos", "sao_paulo": "interlagos",
    "las_vegas": "lasvegas",
    "qatar": "lusail", "losail": "lusail", "lusail": "lusail",
    "abu_dhabi": "yasmarina", "yas_marina": "yasmarina",
}

def driver_url(tc):
    return ("https://media.formula1.com/image/upload/c_fill,w_720/q_auto/"
            "v1740000001/common/f1/2026/%s/2026%sright.webp" % (tc, tc.replace("/", "")))

def track_url(slug):
    return ("https://media.formula1.com/image/upload/c_fit,h_704/q_auto/"
            "v1740000001/common/f1/2026/track/2026track%sdetailed.webp" % slug)

def main():
    with open(DATA_JS, "r", encoding="utf-8") as f:
        content = f.read()
    m = re.search(r"window\.F1_DATA\s*=\s*(\{.*\});?\s*$", content, re.DOTALL)
    if not m:
        print("Could not parse data.js"); return
    data = json.loads(m.group(1))

    data["driver_images"] = {d: driver_url(tc) for d, tc in DRIVER_CODE.items()}
    data["track_layouts"] = {c: {"img_url": track_url(s)} for c, s in TRACK_SLUG.items()}

    with open(DATA_JS, "w", encoding="utf-8") as f:
        f.write("window.F1_DATA = " + json.dumps(data, indent=2) + ";\n")
    print("Injected %d driver photos + %d track layouts into %s"
          % (len(data["driver_images"]), len(data["track_layouts"]), DATA_JS))

if __name__ == "__main__":
    main()
