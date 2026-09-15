# Software Issue Triage Agent

**Job:** classifies software issues by severity, component, reproduction, and next action.

**Data source and provenance:** synthetic data/issues.json. Local fixtures are synthetic and contain no secrets. Public APIs are keyless and read-only. The program uses the configured `gpt` model role without reading the key.

**Kora features:** nested types, parallel workers, guards, shared budget.

## Commands

```bash
kora check agents/011-issue-triage/main.ko
kora test agents/011-issue-triage/main.ko
kora run agents/011-issue-triage/main.ko
```

Use `kora run --durable agents/011-issue-triage/main.ko` for notes or approval flows.

**Expected output:** A concise labeled analysis grounded in the supplied source. Deterministic tests replace the model using `with mock analyze`.

**Limits:** Educational sample only. It does not execute SQL, merge code, change incidents, or install upgrades. Live HTTP may be rate-limited. Model refusal, budget exhaustion, and provider failure remain explicit outcomes.

