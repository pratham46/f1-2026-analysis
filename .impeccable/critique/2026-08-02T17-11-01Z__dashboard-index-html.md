---
target: dashboard/index.html
total_score: 37
p0_count: 0
p1_count: 1
timestamp: 2026-08-02T17-11-01Z
slug: dashboard-index-html
---
Method: dual-agent (A: 6337e22c-77f9-4208-bee7-2d625a09d93e · B: f1d7aba7-50c8-445a-9ed7-b6ed3a19c8bb)

#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | Excellent data-status indicator. |
| 2 | Match System / Real World | 4 | Achromatic surfaces and data as color matches telemetry. |
| 3 | User Control and Freedom | 3 | Modal escape works, scrolling narrative good. |
| 4 | Consistency and Standards | 4 | Token separation and mechanical enforcement is world-class. |
| 5 | Error Prevention | 4 | Per-section error boundaries prevent global crashes. |
| 6 | Recognition Rather Than Recall | 4 | Semantic icons with lightness/form (no red/green reliance). |
| 7 | Flexibility and Efficiency | 3 | Skip link and sticky nav present. |
| 8 | Aesthetic and Minimalist Design | 4 | Subtraction of F1 tropes lets data shine. |
| 9 | Error Recovery | 4 | Hiding failed sections degrades gracefully. |
| 10 | Help and Documentation | 3 | Inline ledes serve as sufficient documentation. |
| **Total** | | **37/40** | **[Excellent]** |

#### Anti-Patterns Verdict

**LLM assessment**: This does not read as AI slop. It explicitly rejects common tells—uppercase eyebrows, identical fade-ups, neon "trading terminal" monospace. It has a specific, opinionated POV ("race engineer on the pit wall"). The strict color math required for the WCAG-compliant --team-[name]-txt tokens is a hallmark of meticulous human craft.

**Deterministic scan**: The local detector found 2 warnings.
1. layout-transition in h2h.css: Animating width (a layout property) causes layout thrashing.
2. single-font in index.html: Only Archivo is used.
*Note: The single-font warning is a false positive here, as Archivo's variable axes combined with Chivo Mono establish a committed typographic hierarchy matching the project's DESIGN.md. The layout-transition, however, is a genuine performance concern.*

**Visual overlays**: Skipped. No reliable browser automation tool was available in this environment to inject the overlay (fallback signal).

#### Overall Impression
A precise, resilient, and highly credible portfolio piece. The intersection of data engineering, error boundaries, and WCAG-driven design is exceptional. The biggest remaining opportunity is tightening up a few accessibility and animation-performance edge cases.

#### What's Working
1. **WCAG-Driven Design System:** The OKLCH math for --team-[name]-txt ensures 4.5:1 text contrast while preserving perceptual brand identity—rare and brilliant.
2. **Resilient Architecture:** The offline-first seed injection with per-section 	ry/catch boundaries ensures a robust, fail-safe experience.
3. **Kinetic Typography:** Pushing Archivo to 125% width for display creates a technical racing feel without resorting to cliché sci-fi fonts.

#### Priority Issues
- **[P1] Ticker Accessibility (WCAG 2.2.2)**
  - **Why it matters:** The infinite marquee .ticker-move pauses on hover, but users with vestibular disorders or using keyboards need an explicit mechanism to pause it.
  - **Fix:** Add a <button aria-label="Pause news"> to toggle the animation state.
  - **Suggested command:** /impeccable harden dashboard/index.html

- **[P2] Layout Property Animation**
  - **Why it matters:** 	ransition: width in h2h.css triggers expensive layout recalculations, causing jank on lower-end devices.
  - **Fix:** Refactor the bars to use 	ransform: scaleX() with 	ransform-origin: left instead of width.
  - **Suggested command:** /impeccable optimize dashboard/css/sections/h2h.css

- **[P2] Ticker Screen Reader Duplication**
  - **Why it matters:** Cloning ticker items for the seamless loop in main.js causes screen readers to read the same news twice.
  - **Fix:** Add ria-hidden="true" to the cloned nodes.
  - **Suggested command:** /impeccable harden dashboard/js/main.js

- **[P2] Mobile Menu Focus Trapping**
  - **Why it matters:** When .nav-toggle opens/closes, focus isn't managed properly for keyboard users.
  - **Fix:** Move focus into the menu when opened, and back to the toggle (or the target section) when closed.
  - **Suggested command:** /impeccable harden dashboard/js/main.js

#### Persona Red Flags
**Casey (Accessibility-Dependent User)**: "I love the OKLCH contrast math, but that infinite marquee ticker needs a pause button. Also, my screen reader reads the exact same news headlines twice in a row because of the cloned DOM nodes."

**Alex (Power User & Technical Evaluator)**: "The offline-first seed is great, but I'm checking how you handle Plotly's DOM mutations inside the modals. If you resize the window while the modal is hidden, Plotly tends to squash graphs. I'm testing if your PLOT_WHEN_VISIBLE implementation actually works."

#### Minor Observations
- The native CSS nimation-timeline: view() reveals are incredibly clean and degrade perfectly.
- The .skip link targets #open, which contains ria-hidden="true" elements; it should target <main> directly.

#### Questions to Consider
- By stripping away all generic F1 motifs, have you successfully elevated the data, or accidentally sterilized the visceral, loud emotion of motorsport?
- If the prediction model completely breaks down and is wrong for 6 races in a row, does this still function as a compelling portfolio piece?
