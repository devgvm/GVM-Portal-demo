# GVM Portal

Infrastructure scaffold only. Product requirements and feature behavior have not been defined yet.

## Run & Operate

- `pnpm --filter @workspace/backend run dev` — run the NestJS API server
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `DATABASE_URL` is required only when database operations are introduced.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: NestJS + TypeScript
- Web: React + Vite
- Mobile: Expo
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (ESM bundle)

## Where things live

- `artifacts/backend` — NestJS API service and backend feature directories
- `artifacts/frontend/web` — React/Vite web client and feature directories
- `artifacts/frontend/common` — plain shared route, module, and task source for web and mobile
- `artifacts/frontend/mobile` — Expo client and feature directories
- `common` — shared constants, types, and validation safe for web and mobile
- `artifacts/shared/api-spec` — OpenAPI contract source
- `artifacts/shared/api-client-react`, `artifacts/shared/api-zod` — generated API clients and schemas
- `artifacts/backend/packages/db` — Drizzle schema and database package
- `docs` — architecture, module, API, database, and auth/permission notes

## Architecture decisions

- Feature folders are placeholders until product requirements are supplied.
- The backend, database package, and shared API packages live under `artifacts/`.

## Product

User-facing capabilities will be defined when product requirements are supplied.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
