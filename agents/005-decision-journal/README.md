# Decision Journal Coach

**Job:** challenges a decision, records assumptions, and asks for a final choice.

**Data source and provenance:** standard input; synthetic data/seed.txt is an optional prompt. All local data is synthetic and contains no real personal data or secrets. The program reads the configured `gpt` model role; it never reads an API key itself.

**Kora features:** ask_human, notes, durable effects, typed results.

## Commands

```bash
kora check agents/005-decision-journal/main.ko
kora test agents/005-decision-journal/main.ko
kora run agents/005-decision-journal/main.ko
```

For durable-only effects, run `kora run --durable agents/005-decision-journal/main.ko`. For declassification examples, inspect releases with `kora audit agents/005-decision-journal/main.ko`.

**Expected output:** A concise, labeled result grounded in the input. Tests use `with mock analyze`, so they are deterministic and spend no model tokens.

**Limits:** This is a small demonstration, not professional advice. Live quality depends on the configured model and source availability. Synthetic fixtures are intentionally incomplete; uncertain, exhausted, and provider-failure outcomes are reported as values.

