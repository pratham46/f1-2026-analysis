// Design tokens -> colours a non-CSS renderer can actually use.
//
// The surface and ink ramps are authored in OKLCH. Neither Plotly nor
// THREE.Color parses oklch(), and Plotly does not even error — it falls back
// to its own categorical palette, so a broken chart looks deliberate.
//
// Neither getComputedStyle nor canvas fillStyle converts: CSS Color 4 keeps a
// computed colour in its authored space, and both round-trip oklch() unchanged.
// Painting one pixel and reading it back forces the conversion to sRGB bytes.
// Works for oklch(), color-mix(), named colours — anything CSS can paint —
// without shipping a colour-conversion library.

const cssVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

let ctx;
const SENTINEL = "#010203";

export function cssColorToRGB(value, name = value) {
  if (!ctx) {
    const c = document.createElement("canvas");
    c.width = c.height = 1;
    ctx = c.getContext("2d", { willReadFrequently: true });
  }
  // An invalid value is silently ignored, leaving the previous fillStyle in
  // place. Setting a sentinel first turns that silence into a failure.
  ctx.fillStyle = SENTINEL;
  ctx.fillStyle = value;
  if (ctx.fillStyle === SENTINEL && value.toLowerCase() !== SENTINEL) {
    throw new Error(`${name} is not a usable colour: ${value}`);
  }
  ctx.clearRect(0, 0, 1, 1);
  ctx.fillRect(0, 0, 1, 1);
  const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
  return a === 255 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${(a / 255).toFixed(3)})`;
}

export function resolveToken(name) {
  const v = cssVar(name);
  // Throw loudly rather than returning "" — a silent empty string is exactly
  // how the invisible-chart bug got to production.
  if (!v) throw new Error(`Unknown design token: ${name}`);
  if (v.startsWith("var(")) throw new Error(`Token ${name} resolved to another var()`);
  return cssColorToRGB(v, `Token ${name}`);
}
