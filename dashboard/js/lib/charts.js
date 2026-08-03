// Plotly wrapper.
//
// Plotly cannot parse CSS colour syntax — not `var(--token)`, which shipped an
// invisible chart once, and not `oklch()`, which is worse because it falls back
// to its own palette instead of erroring. lib/color.js resolves tokens to
// rgb(); this module's job is to make sure nothing reaches Plotly any other way.

import { resolveToken } from "./color.js";

export { resolveToken };

const cssVar = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

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
