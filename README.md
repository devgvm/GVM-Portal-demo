<<<<<<< HEAD
# GVM Portal

Infrastructure scaffold for the future GVM Portal application.

## Workspace

- `artifacts/backend` — NestJS API service, currently with the health endpoint only.
- `artifacts/frontend/web` — React and Vite web client scaffold.
- `artifacts/frontend/common` — shared route, module, and task source for web and mobile.
- `artifacts/frontend/mobile` — Expo mobile client scaffold.
- `common` — cross-platform-safe shared package.
- `artifacts/shared/` — OpenAPI contract and generated client/schema packages.
- `artifacts/backend/packages/db` — Drizzle database package.
- `docs/` — architecture and future module guidance.

Feature folders are intentionally empty until requirements are provided.

## Common commands

- `pnpm run typecheck` — typecheck workspace packages and apps.
- `pnpm --filter @workspace/backend run dev` — run the API service.
- `pnpm --filter @workspace/api-spec run codegen` — regenerate clients and schemas from OpenAPI.
=======
# GVM-Portal-demo
>>>>>>> ddeedb9990ad1112f32e381898e29a2165f3d42e
