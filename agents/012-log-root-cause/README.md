# Log Root-Cause Investigator

**Job:** correlates logs with deployment facts and proposes validation checks.

**Data source and provenance:** synthetic data/app.log and data/deploy.json. Local fixtures are synthetic and contain no secrets. Public APIs are keyless and read-only. The program uses the configured `gpt` model role without reading the key.

**Kora features:** filesystem, regex, tools, context policy, explicit failures.

## Commands

```bash
kora check agents/012-log-root-cause/main.ko
kora test agents/012-log-root-cause/main.ko
kora run agents/012-log-root-cause/main.ko
```

Use `kora run --durable agents/012-log-root-cause/main.ko` for notes or approval flows.

**Expected output:** A concise labeled analysis grounded in the supplied source. Deterministic tests replace the model using `with mock analyze`.

**Limits:** Educational sample only. It does not execute SQL, merge code, change incidents, or install upgrades. Live HTTP may be rate-limited. Model refusal, budget exhaustion, and provider failure remain explicit outcomes.

