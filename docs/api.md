# API

The API is served from `/api`. The OpenAPI document in `artifacts/shared/api-spec/openapi.yaml` is the contract source of truth.

The health endpoint is available at `GET /api/healthz`. Add product endpoints only after their requirements are defined, then regenerate the clients and schemas with:

```sh
pnpm --filter @workspace/api-spec run codegen
```