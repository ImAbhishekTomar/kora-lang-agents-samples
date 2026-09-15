# OpenAPI Documentation Auditor

**Job:** finds undocumented errors, vague descriptions, and schema drift.

**Data source and provenance:** synthetic data/openapi.json. Local fixtures are synthetic and contain no secrets. Public APIs are keyless and read-only. The program uses the configured `gpt` model role without reading the key.

**Kora features:** JSON, file module, parallel evaluator.

## Commands

```bash
kora check agents/020-openapi-auditor/main.ko
kora test agents/020-openapi-auditor/main.ko
kora run agents/020-openapi-auditor/main.ko
```

Use `kora run --durable agents/020-openapi-auditor/main.ko` for notes or approval flows.

**Expected output:** A concise labeled analysis grounded in the supplied source. Deterministic tests replace the model using `with mock analyze`.

**Limits:** Educational sample only. It does not execute SQL, merge code, change incidents, or install upgrades. Live HTTP may be rate-limited. Model refusal, budget exhaustion, and provider failure remain explicit outcomes.

