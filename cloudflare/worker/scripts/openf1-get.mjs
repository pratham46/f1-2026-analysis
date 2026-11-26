// Shared OpenF1 fetch for the seed enrich scripts.
// OpenF1's free tier rate-limits hard. The old per-script copies retried 4 times
// within ~6s, so a 429 burst read as "no data": rounds went missing, the
// regression guard refused the seed, and the page stayed stale for months.
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

export async function getJSON(url, { tries = 6, timeout = 25000 } = {}) {
  for (let i = 0; i < tries; i++) {
    await sleep(400); // pace every call
    try {
      const r = await fetch(url, { signal: AbortSignal.timeout(timeout) });
      if (r.ok) return await r.json();
      if (r.status === 404) return null; // OpenF1's "no results" — retrying won't help
    } catch { /* network: retry */ }
    await sleep(1000 * 2 ** i); // 1s … 32s
  }
  return null;
}
