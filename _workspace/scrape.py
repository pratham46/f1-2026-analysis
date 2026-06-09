import urllib.request, urllib.error, re, json, datetime
import html as htmlmod

UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36'}

F1_NAME_TO_ID = {
    "ANTONELLI":"antonelli","RUSSELL":"russell","LECLERC":"leclerc","HAMILTON":"hamilton",
    "NORRIS":"norris","PIASTRI":"piastri","VERSTAPPEN":"max_verstappen","HADJAR":"hadjar",
    "GASLY":"gasly","COLAPINTO":"colapinto","LAWSON":"lawson","LINDBLAD":"arvid_lindblad",
    "BEARMAN":"bearman","OCON":"ocon","SAINZ":"sainz","ALBON":"albon","BORTOLETO":"bortoleto",
    "HULKENBERG":"hulkenberg","BOTTAS":"bottas","PEREZ":"perez","STROLL":"stroll","ALONSO":"alonso",
}

def to_id(name):
    if not name: return None
    key = name.upper()
    for k, v in F1_NAME_TO_ID.items():
        if k in key:
            return v
    return None

def strip(s):
    return htmlmod.unescape(re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', s))).strip()

def fetch(url, timeout=25):
    try:
        r = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=timeout)
        b = r.read().decode('utf-8', 'ignore')
        if len(b) < 2000 or 'Just a moment' in b or 'cf-challenge' in b.lower():
            return None, 'blocked-cf'
        return b, None
    except urllib.error.HTTPError as e:
        return None, f'http-{e.code}'
    except Exception as e:
        return None, f'err-{type(e).__name__}'

def table_rows(html):
    m = re.search(r'<table[^>]*>(.*?)</table>', html, re.S | re.I)
    if not m:
        return None
    out = []
    for row in re.findall(r'<tr[^>]*>(.*?)</tr>', m.group(1), re.S | re.I):
        cells = [strip(c) for c in re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', row, re.S | re.I)]
        out.append([c for c in cells if c != ''])
    return out

RACE_NAMES = {
    'australia':'Australian Grand Prix','china':'Chinese Grand Prix','japan':'Japanese Grand Prix',
    'miami':'Miami Grand Prix','canada':'Canadian Grand Prix','monaco':'Monaco Grand Prix',
    'barcelona-catalunya':'Spanish Grand Prix','spain':'Spanish Grand Prix','austria':'Austrian Grand Prix',
    'great-britain':'British Grand Prix','belgium':'Belgian Grand Prix','hungary':'Hungarian Grand Prix',
    'netherlands':'Dutch Grand Prix','italy':'Italian Grand Prix','azerbaijan':'Azerbaijan Grand Prix',
    'singapore':'Singapore Grand Prix','united-states':'United States Grand Prix',
    'mexico':'Mexico City Grand Prix','brazil':'Sao Paulo Grand Prix','las-vegas':'Las Vegas Grand Prix',
    'qatar':'Qatar Grand Prix','abu-dhabi':'Abu Dhabi Grand Prix',
}
MONTHS = {'Jan':'01','Feb':'02','Mar':'03','Apr':'04','May':'05','Jun':'06','Jul':'07',
          'Aug':'08','Sep':'09','Oct':'10','Nov':'11','Dec':'12'}

# Step 1: discover completed races from the results index.
# The index page links to ALL calendar races, but only races that have actually
# run appear as data rows in the results table. Use those rows to identify which
# slugs are truly completed, then map each to its race-result link id.
idx, err = fetch('https://www.formula1.com/en/results/2026/races')
completed = []   # (id, slug)
dates = {}
if idx:
    links = re.findall(r'/en/results/2026/races/(\d+)/([a-z\-]+)/race-result', idx)
    id_by_slug = {}
    for rid, slug in links:
        id_by_slug.setdefault(slug, rid)
    rows = table_rows(idx) or []
    # Each data row = a completed race. Col0 ends with the GP location name.
    run_slugs = []
    for r in rows[1:]:
        if len(r) < 2:
            continue
        mflag = re.search(r'([A-Za-z]+)\s*$', r[0])
        loc = mflag.group(1).lower() if mflag else None
        # match location to a slug present in the links
        slug = None
        for s in id_by_slug:
            if loc and (loc in s or s.startswith(loc) or loc == s.split('-')[0]):
                slug = s
                break
        if not slug and loc in id_by_slug:
            slug = loc
        if slug:
            run_slugs.append(slug)
            dm = re.match(r'(\d{1,2})\s+([A-Za-z]{3})', r[1])
            if dm:
                dates[slug] = f"2026-{MONTHS.get(dm.group(2), '01')}-{int(dm.group(1)):02d}"
    seen = set()
    for slug in run_slugs:
        if slug in seen or slug not in id_by_slug:
            continue
        seen.add(slug)
        completed.append((id_by_slug[slug], slug))

races = []
ok = 0
blocked = 0
for rid, slug in completed:
    url = f'https://www.formula1.com/en/results/2026/races/{rid}/{slug}/race-result'
    body, e = fetch(url)
    entry = {"round_slug": slug, "name": RACE_NAMES.get(slug, slug),
             "date": dates.get(slug), "results": [], "blocked": False}
    if e:
        entry["blocked"] = True
        entry["error"] = e
        blocked += 1
        print(f'BLOCKED {slug}: {e}')
        races.append(entry)
        continue
    rows = table_rows(body)
    if not rows or len(rows) < 2:
        entry["blocked"] = True
        entry["error"] = "no-table"
        blocked += 1
        print(f'NO-TABLE {slug}')
        races.append(entry)
        continue
    # columns: Pos, No, Driver, Team, Laps, Time/Retired, Pts
    for r in rows[1:]:
        if len(r) < 7:
            continue
        pos = r[0]
        try:
            pos = int(pos)
        except:
            pass
        driver_disp = r[2]
        did = to_id(driver_disp)
        team = r[3]
        gap = r[5]
        try:
            pts = int(r[6])
        except:
            pts = 0
        entry["results"].append({
            "pos": pos, "driver_id": did, "driver_display": driver_disp,
            "team": team, "time_or_gap": gap, "fastest_lap": None, "points": pts,
        })
    ok += 1
    print(f'OK {slug}: {len(entry["results"])} drivers, winner={entry["results"][0]["driver_id"] if entry["results"] else "?"}')
    races.append(entry)

# Step 3: standings
def driver_standings():
    b, e = fetch('https://www.formula1.com/en/results/2026/drivers')
    if e:
        print('drivers standings blocked', e); return []
    out = []
    for r in (table_rows(b) or [])[1:]:
        if len(r) < 5: continue
        try: pos = int(r[0])
        except: continue
        out.append({"pos": pos, "driver_id": to_id(r[1]), "driver_display": r[1],
                    "nationality": r[2], "team": r[3], "points": int(re.sub(r'\D','',r[4]) or 0)})
    return out

def team_standings():
    b, e = fetch('https://www.formula1.com/en/results/2026/team')
    if e:
        print('team standings blocked', e); return []
    out = []
    for r in (table_rows(b) or [])[1:]:
        if len(r) < 3: continue
        try: pos = int(r[0])
        except: continue
        out.append({"pos": pos, "team": r[1].lower(), "team_display": r[1],
                    "points": int(re.sub(r'\D','',r[2]) or 0)})
    return out

drv = driver_standings()
con = team_standings()
print(f'driver standings: {len(drv)} rows; constructor standings: {len(con)} rows')

mostly_blocked = (blocked > max(1, len(completed)) * 0.5) if completed else (err is not None)

out = {
    "scraped_at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
    "source": "formula1.com",
    "mostly_blocked": bool(mostly_blocked),
    "races": races,
    "driver_standings": drv,
    "constructor_standings": con,
}
json.dump(out, open(r'C:\Users\prath\f1-2026-analysis\_workspace\f1_scraped_results.json', 'w', encoding='utf-8'), indent=2)
print(f'=== DONE: ok={ok} blocked={blocked} completed_found={len(completed)} ===')
