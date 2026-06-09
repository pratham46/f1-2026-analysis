// Regenerate the committed dashboard seed (dashboard/data.js) from assemble().
// Run from cloudflare/worker:  npm run seed
//
// The live dashboard prefers the Worker /api/data; data.js is the offline fallback,
// so keeping it fresh ensures the page renders sensibly even before the Worker is up.
import { assemble } from "../src/assemble.js";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "../../../dashboard/data.js");

const data = await assemble({ lastGood: {} });
const banner =
  "// AUTO-GENERATED dashboard seed (offline fallback).\n" +
  "// Source: cloudflare/worker assemble() — regenerate with: npm run seed.\n" +
  "// The live dashboard prefers the Worker /api/data; this is the fallback when offline.\n";

writeFileSync(out, banner + "window.F1_DATA = " + JSON.stringify(data, null, 2) + ";\n");
console.log(
  `Seed written → ${out}\n  champion: ${data.driver_standings_2026[0].driver_id}` +
  ` | races_completed: ${data.races_completed_2026} | news: ${data.news.length}` +
  ` | health: ${JSON.stringify(data._health)}`
);
