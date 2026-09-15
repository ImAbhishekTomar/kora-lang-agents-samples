# Patch Review Agent

**Job:** reviews a patch for correctness, security, tests, and maintenance risks.

**Data source and provenance:** synthetic data/change.diff. Local fixtures are synthetic and contain no secrets. Public APIs are keyless and read-only. The program uses the configured `gpt` model role without reading the key.

**Kora features:** nested schema, pattern metadata, budget, all outcomes.

## Commands

```bash
kora check agents/014-code-review/main.ko
kora test agents/014-code-review/main.ko
kora run agents/014-code-review/main.ko
```

Use `kora run --durable agents/014-code-review/main.ko` for notes or approval flows.

**Expected output:** A concise labeled analysis grounded in the supplied source. Deterministic tests replace the model using `with mock analyze`.

**Limits:** Educational sample only. It does not execute SQL, merge code, change incidents, or install upgrades. Live HTTP may be rate-limited. Model refusal, budget exhaustion, and provider failure remain explicit outcomes.

