import json
import re

DATA_JS_PATH = "dashboard/data.js"

TRACK_STATS = {
    "albert_park": {"length": "5.278km", "first_gp": "1996", "laps": 58, "fastest_lap": "1:19.813", "fastest_driver": "Charles Leclerc (2024)", "distance": "306.124km"},
    "bahrain": {"length": "5.412km", "first_gp": "2004", "laps": 57, "fastest_lap": "1:31.447", "fastest_driver": "Pedro de la Rosa (2005)", "distance": "308.238km"},
    "jeddah": {"length": "6.174km", "first_gp": "2021", "laps": 50, "fastest_lap": "1:30.734", "fastest_driver": "Lewis Hamilton (2021)", "distance": "308.45km"},
    "suzuka": {"length": "5.807km", "first_gp": "1987", "laps": 53, "fastest_lap": "1:30.983", "fastest_driver": "Lewis Hamilton (2019)", "distance": "307.471km"},
    "shanghai": {"length": "5.451km", "first_gp": "2004", "laps": 56, "fastest_lap": "1:32.238", "fastest_driver": "Michael Schumacher (2004)", "distance": "305.066km"},
    "miami": {"length": "5.412km", "first_gp": "2022", "laps": 57, "fastest_lap": "1:29.708", "fastest_driver": "Max Verstappen (2023)", "distance": "308.326km"},
    "villeneuve": {"length": "4.361km", "first_gp": "1978", "laps": 70, "fastest_lap": "1:13.078", "fastest_driver": "Valtteri Bottas (2019)", "distance": "305.27km"},
    "monaco": {"length": "3.337km", "first_gp": "1950", "laps": 78, "fastest_lap": "1:12.909", "fastest_driver": "Lewis Hamilton (2021)", "distance": "260.286km"},
    "catalunya": {"length": "4.657km", "first_gp": "1991", "laps": 66, "fastest_lap": "1:16.330", "fastest_driver": "Max Verstappen (2023)", "distance": "307.236km"},
    "red_bull_ring": {"length": "4.318km", "first_gp": "1970", "laps": 71, "fastest_lap": "1:05.619", "fastest_driver": "Carlos Sainz (2020)", "distance": "306.452km"},
    "silverstone": {"length": "5.891km", "first_gp": "1950", "laps": 52, "fastest_lap": "1:27.097", "fastest_driver": "Max Verstappen (2020)", "distance": "306.198km"},
    "hungaroring": {"length": "4.381km", "first_gp": "1986", "laps": 70, "fastest_lap": "1:16.627", "fastest_driver": "Lewis Hamilton (2020)", "distance": "306.63km"},
    "spa": {"length": "7.004km", "first_gp": "1950", "laps": 44, "fastest_lap": "1:46.286", "fastest_driver": "Valtteri Bottas (2018)", "distance": "308.052km"},
    "zandvoort": {"length": "4.259km", "first_gp": "1952", "laps": 72, "fastest_lap": "1:11.097", "fastest_driver": "Lewis Hamilton (2021)", "distance": "306.587km"},
    "monza": {"length": "5.793km", "first_gp": "1950", "laps": 53, "fastest_lap": "1:21.046", "fastest_driver": "Rubens Barrichello (2004)", "distance": "306.72km"},
    "madrid": {"length": "5.474km", "first_gp": "2026", "laps": 55, "fastest_lap": "-", "fastest_driver": "-", "distance": "-"},
    "baku": {"length": "6.003km", "first_gp": "2016", "laps": 51, "fastest_lap": "1:43.009", "fastest_driver": "Charles Leclerc (2019)", "distance": "306.049km"},
    "marina_bay": {"length": "4.94km", "first_gp": "2008", "laps": 62, "fastest_lap": "1:35.867", "fastest_driver": "Lewis Hamilton (2023)", "distance": "306.143km"},
    "americas": {"length": "5.513km", "first_gp": "2012", "laps": 56, "fastest_lap": "1:36.169", "fastest_driver": "Charles Leclerc (2019)", "distance": "308.405km"},
    "rodriguez": {"length": "4.304km", "first_gp": "1963", "laps": 71, "fastest_lap": "1:17.774", "fastest_driver": "Valtteri Bottas (2021)", "distance": "305.354km"},
    "interlagos": {"length": "4.309km", "first_gp": "1973", "laps": 71, "fastest_lap": "1:10.540", "fastest_driver": "Valtteri Bottas (2018)", "distance": "305.879km"},
    "las_vegas": {"length": "6.201km", "first_gp": "2023", "laps": 50, "fastest_lap": "1:35.490", "fastest_driver": "Oscar Piastri (2023)", "distance": "309.958km"},
    "losail": {"length": "5.419km", "first_gp": "2021", "laps": 57, "fastest_lap": "1:24.319", "fastest_driver": "Max Verstappen (2023)", "distance": "308.611km"},
    "yas_marina": {"length": "5.281km", "first_gp": "2009", "laps": 58, "fastest_lap": "1:26.103", "fastest_driver": "Max Verstappen (2021)", "distance": "306.183km"}
}

def main():
    print("Reading data.js...")
    with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'window\.F1_DATA\s*=\s*(\{.*?\});\s*$', content, re.DOTALL)
    if not match:
        print("Failed to parse data.js")
        return
        
    f1_data = json.loads(match.group(1))
    track_layouts = f1_data.get('track_layouts', {})
    
    for circuit_id, stats in TRACK_STATS.items():
        if circuit_id not in track_layouts:
            track_layouts[circuit_id] = {}
        # inject stats
        for k, v in stats.items():
            track_layouts[circuit_id][k] = v
            
    f1_data['track_layouts'] = track_layouts
    
    print("Writing back to data.js...")
    new_js = f"window.F1_DATA = {json.dumps(f1_data, indent=2)};\n"
    with open(DATA_JS_PATH, 'w', encoding='utf-8') as f:
        f.write(new_js)
    print("Done!")

if __name__ == "__main__":
    main()
