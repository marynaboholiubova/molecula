# Engineering

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000 — it redirects to `/en` (the active locale).

## Package manager

**npm only.** `package-lock.json` is the single source of truth for
dependency resolution. Do not introduce `pnpm-lock.yaml`, `yarn.lock`, or
`bun.lockb`.

## Validation commands

| Command                | What it checks                                             |
| ---------------------- | ---------------------------------------------------------- |
| `npm run format:check` | Prettier formatting (incl. Tailwind class order)           |
| `npm run lint`         | ESLint (`eslint-config-next` core-web-vitals + TypeScript) |
| `npm run typecheck`    | `tsc --noEmit`, strict mode                                |
| `npm run test`         | Vitest (jsdom + Testing Library)                           |
| `npm run build`        | Production Next.js build                                   |

`npm run format` applies fixes; `npm run test:watch` runs Vitest in watch
mode. CI (`.github/workflows/ci.yml`) runs all five validation commands, in
that order, on every push/PR to `main`.

## Environment variables

- `.env.example` documents every variable the app can use. It never
  contains real values.
- `.env.local` (untracked, gitignored via the `.env*` pattern) holds real
  local credentials.
- Supabase credentials are validated **lazily**, on first use of a Supabase
  client (`src/lib/env.ts`, called from `src/lib/supabase/client.ts` and
  `server.ts`) — not at module load — so the app builds and runs before
  Supabase credentials exist. A missing/invalid credential throws a clear
  error only when a Supabase client is actually requested.
- Never put a server-only secret behind a `NEXT_PUBLIC_` prefix. Only
  `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` are
  intended to be public today.

## Contribution rules

Follow the engineering rules in the root `CLAUDE.md` — in short: production
code only, no fake backends/auth/data, no speculative dependencies or
folders, strict TypeScript with no suppressed errors, Server Components by
default, and every non-trivial change ends with the full validation suite
green before it's reported done.
