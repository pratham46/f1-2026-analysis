---
name: live-race-monitor
description: "Poll OpenF1 API for new 2026 F1 race sessions and detect when fresh race data is available. Use whenever checking for new race results, monitoring live session data, detecting pipeline update triggers, or checking if the 2026 season has new completed races since last pipeline run. Must be used by the live-monitor agent. Do NOT use for historical data fetching — that is fetch-race-data's job."
---

## OpenF1 Endpoints

Base URL: `https://openf1.org/v1/`

### List all 2026 Race sessions
```
GET /sessions?year=2026&session_type=Race
```

Sample response item:
```json
{
  "session_key": 9523,
  "session_name": "Race",
  "date_start": "2026-03-16T13:00:00",
  "circuit_short_name": "Bahrain",
  "meeting_key": 1261,
  "year": 2026
}
```

### Check if a session has results
```
GET /position?session_key={key}&position=1
```
If this returns a non-empty list, the race is complete. If empty, the race hasn't started or results aren't published.

## State File Protocol

**Read:** `data/processed/last_session.txt`
- If file exists: contains an integer `session_key` of the last successfully processed race
- If file missing: no races have been processed; all available 2026 races are "new"

**Do NOT write this file.** Only `dashboard-updater` writes it after a successful publish.

## Detection Algorithm

```python
1. Fetch all sessions for year=2026, session_type=Race
2. Sort by date_start ascending
3. Read last_session_key from last_session.txt (or 0 if missing)
4. new_sessions = [s for s in sessions if s["session_key"] > last_session_key]
5. for each session in new_sessions:
       check if /position?session_key={key}&position=1 returns data
       if yes: add to "ready" list
6. Report result
```

## Result Messages to Orchestrator

```python
# New data found:
{
  "status": "new_data_available",
  "new_session_keys": [9524, 9525],
  "circuits": ["Jeddah", "Melbourne"],
  "count": 2
}

# No new data:
{
  "status": "no_update_needed",
  "last_processed_circuit": "Bahrain",
  "last_processed_date": "2026-03-16"
}

# API unavailable:
{
  "status": "api_unavailable",
  "error": "Connection timeout after 15s"
}

# 2026 season not started / no sessions returned:
{
  "status": "no_2026_sessions",
  "message": "OpenF1 returned 0 sessions for year=2026"
}
```

## Timeout and Error Handling

- Set `timeout=15` on all requests
- On `requests.exceptions.Timeout` or `ConnectionError`: return `api_unavailable`
- On HTTP 4xx/5xx: return `api_unavailable` with the status code
- Never raise — always return a structured result dict

## When to Trigger Full Pipeline

Only signal `new_data_available` when there are verified race sessions (position data confirmed). Never trigger on:
- API failures
- Sessions where position endpoint returns empty (race not yet complete)
- Sprint sessions (filter to session_type=Race only)
