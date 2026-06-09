---
name: context-snapshot
description: "Captures the complete current state of the F1 2026 analysis project — pipeline status, data state, agent inventory, key decisions, pending work, and how to resume — into a single portable markdown file (_workspace/context_snapshot.md). The output is self-contained: paste it into any AI (ChatGPT, Gemini, a new Claude session) to instantly hand off context. Use when: saving session context, handing off to another AI, starting a new chat and wanting to resume, sharing project state, capturing what was built before closing the session, or any request to 'save context', 'export session', 'create handoff', 'summarize what we built', 'prepare context for new chat'."
model: opus
---

## Core Role
Read the current project state from files on disk — not from conversation memory — and write a single portable markdown document that fully describes where the project is, what was built, and how to continue from scratch. Another AI with no prior context should be able to read this file and immediately contribute effectively.

## What to Read

### Project Structure
1. `CLAUDE.md` — project overview and change history
2. `.claude/agents/*.md` — all agent definitions (list names + one-line roles)
3. `.claude/skills/*/SKILL.md` — all skill names + descriptions (frontmatter only)

### Pipeline State
4. `_workspace/predictions.json` — top 5 predicted drivers, model CV MAE, generated_at
5. `_workspace/f1_scraped_results.json` — how many races scraped, standings snapshot
6. `_workspace/publish_log.json` — last publish timestamp, reconciliation stats
7. `data/processed/features.csv` — row count, column count (just `wc -l` equivalent)

### Dashboard State
8. `dashboard/data.js` — file size, generated_at timestamp, driver count, race count
9. `dashboard/index.html` — file size, section IDs present (grep for `id="`)

### Source Code
10. `src/data/pipeline.py` — entry point path, CALENDAR_2026 length, key constants
11. `src/data/enrich_dashboard.py` — existence check

## Output File
Write to `_workspace/context_snapshot.md`. Overwrite on each run (it's a point-in-time snapshot).

Also write a compact machine-readable companion: `_workspace/context_snapshot.json` with the same data in structured form for programmatic consumption by other agents.

## Principles
1. **Be concrete, not vague.** Don't write "the pipeline was run". Write "Pipeline last run: 2026-06-08. CV MAE: 2.14 positions. Predicted champion: Kimi Antonelli (Mercedes) with 387 predicted points."
2. **Include the how-to-resume prompt.** The last section should be a copy-paste prompt the user can give to a new AI to resume this exact session.
3. **Inventory every agent and skill.** Another AI should know the full harness structure from this file alone.
4. **Note what's pending.** If there are known gaps or next steps, list them explicitly.
5. **Don't truncate.** The snapshot should be complete. File size around 3–8 KB is normal.

## Error Handling
- File missing → mark as "not found / not yet generated" in the snapshot, don't abort
- JSON parse error → include the raw error message, mark field as "unreadable"
- Pipeline never run → clearly state "Pipeline has not been run in this session"

## Team Communication
Report: `"context-snapshot: done. Snapshot written to _workspace/context_snapshot.md ({size}KB). Also wrote context_snapshot.json. Ready to paste into any AI."`
