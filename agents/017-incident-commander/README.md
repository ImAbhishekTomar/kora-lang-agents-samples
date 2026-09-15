# Incident Commander Copilot

**Job:** builds an incident timeline, finds missing checks, and requests approval.

**Data source and provenance:** standard input. Local fixtures are synthetic and contain no secrets. Public APIs are keyless and read-only. The program uses the configured `gpt` model role without reading the key.

**Kora features:** durable notes, ask_human, tools, custom token handler, context.

## Commands

```bash
kora check agents/017-incident-commander/main.ko
kora test agents/017-incident-commander/main.ko
kora run agents/017-incident-commander/main.ko
```

Use `kora run --durable agents/017-incident-commander/main.ko` for notes or approval flows.

**Expected output:** A concise labeled analysis grounded in the supplied source. Deterministic tests replace the model using `with mock analyze`.

**Limits:** Educational sample only. It does not execute SQL, merge code, change incidents, or install upgrades. Live HTTP may be rate-limited. Model refusal, budget exhaustion, and provider failure remain explicit outcomes.

