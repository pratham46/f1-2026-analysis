// Plotly wrapper.
//
// Plotly CANNOT resolve `var(--token)` strings — passing one yields a silently
// invisible trace. That exact bug shipped live once and made the accuracy chart
// render blank. This module is the only place colours are read, and it always
// hands Plotly a literal.

const cssVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export function resolveToken(name) {
  const v = cssVar(name);
  // Throw loudly rather than returning "" — a silent empty string is exactly
  // how the invisible-chart bug got to production.
  if (!v) throw new Error(`Unknown design token: ${name}`);
  if (v.startsWith("var(")) throw new Error(`Token ${name} resolved to another var()`);
  return v;
}

export function baseLayout(overrides = {}) {
  const ink1 = resolveToken("--ink-1");
  const ink2 = resolveToken("--ink-2");
  const grid = resolveToken("--surface-3");
  return {
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    font: { family: cssVar("--font-body") || "Archivo, sans-serif", color: ink1, size: 12 },
    margin: { l: 48, r: 16, t: 8, b: 40 },
    xaxis: { gridcolor: grid, zerolinecolor: grid, tickfont: { color: ink2 } },
    yaxis: { gridcolor: grid, zerolinecolor: grid, tickfont: { color: ink2 } },
    showlegend: false,
    hoverlabel: { bgcolor: resolveToken("--surface-2"), bordercolor: grid, font: { color: ink1 } },
    ...overrides,
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
