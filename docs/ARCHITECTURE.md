# Architecture

MOLECULA is an AI Creative Production Operating System. This document
describes the application architecture as it exists today, and marks
concepts that are intentionally **FUTURE** — not yet implemented.

## Application structure

```
src/
  app/
    [locale]/          # Locale-prefixed App Router segment (root layout lives here)
      layout.tsx        # <html>/<body>, fonts, ThemeProvider, NextIntlClientProvider
      page.tsx           # Marketing home page
    favicon.ico
  components/
    ui/                 # Design-system primitives (shadcn/ui foundation, Molecula tokens)
    shared/              # Cross-cutting client boundaries (e.g. ThemeProvider)
    marketing/            # Marketing-shell sections (header, hero, footer, ...)
  config/
    languages.ts          # Planned 50-language catalog + active-locale derivation
  i18n/
    routing.ts             # next-intl routing config (active locales, prefix mode)
    navigation.ts            # Locale-aware Link/redirect/useRouter/usePathname
    request.ts                 # next-intl request config (loads messages per locale)
    locale-direction.ts          # ltr/rtl resolution from the language catalog
  lib/
    utils.ts                      # cn() class merging utility
    env.ts                         # Lazy, validated Supabase env access
    supabase/
      client.ts                     # Browser Supabase client
      server.ts                      # Server Supabase client (cookie-bound)
  messages/
    en.json                          # Active English UI strings
  styles/
    globals.css                       # Design tokens + Tailwind v4 entry point
proxy.ts                                # next-intl locale routing (replaces middleware.ts)
```

## Rendering model

- **Server Components by default.** Every component in `app/`, and every
  component in `components/marketing`, is a Server Component unless it
  starts with `"use client"`.
- **Client Components are isolated and small.** Today there are exactly two:
  `ThemeProvider` (next-themes needs browser storage/media queries) and
  `HeroReveal` (a small motion wrapper for the hero entrance animation).
  Neither converts its parent into a Client Component — they're leaf
  boundaries.

## Internationalization boundary

Routing is locale-prefixed (`/en`, later `/uk`, `/nl`, ...) via
`next-intl`, wired through `src/proxy.ts` (Next.js 16 renamed
`middleware.ts` to `proxy.ts`; this project follows that convention).
`app/[locale]/layout.tsx` is the root layout — there is no
non-localized `app/layout.tsx`; requests to `/` are redirected to the
default locale by the proxy. See `docs/I18N.md` for the full picture,
including the language catalog and UI-vs-content-language distinction.

## Supabase boundary

`src/lib/supabase/client.ts` and `server.ts` are the only sanctioned entry
points for constructing a Supabase client. Both read credentials lazily via
`src/lib/env.ts`, which validates `NEXT_PUBLIC_SUPABASE_URL` and
`NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` with Zod **on first use**, not at
module load — this is what lets `npm run build` succeed before real
credentials exist. No auth screens, tables, or migrations exist yet; that is
deliberate (see "Not yet implemented" below).

## Design-system boundary

`components/ui` holds the shadcn/ui-style primitive layer (currently just
`Button`). It consumes semantic CSS custom properties defined in
`src/styles/globals.css` (`--color-background`, `--color-primary`, etc.) —
never raw hex values — so the whole visual identity can be retuned from one
file. See `docs/DESIGN_SYSTEM.md`.

## FUTURE — not yet implemented

These are named here so future work has a place to land, not because any
code exists for them yet:

- **Authentication.** Supabase Auth screens, session handling, protected
  routes. The SSR client boundary is ready; nothing calls it yet.
- **AI Gateway / Model Router.** A future server-side boundary that will
  route requests to image/video/music/voice/script AI providers. No
  provider SDKs are installed (see engineering rules in root `CLAUDE.md`).
- **Job queue.** Long-running generation jobs (video, music, 3D render)
  will need a queue/worker architecture. Not designed yet.
- **Feature modules** (`features/image`, `features/video`, `features/music`,
  `features/movie`, `features/voice`, `features/3d`, ...). Each will be its
  own implementation task, scaffolded only when real work begins on it.
- **Dashboard / Studio UI.** Everything past the marketing shell.

## Project-first architecture

Molecula's product philosophy — **project first, tools second** — means the
eventual data model centers on a _Project_ that owns script, characters,
scenes, and generated assets across every medium, rather than each medium
having an isolated, disconnected generator. No such data model exists yet;
this section exists so future schema/API design starts from the right
mental model instead of reinventing it per feature.
