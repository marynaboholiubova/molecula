@AGENTS.md

# MOLECULA

AI Creative Production Operating System.

Core media: Image, Video, Film, Music, Voice, Script, Characters,
Storyboard, 3D, Auto Director, Continuity AI, Auto Editing, Brand,
Campaigns.

Architecture philosophy: **PROJECT FIRST — TOOLS SECOND.** Molecula does not
generate isolated assets; it produces complete, continuous creative
projects that carry characters, direction, and continuity across every
stage and medium. See `docs/ARCHITECTURE.md` for the current structure and
what is intentionally not built yet.

## Engineering rules

1. Production-grade code only.
2. No fake APIs.
3. No fake auth.
4. No fake backend.
5. No mock production data.
6. No temporary architecture.
7. No placeholder business logic.
8. No abandoned TODO implementations.
9. No secrets in repository.
10. Never expose server-only credentials (no server secrets in
    `NEXT_PUBLIC_*`).
11. Never disable Supabase RLS.
12. Never apply production migrations without explicit approval.
13. Prefer Server Components.
14. Keep Client Components small and purposeful — isolate the boundary,
    don't convert whole trees to `"use client"`.
15. External input must be validated (Zod at system boundaries).
16. Keep TypeScript strict.
17. Do not silence TypeScript or ESLint errors (`@ts-ignore`, disabled
    rules) — fix the root cause.
18. Do not add dependencies speculatively.
19. Do not build future modules before their task (`features/image`,
    `features/video`, etc. get scaffolded only when real work starts).
20. Reuse design-system primitives (`src/components/ui`); don't hand-roll
    one-off variants of things that already exist.
21. Never hardcode user-facing UI strings outside the i18n architecture —
    all copy goes through `next-intl` (`src/messages/*.json`).
22. Preserve accessibility (landmarks, heading order, focus states,
    contrast, `prefers-reduced-motion`).
23. Preserve mobile responsiveness.
24. Do not commit or push unless explicitly requested.
25. Every engineering task ends with full validation: `format:check`,
    `lint`, `typecheck`, `test`, `build` — see `docs/ENGINEERING.md`.

## Reference docs

- `docs/ARCHITECTURE.md` — structure, rendering model, Supabase/i18n
  boundaries, what's FUTURE vs. built.
- `docs/DESIGN_SYSTEM.md` — visual principles, color/typography tokens,
  motion, accessibility.
- `docs/I18N.md` — active locales vs. the 50-language catalog, UI language
  vs. generated-content language, RTL strategy.
- `docs/ENGINEERING.md` — local dev, validation commands, env handling.

## Turbo workflow

- Inspect the current state before changing anything.
- Plan internally; implement one coherent block at a time.
- Validate (`npm run format:check && npm run lint && npm run typecheck &&
npm run test && npm run build`).
- Fix root causes, not symptoms — never suppress an error to make
  validation pass.
- Report what was built, what was deliberately deferred, and any blocker
  that genuinely needs user credentials or a decision.

Do not stop halfway through a coherent implementation merely to ask for
confirmation unless a destructive action or genuinely user-owned secret is
involved.
