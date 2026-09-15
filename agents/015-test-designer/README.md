# Test Case Designer

**Job:** designs happy, edge, failure, and abuse tests from an API spec.

**Data source and provenance:** synthetic data/api_spec.md. Local fixtures are synthetic and contain no secrets. Public APIs are keyless and read-only. The program uses the configured `gpt` model role without reading the key.

**Kora features:** typed lists, tool loop, budget, deterministic mocks.

## Commands

```bash
kora check agents/015-test-designer/main.ko
kora test agents/015-test-designer/main.ko
kora run agents/015-test-designer/main.ko
```

Use `kora run --durable agents/015-test-designer/main.ko` for notes or approval flows.

**Expected output:** A concise labeled analysis grounded in the supplied source. Deterministic tests replace the model using `with mock analyze`.

**Limits:** Educational sample only. It does not execute SQL, merge code, change incidents, or install upgrades. Live HTTP may be rate-limited. Model refusal, budget exhaustion, and provider failure remain explicit outcomes.

