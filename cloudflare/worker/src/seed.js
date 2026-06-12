// ============================================================================
// seed.js — Frozen historical constants + 2026 grid + model anchor.
//
// 2020-2025 is settled history; it never changes, so the Worker embeds it
// rather than re-fetching 6 seasons from OpenF1/Jolpica on every cron run.
// Only 2026 is fetched/scraped live. The XGBoost model's 2026 base-position
// output is frozen here as MODEL_BASE_2026 (the "calibrated anchor"); predict.js
// blends it with any live 2026 results and runs the Monte Carlo on top.
//
// 2026-06-12 grid refresh (verified against live Jolpica /2026/driverstandings):
//   • 22 drivers / 11 teams — Cadillac joined (Bottas + Perez), Sauber became Audi.
//   • Hadjar drives for Red Bull, RB runs Lawson + rookie Arvid Lindblad,
//     Alpine runs Gasly + Colapinto. Tsunoda/Doohan are off the grid.
//   • Bahrain + Saudi Arabian GPs were CANCELLED → the real season is 22 rounds;
//     CALENDAR_2026 below mirrors Jolpica's official 22-round table.
// ============================================================================

export const SEASONS_USED = [2020, 2021, 2022, 2023, 2024, 2025];

// Complete 2026 grid keyed by the driver ids used in predictions (driver→team).
// Numbers from Jolpica permanentNumber (Norris runs #1 as reigning champion).
export const DRIVER_INFO = {
  piastri:        { name: "Oscar Piastri",       short: "PIA", team: "mclaren",      team_name: "McLaren",          color: "#FF8000", number: 81 },
  norris:         { name: "Lando Norris",        short: "NOR", team: "mclaren",      team_name: "McLaren",          color: "#FF8000", number: 1 },
  leclerc:        { name: "Charles Leclerc",     short: "LEC", team: "ferrari",      team_name: "Ferrari",          color: "#E8002D", number: 16 },
  hamilton:       { name: "Lewis Hamilton",      short: "HAM", team: "ferrari",      team_name: "Ferrari",          color: "#E8002D", number: 44 },
  max_verstappen: { name: "Max Verstappen",      short: "VER", team: "red_bull",     team_name: "Red Bull Racing",  color: "#3671C6", number: 3 },
  hadjar:         { name: "Isack Hadjar",        short: "HAD", team: "red_bull",     team_name: "Red Bull Racing",  color: "#3671C6", number: 6 },
  russell:        { name: "George Russell",      short: "RUS", team: "mercedes",     team_name: "Mercedes",         color: "#27F4D2", number: 63 },
  antonelli:      { name: "Kimi Antonelli",      short: "ANT", team: "mercedes",     team_name: "Mercedes",         color: "#27F4D2", number: 12 },
  sainz:          { name: "Carlos Sainz",        short: "SAI", team: "williams",     team_name: "Williams",         color: "#64C4FF", number: 55 },
  albon:          { name: "Alex Albon",          short: "ALB", team: "williams",     team_name: "Williams",         color: "#64C4FF", number: 23 },
  lawson:         { name: "Liam Lawson",         short: "LAW", team: "rb",           team_name: "Racing Bulls",     color: "#6692FF", number: 30 },
  arvid_lindblad: { name: "Arvid Lindblad",      short: "LIN", team: "rb",           team_name: "Racing Bulls",     color: "#6692FF", number: 41 },
  alonso:         { name: "Fernando Alonso",     short: "ALO", team: "aston_martin", team_name: "Aston Martin",     color: "#358C75", number: 14 },
  stroll:         { name: "Lance Stroll",        short: "STR", team: "aston_martin", team_name: "Aston Martin",     color: "#358C75", number: 18 },
  bearman:        { name: "Oliver Bearman",      short: "BEA", team: "haas",         team_name: "Haas",             color: "#B6BABD", number: 87 },
  ocon:           { name: "Esteban Ocon",        short: "OCO", team: "haas",         team_name: "Haas",             color: "#B6BABD", number: 31 },
  gasly:          { name: "Pierre Gasly",        short: "GAS", team: "alpine",       team_name: "Alpine",           color: "#FF87BC", number: 10 },
  colapinto:      { name: "Franco Colapinto",    short: "COL", team: "alpine",       team_name: "Alpine",           color: "#FF87BC", number: 43 },
  hulkenberg:     { name: "Nico Hulkenberg",     short: "HUL", team: "audi",         team_name: "Audi",             color: "#00E701", number: 27 },
  bortoleto:      { name: "Gabriel Bortoleto",   short: "BOR", team: "audi",         team_name: "Audi",             color: "#00E701", number: 5 },
  bottas:         { name: "Valtteri Bottas",     short: "BOT", team: "cadillac",     team_name: "Cadillac",         color: "#C8A464", number: 77 },
  perez:          { name: "Sergio Perez",        short: "PER", team: "cadillac",     team_name: "Cadillac",         color: "#C8A464", number: 11 },
};

// 2026 grid colors + legacy slugs (sauber/alphatauri/…) kept for history charts.
export const TEAM_COLORS = {
  red_bull: "#3671C6", ferrari: "#E8002D", mclaren: "#FF8000", mercedes: "#27F4D2",
  aston_martin: "#358C75", williams: "#64C4FF", alpine: "#FF87BC", rb: "#6692FF",
  haas: "#B6BABD", audi: "#00E701", cadillac: "#C8A464",
  sauber: "#52E252", alphatauri: "#6692FF", alfa: "#900000", racing_point: "#F596C8",
  renault: "#FFF500",
};

export const REGULATION_IMPACT_2026 = {
  description: "New 2026 regs: smaller cars, active aero (Manual Override Mode), 50/50 ICE + ERS hybrid, 100% sustainable fuel. Audi works team debuts; Cadillac joins as the 11th team.",
  constructor_competitiveness_change: {
    ferrari: 8, mercedes: 5, mclaren: 3, williams: 1, haas: 0,
    rb: -1, audi: -1, aston_martin: -2, alpine: -3, cadillac: -4, red_bull: -5,
  },
};

// Frozen 2026 base finishing-position prediction from the trained XGBoost model
// (predictions.json base_predicted_position), extended editorially to the four
// 2026 entrants the model never saw (Perez/Colapinto/Bottas/Lindblad slotted by
// career form + machinery; Cadillac is a brand-new team → conservative ranks).
// The relative order of all retained trained drivers is untouched (parity test).
export const MODEL_BASE_2026 = {
  piastri: 1, leclerc: 2, max_verstappen: 3, russell: 4, norris: 5,
  hamilton: 6, antonelli: 7, sainz: 8, albon: 9, lawson: 10,
  hadjar: 11, alonso: 12, bearman: 13, ocon: 14, gasly: 15,
  perez: 16, colapinto: 17, stroll: 18, bottas: 19, hulkenberg: 20,
  bortoleto: 21, arvid_lindblad: 22,
};

// Calibration figure carried in metadata (the offline model's GroupKFold-5 CV MAE).
export const MODEL_CV_MAE = 2.71;

// Final season standings 2020-2025, rebuilt 2026-06-12 from Jolpica
// /{year}/driverstandings + /constructorstandings (the previous tables were
// truncated mid-season snapshots — e.g. 2025 showed 92 pts for a 423-pt title).
export const HISTORICAL_DRIVER_POINTS = {
  2020: { hamilton: 347, bottas: 223, max_verstappen: 214, perez: 125, ricciardo: 119, sainz: 105, albon: 105, leclerc: 98, norris: 97, gasly: 75, stroll: 75, ocon: 62, vettel: 33, kvyat: 32, hulkenberg: 10, raikkonen: 4, giovinazzi: 4, russell: 3, grosjean: 2, kevin_magnussen: 1, latifi: 0, aitken: 0, pietro_fittipaldi: 0 },
  2021: { max_verstappen: 395.5, hamilton: 387.5, bottas: 226, perez: 190, sainz: 164.5, norris: 160, leclerc: 159, ricciardo: 115, gasly: 110, alonso: 81, ocon: 74, vettel: 43, stroll: 34, tsunoda: 32, russell: 16, raikkonen: 10, latifi: 7, giovinazzi: 3, mick_schumacher: 0, kubica: 0, mazepin: 0 },
  2022: { max_verstappen: 454, leclerc: 308, perez: 305, russell: 275, sainz: 246, hamilton: 240, norris: 122, ocon: 92, alonso: 81, bottas: 49, ricciardo: 37, vettel: 37, kevin_magnussen: 25, gasly: 23, stroll: 18, mick_schumacher: 12, tsunoda: 12, zhou: 6, albon: 4, latifi: 2, de_vries: 2, hulkenberg: 0 },
  2023: { max_verstappen: 575, perez: 285, hamilton: 234, alonso: 206, leclerc: 206, norris: 205, sainz: 200, russell: 175, piastri: 97, stroll: 74, gasly: 62, ocon: 58, albon: 27, tsunoda: 17, bottas: 10, hulkenberg: 9, ricciardo: 6, zhou: 6, kevin_magnussen: 3, lawson: 2, sargeant: 1, de_vries: 0 },
  2024: { max_verstappen: 437, norris: 374, leclerc: 356, piastri: 292, sainz: 290, russell: 245, hamilton: 223, perez: 152, alonso: 70, gasly: 42, hulkenberg: 41, tsunoda: 30, stroll: 24, ocon: 23, kevin_magnussen: 16, albon: 12, ricciardo: 12, bearman: 7, colapinto: 5, zhou: 4, lawson: 4, bottas: 0, sargeant: 0, doohan: 0 },
  2025: { norris: 423, max_verstappen: 421, piastri: 410, russell: 319, leclerc: 242, hamilton: 156, antonelli: 150, albon: 73, sainz: 64, alonso: 56, hulkenberg: 51, hadjar: 51, bearman: 41, lawson: 38, ocon: 38, stroll: 33, tsunoda: 33, gasly: 22, bortoleto: 19, colapinto: 0, doohan: 0 },
};

// driver -> constructor per season (final entry of the year), for UI team colors.
export const HISTORICAL_DRIVER_TEAMS = {
  2020: { hamilton: "mercedes", bottas: "mercedes", max_verstappen: "red_bull", perez: "racing_point", ricciardo: "renault", sainz: "mclaren", albon: "red_bull", leclerc: "ferrari", norris: "mclaren", gasly: "alphatauri", stroll: "racing_point", ocon: "renault", vettel: "ferrari", kvyat: "alphatauri", hulkenberg: "racing_point", raikkonen: "alfa", giovinazzi: "alfa", russell: "mercedes", grosjean: "haas", kevin_magnussen: "haas", latifi: "williams", aitken: "williams", pietro_fittipaldi: "haas" },
  2021: { max_verstappen: "red_bull", hamilton: "mercedes", bottas: "mercedes", perez: "red_bull", sainz: "ferrari", norris: "mclaren", leclerc: "ferrari", ricciardo: "mclaren", gasly: "alphatauri", alonso: "alpine", ocon: "alpine", vettel: "aston_martin", stroll: "aston_martin", tsunoda: "alphatauri", russell: "williams", raikkonen: "alfa", latifi: "williams", giovinazzi: "alfa", mick_schumacher: "haas", kubica: "alfa", mazepin: "haas" },
  2022: { max_verstappen: "red_bull", leclerc: "ferrari", perez: "red_bull", russell: "mercedes", sainz: "ferrari", hamilton: "mercedes", norris: "mclaren", ocon: "alpine", alonso: "alpine", bottas: "alfa", ricciardo: "mclaren", vettel: "aston_martin", kevin_magnussen: "haas", gasly: "alphatauri", stroll: "aston_martin", mick_schumacher: "haas", tsunoda: "alphatauri", zhou: "alfa", albon: "williams", latifi: "williams", de_vries: "williams", hulkenberg: "aston_martin" },
  2023: { max_verstappen: "red_bull", perez: "red_bull", hamilton: "mercedes", alonso: "aston_martin", leclerc: "ferrari", norris: "mclaren", sainz: "ferrari", russell: "mercedes", piastri: "mclaren", stroll: "aston_martin", gasly: "alpine", ocon: "alpine", albon: "williams", tsunoda: "alphatauri", bottas: "alfa", hulkenberg: "haas", ricciardo: "alphatauri", zhou: "alfa", kevin_magnussen: "haas", lawson: "alphatauri", sargeant: "williams", de_vries: "alphatauri" },
  2024: { max_verstappen: "red_bull", norris: "mclaren", leclerc: "ferrari", piastri: "mclaren", sainz: "ferrari", russell: "mercedes", hamilton: "mercedes", perez: "red_bull", alonso: "aston_martin", gasly: "alpine", hulkenberg: "haas", tsunoda: "rb", stroll: "aston_martin", ocon: "alpine", kevin_magnussen: "haas", albon: "williams", ricciardo: "rb", bearman: "haas", colapinto: "williams", zhou: "sauber", lawson: "rb", bottas: "sauber", sargeant: "williams", doohan: "alpine" },
  2025: { norris: "mclaren", max_verstappen: "red_bull", piastri: "mclaren", russell: "mercedes", leclerc: "ferrari", hamilton: "ferrari", antonelli: "mercedes", albon: "williams", sainz: "williams", alonso: "aston_martin", hulkenberg: "sauber", hadjar: "rb", bearman: "haas", lawson: "rb", ocon: "haas", stroll: "aston_martin", tsunoda: "red_bull", gasly: "alpine", bortoleto: "sauber", colapinto: "alpine", doohan: "alpine" },
};

// Display names for every driver in the 2020-2025 history (UI fallback).
export const DRIVER_NAMES = {
  aitken: "Jack Aitken",
  albon: "Alexander Albon",
  alonso: "Fernando Alonso",
  antonelli: "Andrea Kimi Antonelli",
  bearman: "Oliver Bearman",
  bortoleto: "Gabriel Bortoleto",
  bottas: "Valtteri Bottas",
  colapinto: "Franco Colapinto",
  de_vries: "Nyck de Vries",
  doohan: "Jack Doohan",
  gasly: "Pierre Gasly",
  giovinazzi: "Antonio Giovinazzi",
  grosjean: "Romain Grosjean",
  hadjar: "Isack Hadjar",
  hamilton: "Lewis Hamilton",
  hulkenberg: "Nico Hülkenberg",
  kevin_magnussen: "Kevin Magnussen",
  kubica: "Robert Kubica",
  kvyat: "Daniil Kvyat",
  latifi: "Nicholas Latifi",
  lawson: "Liam Lawson",
  leclerc: "Charles Leclerc",
  max_verstappen: "Max Verstappen",
  mazepin: "Nikita Mazepin",
  mick_schumacher: "Mick Schumacher",
  norris: "Lando Norris",
  ocon: "Esteban Ocon",
  perez: "Sergio Pérez",
  piastri: "Oscar Piastri",
  pietro_fittipaldi: "Pietro Fittipaldi",
  raikkonen: "Kimi Räikkönen",
  ricciardo: "Daniel Ricciardo",
  russell: "George Russell",
  sainz: "Carlos Sainz",
  sargeant: "Logan Sargeant",
  stroll: "Lance Stroll",
  tsunoda: "Yuki Tsunoda",
  vettel: "Sebastian Vettel",
  zhou: "Guanyu Zhou",
};

export const HISTORICAL_CONSTRUCTOR_POINTS = {
  2020: { mercedes: 573, red_bull: 319, mclaren: 202, racing_point: 195, renault: 181, ferrari: 131, alphatauri: 107, alfa: 8, haas: 3, williams: 0 },
  2021: { mercedes: 613.5, red_bull: 585.5, ferrari: 323.5, mclaren: 275, alpine: 155, alphatauri: 142, aston_martin: 77, williams: 23, alfa: 13, haas: 0 },
  2022: { red_bull: 759, ferrari: 554, mercedes: 515, alpine: 173, mclaren: 159, alfa: 55, aston_martin: 55, haas: 37, alphatauri: 35, williams: 8 },
  2023: { red_bull: 860, mercedes: 409, ferrari: 406, mclaren: 302, aston_martin: 280, alpine: 120, williams: 28, alphatauri: 25, alfa: 16, haas: 12 },
  2024: { mclaren: 666, ferrari: 652, red_bull: 589, mercedes: 468, aston_martin: 94, alpine: 65, haas: 58, rb: 46, williams: 17, sauber: 4 },
  2025: { mclaren: 833, mercedes: 469, red_bull: 451, ferrari: 398, williams: 137, rb: 92, aston_martin: 89, haas: 79, sauber: 70, alpine: 22 },
};

// Per-season points for each current driver (2020-2025), used by the form scorer.
export const DRIVER_ROLLING_FORM = {
  piastri:        { seasons: SEASONS_USED, points: [0, 0, 0, 97, 292, 410] },
  norris:         { seasons: SEASONS_USED, points: [97, 160, 122, 205, 374, 423] },
  leclerc:        { seasons: SEASONS_USED, points: [98, 159, 308, 206, 356, 242] },
  hamilton:       { seasons: SEASONS_USED, points: [347, 387.5, 240, 234, 223, 156] },
  max_verstappen: { seasons: SEASONS_USED, points: [214, 395.5, 454, 575, 437, 421] },
  hadjar:         { seasons: SEASONS_USED, points: [0, 0, 0, 0, 0, 51] },
  russell:        { seasons: SEASONS_USED, points: [3, 16, 275, 175, 245, 319] },
  antonelli:      { seasons: SEASONS_USED, points: [0, 0, 0, 0, 0, 150] },
  sainz:          { seasons: SEASONS_USED, points: [105, 164.5, 246, 200, 290, 64] },
  albon:          { seasons: SEASONS_USED, points: [105, 0, 4, 27, 12, 73] },
  lawson:         { seasons: SEASONS_USED, points: [0, 0, 0, 2, 4, 38] },
  arvid_lindblad: { seasons: SEASONS_USED, points: [0, 0, 0, 0, 0, 0] },
  alonso:         { seasons: SEASONS_USED, points: [0, 81, 81, 206, 70, 56] },
  stroll:         { seasons: SEASONS_USED, points: [75, 34, 18, 74, 24, 33] },
  bearman:        { seasons: SEASONS_USED, points: [0, 0, 0, 0, 7, 41] },
  ocon:           { seasons: SEASONS_USED, points: [62, 74, 92, 58, 23, 38] },
  gasly:          { seasons: SEASONS_USED, points: [75, 110, 23, 62, 42, 22] },
  colapinto:      { seasons: SEASONS_USED, points: [0, 0, 0, 0, 5, 0] },
  hulkenberg:     { seasons: SEASONS_USED, points: [10, 0, 0, 9, 41, 51] },
  bortoleto:      { seasons: SEASONS_USED, points: [0, 0, 0, 0, 0, 19] },
  bottas:         { seasons: SEASONS_USED, points: [223, 226, 49, 10, 0, 0] },
  perez:          { seasons: SEASONS_USED, points: [125, 190, 305, 285, 152, 0] },
};

// 2026 race calendar — the REAL 22-round season (Jolpica /2026/races, 2026-06-12).
// Bahrain (Apr 12) and Saudi Arabia (Apr 19) were cancelled and removed from the
// official table; rounds are numbered as actually run. `sprint` marks confirmed
// sprint weekends (completed ones verified via Jolpica /2026/sprint).
export const CALENDAR_2026 = [
  { round: 1,  id: "australia",   name: "Australian GP",      date: "2026-03-08" },
  { round: 2,  id: "china",       name: "Chinese GP",         date: "2026-03-15", sprint: true },
  { round: 3,  id: "japan",       name: "Japanese GP",        date: "2026-03-29" },
  { round: 4,  id: "miami",       name: "Miami GP",           date: "2026-05-03", sprint: true },
  { round: 5,  id: "canada",      name: "Canadian GP",        date: "2026-05-24", sprint: true },
  { round: 6,  id: "monaco",      name: "Monaco GP",          date: "2026-06-07" },
  { round: 7,  id: "spain",       name: "Barcelona GP",       date: "2026-06-14" },
  { round: 8,  id: "austria",     name: "Austrian GP",        date: "2026-06-28" },
  { round: 9,  id: "britain",     name: "British GP",         date: "2026-07-05" },
  { round: 10, id: "belgium",     name: "Belgian GP",         date: "2026-07-19" },
  { round: 11, id: "hungary",     name: "Hungarian GP",       date: "2026-07-26" },
  { round: 12, id: "netherlands", name: "Dutch GP",           date: "2026-08-23" },
  { round: 13, id: "italy",       name: "Italian GP",         date: "2026-09-06" },
  { round: 14, id: "madrid",      name: "Madrid GP",          date: "2026-09-13" },
  { round: 15, id: "azerbaijan",  name: "Azerbaijan GP",      date: "2026-09-26" },
  { round: 16, id: "singapore",   name: "Singapore GP",       date: "2026-10-11" },
  { round: 17, id: "americas",    name: "United States GP",   date: "2026-10-25" },
  { round: 18, id: "mexico",      name: "Mexico City GP",     date: "2026-11-01" },
  { round: 19, id: "brazil",      name: "São Paulo GP",       date: "2026-11-08" },
  { round: 20, id: "las_vegas",   name: "Las Vegas GP",       date: "2026-11-22" },
  { round: 21, id: "qatar",       name: "Qatar GP",           date: "2026-11-29" },
  { round: 22, id: "abu_dhabi",   name: "Abu Dhabi GP",       date: "2026-12-06" },
];

// Cancelled 2026 rounds (shown as a note in the UI, excluded from predictions).
export const CANCELLED_2026 = [
  { id: "bahrain",      name: "Bahrain GP",        date: "2026-04-12" },
  { id: "saudi_arabia", name: "Saudi Arabian GP",  date: "2026-04-19" },
];

export const N_RACES_2026 = CALENDAR_2026.length;
