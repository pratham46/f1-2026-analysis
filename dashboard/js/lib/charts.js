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
    // Without this Plotly falls back to a hardcoded 700px width whenever it
    // cannot infer one, and `responsive: true` only corrects that on a later
    // window resize. Charts drawn lazily on scroll therefore kept the 700 —
    // which on a 375px phone dragged the whole page sideways, because a plot
    // wider than the viewport is horizontal overflow like any other element.
    autosize: true,
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    font: { family: cssVar("--font-body") || "monospace", color: ink1, size: 12 },
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
  // Fit to the container once the plot actually exists. Plotly measures during
  // newPlot and, when that measurement does not come back, adopts a 700px
  // default instead of failing — which is wider than a phone, so the chart
  // became horizontal overflow. Resizing before the promise settles is a no-op,
  // which is exactly the trap: the fix looks applied and changes nothing.
  if (el.clientWidth >= 1) window.Plotly.Plots.resize(el);
}

// A newPlot at width 0 crushes bars against the axis. Anything inside a modal
// MUST use this — the element has no width until the modal is open and laid out.
export function plotWhenVisible(el, buildFn) {
  if (el.dataset.plotted === "1") return;
  // Builds at most once; returns whether a plot now exists.
  const draw = () => {
    if (el.dataset.plotted === "1") return true;
    if (el.clientWidth < 1) return false;
    el.dataset.plotted = "1";
    // Plotly measures the container during newPlot and, when that measurement
    // does not come back, adopts a 700px default rather than failing — wider
    // than a phone, so the chart becomes horizontal overflow. The fit has to
    // wait for the plot to exist: `buildFn` returns newPlot's promise, and
    // resizing before it settles is a silent no-op, which is exactly the trap.
    Promise.resolve(buildFn(el)).then(() => {
      if (el.clientWidth >= 1) window.Plotly?.Plots?.resize?.(el);
    });
    return true;
  };

  // The observer used to disconnect the moment it had drawn once. That left
  // every chart frozen at whatever width it happened to be born at: Plotly
  // only re-fits on a window resize, so a chart drawn lazily on scroll kept
  // its first size forever — including Plotly's hardcoded 700px fallback,
  // which on a phone is wider than the screen. It stays connected now and
  // re-fits whenever the CONTAINER changes, which also covers the cases a
  // window listener never sees: a modal opening, a column reflowing.
  const ro = new ResizeObserver(() => {
    if (draw() && el.clientWidth >= 1) window.Plotly?.Plots?.resize?.(el);
  });
  ro.observe(el);
  draw();
}

export function resetPlot(el) {
  el.dataset.plotted = "";
  window.Plotly?.purge?.(el);
}
