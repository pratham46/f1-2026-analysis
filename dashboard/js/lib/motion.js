// Two-tier motion.
//
// Native CSS scroll-driven animations do the reveals and the progress bar,
// entirely on the compositor. This module is only the fallback for browsers
// without scroll-driven CSS, plus count-ups.
//
// GSAP used to be lazily imported here for "pinned and scrubbed sequences".
// Nothing ever called it. Two CDN entries and a loader for zero callers is
// worse than no motion library, so it is gone — and the typed reveals it was
// meant to power turned out to need only `animation-timeline: view()`.
//
// HARD RULE: content is visible by default. Reveals ADD motion to an already
// painted page. Nothing here may hide content — transitions pause on hidden
// tabs and in headless renderers, and a gated section ships blank.

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const supportsScrollTimeline = () => CSS.supports("animation-timeline: view()");

export function onVisible(el, fn, { once = true } = {}) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        fn(e.target);
        if (once) io.unobserve(e.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px" }
  );
  io.observe(el);
  return () => io.disconnect();
}

// `animation-timeline: view()` resolves against the nearest ancestor SCROLL
// CONTAINER, not the viewport. Anything inside `.scroll-x` therefore measures
// itself against a box it never scrolls within, reports itself permanently in
// view, and pins its animation at progress 1 — which renders identically to a
// reveal that has already played, so it fails silently. Both standings tables
// lost their row cascade this way and nothing in the page looked wrong.
//
// There is no CSS escape: x-scrolling forces the y axis to `auto`/`hidden`
// whatever you write. So these elements are found and driven by observer.
//
// Detected by ASKING the animation what it bound to, rather than re-deriving
// the rule from overflow values. Walking ancestors looked equivalent and was
// not: `body` carries `overflow-x: hidden`, which propagates to the viewport
// instead of making body a scroll container, so that version condemned every
// reveal on the page to the JS path. The browser already knows the answer.
const usesViewTimeline = (el) => {
  const anim = el.getAnimations().find((a) => a.timeline instanceof ViewTimeline);
  return !anim || anim.timeline.source === document.documentElement;
};

export function initReveals() {
  if (prefersReducedMotion()) return;

  // No scroll-driven CSS at all: one honest transition for everything.
  if (!supportsScrollTimeline()) {
    document.documentElement.classList.add("js-reveal");
    for (const el of document.querySelectorAll("[data-reveal]")) {
      onVisible(el, (t) => t.setAttribute("data-revealed", ""));
    }
    return;
  }

  // Otherwise CSS owns every reveal it can actually see, and we take only the
  // ones its timeline cannot reach.
  for (const el of document.querySelectorAll("[data-reveal]")) {
    if (usesViewTimeline(el)) continue;
    el.dataset.revealJs = "";
    onVisible(el, (t) => t.setAttribute("data-revealed", ""));
  }
}

export function countUp(el, to, { duration = 900, decimals = 0, suffix = "" } = {}) {
  if (prefersReducedMotion() || !Number.isFinite(to)) {
    el.textContent = (Number.isFinite(to) ? to.toFixed(decimals) : "—") + suffix;
    return;
  }
  const t0 = performance.now();
  const ease = (t) => 1 - Math.pow(1 - t, 4); // out-quart, matches --ease-out
  const step = (now) => {
    const t = Math.min(1, (now - t0) / duration);
    el.textContent = (to * ease(t)).toFixed(decimals) + suffix;
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// Count up the first time the element scrolls into view, not on load.
export function countUpWhenVisible(el, to, opts) {
  onVisible(el, () => countUp(el, to, opts));
}

export function initScrollProgress(el) {
  if (!el || supportsScrollTimeline()) return; // CSS owns it
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    el.style.setProperty("--progress", max > 0 ? window.scrollY / max : 0);
  };
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update, { passive: true });
  update();
}
