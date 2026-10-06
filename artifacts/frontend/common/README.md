# Shared Frontend Source

This is a plain source directory for code used by both the web and mobile apps; it is not a pnpm workspace package.

- `routes/` — shared route identifiers and metadata. Keep platform-specific screens in each app.
- `modules/` — shared feature logic and platform-neutral UI-independent helpers.
- `tasks/` — shared task definitions and task-flow logic.

When shared source is added, include it in the relevant app's TypeScript and bundler configuration as needed. Keep platform-specific UI in `artifacts/frontend/web` or `artifacts/frontend/mobile`.