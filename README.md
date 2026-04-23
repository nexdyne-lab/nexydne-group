# NexDyne Consulting Group — Website

Marketing site for NexDyne Consulting Group. Built as a full-stack TypeScript
app: a Vite + React client, an Express/tRPC server, and Drizzle ORM against
MySQL. Deployed to Netlify.

Brand: **Governed Radiance** — a charcoal-and-off-white system with a single
signal accent (orange-red `#E04C2C`) for CTAs and a supporting HIG palette
(purple + amber) for the Human · Intelligence · Governance framework.
Typography is Instrument Sans throughout.

## Stack

- **Client:** React 18, TypeScript, Vite 7, Tailwind CSS 4, Radix UI,
  Framer Motion, Wouter (routing), TanStack Query
- **Server:** Express, tRPC, Drizzle ORM, MySQL (mysql2)
- **Tooling:** pnpm, tsx, vitest, prettier, esbuild
- **Deploy:** Netlify (auto-deploys from `main`)

## Getting started

```bash
pnpm install
pnpm dev        # starts server in watch mode on NODE_ENV=development
pnpm check      # typecheck (tsc --noEmit)
pnpm test       # run vitest
pnpm build      # build client (vite) + server (esbuild) -> dist/
pnpm start      # run production bundle
pnpm db:push    # drizzle-kit generate && migrate
```

See `docs/LOCAL_SETUP_README.md` for full local-setup notes.

## Repo layout

```
client/            React app (entry: client/src/main.tsx)
server/            Express + tRPC (entry: server/_core/index.ts)
shared/            Types and schema shared between client and server
drizzle/           Drizzle migrations
docs/              Active documentation
docs/archive/      Historical design notes, blueprints, blog drafts, case studies
scripts/           Build helpers (e.g. whitepaper generation)
scripts/archive/   One-off migration scripts kept for reference
patches/           pnpm dependency patches
reference-images/  Design reference imagery
```

## Design system

Brand tokens live in `client/src/index.css` under `@theme inline`. They follow
the NexDyne Brand Guideline v2 "Governed Radiance" system:

- **Foundation (70-80%)** — `--color-off-white`, `--color-white`,
  `--color-charcoal`, `--color-grey`
- **Signal (10-15%)** — `--color-signal` (orange-red), used only for primary
  CTAs, key callouts, and accent highlights
- **Supporting (5-10%)** — `--color-purple` (HIG "H"), `--color-amber`
  (HIG "I"); used contextually in data visualisation and framework diagrams

Legacy aliases (`--color-base`, `--color-primary`, `--color-secondary`,
`--color-text-light`, `--color-subtle`, etc.) are preserved so existing
components continue to resolve. Prefer the tier-named tokens
(`--color-signal`, `--color-charcoal`, ...) in new code.

# nexydne-group
