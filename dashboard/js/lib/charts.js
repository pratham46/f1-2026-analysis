// Plotly wrapper.
//
// Plotly cannot parse CSS colour syntax. Not `var(--token)` — that shipped once
// and rendered the accuracy chart blank. Not `oklch()` either, which is worse:
// rather than erroring it falls back to its own categorical palette, so a
// broken chart looks deliberate. Since the whole surface and ink ramp is
// authored in OKLCH, "hand Plotly the token's literal value" was never enough.
//
// So every colour goes through the browser first and reaches Plotly as rgb().

const cssVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

// Let the browser do the colour maths, then RASTERISE it. Neither
// getComputedStyle nor canvas fillStyle converts: both round-trip a modern
// colour function unchanged (CSS Color 4 keeps the computed value in its
// authored space), so reading either back still hands Plotly `oklch(...)`.
// Painting one pixel and reading it forces the conversion to sRGB bytes.
// Works for oklch(), color-mix(), named colours — anything CSS can paint —
// without shipping a colour-conversion library.
let ctx;
const SENTINEL = "#010203";
function toRGB(value, name) {
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
    throw new Error(`Token ${name} is not a usable colour: ${value}`);
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
  return toRGB(v, name);
}

export function baseLayout(overrides = {}) {
  const ink1 = resolveToken("--ink-1");
  const ink2 = resolveToken("--ink-2");
  const grid = resolveToken("--surface-3");
  const base = {
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    font: { family: cssVar("--font-body") || "Archivo, sans-serif", color: ink1, size: 12 },
    margin: { l: 48, r: 16, t: 8, b: 40 },
    xaxis: { gridcolor: grid, zerolinecolor: grid, tickfont: { color: ink2 } },
    yaxis: { gridcolor: grid, zerolinecolor: grid, tickfont: { color: ink2 } },
    showlegend: false,
    hoverlabel: { bgcolor: resolveToken("--surface-2"), bordercolor: grid, font: { color: ink1 } },
  };
  // Axes merge instead of replacing. A caller overriding one axis property —
  // a title, a range — was silently dropping the styled gridlines and tick
  // colour along with it, which is how charts drifted back to Plotly's chrome.
  return {
    ...base,
    ...overrides,
    xaxis: { ...base.xaxis, ...overrides.xaxis },
    yaxis: { ...base.yaxis, ...overrides.yaxis },
  };
}

const CONFIG = { displayModeBar: false, responsive: true };

export async function plot(el, traces, layout = {}) {
  if (!window.Plotly) throw new Error("Plotly not loaded");
  await window.Plotly.newPlot(el, traces, { ...baseLayout(), ...layout }, CONFIG);
}

// A newPlot at width 0 crushes bars against the axis. Anything inside a modal
// MUST use this — the element has no width until the modal is open and laid out.
export function plotWhenVisible(el, buildFn) {
  if (el.dataset.plotted === "1") return;
  const draw = () => {
    if (el.clientWidth < 1) return false;
    el.dataset.plotted = "1";
    buildFn(el);
    return true;
  };
  if (draw()) return;
  const ro = new ResizeObserver(() => {
    if (draw()) ro.disconnect();
  });
  ro.observe(el);
}

export function resetPlot(el) {
  el.dataset.plotted = "";
  window.Plotly?.purge?.(el);
}
