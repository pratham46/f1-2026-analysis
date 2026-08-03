# Product

## Register

brand

## Users

Someone who has been sent a link or shown a 60–90 second video, on a laptop, deciding in
under a minute whether the person who made this is worth a longer conversation. They are
skimming. They have seen a lot of portfolio dashboards.

Three overlapping readers, in priority order:

1. **People evaluating capability** — hiring managers, prospective collaborators, clients.
   They are not F1 fans. The interface has to be legible and impressive without any
   motorsport knowledge.
2. **Designers** — will judge craft harshly and have seen every dark-mode analytics
   dashboard. Distinctiveness is the only currency that works on them.
3. **F1 people** — will not care about the interface until the data is right, then will
   notice every detail that is right. They are the ones who reward the depth.

The job to be done: *form a fast, high, and accurate impression of what this person can
do.* Nobody is here to look up a race result.

## Product Purpose

A season-long analysis of the 2026 Formula 1 championship — live data, a prediction model,
and its honest track record — presented as a single scrolling piece.

It exists to demonstrate four things simultaneously, which is the whole point: interface
design, data analysis, end-to-end engineering, and genuine knowledge of the sport. Any one
of those alone is a common portfolio piece. The combination is the argument.

Success: a viewer who reaches the end knows the 2026 season better than when they started,
and cannot tell which of the four skills is the weakest.

## Brand Personality

**Precise. Kinetic. Candid.**

Voice is a race engineer on the pit wall, not a broadcaster. States the number, states the
confidence, does not oversell. Never breathless, never cute. Where the model was wrong, it
says so first.

Emotionally: the feeling of a race weekend's tension — something in motion that is being
measured very carefully.

## Anti-references

- **F1 as costume.** Checkered flags, chrome and metallic gradients, carbon-fibre texture
  as decoration, speedometer gauges used for non-speed quantities, tachometer needles,
  racing stripes. This is what "F1 website" generates by default and it reads as a theme,
  not a point of view.
- **The template analytics dashboard.** Grid of equal cards, each with a big number, a
  small grey label, and a sparkline. Applies to any dataset; belongs to none.
- **The trading terminal.** Neon-on-black, dense green/red, monospace everywhere as a
  costume for "technical".
- **formula1.com itself.** That is a product — navigation, tables, utility. This is not a
  place people come back to daily, and it should not be shaped like one.
- **The AI landing page.** Small uppercase tracked eyebrow above every section, numbered
  section markers, gradient text, identical card grid, one uniform fade-up on every
  section.

## Design Principles

1. **Show the misses.** The model's wrong calls are displayed as prominently as its right
   ones. A prediction you cannot check is marketing; credibility comes from being
   falsifiable in public.
2. **Every number is load-bearing.** Nothing on the page is filler or decoration shaped
   like data. If a value moves, it is because real data moved. No lorem statistics.
3. **F1 literacy, not F1 costume.** Earn the sport through correctness a fan would
   notice — tyre compounds, stint lengths, the 2026 regulation reset, the right team
   colours — not through flags and speed lines.
4. **One idea per fold.** The scroll is paced, not packed. A viewer skimming at speed
   should be able to name what each screen was about.
5. **Show the machine, not just the dial.** The pipeline, the model, and its accuracy are
   part of the story. Hiding the engineering behind a pretty surface throws away half the
   argument.

## Accessibility & Inclusion

- **WCAG 2.2 AA** as the floor, verified rather than assumed. Body text ≥4.5:1, large text
  ≥3:1, against the actual background it sits on.
- **Team colours are a real hazard here.** On the dark base, the *dark* liveries fail as
  text: Ferrari `#E8002D`, Red Bull `#3671C6`, with Aston Martin `#358C75` borderline.
  Each needs a paired lightened variant for text use; the raw livery colour is for fills
  and marks only, where the 3:1 non-text threshold applies instead.
- **Colour is never the only channel.** Team identity, hit/miss, and gain/loss must each
  carry a second cue — label, shape, position, or icon. Roughly 1 in 12 men have a colour
  vision deficiency, and the red/green pairing is the most common failure.
- **`prefers-reduced-motion` is a first-class path, not a fallback.** The page is a scroll
  narrative; with motion off it must still read as a complete, sensible document. Both 3D
  features degrade to static imagery.
- **Keyboard reachable throughout**, including both modals, with visible focus states.
- No audio, no autoplay, no motion that could trigger vestibular discomfort — no parallax
  on large surfaces, no continuous background animation outside the viewport.
