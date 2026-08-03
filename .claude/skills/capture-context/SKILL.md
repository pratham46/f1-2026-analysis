---
name: capture-context
description: "Build a portable, self-contained project context snapshot for the F1 2026 analysis project. Reads pipeline outputs, agent/skill inventory, dashboard state, and source code constants, then writes _workspace/context_snapshot.md — a single file that any AI can read to instantly understand the project and continue work. Use when saving session state, creating handoff documents, exporting context for other AIs, or preparing a new-session bootstrap prompt."
---

## Output Structure

The snapshot file must have these sections in order:

```markdown
# F1 2026 Analysis — Context Snapshot
_Generated: {ISO timestamp} | Project: C:\Users\prath\f1-2026-analysis_

## 1. Project Purpose
One paragraph. What this project does end-to-end.

## 2. Tech Stack
- Language, key libraries (XGBoost, Plotly.js, etc.)
- Data sources (Jolpica API, formula1.com, ICS calendar)
- Dashboard: static HTML, no server

## 3. Current Pipeline State
| Item | Value |
|------|-------|
| Pipeline last run | {datetime or "not run"} |
| Model CV MAE | {x.xx positions} |
| Races in training data | {n} |
| 2026 seasons covered | {list} |
| Predicted champion | {driver} ({team}) — {pts} pts |

## 4. 2026 Real Standings (as of snapshot)
Top 5 from scraped formula1.com data:
| Pos | Driver | Team | Pts | Wins |
|-----|--------|------|-----|------|
...

## 5. Dashboard State
| Item | Value |
|------|-------|
| data.js size | {n} KB |
| data.js last published | {datetime} |
| index.html size | {n} KB |
| Driver images | {n}/22 |
| Track layouts | {n}/24 |
| Game UI sections | list of #f1g-* IDs found |

## 6. Agent Inventory
| Agent | File | Role |
|-------|------|------|
...all 11+ agents...

## 7. Skill Inventory
| Skill | Triggers |
|-------|---------|
...all skills with one-line descriptions...

## 8. Key Files & Entry Points
| File | Purpose |
|------|---------|
| src/data/pipeline.py | Full pipeline entry point — `python legacy/src/data/pipeline.py` (moved under `legacy/`) |
| src/data/enrich_dashboard.py | Re-apply driver images + track layouts after pipeline (now under `legacy/`) |
| dashboard/index.html | Static dashboard, open in browser |
| dashboard/data.js | All pipeline + scraper output, {n} KB |
| _workspace/predictions.json | Model predictions, {n} drivers |
| _workspace/f1_scraped_results.json | formula1.com scraped data, {n} races |
| _workspace/publish_log.json | Last publish reconciliation |

## 9. 2026 Race Calendar
| Rnd | Circuit | Name | Date | Sprint |
|-----|---------|------|------|--------|
...all 22 rounds...

## 10. Known Issues & Pending Items
- List any known bugs, gaps, or follow-up work
- Monaco Jolpica lag: resolved via data-publisher
- Driver images: preserved by data-publisher

## 11. How to Resume in a New Chat
Paste this prompt into a new Claude Code session or any AI:

---
**CONTEXT HANDOFF PROMPT:**

You are continuing work on an F1 2026 Championship Prediction project.

**Project location:** `C:\Users\prath\f1-2026-analysis`
**Entry point:** `python legacy/src/data/pipeline.py`
**Dashboard:** `dashboard/index.html` (open in browser)

**Current state:**
- {summary of pipeline state}
- {summary of standings}
- {summary of dashboard state}

**Agent harness:** Run any pipeline task via the `f1-orchestrator` skill. The harness has {n} agents covering data fetch, model training, predictions, QA, dashboard updates, official F1 scraping, data publishing, and UI design.

**Pending work:**
- {list pending items}

**To run the full pipeline:** `python legacy/src/data/pipeline.py`
**To re-enrich dashboard after pipeline:** `python legacy/src/data/enrich_dashboard.py`
**To open dashboard:** open `dashboard/index.html` in a browser
---
```

## Python Script to Generate Snapshot

```python
import json, os
from datetime import datetime, timezone
from pathlib import Path

BASE = Path(r"C:\Users\prath\f1-2026-analysis")

def safe_json(path):
    try:
        with open(BASE / path, encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        return {"_error": str(e)}

def safe_size(path):
    p = BASE / path
    return f"{p.stat().st_size / 1024:.1f} KB" if p.exists() else "not found"

def safe_read(path, lines=None):
    p = BASE / path
    if not p.exists():
        return None
    with open(p, encoding='utf-8') as f:
        content = f.read()
    return content

def count_agents():
    agents_dir = BASE / ".claude/agents"
    if not agents_dir.exists():
        return []
    return [f.stem for f in agents_dir.glob("*.md")]

def count_skills():
    skills_dir = BASE / ".claude/skills"
    if not skills_dir.exists():
        return []
    return [d.name for d in skills_dir.iterdir() if d.is_dir() and (d / "SKILL.md").exists()]

def extract_predictions_summary(preds):
    if "_error" in preds:
        return "predictions.json unreadable"
    drivers = preds.get("predictions", preds.get("driver_standings_2026", []))
    if not drivers:
        return "no predictions"
    top = drivers[:5] if len(drivers) >= 5 else drivers
    lines = []
    for d in top:
        name = d.get("driver_name", d.get("driver_id", "?"))
        pts  = d.get("predicted_points", d.get("current_points", "?"))
        team = d.get("team", "?")
        lines.append(f"  {name} ({team}) — {pts} pts")
    return "\n".join(lines)

now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
preds       = safe_json("_workspace/predictions.json")
scraped     = safe_json("_workspace/f1_scraped_results.json")
pub_log     = safe_json("_workspace/publish_log.json")
agents      = count_agents()
skills      = count_skills()
data_js_sz  = safe_size("dashboard/data.js")
index_sz    = safe_size("dashboard/index.html")

# Write snapshot (agent fills in the markdown template above using these values)
snapshot_data = {
    "generated_at": now,
    "pipeline": {
        "cv_mae": preds.get("cv_mae", "unknown"),
        "generated_at": preds.get("generated_at", "unknown"),
        "driver_count": len(preds.get("predictions", [])),
    },
    "scraped": {
        "race_count": len(scraped.get("races", [])),
        "standings_count": len(scraped.get("driver_standings", [])),
        "scraped_at": scraped.get("scraped_at", "unknown"),
    },
    "dashboard": {
        "data_js_size": data_js_sz,
        "index_size": index_sz,
        "last_published": pub_log.get("last_published", "unknown") if not pub_log.get("_error") else "unknown",
    },
    "harness": {
        "agents": agents,
        "skills": skills,
        "agent_count": len(agents),
        "skill_count": len(skills),
    },
    "top5_predictions": extract_predictions_summary(preds),
}

out_path = BASE / "_workspace/context_snapshot.json"
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(snapshot_data, f, indent=2, ensure_ascii=False)

print(f"context_snapshot.json written: {out_path.stat().st_size / 1024:.1f} KB")
```

## Completeness Checklist
Before writing the final markdown, verify these fields are populated (not "unknown"):
- [ ] Pipeline generated_at
- [ ] Top 5 predicted drivers
- [ ] Real standings from scraped data
- [ ] Agent list (all names)
- [ ] Skill list (all names)
- [ ] Dashboard file sizes
- [ ] Pending items section

If a field is unavailable, write "not yet generated — run pipeline first" rather than leaving it blank.

## File Locations
| Output | Path |
|--------|------|
| Human-readable snapshot | `_workspace/context_snapshot.md` |
| Machine-readable snapshot | `_workspace/context_snapshot.json` |

Both are overwritten on each run — they represent point-in-time state, not history.
