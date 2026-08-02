// Real head-to-head, computed from the full 2026 race classifications.
//
// This is deliberately NOT built on real_race_results_2026: that table holds only
// the top 10 per race, so any pair outside the points would compare as 0-0 and
// every retirement would silently vanish. race_classification_2026 carries all 22
// entries per round with dnf/dns flags, which is what a record needs.
//
// Pure — no DOM, no data.js — so the ordering rules are unit-testable.

// Ordering when there is no finishing position: a driver who covered more
// distance before retiring finished ahead of one who stopped earlier, a
// disqualification sits behind every retirement, and a non-start behind that.
const TIER = { F: 0, DNF: 1, DSQ: 2, DNS: 3 };

/** Sortable rank for one classification entry. Lower is better. */
export function finishRank(entry) {
  const tier = TIER[entry.status] ?? TIER.DNS;
  return tier === 0 ? entry.position ?? 99 : tier * 1000 - (entry.laps || 0);
}

const blank = () => ({
  raceAhead: 0, qualiAhead: 0, points: 0, sprintPoints: 0, wins: 0, podiums: 0,
  inPoints: 0, dnfs: 0, bestFinish: null,
});

/**
 * @param {object} classification  data.race_classification_2026
 * @returns record over the rounds BOTH drivers contested — season totals live
 *          in the standings, this answers "when they raced each other".
 */
export function headToHead(classification, aId, bId) {
  const a = blank();
  const b = blank();
  const rounds = [];
  let ties = 0;
  let contested = 0;
  let qualiRounds = 0;

  const ordered = Object.keys(classification || {})
    .map(Number)
    .filter((n) => Number.isFinite(n))
    .sort((x, y) => x - y);

  for (const round of ordered) {
    const entry = classification[round];
    const ra = entry.race?.find((r) => r.driver_id === aId);
    const rb = entry.race?.find((r) => r.driver_id === bId);
    if (!ra || !rb) continue;

    for (const [side, row] of [[a, ra], [b, rb]]) {
      side.points += row.points || 0;
      if (row.status === "F") {
        if (row.position === 1) side.wins++;
        if (row.position <= 3) side.podiums++;
        // Top ten. The one count metric that is non-zero for a midfield pair.
        if (row.position <= 10) side.inPoints++;
        if (side.bestFinish == null || row.position < side.bestFinish) side.bestFinish = row.position;
      } else if (row.status !== "DNS") {
        side.dnfs++;
      }
    }

    // Sprint points count toward the championship, so they count here — without
    // them the totals would sit below the standings table for no visible reason.
    const sa = entry.sprint?.find((r) => r.driver_id === aId);
    const sb = entry.sprint?.find((r) => r.driver_id === bId);
    for (const [side, row] of [[a, sa], [b, sb]]) {
      if (!row) continue;
      side.sprintPoints += row.points || 0;
      side.points += row.points || 0;
    }

    // A driver who never took the start has no head-to-head that round — a
    // round both of them sat out is not a 0-0 draw, it is not a race.
    const bothStarted = ra.status !== "DNS" && rb.status !== "DNS";
    let ahead = null;
    if (bothStarted) {
      contested++;
      const rankA = finishRank(ra);
      const rankB = finishRank(rb);
      if (rankA < rankB) { a.raceAhead++; ahead = "a"; }
      else if (rankB < rankA) { b.raceAhead++; ahead = "b"; }
      else ties++;
    }

    const qa = entry.qualifying?.find((q) => q.driver_id === aId)?.position;
    const qb = entry.qualifying?.find((q) => q.driver_id === bId)?.position;
    let qualiAhead = null;
    if (qa && qb) {
      qualiRounds++;
      qualiAhead = qa < qb ? "a" : "b";
      if (qa < qb) a.qualiAhead++; else b.qualiAhead++;
    }

    rounds.push({
      round,
      circuit_id: entry.circuit_id,
      ahead,
      contested: bothStarted,
      qualiAhead,
      a: { position: ra.position, points: ra.points || 0, status: ra.status, quali: qa ?? null },
      b: { position: rb.position, points: rb.points || 0, status: rb.status, quali: qb ?? null },
    });
  }

  return { rounds, ties, contested, qualiRounds, a, b };
}
