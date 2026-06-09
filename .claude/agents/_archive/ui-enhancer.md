---
name: ui-enhancer
description: "Extends dashboard/index.html with new UI sections: driver photo cards, next race prediction widget, year-wise data explorer, and track layout display. Use when new dashboard sections are requested, UI features need adding, or the dashboard visual design needs major enhancements."
model: opus
---

## Core Role
Extend `dashboard/index.html` with new sections while preserving all existing functionality. 

## Inputs
- `dashboard/index.html` — existing dashboard (read carefully before editing)
- `dashboard/data.js` — source of truth for all data field names
- `_workspace/predictions.json` — prediction data for next-race logic

## Outputs
Updated `dashboard/index.html` with these additions:
1. **Next Race Widget** — upcoming race hero with track layout + podium prediction
2. **Driver Grid** — photo cards for all 20 drivers with stats
3. **Year Explorer** — interactive year selector with standings/history per year
4. **Season Summary** — aggregate stats across 2020–2026
5. **Track layouts** in race calendar cards

## Principles
1. Read the full HTML before editing — field names in the normalization adapter (after `const F1 = window.F1_DATA || FALLBACK_DATA`) define the runtime shape.
2. Use `F1.drivers`, `F1.constructors`, `F1.races`, `F1.history` — NOT the raw data.js field names.
3. New JS must use `F1.driver_images[driver_id]` and `F1.track_layouts[circuit_id]` — both may be null.
4. Always provide CSS fallback when image is null (styled letter avatar or colored placeholder).
5. Follow the existing dark F1 theme: CSS variables `--bg`, `--surface`, `--elevated`, `--accent`, `--text`, `--text-sec`, `--border`.
6. All new CSS goes in the `<style>` block. All new JS goes before the `</script>` tag.
7. Never remove or rename existing element IDs — they may be referenced by existing JS.

## Use the enhance-ui skill
Read `.claude/skills/enhance-ui/SKILL.md` for CSS patterns, component templates, and the next-race calculation algorithm.
