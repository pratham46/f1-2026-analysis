---
name: design-f1-ui
description: "CSS patterns, SVG gauge math, animation helpers, and component templates for the F1 game-like dashboard. Provides ready-to-use code for: championship podium hero, win-probability speedometer gauges, head-to-head driver battle panel, season race timeline, and constructor war bars. Use when implementing new game-like UI sections in dashboard/index.html — always in conjunction with the ui-designer agent. Do not use for pipeline data tasks."
---

## Key Principle
The existing dashboard already has Titillium Web font and the F1 color variables (`--bg`, `--surface`, `--accent`, etc.). New sections must extend those variables — never hardcode colors. Inject CSS into the existing `<style>` block and JS into the existing `<script>` block.

## Section Container Template
All five new sections share this wrapper pattern:
```html
<section id="f1g-{name}" class="f1g-section">
  <div class="section-header">
    <h2 class="section-title">SECTION TITLE</h2>
    <div class="section-title-bar"></div>
  </div>
  <!-- section content -->
</section>
```
```css
.f1g-section {
  padding: 5rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}
.section-header { margin-bottom: 2.5rem; }
.section-title {
  font-family: var(--font-head);
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .15em;
  color: var(--text);
}
.section-title-bar {
  width: 60px; height: 3px;
  background: var(--accent);
  margin-top: .5rem;
}
```

## 1. Championship Podium CSS + JS
```css
.podium-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr 1fr;
  gap: 1.5rem;
  align-items: end;
  max-width: 900px;
  margin: 0 auto;
}
.podium-card {
  background: var(--surface);
  border-radius: var(--radius-lg);
  padding: 1.5rem 1rem 1rem;
  text-align: center;
  position: relative;
  border: 2px solid transparent;
  transition: transform 300ms ease, box-shadow 300ms ease;
}
.podium-card.p1 {
  border-color: var(--gold);
  box-shadow: 0 0 40px rgba(255,215,0,.25);
  transform: translateY(-20px);
}
.podium-card.p2 { border-color: var(--silver); box-shadow: 0 0 20px rgba(192,192,192,.15); }
.podium-card.p3 { border-color: var(--bronze); box-shadow: 0 0 20px rgba(205,127,50,.15); }
.podium-pos {
  position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
  width: 28px; height: 28px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 900; font-size: .85rem; font-family: var(--font-head);
}
.podium-card.p1 .podium-pos { background: var(--gold); color: #000; }
.podium-card.p2 .podium-pos { background: var(--silver); color: #000; }
.podium-card.p3 .podium-pos { background: var(--bronze); color: #000; }
.podium-photo {
  width: 90px; height: 90px; border-radius: 50%; object-fit: cover;
  margin: .5rem auto; border: 3px solid var(--border);
}
.podium-photo-fallback {
  width: 90px; height: 90px; border-radius: 50%;
  margin: .5rem auto; display: flex; align-items: center; justify-content: center;
  font-family: var(--font-head); font-weight: 900; font-size: 1.4rem; color: #fff;
}
.podium-name { font-family: var(--font-head); font-weight: 700; font-size: 1rem; text-transform: uppercase; letter-spacing: .08em; }
.podium-pts { font-size: 1.6rem; font-weight: 900; color: var(--accent); margin: .3rem 0; }
.podium-team-strip { height: 4px; border-radius: 2px; margin-top: .8rem; }
```
```javascript
function buildPodium(predictions, driverImages, teamColors) {
  const top3 = predictions.slice(0, 3);
  const container = document.getElementById('f1g-podium');
  if (!container) return;
  const grid = container.querySelector('.podium-grid');
  const order = [top3[1], top3[0], top3[2]]; // P2, P1, P3
  const classes = ['p2', 'p1', 'p3'];
  const poses = ['2', '1', '3'];
  grid.innerHTML = order.map((d, i) => {
    if (!d) return '';
    const img = driverImages?.[d.driver_id];
    const tc  = teamColors?.[d.team] || '#e10600';
    const photo = img
      ? `<img class="podium-photo" src="${img}" alt="${d.driver_name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
      : '';
    const fallback = `<div class="podium-photo-fallback" style="background:${tc};${img?'display:none':''}">${d.driver_name.slice(0,3).toUpperCase()}</div>`;
    return `<div class="podium-card ${classes[i]}">
      <div class="podium-pos">${poses[i]}</div>
      ${photo}${fallback}
      <div class="podium-name">${d.driver_name}</div>
      <div class="podium-pts">${d.predicted_points}<span style="font-size:.7rem;color:var(--text-sec)"> pts</span></div>
      <div class="podium-team-strip" style="background:${tc}"></div>
    </div>`;
  }).join('');
}
```

## 2. SVG Speedometer Gauge
```javascript
// pct: 0–100, svgEl: SVG DOM element, color: fill color
function drawGauge(svgEl, pct, color = '#e10600') {
  const R = 54, CX = 64, CY = 70, startAngle = 215, sweepAngle = 250;
  function polarToXY(deg, r) {
    const rad = (deg - 90) * Math.PI / 180;
    return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
  }
  function arcPath(start, end, r) {
    const s = polarToXY(start, r), e = polarToXY(end, r);
    const large = (end - start) > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
  }
  const endAngle = startAngle + (sweepAngle * pct / 100);
  svgEl.innerHTML = `
    <path d="${arcPath(startAngle, startAngle + sweepAngle, R)}" fill="none" stroke="#2d2d44" stroke-width="8" stroke-linecap="round"/>
    <path class="gauge-fill" d="${arcPath(startAngle, Math.max(startAngle + 0.1, endAngle), R)}" fill="none" stroke="${color}" stroke-width="8" stroke-linecap="round"/>
    <text x="${CX}" y="${CY - 4}" text-anchor="middle" fill="#fff" font-family="Titillium Web,sans-serif" font-size="18" font-weight="700">${pct.toFixed(1)}%</text>
    <text x="${CX}" y="${CY + 14}" text-anchor="middle" fill="#9ca3af" font-family="Titillium Web,sans-serif" font-size="9">WIN PROB</text>
  `;
}

// Animate gauge from 0 → target on IntersectionObserver
function animateGauge(svgEl, targetPct, color) {
  let current = 0;
  const step = targetPct / 60;
  function tick() {
    current = Math.min(current + step, targetPct);
    drawGauge(svgEl, current, color);
    if (current < targetPct) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function buildGauges(predictions, teamColors) {
  const container = document.getElementById('f1g-gauges');
  if (!container) return;
  const grid = container.querySelector('.gauges-grid');
  grid.innerHTML = predictions.slice(0, 8).map(d => {
    const tc = teamColors?.[d.team] || '#e10600';
    const pct = (d.win_probability || 0) * 100;
    return `<div class="gauge-card">
      <svg class="gauge-svg" viewBox="0 0 128 90" width="128" height="90" data-pct="${pct}" data-color="${tc}"></svg>
      <div class="gauge-name">${d.driver_name.split(' ').pop().toUpperCase()}</div>
      <div class="gauge-dot" style="background:${tc}"></div>
    </div>`;
  }).join('');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('.gauge-svg').forEach(svg => {
        animateGauge(svg, parseFloat(svg.dataset.pct), svg.dataset.color);
      });
      observer.unobserve(e.target);
    });
  }, { threshold: 0.3 });
  observer.observe(grid);
}
```
```css
.gauges-grid { display: flex; flex-wrap: wrap; gap: 1.5rem; justify-content: center; }
.gauge-card { background: var(--surface); border-radius: var(--radius-lg); padding: 1.2rem 1rem .8rem; text-align: center; min-width: 130px; border: 1px solid var(--border); transition: transform 200ms ease; }
.gauge-card:hover { transform: translateY(-4px); }
.gauge-name { font-family: var(--font-head); font-weight: 700; font-size: .8rem; text-transform: uppercase; letter-spacing: .08em; margin-top: .4rem; }
.gauge-dot { width: 8px; height: 8px; border-radius: 50%; margin: .3rem auto 0; }
```

## 3. Head-to-Head Battle Panel
```css
.h2h-selectors { display: flex; gap: 2rem; justify-content: center; margin-bottom: 2rem; flex-wrap: wrap; }
.h2h-select { background: var(--surface); color: var(--text); border: 1px solid var(--border); border-radius: var(--radius); padding: .5rem 1rem; font-family: var(--font-head); font-size: .9rem; cursor: pointer; }
.h2h-arena { display: grid; grid-template-columns: 1fr auto 1fr; gap: 1rem; align-items: center; }
.h2h-driver-card { background: var(--surface); border-radius: var(--radius-lg); padding: 1.5rem; text-align: center; }
.h2h-vs { font-family: var(--font-head); font-weight: 900; font-size: 2rem; color: var(--accent); }
.h2h-stat-row { display: flex; align-items: center; gap: .5rem; margin: .4rem 0; }
.h2h-bar-l, .h2h-bar-r { height: 6px; border-radius: 3px; transition: width .8s ease; }
.battle-btn { display: block; margin: 1.5rem auto 0; background: var(--accent); color: #fff; border: none; border-radius: var(--radius); padding: .7rem 2rem; font-family: var(--font-head); font-weight: 700; text-transform: uppercase; letter-spacing: .12em; cursor: pointer; transition: opacity .2s; }
.battle-btn:hover { opacity: .85; }
.winner-glow { box-shadow: 0 0 30px rgba(225,6,0,.5); border-color: var(--accent) !important; }
```
```javascript
function buildH2H(predictions, driverImages, teamColors) {
  // Populate selects, render initial comparison, wire change events
  // On "BATTLE": animate 3s countdown → add .winner-glow to the card
  // whose predicted_points > other
}
```

## 4. Race Timeline CSS
```css
.timeline-scroll { overflow-x: auto; padding-bottom: 1rem; }
.timeline-track { display: flex; align-items: center; gap: 0; min-width: max-content; padding: 2rem 1rem; position: relative; }
.timeline-track::before { content: ''; position: absolute; top: 50%; left: 0; right: 0; height: 2px; background: var(--border); transform: translateY(-50%); z-index: 0; }
.timeline-node { display: flex; flex-direction: column; align-items: center; position: relative; z-index: 1; width: 80px; flex-shrink: 0; cursor: pointer; }
.timeline-dot { width: 20px; height: 20px; border-radius: 50%; border: 2px solid var(--border); background: var(--bg); transition: transform .2s; }
.timeline-node.past .timeline-dot { background: var(--accent); border-color: var(--accent); }
.timeline-node.next .timeline-dot { background: var(--accent); border-color: var(--accent); animation: pulse-dot 1.5s infinite; }
.timeline-node:hover .timeline-dot { transform: scale(1.3); }
@keyframes pulse-dot { 0%,100% { box-shadow: 0 0 0 0 rgba(225,6,0,.6); } 50% { box-shadow: 0 0 0 8px rgba(225,6,0,0); } }
.timeline-label { font-size: .6rem; font-family: var(--font-head); text-align: center; margin-top: .4rem; color: var(--text-sec); max-width: 75px; word-break: break-word; }
.timeline-node.past .timeline-label { color: var(--text); }
.timeline-flag { font-size: .9rem; }
```

## 5. Constructor War CSS
```css
.constructor-bars { display: flex; flex-direction: column; gap: .8rem; max-width: 700px; }
.ctor-row { display: grid; grid-template-columns: 140px 1fr 60px; gap: 1rem; align-items: center; }
.ctor-name { font-family: var(--font-head); font-size: .85rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; text-align: right; }
.ctor-bar-track { background: var(--surface); border-radius: 3px; height: 10px; overflow: hidden; }
.ctor-bar-fill { height: 100%; border-radius: 3px; width: 0; transition: width 1s ease; }
.ctor-pts { font-family: var(--font-head); font-weight: 700; font-size: .85rem; color: var(--text-sec); }
```

## IntersectionObserver Helper (reuse for all animated sections)
```javascript
function onVisible(el, callback) {
  new IntersectionObserver((entries, obs) => {
    entries.forEach(e => { if (e.isIntersecting) { callback(); obs.unobserve(e.target); } });
  }, { threshold: 0.2 }).observe(el);
}
```

## Nav Links to Add
```html
<li><a href="#f1g-podium">Podium</a></li>
<li><a href="#f1g-gauges">Win Prob</a></li>
<li><a href="#f1g-h2h">Battle</a></li>
<li><a href="#f1g-timeline">Calendar</a></li>
<li><a href="#f1g-constructors">Teams</a></li>
```
