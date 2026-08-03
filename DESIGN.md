# Design

The visual system for the F1 2026 dashboard. Every value here has a token in
`dashboard/css/tokens.css`; that file is the only place raw values may appear.

## Theme

**Outrun.** Not dark-because-dashboards — dark because of the scene. A synthetic
dimension rendered on a CRT at 3am: a sun setting over an infinite wireframe grid, neon
tubes for borders, a terminal for an interface. The room is a bedroom in 1987 running
software from 2088.

This replaces an achromatic pit-wall system. That one was defensible and quiet; it also
read, honestly, as one more dark analytics dashboard, which PRODUCT.md names as an
anti-reference. The register here is **brand** — design *is* the product — and in that
register safe is invisible.

## Color

### Strategy

**Committed, with a hard split between chrome and data.**

This is the load-bearing rule of the system, and the thing that lets a maximalist palette
sit on top of real analysis without corrupting it:

- **Neon is chrome.** Magenta, cyan and orange carry frame, rule, glow, heading, focus,
  hover — structure. A magenta line is a line. A cyan heading is a heading.
- **Team livery is data.** The moment a colour means *Mercedes*, it comes from the livery
  block and nothing else. Eleven liveries have to read true and they are not colours we
  own.

The previous system got this by making the base chroma 0. This one gets it by role
separation instead, which survives a saturated base. The test is unchanged: **if something
is coloured like a team, it means that team.**

### The void

| Token | Value | Use |
|---|---|---|
| `--void` / `--surface-0` | `#090014` | Page background — near-black, purple-biased |
| `--surface-1` | `#12082b` | Recessed fills, bar tracks |
| `--surface-2` | `#1a103c` | Panels, raised elements |
| `--surface-3` | `#2D1B4E` | Borders, dividers, hover fill |
| `--panel` | `rgba(26,16,60,0.8)` | Glass panels — kept translucent so `backdrop-filter` has something to do |

### Ink

Chrome silver, not white.

| Token | Value | Min. contrast |
|---|---|---|
| `--ink-0` | `#F2F2F5` | Primary text |
| `--ink-1` | `#E0E0E0` | Body — the default |
| `--ink-2` | `#A9A2C4` | Secondary. Must clear 4.5:1 on `--surface-3` |
| `--ink-3` | `#7C74A0` | Non-text only: rules, disabled marks, column labels at `--text-xs` |

### Neon

| Token | Value | Role |
|---|---|---|
| `--neon-magenta` | `#FF00FF` | Primary structure: rules, borders, the grid |
| `--neon-cyan` | `#00FFFF` | Interactive: focus, hover, links, headings, live status |
| `--neon-orange` | `#FF9900` | Sparing: the sun, fastest-lap marks |

**Pure neon fails as small text.** `#FF00FF` is ≈3.7:1 on the void — fine for a 2px border
or a display heading at the 3:1 non-text threshold, and not fine for a label. Every neon
therefore has a `-txt` variant lifted until it clears 4.5:1, and `check-tokens.mjs` enforces
that on the same code path as the team variants.

### Gradients

| Token | Use |
|---|---|
| `--grad-sunset` | Orange → magenta → cyan. **Section titles and the champion's surname only.** |
| `--grad-sun` | The atmospheric orb |
| `--grad-rule` | Magenta → cyan, for accent rules and section edges |

Gradient text is normally a ban, and it is deliberate here: it is the signature of the
aesthetic, so it is rationed to exactly two roles. Used on a third thing it stops being a
signature and becomes wallpaper. Every gradient-filled element carries a **solid colour
fallback** underneath, so a browser without `background-clip: text` gets cyan rather than
invisible text.

### Semantic states — form, not hue

Unchanged from the previous system, and for the same reason: the liveries occupy most of
the hue wheel, and red/green is the most common colour-vision failure.

| State | Encoding |
|---|---|
| Hit / correct | `✓` + cyan + glow |
| Miss / wrong | `✗` + `--ink-3`, no glow |
| Gain / loss | `▲` / `▼` + lightness |
| Live | Pulsing cyan dot |
| Committed seed | Static magenta dot |

### Tyre compounds

Real F1 colour codes, unchanged. Every viewer decodes red/yellow/white/green/blue without
a legend, and re-encoding that as neon would throw away knowledge the audience already
has. Compounds appear only in the stint chart and the tyre-life panel, where nothing is
coloured by team. Colour is never the only channel — each carries its letter or name.

## Typography

| Token | Family | Role |
|---|---|---|
| `--font-display` | **Orbitron** 700 / 900 | Headings, the name, figures |
| `--font-body` / `--font-mono` | **Share Tech Mono** 400 | Everything else |

They pair on a real contrast axis: Orbitron is wide, geometric and closed; Share Tech Mono
is narrow, fixed-pitch and open. Not two sans-serifs pretending to differ.

Monospace everywhere would normally be mono-as-costume. It is not costume here for two
reasons: F1 timing is genuinely tabular, and the interface's actual metaphor is a terminal
— the `>` prompts, the window chrome, the `.dat` filenames are the system, not decoration.

**Display type is tracked OUT** (`--tracking-display`, `--tracking-ui`, `--tracking-wide`),
the opposite of the grotesque it replaced. Orbitron's counters close up if you track it in.
Headings are uppercase.

### Scale

| Token | Size |
|---|---|
| `--text-hero` | `clamp(2.75rem, 7.5vw, 5.75rem)` — under the 6rem shouting ceiling |
| `--text-display` | `clamp(2rem, 4.2vw, 3.5rem)` |
| `--text-xl` → `--text-xs` | 1.75 / 1.3125 / 1 / 0.875 / 0.75rem |

Body measure caps at 68ch. `text-wrap: balance` on h1–h3, `pretty` on prose.

## Radius & borders

**Zero radius.** `--radius`, `--radius-sm` and `--radius-lg` are all `0` — kept as names so
existing rules resolve, but a rounded corner is the single fastest way to make this read as
a generic dark dashboard again. `--radius-round` exists only for dots.

Borders are `--border` (2px) as standard, `--border-heavy` (4px) for emphasis, `--hairline`
for table rules. Border colour is `--surface-3` at rest and neon when interactive.

## The atmosphere

Three fixed layers, all `pointer-events: none` and `aria-hidden` — weather, not content:

1. **The sun** — a `--sun-size` orb at `--sun-blur` blur. At that radius it is not a shape,
   it is a light source.
2. **The grid** — a wireframe floor at `perspective(--grid-perspective) rotateX(62deg)`,
   masked to nothing at the top so it emerges from the dark instead of being cut off.
3. **The CRT** — scanlines plus RGB chromatic aberration at 6%. Above 6% it stops reading
   as a screen artefact and starts reading as a broken stylesheet.

## Components

**The terminal window replaces the card.** `.win` / `.win-bar` / `.win-body` /
`.win-status`: hard border, title bar with three chrome dots, a `.dat`-style filename, and
an optional status line. A card is a rounded rectangle with a shadow and says nothing; this
says *you are looking at a readout*.

**Skew comes in pairs.** `--skew` leans the container, `--skew-counter` un-leans the
content. The lean is always the container's — a leaning number is unreadable.

## Motion

Motion carries meaning or it does not ship. `--ease-digital` (linear) is the house curve for
state changes: this machine responds like software from 1988, immediate and slightly
unnatural. The exponential curves stay for anything that travels a long way.

- **Reveals are typed, never uniform.** `[data-reveal="title|text|row|card"]`, each fitted
  to what it reveals. One identical fade-up on every section is the AI tell PRODUCT.md
  names, and this page shipped it twenty times before it was replaced.
- **The start procedure** is the one orchestrated moment — the Cold Open, on load, gated on
  `[data-ready]` so it does not play to an empty room before the section renders.
- **Content is visible by default.** Reveals enhance an already-painted page. This project
  has shipped blank sections twice from breaking that rule.
- Reveals ride `animation-timeline: view()`, so lists cascade from their own geometry. **A
  reveal inside a scroll container cannot use it** — `view()` binds to the nearest scroll
  container, where the element is permanently "in view" and the animation pins at progress
  1. `motion.js` detects those and drives them by observer instead.

### Reduced motion

A designed path. The ticker stops, the caret stops, the sun and grid hold still, every
reveal resolves to its final state, and count-ups jump to their value. The scroll-progress
bar **keeps working** — it is a position indicator, not an animation, and the blanket
`animation-duration: 1ms` override would otherwise pin it to full.

## Charts

Plotly, styled from tokens via `resolveToken`. **Plotly cannot parse CSS colour functions**
— not `var()`, not `oklch()` — and does not error, it silently substitutes its own palette.
Series colour is team colour, always. Grid lines `--surface-3`, axis text `--ink-2`, no
chart titles inside the plot.

`THREE.Color` has the same limitation; `lib/color.js` is the single conversion point for
both.

## Verification

`scripts/check-tokens.mjs` enforces this document mechanically:

1. No raw hex or px outside `tokens.css` — including glow radii, the sun, and the grid
   perspective, which are design values and belong in the token file.
2. Every ink/surface pairing clears its WCAG threshold.
3. Every `-txt` variant — team **and neon** — clears 4.5:1 on `--surface-1`.

A design standard that is only a document rots. This one fails the build.
