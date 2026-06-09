---
name: scrape-f1-results
description: "Scrape live race results, news, and standings from the official Formula 1 website (formula1.com/en/racing/2026 and individual race pages). Use when fetching real race data from formula1.com, scraping F1 race results, getting official podium finishes, pulling race news headlines, or checking the live 2026 standings from the official source. Must be used by the f1-results-scraper agent. Do NOT use for historical data from Jolpica/Ergast — that is fetch-race-data's job."
---

## URL Patterns

### Season Calendar (list of all 2026 races)
```
https://www.formula1.com/en/racing/2026
```

### Individual Race Hub
```
https://www.formula1.com/en/racing/2026/{race-slug}
```
Examples:
- `https://www.formula1.com/en/racing/2026/monaco`
- `https://www.formula1.com/en/racing/2026/canada`
- `https://www.formula1.com/en/racing/2026/barcelona-catalunya`
- `https://www.formula1.com/en/racing/2026/great-britain`

### Race Result Page
```
https://www.formula1.com/en/results/2026/races/{race-id}/{race-slug}/race-result
```
Discover race IDs by parsing the results index first:
```
https://www.formula1.com/en/results/2026/races
```
The `/en/racing/2026/{slug}/race-result` pattern returns 404 — use `/en/results/` instead.

### Driver Standings
```
https://www.formula1.com/en/results/2026/drivers
```

### Constructor Standings
```
https://www.formula1.com/en/results/2026/team
```

## Scraping Strategy

### Step 1 — Discover completed races
```python
# Fetch the season page to find completed race slugs
page = WebFetch("https://www.formula1.com/en/racing/2026",
                prompt="List all race names and their URL slugs. Mark which are completed.")
```

### Step 2 — Fetch each race result
```python
for slug in completed_slugs:
    result_url = f"https://www.formula1.com/en/racing/2026/{slug}/race-result"
    page = WebFetch(result_url,
                    prompt="Extract the full race result table: position, driver name, team, gap/time, fastest lap indicator, points scored. Return as JSON array.")
```

### Step 3 — Fetch standings
```python
drv = WebFetch("https://www.formula1.com/en/results/2026/drivers",
               prompt="Extract driver standings: position, driver name, nationality, team, points, wins. JSON array.")
con = WebFetch("https://www.formula1.com/en/results/2026/team",
               prompt="Extract constructor standings: position, team name, points. JSON array.")
```

## Driver Name Normalization
Map formula1.com display names to internal pipeline IDs:
```python
F1_NAME_TO_ID = {
    "ANTONELLI": "antonelli",  "Kimi Antonelli": "antonelli",
    "RUSSELL":   "russell",    "George Russell": "russell",
    "LECLERC":   "leclerc",    "Charles Leclerc": "leclerc",
    "HAMILTON":  "hamilton",   "Lewis Hamilton": "hamilton",
    "NORRIS":    "norris",     "Lando Norris": "norris",
    "PIASTRI":   "piastri",    "Oscar Piastri": "piastri",
    "VERSTAPPEN":"max_verstappen", "Max Verstappen": "max_verstappen",
    "HADJAR":    "hadjar",     "Isack Hadjar": "hadjar",
    "GASLY":     "gasly",      "Pierre Gasly": "gasly",
    "COLAPINTO": "colapinto",  "Franco Colapinto": "colapinto",
    "LAWSON":    "lawson",     "Liam Lawson": "lawson",
    "LINDBLAD":  "arvid_lindblad", "Arvid Lindblad": "arvid_lindblad",
    "BEARMAN":   "bearman",    "Oliver Bearman": "bearman",
    "OCON":      "ocon",       "Esteban Ocon": "ocon",
    "SAINZ":     "sainz",      "Carlos Sainz": "sainz",
    "ALBON":     "albon",      "Alexander Albon": "albon",
    "BORTOLETO": "bortoleto",  "Gabriel Bortoleto": "bortoleto",
    "HULKENBERG":"hulkenberg",  "Nico Hulkenberg": "hulkenberg",
    "BOTTAS":    "bottas",     "Valtteri Bottas": "bottas",
    "PEREZ":     "perez",      "Sergio Perez": "perez",
    "STROLL":    "stroll",     "Lance Stroll": "stroll",
    "ALONSO":    "alonso",     "Fernando Alonso": "alonso",
}
```

## Output Schema
Write to `_workspace/f1_scraped_results.json`:
```json
{
  "scraped_at": "<ISO timestamp>",
  "source": "formula1.com",
  "races": [
    {
      "round_slug": "monaco",
      "name": "Monaco Grand Prix",
      "date": "2026-06-07",
      "results": [
        {
          "pos": 1,
          "driver_id": "antonelli",
          "driver_display": "Kimi ANTONELLI",
          "team": "Mercedes",
          "time_or_gap": "1:32:05.123",
          "fastest_lap": true,
          "points": 25
        }
      ],
      "fastest_lap": {"driver_id": "antonelli", "time": "1:11.456"},
      "blocked": false
    }
  ],
  "driver_standings": [
    {"pos": 1, "driver_id": "antonelli", "points": 131, "wins": 4}
  ],
  "constructor_standings": [
    {"pos": 1, "team": "mercedes", "points": 219, "wins": 5}
  ]
}
```

## Cloudflare / Block Handling
formula1.com uses Cloudflare and heavy JavaScript. If WebFetch returns:
- An empty/minimal response
- A Cloudflare challenge page
- HTTP 403 / 429

Then set `"blocked": true` for that race and continue. Log: `"WARNING: formula1.com blocked for {slug}"`.

After all scraping, if more than 50% of races are blocked, add top-level `"mostly_blocked": true` so the orchestrator knows to fall back to Jolpica.

## Integration with Pipeline
After `_workspace/f1_scraped_results.json` is written, the orchestrator can:
1. Use scraped results to cross-validate Jolpica data
2. Supplement missing races that Jolpica hasn't indexed yet
3. Pull news headlines for display in the dashboard

## Test Scenarios
**Normal flow:** Fetch Monaco result → returns top-5 JSON → write to workspace
**Blocked flow:** Cloudflare intercepts → set blocked=true → orchestrator falls back to Jolpica
**Partial flow:** 3 of 5 races blocked → write partial results, flag which are missing
