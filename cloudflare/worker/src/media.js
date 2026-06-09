// ============================================================================
// media.js — Real formula1.com driver headshots + 2026 track layout images.
//
// URLs harvested + HEAD-verified against formula1.com / media.formula1.com
// (the same source the legacy Python dashboard used; see scrape_media.py).
// Driver photos and track maps don't change mid-season, so these are baked in
// as verified constants — no live scraping needed (f1.com blocks the Worker).
//
// Shapes match what dashboard/index.html consumes:
//   driver_images[driver_id]            -> string URL
//   track_layouts[circuit_id].img_url   -> string URL   (NOTE the .img_url wrapper)
// ============================================================================

// driver_id -> "teamFolder/code" on the f1.com CDN. doohan is omitted (not on the
// f1.com 2026 grid — Colapinto holds the Alpine seat there).
const DRIVER_CODE = {
  piastri: "mclaren/oscpia01",
  norris: "mclaren/lannor01",
  leclerc: "ferrari/chalec01",
  hamilton: "ferrari/lewham01",
  max_verstappen: "redbullracing/maxver01",
  russell: "mercedes/georus01",
  antonelli: "mercedes/andant01",
  sainz: "williams/carsai01",
  albon: "williams/alealb01",
  alonso: "astonmartin/feralo01",
  stroll: "astonmartin/lanstr01",
  bearman: "haasf1team/olibea01",
  ocon: "haasf1team/estoco01",
  gasly: "alpine/piegas01",
  hadjar: "redbullracing/isahad01",
  lawson: "racingbulls/lialaw01",
  hulkenberg: "audi/nichul01",
  bortoleto: "audi/gabbor01",
  tsunoda: "racingbulls/yuktsu01",
};

const driverHeadshot = (tc) =>
  `https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/${tc}/2026${tc.replace("/", "")}right.webp`;

// circuit_id (our calendar) -> f1.com CDN track slug (all HEAD-verified 200).
const TRACK_SLUG = {
  australia: "melbourne", china: "shanghai", japan: "suzuka", bahrain: "sakhir",
  saudi_arabia: "jeddah", miami: "miami", canada: "montreal", monaco: "montecarlo",
  spain: "catalunya", austria: "spielberg", britain: "silverstone", belgium: "spafrancorchamps",
  hungary: "hungaroring", netherlands: "zandvoort", italy: "monza", azerbaijan: "baku",
  singapore: "singapore", americas: "austin", mexico: "mexicocity", brazil: "interlagos",
  las_vegas: "lasvegas", qatar: "lusail", abu_dhabi: "yasmarina",
};

const trackLayout = (slug) =>
  `https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026track${slug}detailed.webp`;

export function buildDriverImages() {
  const out = {};
  for (const [id, tc] of Object.entries(DRIVER_CODE)) out[id] = driverHeadshot(tc);
  return out;
}

export function buildTrackLayouts() {
  const out = {};
  for (const [cid, slug] of Object.entries(TRACK_SLUG)) {
    out[cid] = { img_url: trackLayout(slug) };
  }
  return out;
}
