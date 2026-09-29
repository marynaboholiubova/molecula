# Design System

Molecula's visual identity is original — not shadcn/ui's default look, not a
Canva/Freepik/Midjourney pastiche, not generic AI-SaaS or crypto-dashboard
aesthetics. shadcn/ui supplies primitive _mechanics_ (accessible structure,
variant patterns); Molecula tokens supply the _look_.

## Visual principles

The product must read as cinematic, luxury, editorial, and intelligent.
Luxury comes from **restraint**, not decoration:

- Spacing and negative space carry more of the "premium" feeling than any
  single color choice.
- Typography does the heavy lifting — one refined editorial serif for
  display moments, one clean contemporary sans for interface text.
- Color is used with intent: champagne gold is an accent used _sparingly_
  (a rule, small highlights), never a background or a dominant hue.
- Motion is restrained and purposeful — entrance reveals, not decoration.

Avoid: neon glow on every surface, glassmorphism as a default, gradients
that dominate a layout, purple/gold applied indiscriminately.

## Color

Defined as semantic OKLCH custom properties in `src/styles/globals.css`,
consumed through Tailwind v4's `@theme inline` mapping (`bg-background`,
`text-foreground`, `border-border`, etc.) — never raw hex codes in
component code.

| Token                                            | Purpose                                            |
| ------------------------------------------------ | -------------------------------------------------- |
| `background` / `foreground`                      | Page base and default text                         |
| `surface` / `surface-raised` / `surface-overlay` | Layered panel depth                                |
| `muted` / `muted-foreground`                     | De-emphasized fills and text                       |
| `border` / `border-strong`                       | Hairlines and stronger dividers                    |
| `primary` / `primary-foreground`                 | The dominant CTA color (ivory-on-obsidian in dark) |
| `accent` / `accent-foreground`                   | Champagne gold — sparing use only                  |
| `success` / `warning` / `danger`                 | Status colors                                      |
| `focus-ring`                                     | Muted-violet keyboard focus ring                   |

Dark is the **default and first-class** theme (`.dark` on `<html>`, set by
`next-themes` with `defaultTheme="dark"` and `enableSystem={false}` in
`src/app/[locale]/layout.tsx`). Light is a fully defined secondary theme in
`:root`, ready for a future theme switcher — no switcher UI exists yet since
nothing in this task requires one.

## Typography

Loaded via `next/font/google` in `app/[locale]/layout.tsx`, exposed as CSS
variables and mapped in `@theme inline`:

- **Display** (`font-display`): Cormorant Garamond — editorial serif for
  headlines (`h1`/`h2`) and the brand wordmark.
- **Interface** (`font-sans`, the default `font-family` on `body`): Geist —
  clean, contemporary, used for everything else.

## Spacing, radius, shadow

Radius is derived from a single `--radius` custom property
(`--radius-sm/md/lg/xl` in `@theme inline`) — one dial, not a scattered set
of magic numbers. Spacing uses Tailwind's default scale; no custom spacing
scale has been introduced (unnecessary at this stage). No custom shadow
tokens exist yet — current surfaces are separated with hairline borders and
subtle background-layer contrast rather than drop shadows; shadow tokens
will be added if/when a component genuinely needs elevation.

## Motion

Powered by the `motion` package (`motion/react`), used only where it
creates a **meaningful, permanent interaction** — not decoration:

- `HeroReveal` (`src/components/marketing/hero-reveal.tsx`): a small,
  isolated Client Component that fades/lifts hero content into place on
  mount, and no-ops instantly when `useReducedMotion()` reports the user
  prefers reduced motion.

`prefers-reduced-motion: reduce` is also handled globally in
`globals.css`, collapsing all CSS animations/transitions to near-zero
duration as a baseline safety net beyond the JS-level check above.

## Accessibility

- Semantic landmarks: `header`, `nav`, `main`, `footer`.
- One `h1` per page, ordered heading hierarchy down through sections.
- Visible focus via the `focus-ring` token on all interactive primitives.
- Color pairings chosen for sufficient contrast in both themes.
- No `aria-*` attributes added where native semantics already convey
  meaning (e.g., no redundant `role="button"` on a `<button>`).
