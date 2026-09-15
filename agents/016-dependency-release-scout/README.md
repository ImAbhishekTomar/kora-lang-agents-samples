# Dependency Release Scout

**Job:** assesses GitHub releases for upgrade risk.

**Data source and provenance:** keyless public GitHub Releases API. Local fixtures are synthetic and contain no secrets. Public APIs are keyless and read-only. The program uses the configured `gpt` model role without reading the key.

**Kora features:** HTTP, JSON, URL constants, parallelism, time budget, partial failures.

## Commands

```bash
kora check agents/016-dependency-release-scout/main.ko
kora test agents/016-dependency-release-scout/main.ko
kora run agents/016-dependency-release-scout/main.ko
```

Use `kora run --durable agents/016-dependency-release-scout/main.ko` for notes or approval flows.

**Expected output:** A concise labeled analysis grounded in the supplied source. Deterministic tests replace the model using `with mock analyze`.

**Limits:** Educational sample only. It does not execute SQL, merge code, change incidents, or install upgrades. Live HTTP may be rate-limited. Model refusal, budget exhaustion, and provider failure remain explicit outcomes.

