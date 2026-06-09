import json, csv, os
from collections import defaultdict

DRIVER_META = {
    "verstappen": {"name": "Max Verstappen", "short": "VER", "team": "red_bull", "team_name": "Red Bull Racing", "color": "#3671C6", "number": 1},
    "norris":     {"name": "Lando Norris",   "short": "NOR", "team": "mclaren",  "team_name": "McLaren",         "color": "#FF8000", "number": 4},
    "leclerc":    {"name": "Charles Leclerc","short": "LEC", "team": "ferrari",  "team_name": "Ferrari",         "color": "#E8002D", "number": 16},
    "piastri":    {"name": "Oscar Piastri",  "short": "PIA", "team": "mclaren",  "team_name": "McLaren",         "color": "#FF8000", "number": 81},
    "sainz":      {"name": "Carlos Sainz",   "short": "SAI", "team": "williams", "team_name": "Williams",        "color": "#64C4FF", "number": 55},
    "hamilton":   {"name": "Lewis Hamilton", "short": "HAM", "team": "ferrari",  "team_name": "Ferrari",         "color": "#E8002D", "number": 44},
    "russell":    {"name": "George Russell",  "short": "RUS", "team": "mercedes","team_name": "Mercedes",        "color": "#27F4D2", "number": 63},
    "antonelli":  {"name": "Andrea Antonelli","short": "ANT", "team": "mercedes","team_name": "Mercedes",        "color": "#27F4D2", "number": 12},
    "alonso":     {"name": "Fernando Alonso","short": "ALO", "team": "aston_martin","team_name": "Aston Martin", "color": "#358C75", "number": 14},
    "stroll":     {"name": "Lance Stroll",   "short": "STR", "team": "aston_martin","team_name": "Aston Martin", "color": "#358C75", "number": 18},
    "tsunoda":    {"name": "Yuki Tsunoda",   "short": "TSU", "team": "red_bull", "team_name": "Red Bull Racing", "color": "#3671C6", "number": 22},
    "lawson":     {"name": "Liam Lawson",    "short": "LAW", "team": "rb",       "team_name": "RB",              "color": "#6692FF", "number": 30},
    "albon":      {"name": "Alex Albon",     "short": "ALB", "team": "williams", "team_name": "Williams",        "color": "#64C4FF", "number": 23},
    "colapinto":  {"name": "Franco Colapinto","short": "COL", "team": "alpine",  "team_name": "Alpine",          "color": "#FF87BC", "number": 43},
    "gasly":      {"name": "Pierre Gasly",   "short": "GAS", "team": "alpine",  "team_name": "Alpine",          "color": "#FF87BC", "number": 10},
    "ocon":       {"name": "Esteban Ocon",   "short": "OCO", "team": "haas",    "team_name": "Haas",            "color": "#B6BABD", "number": 31},
    "bearman":    {"name": "Oliver Bearman", "short": "BEA", "team": "haas",    "team_name": "Haas",            "color": "#B6BABD", "number": 87},
    "hulkenberg": {"name": "Nico Hulkenberg","short": "HUL", "team": "sauber",  "team_name": "Sauber",          "color": "#52E252", "number": 27},
    "bottas":     {"name": "Valtteri Bottas","short": "BOT", "team": "sauber",  "team_name": "Sauber",          "color": "#52E252", "number": 77},
    "magnussen":  {"name": "Kevin Magnussen","short": "MAG", "team": "sauber",  "team_name": "Sauber",          "color": "#52E252", "number": 20},
}

TEAM_COLORS = {
    "red_bull": "#3671C6", "ferrari": "#E8002D", "mclaren": "#FF8000",
    "mercedes": "#27F4D2", "aston_martin": "#358C75", "williams": "#64C4FF",
    "alpine": "#FF87BC", "rb": "#6692FF", "haas": "#B6BABD", "sauber": "#52E252"
}

TEAM_NAMES = {
    "mclaren": "McLaren", "ferrari": "Ferrari", "mercedes": "Mercedes",
    "red_bull": "Red Bull Racing", "williams": "Williams", "rb": "RB",
    "aston_martin": "Aston Martin", "haas": "Haas", "alpine": "Alpine", "sauber": "Sauber"
}

# Normalise prediction driver ids to DRIVER_META keys
# Predictions use: max_verstappen, hadjar (not in meta -> lawson's teammate), doohan (->colapinto), bortoleto (->hulkenberg)
# We keep unknown drivers with generated fallback info
DRIVER_NORM = {
    "max_verstappen": "verstappen",
    "hadjar": "hadjar",       # RB second driver - not in skill meta, keep as-is with fallback
    "doohan": "doohan",       # Alpine second driver - keep as-is
    "bortoleto": "bortoleto", # Sauber second driver - keep as-is
}

def norm_driver(d):
    return DRIVER_NORM.get(d, d)

def driver_info(driver_id):
    if driver_id in DRIVER_META:
        return dict(DRIVER_META[driver_id])
    # Reasonable fallbacks for drivers in predictions but not in DRIVER_META
    fallbacks = {
        "hadjar": {"name": "Isack Hadjar", "short": "HAD", "team": "rb", "team_name": "RB", "color": "#6692FF", "number": 6},
        "doohan": {"name": "Jack Doohan",  "short": "DOO", "team": "alpine", "team_name": "Alpine", "color": "#FF87BC", "number": 7},
        "bortoleto": {"name": "Gabriel Bortoleto", "short": "BOR", "team": "sauber", "team_name": "Sauber", "color": "#52E252", "number": 5},
    }
    if driver_id in fallbacks:
        return fallbacks[driver_id]
    return {"name": driver_id.title(), "short": driver_id[:3].upper(), "team": "unknown", "team_name": "Unknown", "color": "#888888", "number": 0}

# Load predictions
with open("_workspace/predictions.json", encoding="utf-8") as f:
    preds = json.load(f)

meta = preds["metadata"]

# Driver standings
driver_standings = []
for entry in preds["driver_standings"]:
    raw_id = entry["driver"]
    d_id = norm_driver(raw_id)
    info = driver_info(d_id)
    driver_standings.append({
        "rank": entry["position"],
        "driver_id": d_id,
        "name": info["name"],
        "short": info["short"],
        "team": info.get("team", entry["constructor"]),
        "team_name": info.get("team_name", entry["constructor"].title()),
        "color": info.get("color", "#888888"),
        "number": info.get("number", 0),
        "predicted_points": entry["predicted_points"],
        "win_probability": entry["race_win_probability"],
        "championship_win_probability": entry["championship_win_probability"],
        "podium_probability": entry["podium_rate"],
        "avg_predicted_position": float(entry["base_predicted_position"]),
    })

# Constructor standings
constructor_standings = []
for entry in preds["constructor_standings"]:
    cid = entry["constructor"]
    constructor_standings.append({
        "rank": entry["position"],
        "constructor_id": cid,
        "name": TEAM_NAMES.get(cid, cid.title()),
        "color": TEAM_COLORS.get(cid, "#888888"),
        "predicted_points": entry["predicted_points"],
        "championship_win_probability": entry["championship_win_probability"],
    })

# Historical data from features.csv
year_driver_pts = defaultdict(lambda: defaultdict(float))
year_constructor_pts = defaultdict(lambda: defaultdict(float))
driver_year_positions = defaultdict(lambda: defaultdict(list))

with open("data/processed/features.csv", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        year = row["year"]
        if year not in ("2020","2021","2022","2023","2024","2025"):
            continue
        driver = row["driver"]
        constructor = row["constructor"]
        try:
            pts = float(row["points"])
        except:
            pts = 0.0
        try:
            pos = float(row["position"])
        except:
            pos = None
        year_driver_pts[year][driver] += pts
        year_constructor_pts[year][constructor] += pts
        if pos is not None:
            driver_year_positions[year][driver].append(pos)

SEASONS = ["2020","2021","2022","2023","2024","2025"]

historical_driver_points = {}
for yr in SEASONS:
    historical_driver_points[yr] = {k: round(v,1) for k,v in year_driver_pts[yr].items() if v > 0}

historical_constructor_points = {}
for yr in SEASONS:
    historical_constructor_points[yr] = {k: round(v,1) for k,v in year_constructor_pts[yr].items() if v > 0}

# Driver rolling form (for DRIVER_META drivers only)
driver_rolling_form = {}
for d_id in DRIVER_META:
    pts_list = []
    avg_list = []
    for yr in SEASONS:
        pts = round(year_driver_pts[yr].get(d_id, 0.0), 1)
        positions = driver_year_positions[yr].get(d_id, [])
        avg_finish = round(sum(positions)/len(positions), 2) if positions else None
        pts_list.append(pts)
        avg_list.append(avg_finish)
    driver_rolling_form[d_id] = {
        "seasons": [int(y) for y in SEASONS],
        "points": pts_list,
        "avg_finish": avg_list
    }

# Race calendar - 24 rounds
RACE_CALENDAR = [
    (1,  "albert_park",  "Australian Grand Prix"),
    (2,  "shanghai",     "Chinese Grand Prix"),
    (3,  "suzuka",       "Japanese Grand Prix"),
    (4,  "miami",        "Miami Grand Prix"),
    (5,  "imola",        "Emilia Romagna Grand Prix"),
    (6,  "monte_carlo",  "Monaco Grand Prix"),
    (7,  "montreal",     "Canadian Grand Prix"),
    (8,  "barcelona",    "Spanish Grand Prix"),
    (9,  "spielberg",    "Austrian Grand Prix"),
    (10, "silverstone",  "British Grand Prix"),
    (11, "hungaroring",  "Hungarian Grand Prix"),
    (12, "spa",          "Belgian Grand Prix"),
    (13, "zandvoort",    "Dutch Grand Prix"),
    (14, "monza",        "Italian Grand Prix"),
    (15, "baku",         "Azerbaijan Grand Prix"),
    (16, "marina_bay",   "Singapore Grand Prix"),
    (17, "austin",       "United States Grand Prix"),
    (18, "mexico_city",  "Mexico City Grand Prix"),
    (19, "sao_paulo",    "Sao Paulo Grand Prix"),
    (20, "las_vegas",    "Las Vegas Grand Prix"),
    (21, "lusail",       "Qatar Grand Prix"),
    (22, "yas_marina",   "Abu Dhabi Grand Prix"),
    (23, "jeddah",       "Saudi Arabian Grand Prix"),
    (24, "sakhir",       "Bahrain Grand Prix"),
]

base_race_drivers = preds["race_predictions"][0]["drivers"]

race_predictions = []
for rnd, circuit_id, name in RACE_CALENDAR:
    top5 = []
    for d in base_race_drivers[:5]:
        d_id = norm_driver(d["driver"])
        top5.append({"driver_id": d_id, "win_prob": d["win_probability"]})
    race_predictions.append({
        "round": rnd,
        "circuit_id": circuit_id,
        "name": name,
        "top5": top5,
    })

# Assemble final data object
data = {
    "generated_at": "2026-06-09",
    "model_cv_mae": meta["cv_mae"],
    "seasons_used": [int(y) for y in SEASONS],
    "driver_info": {k: dict(v) for k, v in DRIVER_META.items()},
    "team_colors": TEAM_COLORS,
    "driver_standings_2026": driver_standings,
    "constructor_standings_2026": constructor_standings,
    "historical_driver_points": historical_driver_points,
    "historical_constructor_points": historical_constructor_points,
    "race_predictions": race_predictions,
    "driver_rolling_form": driver_rolling_form,
    "regulation_impact_2026": {
        "description": "New 2026 regs: smaller cars, active aero (ManualDRS), revised hybrid formula (50/50 ICE + ERS).",
        "constructor_competitiveness_change": {
            "red_bull": -5, "ferrari": 8, "mclaren": 3, "mercedes": 5,
            "aston_martin": -2, "williams": 1, "alpine": -3, "rb": -1, "haas": 0, "sauber": -2
        }
    }
}

# Atomic write
os.makedirs("dashboard", exist_ok=True)
tmp = "dashboard/data.js.tmp"
json_str = json.dumps(data, indent=2, ensure_ascii=False)
with open(tmp, "w", encoding="utf-8") as f:
    f.write("window.F1_DATA = " + json_str + ";\n")
os.replace(tmp, "dashboard/data.js")

# Verify
with open("dashboard/data.js", encoding="utf-8") as f:
    content = f.read()
assert content.startswith("window.F1_DATA = "), "Missing prefix"
assert content.endswith(";\n"), "Missing suffix"
inner = content[len("window.F1_DATA = "):-2]
parsed = json.loads(inner)

required_keys = [
    "generated_at","model_cv_mae","seasons_used","driver_info","team_colors",
    "driver_standings_2026","constructor_standings_2026","historical_driver_points",
    "historical_constructor_points","race_predictions","driver_rolling_form","regulation_impact_2026"
]
missing = [k for k in required_keys if k not in parsed]
assert not missing, f"Missing keys: {missing}"

size = os.path.getsize("dashboard/data.js")
champion_name = driver_info(norm_driver(preds["champion"]))["name"]
print(f"Published dashboard/data.js -- {size} bytes, {len(parsed['driver_standings_2026'])} drivers, {len(parsed['race_predictions'])} races")
print(f"generated_at: {parsed['generated_at']}")
print(f"champion: {champion_name}")
print(f"file_size_bytes: {size}")
print("JSON validation: PASSED")
