// ============================================================================
// media.js — Real formula1.com driver headshots, 2026 car renders + track maps.
//
// URLs harvested + HEAD-verified against media.formula1.com (2026-06-12, all
// 200 OK). Driver photos, car renders and track maps don't change mid-season,
// so these are baked in as verified constants — no live scraping needed
// (f1.com blocks the Worker).
//
// Shapes match what dashboard/index.html consumes:
//   driver_images[driver_id]            -> string URL
//   team_cars[team_slug]                -> string URL   (2026 car, right profile)
//   track_layouts[circuit_id].img_url   -> string URL   (NOTE the .img_url wrapper)
// ============================================================================

// driver_id -> "teamFolder/code" on the f1.com CDN (2026 grid, 22 drivers).
const DRIVER_CODE = {
  piastri: "mclaren/oscpia01",
  norris: "mclaren/lannor01",
  leclerc: "ferrari/chalec01",
  hamilton: "ferrari/lewham01",
  max_verstappen: "redbullracing/maxver01",
  hadjar: "redbullracing/isahad01",
  russell: "mercedes/georus01",
  antonelli: "mercedes/andant01",
  sainz: "williams/carsai01",
  albon: "williams/alealb01",
  alonso: "astonmartin/feralo01",
  stroll: "astonmartin/lanstr01",
  bearman: "haasf1team/olibea01",
  ocon: "haasf1team/estoco01",
  gasly: "alpine/piegas01",
  colapinto: "alpine/fracol01",
  lawson: "racingbulls/lialaw01",
  arvid_lindblad: "racingbulls/arvlin01",
  hulkenberg: "audi/nichul01",
  bortoleto: "audi/gabbor01",
  bottas: "cadillac/valbot01",
  perez: "cadillac/serper01",
};

const driverHeadshot = (tc) =>
  `https://media.formula1.com/image/upload/c_fill,w_720/q_auto/v1740000001/common/f1/2026/${tc}/2026${tc.replace("/", "")}right.webp`;

// team slug (ours) -> f1.com CDN team folder. Same asset family the user linked
// (…/2026/astonmartin/2026astonmartincarright.webp); served at w_1280 for cards.
const TEAM_CAR_FOLDER = {
  mclaren: "mclaren", ferrari: "ferrari", red_bull: "redbullracing",
  mercedes: "mercedes", williams: "williams", aston_martin: "astonmartin",
  haas: "haasf1team", alpine: "alpine", rb: "racingbulls",
  audi: "audi", cadillac: "cadillac",
};

const teamCar = (folder) =>
  `https://media.formula1.com/image/upload/c_lfill,w_1280/q_auto/v1740000001/common/f1/2026/${folder}/2026${folder}carright.webp`;

// circuit_id (our 22-round calendar) -> f1.com CDN track slug (all HEAD-verified 200).
const TRACK_SLUG = {
  australia: "melbourne", china: "shanghai", japan: "suzuka", miami: "miami",
  canada: "montreal", monaco: "montecarlo", spain: "catalunya", austria: "spielberg",
  britain: "silverstone", belgium: "spafrancorchamps", hungary: "hungaroring",
  netherlands: "zandvoort", italy: "monza", madrid: "madrid", azerbaijan: "baku",
  singapore: "singapore", americas: "austin", mexico: "mexicocity",
  brazil: "interlagos", las_vegas: "lasvegas", qatar: "lusail", abu_dhabi: "yasmarina",
};

const trackLayout = (slug) =>
  `https://media.formula1.com/image/upload/c_fit,h_704/q_auto/v1740000001/common/f1/2026/track/2026track${slug}detailed.webp`;

export function buildDriverImages() {
  const out = {};
  for (const [id, tc] of Object.entries(DRIVER_CODE)) out[id] = driverHeadshot(tc);
  return out;
}

export function buildTeamCars() {
  const out = {};
  for (const [slug, folder] of Object.entries(TEAM_CAR_FOLDER)) out[slug] = teamCar(folder);
  return out;
}

export function buildTrackLayouts() {
  const out = {};
  for (const [cid, slug] of Object.entries(TRACK_SLUG)) {
    out[cid] = { img_url: trackLayout(slug) };
  }
  return out;
}
