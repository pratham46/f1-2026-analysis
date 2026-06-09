---
name: enhance-ui
description: "Add new UI sections to the F1 dashboard: driver photo cards, next race prediction widget, year-wise data explorer, season summary stats, and track layout display. Use when adding new visual sections to index.html, enhancing the race calendar with circuit maps, or building the upcoming race prediction hero."
---

## New Sections to Add

### 1. Next Race Widget (`#next-race`)
- Sits between `#hero` and `#overview`
- Shows upcoming race (first round where `round > last_completed`)  
- Displays: circuit layout image, race name, flag, country, date
- Shows top 3 predictions: winner + P2 + P3 with win probabilities
- `last_completed = 9` (9 races done as of 2026-06-07)

### 2. Driver Photo Cards (`#driver-cards`)
- Full-width grid of 20 driver cards
- Each card: team-colored gradient header, large number, driver abbr, name, team, predicted pts
- Optional: `<img>` with `onerror` to hide if URL fails
- Link each card to `#drivers` section for deep-dive

### 3. Year Explorer (`#year-explorer`)
- Year dropdown: 2020, 2021, 2022, 2023, 2024, 2025, 2026
- Shows: driver points table for selected year, bar chart
- Uses `F1.history.drivers` and `F1.history.seasons`

### 4. Season Summary (`#season-summary`)
- Cards showing: most wins driver (2020-2026), highest pts in single season, constructor dominance years
- Uses `F1.history` data

## CSS Patterns

### Driver Card
```css
.driver-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
  padding: 1rem 0;
}
.driver-photo-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform .2s, box-shadow .2s;
  position: relative;
}
.driver-photo-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,.4); }
.driver-card-header {
  height: 80px;
  background: linear-gradient(135deg, var(--team-color) 0%, rgba(0,0,0,.6) 100%);
  display: flex; align-items: center; justify-content: flex-end;
  padding: 0 1rem;
}
.driver-card-num { font-family: var(--font-mono); font-size: 2.5rem; font-weight: 700;
  color: rgba(255,255,255,.25); line-height: 1; }
.driver-card-body { padding: .75rem; }
.driver-card-abbr { font-family: var(--font-mono); font-size: 1.3rem; font-weight: 700;
  color: var(--team-color); }
.driver-card-name { font-size: .8rem; color: var(--text); margin: .2rem 0 .1rem; }
.driver-card-team { font-size: .7rem; color: var(--text-sec); margin-bottom: .4rem; }
.driver-card-pts { font-family: var(--font-mono); font-size: .9rem; color: var(--gold); }
```

### Next Race Hero
```css
.next-race-hero {
  background: linear-gradient(135deg, var(--surface) 0%, var(--elevated) 100%);
  border: 1px solid var(--border);
  border-radius: 16px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2rem;
  padding: 2rem;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;
}
.next-race-label {
  display: inline-block;
  background: var(--accent);
  color: white;
  font-family: var(--font-mono);
  font-size: .65rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  padding: .25rem .6rem;
  border-radius: 4px;
  margin-bottom: .75rem;
}
.next-race-circuit-img {
  width: 100%;
  max-height: 200px;
  object-fit: contain;
  filter: brightness(.9) contrast(1.1);
}
.podium-row {
  display: flex;
  gap: .75rem;
  margin-top: 1rem;
}
.podium-driver {
  flex: 1;
  background: rgba(255,255,255,.04);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: .6rem;
  text-align: center;
}
```

### Year Explorer
```css
.year-explorer-controls {
  display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1.5rem;
}
.year-btn {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  padding: .4rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: .9rem;
  transition: background .2s, border-color .2s;
}
.year-btn.active, .year-btn:hover {
  background: var(--accent);
  border-color: var(--accent);
}
```

## Next Race Calculation (JS)
```javascript
function getNextRace() {
  const LAST_COMPLETED = F1.next_race
    ? null  // use pre-computed
    : 9;    // hardcoded fallback: 9 races done

  if (F1.next_race) return F1.next_race;
  
  const next = F1.races.find(r => r.round > LAST_COMPLETED);
  return next || F1.races[F1.races.length - 1];
}
```

## Track Layout Display in Race Cards
Add circuit image to each `.race-card`:
```html
<div class="race-track-thumb">
  <img src="${trackLayout?.img_url || ''}" 
       alt="${race.name} layout"
       onerror="this.parentElement.style.display='none'"
       style="width:100%;height:60px;object-fit:contain;filter:invert(.9) hue-rotate(180deg)">
</div>
```
