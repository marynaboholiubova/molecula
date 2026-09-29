# Molecula

AI Creative Production Operating System — a connected creative production
platform for AI images, video, film, music, voice, scripts, characters, and
worlds. **Project first, tools second.**

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 — it redirects to `/en`.

## Documentation

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — application structure
  and rendering model.
- [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) — visual identity,
  tokens, typography, motion.
- [`docs/I18N.md`](docs/I18N.md) — internationalization: active locales,
  the 50-language catalog, RTL strategy.
- [`docs/ENGINEERING.md`](docs/ENGINEERING.md) — local development,
  validation commands, environment variables.
- [`CLAUDE.md`](CLAUDE.md) — engineering rules for AI-assisted work on this
  repository.

## Validation

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
```
