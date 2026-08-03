import codecs

with codecs.open('dashboard/index.html', 'r', 'utf-8') as f:
    content = f.read()

html_old = '''  <!-- ── NEXT RACE ─────────────────────────────────────────────── -->
  <section id="next-race" style="padding-top:2rem;padding-bottom:0">
    <div class="section-label">Live Prediction</div>
    <h2 class="section-title">Next Race: <span id="next-race-title" style="color:var(--accent)">—</span></h2>
    <p class="section-desc">Favourite and podium predictions for the upcoming Grand Prix based on current model.</p>
    <div id="next-race-widget"></div>
  </section>'''

html_new = '''  <!-- ── RACE CENTER ─────────────────────────────────────────────── -->
  <section id="race-center" style="padding-top:2rem;padding-bottom:0">
    <div class="section-label">Race Center</div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3rem; margin-top: 1rem;">
      <!-- Last Race -->
      <div class="race-panel">
        <h2 class="section-title" style="margin-bottom:0.5rem">Last Race: <span id="last-race-title" style="color:var(--accent)">—</span></h2>
        <p class="section-desc" id="last-race-accuracy" style="margin-bottom:1.5rem; color:var(--accent); font-weight:600;"></p>
        <div id="last-race-widget"></div>
      </div>
      <!-- Next Race -->
      <div class="race-panel">
        <h2 class="section-title" style="margin-bottom:0.5rem">Next Race: <span id="next-race-title" style="color:var(--accent)">—</span></h2>
        <p class="section-desc" style="margin-bottom:1.5rem">Upcoming Grand Prix Predictions</p>
        <div id="next-race-widget"></div>
      </div>
    </div>
  </section>'''

js_old_start = 'function renderNextRace() {'
js_old_end = '    /* ═══════════════════════════════════════════════════════════════'

js_new = '''function renderRaceCenter() {
      const races = F1.races || F1_DATA.race_predictions || [];
      const completedRaces = races.filter(r => r.completed);
      const upcomingRaces = races.filter(r => !r.completed);
      
      const lastRace = completedRaces[completedRaces.length - 1];
      const nextRace = upcomingRaces[0];

      function buildPodiumHTML(top3, actualPodium) {
        const podiumLabels = ['P1', 'P2', 'P3'];
        const podiumClasses = ['p1', 'p2', 'p3'];

        return top3.map((d, i) => {
          let accuracyHTML = '';
          if (actualPodium) {
            const actualPos = actualPodium.indexOf(d.id || d.driver_id);
            if (actualPos === i) {
              accuracyHTML = `<div style="color: #4ade80; font-size: 0.8rem; margin-top: 0.5rem; font-weight: bold;">✓ Exact (P${i+1})</div>`;
            } else if (actualPos !== -1) {
              accuracyHTML = `<div style="color: #facc15; font-size: 0.8rem; margin-top: 0.5rem; font-weight: bold;">~ Close (P${actualPos+1})</div>`;
            } else {
              accuracyHTML = `<div style="color: #f87171; font-size: 0.8rem; margin-top: 0.5rem; font-weight: bold;">✗ Missed</div>`;
            }
          }
          return `
          <div class="podium-slot" style="margin: 0.5rem;">
            <div class="podium-pos ${podiumClasses[i]}">${podiumLabels[i]}</div>
            <div class="podium-avatar" style="background:${d.color || teamColor(d.team)}">${d.abbr || (d.name || '').slice(0,3).toUpperCase()}</div>
            <div class="podium-name">${d.name || d.driver_id}</div>
            <div class="podium-team" style="color:${d.color || teamColor(d.team)}">${d.team_name || d.team}</div>
            <div class="podium-prob" style="color:${d.color || teamColor(d.team)}">${((d.win_prob || 0) * 100).toFixed(1)}%</div>
            ${accuracyHTML}
          </div>
        `}).join('');
      }

      function renderWidget(race, widgetId, titleId, accuracyId) {
        const widget = document.getElementById(widgetId);
        const titleEl = document.getElementById(titleId);
        const accEl = document.getElementById(accuracyId);
        if (!widget) return;
        
        if (!race) {
           widget.innerHTML = '<p style="color:var(--text-sec)">No data available.</p>';
           if (titleEl) titleEl.textContent = '—';
           return;
        }

        if (titleEl) titleEl.textContent = race.name || '';

        const track = (F1.track_layouts || {})[race.circuit_id || ''] || {};
        
        const top3 = (race.top5 || []).slice(0, 3).map(id => {
          const did = typeof id === 'string' ? id : id.driver_id;
          const d = F1.drivers.find(x => x.id === did);
          return d ? { id: did, driver_id: did, name: d.name, abbr: d.abbr, team: d.team, team_name: d.teamName, color: teamColor(d.team), win_prob: typeof id === 'string' ? 0.3 : id.win_prob } : null;
        }).filter(Boolean);

        const actualPodium = race.actual_podium;

        if (accEl && actualPodium) {
          let exactMatches = 0;
          let anyMatches = 0;
          top3.forEach((d, i) => {
            const actualPos = actualPodium.indexOf(d.id);
            if (actualPos === i) exactMatches++;
            if (actualPos !== -1) anyMatches++;
          });
          accEl.innerHTML = `Accuracy: <span style="color:#fff">${exactMatches}/3 Exact</span>, <span style="color:#fff">${anyMatches}/3 Podium</span>`;
        } else if (accEl) {
          accEl.innerHTML = '';
        }

        const podiumHTML = buildPodiumHTML(top3, actualPodium);

        const imgUrl = race.img_url || track.img_url;
        const trackPanel = imgUrl
          ? `<img class="next-race-track-img" src="${imgUrl}" alt="${race.name} layout" onerror="this.outerHTML='<div class=\\'track-fallback\\'>🏁</div>'">`
          : `<div class="track-fallback" style="font-size:4rem">${track.flag || race.flag || '🏁'}</div>`;

        const lengthKm = race.length_km || track.length_km || '—';
        const corners = race.corners || track.corners || '—';
        const flag = race.flag || track.flag || '🏁';
        const country = race.country || track.country || '';

        widget.innerHTML = `
          <div class="next-race-hero" style="flex-direction: column; padding: 1.5rem; border-radius: 12px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05);">
            <div style="width: 100%;">
              <div class="next-race-label">Round ${race.round} · 2026</div>
              <div class="next-race-meta">${flag} ${country}</div>
              <div class="next-race-stats" style="margin-bottom: 1.5rem">
                <div class="next-race-stat-item"><strong>${lengthKm} km</strong>Length</div>
                <div class="next-race-stat-item"><strong>${corners}</strong>Corners</div>
              </div>
              <div class="podium-row" style="display: flex; flex-direction: row; justify-content: center;">${podiumHTML}</div>
            </div>
            <div class="next-race-track-panel" style="margin-top: 2rem;">
              ${trackPanel}
            </div>
          </div>`;
      }

      renderWidget(lastRace, 'last-race-widget', 'last-race-title', 'last-race-accuracy');
      renderWidget(nextRace, 'next-race-widget', 'next-race-title', null);
    }
'''

if html_old in content:
    content = content.replace(html_old, html_new)
    print('HTML replaced')

idx_start = content.find(js_old_start)
idx_end = content.find(js_old_end, idx_start)
if idx_start != -1 and idx_end != -1:
    content = content[:idx_start] + js_new + "\n" + content[idx_end:]
    print('JS replaced')

content = content.replace('renderNextRace();', 'renderRaceCenter();')

with codecs.open('dashboard/index.html', 'w', 'utf-8') as f:
    f.write(content)
