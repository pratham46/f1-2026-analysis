// ============================================================================
// media.js — Driver headshot URLs (f1.com) + 2026 track layout URLs (F1 CDN).
//
// We only build *URLs* — the browser loads the images directly, so the Worker
// never proxies image bytes. URL patterns follow formula1.com conventions; if a
// pattern 404s the frontend already falls back to CSS placeholders.
// ============================================================================

import { DRIVER_INFO, CALENDAR_2026 } from "./seed.js";

const CDN = "https://media.formula1.com/image/upload";
const DRIVERS_BASE = "https://www.formula1.com/content/dam/fom-website/drivers/2026Drivers";

// driver_id → f1.com headshot filename stem (FirstnameLastname style varies; we
// build the common "F/FIRSTLAST01_Firstname_Lastname/..." pattern f1.com uses).
const HEADSHOT_STEM = {
  piastri: "O/OSCPIA01_Oscar_Piastri",
  norris: "L/LANNOR01_Lando_Norris",
  leclerc: "C/CHALEC01_Charles_Leclerc",
  hamilton: "L/LEWHAM01_Lewis_Hamilton",
  max_verstappen: "M/MAXVER01_Max_Verstappen",
  tsunoda: "Y/YUKTSU01_Yuki_Tsunoda",
  russell: "G/GEORUS01_George_Russell",
  antonelli: "A/ANDANT01_Andrea Kimi_Antonelli",
  sainz: "C/CARSAI01_Carlos_Sainz",
  albon: "A/ALEALB01_Alexander_Albon",
  lawson: "L/LIALAW01_Liam_Lawson",
  hadjar: "I/ISAHAD01_Isack_Hadjar",
  alonso: "F/FERALO01_Fernando_Alonso",
  stroll: "L/LANSTR01_Lance_Stroll",
  bearman: "O/OLIBEA01_Oliver_Bearman",
  ocon: "E/ESTOCO01_Esteban_Ocon",
  gasly: "P/PIEGAS01_Pierre_Gasly",
  doohan: "J/JACDOO01_Jack_Doohan",
  hulkenberg: "N/NICHUL01_Nico_Hulkenberg",
  bortoleto: "G/GABBOR01_Gabriel_Bortoleto",
};

// Circuit id → f1.com circuit-map image slug (the "Circuit name" carbon images).
const TRACK_SLUG = {
  australia: "Australia", china: "China", japan: "Japan", bahrain: "Bahrain",
  saudi_arabia: "Saudi_Arabia", miami: "Miami", canada: "Canada", monaco: "Monaco",
  spain: "Spain", austria: "Austria", britain: "Great_Britain", belgium: "Belgium",
  hungary: "Hungary", netherlands: "Netherlands", italy: "Italy", azerbaijan: "Baku",
  singapore: "Singapore", americas: "United_States", mexico: "Mexico", brazil: "Brazil",
  las_vegas: "Las_Vegas", qatar: "Qatar", abu_dhabi: "Abu_Dhabi",
};

export function buildDriverImages() {
  const out = {};
  for (const id of Object.keys(DRIVER_INFO)) {
    const stem = HEADSHOT_STEM[id];
    out[id] = stem
      ? `${DRIVERS_BASE}/${encodeURI(stem)}.png.transform/2col/image.png`
      : null;
  }
  return out;
}

export function buildTrackLayouts() {
  const out = {};
  for (const race of CALENDAR_2026) {
    const slug = TRACK_SLUG[race.id];
    if (slug && !out[race.id]) {
      out[race.id] = `${CDN}/f_auto/q_auto/v1677245035/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/${slug}_Circuit.png`;
    }
  }
  return out;
}
