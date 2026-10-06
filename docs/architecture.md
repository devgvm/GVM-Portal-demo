# Architecture

GVM Portal is scaffolded as a pnpm workspace with a NestJS API, a React/Vite web client, an Expo mobile client, and a shared cross-platform package.

The API contract and generated client/schema packages live under `artifacts/shared/`. The database package lives under `artifacts/backend/packages/db`.

Product requirements and domain behavior have not been defined yet.