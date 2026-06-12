// ============================================================================
// scrape.js — formula1.com results + news scraper (Cloudflare-aware).
//
// f1.com sits behind Cloudflare bot protection, so scraping from a Worker may be
// blocked. Every function degrades gracefully: on a non-200 / block it returns
// { ok:false, blocked:true } and the caller keeps last-good KV data. Workers have
// no DOM, so we parse with resilient regexes over the HTML.
// ============================================================================

const F1 = "https://www.formula1.com";
const BROWSERish = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
};

async function getHTML(url, timeoutMs = 9000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { headers: BROWSERish, signal: ctrl.signal });
    if (res.status === 403 || res.status === 503) return { ok: false, blocked: true, status: res.status };
    if (!res.ok) return { ok: false, status: res.status };
    return { ok: true, html: await res.text() };
  } catch (e) {
    return { ok: false, error: String(e) };
  } finally {
    clearTimeout(t);
  }
}

const decode = (s = "") =>
  s.replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&#x27;/g, "'")
   .replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").trim();

/**
 * Scrape the f1.com latest-news listing.
 * @returns {{ok:boolean, blocked?:boolean, news?:Array<{title,url,image,date,tag}>}}
 */
export async function scrapeNews(limit = 8) {
  // f1.com dropped the .html suffix in 2025; fetch() follows the 301 anyway,
  // but requesting the canonical URL avoids the extra hop.
  const r = await getHTML(`${F1}/en/latest/all`);
  if (!r.ok) return { ok: false, blocked: !!r.blocked, status: r.status };

  const html = r.html;
  const items = [];
  const seen = new Set();

  // Current f1.com card markup: the title is the anchor's direct text content
  // (class ArticleListCard-module_title…), no inner heading tags.
  const linkRe = /<a[^>]+href="(\/en\/latest\/article\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
  let m;
  while ((m = linkRe.exec(html)) && items.length < limit) {
    const href = m[1];
    if (seen.has(href)) continue;
    const title = decode(m[2].replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());
    if (title.length < 12 || title.length > 160) continue;
    seen.add(href);
    items.push({
      title,
      url: href.startsWith("http") ? href : F1 + href,
      image: null,
      date: null,
      tag: "F1 News",
    });
  }

  // Fallback: pull from JSON-LD / og structures if no cards matched.
  if (!items.length) {
    const ld = html.match(/"headline"\s*:\s*"([^"]{12,140})"/g) || [];
    ld.slice(0, limit).forEach((h) => {
      const title = decode(h.replace(/.*"headline"\s*:\s*"/, "").replace(/"$/, ""));
      items.push({ title, url: `${F1}/en/latest/all.html`, image: null, date: null, tag: "F1 News" });
    });
  }

  return { ok: items.length > 0, blocked: false, news: items };
}

/**
 * Discover completed 2026 race result pages from the racing hub. Best-effort;
 * Jolpica (sources.js) is the authoritative standings source, this adds podium/news flavor.
 */
export async function scrapeRaceLinks() {
  const r = await getHTML(`${F1}/en/racing/2026`);
  if (!r.ok) return { ok: false, blocked: !!r.blocked, status: r.status };
  const links = new Set();
  const re = /href="(\/en\/racing\/2026\/[a-z0-9_-]+\/race-result[^"]*)"/g;
  let m;
  while ((m = re.exec(r.html))) links.add(F1 + m[1]);
  return { ok: true, raceResultLinks: [...links] };
}
