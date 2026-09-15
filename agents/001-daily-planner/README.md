# Daily Plan Builder

**Job:** turns tasks, constraints, and energy into a time-blocked plan.

**Data source and provenance:** standard input. All local data is synthetic and contains no real personal data or secrets. The program reads the configured `gpt` model role; it never reads an API key itself.

**Kora features:** environment configuration via `env.has`/`env.get`, declared types, typed analyze, exhaustive outcomes, and an agent budget.

## Commands

```bash
kora check agents/001-daily-planner/main.ko
kora test agents/001-daily-planner/main.ko
kora run agents/001-daily-planner/main.ko
```

For durable-only effects, run `kora run --durable agents/001-daily-planner/main.ko`. For declassification examples, inspect releases with `kora audit agents/001-daily-planner/main.ko`.

**Expected output:** A concise, labeled result grounded in the input. Tests use `with mock analyze`, so they are deterministic and spend no model tokens.

**Limits:** This is a small demonstration, not professional advice. Live quality depends on the configured model and source availability. Synthetic fixtures are intentionally incomplete; uncertain, exhausted, and provider-failure outcomes are reported as values.
