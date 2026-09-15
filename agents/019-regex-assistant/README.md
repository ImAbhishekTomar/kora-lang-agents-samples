# Regex Design Assistant

**Job:** designs a regex and validates seed examples.

**Data source and provenance:** standard input plus in-code synthetic seed strings. Local fixtures are synthetic and contain no secrets. Public APIs are keyless and read-only. The program uses the configured `gpt` model role without reading the key.

**Kora features:** model tool loop, `on tool_call` watcher, every safe regex primitive, typed parameters, and a step/token budget.

## Commands

```bash
kora check agents/019-regex-assistant/main.ko
kora test agents/019-regex-assistant/main.ko
kora run agents/019-regex-assistant/main.ko
```

Use `kora run --durable agents/019-regex-assistant/main.ko` for notes or approval flows.

**Expected output:** A concise labeled analysis grounded in the supplied source. Deterministic tests replace the model using `with mock analyze`.

**Limits:** Educational sample only. It does not execute SQL, merge code, change incidents, or install upgrades. Live HTTP may be rate-limited. Model refusal, budget exhaustion, and provider failure remain explicit outcomes.
