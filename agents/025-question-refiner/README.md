# Research Question Refiner

**Job:** turns a broad idea into testable questions and criteria.

**Data source and provenance:** standard input. Every local fixture is synthetic and contains no secrets or real personal data. Public endpoints are keyless and read-only. The program uses the configured `gpt` model role without reading the API key.

**Kora features:** prompt chaining, outcome else binding, schema, call budget.

## Commands

```bash
kora check agents/025-question-refiner/main.ko
kora test agents/025-question-refiner/main.ko
kora run agents/025-question-refiner/main.ko
```

Use `kora run --durable agents/025-question-refiner/main.ko` for approval flows. Use `kora audit agents/025-question-refiner/main.ko` for classified-data examples.

**Expected output:** A compact labeled result grounded in the stated source. Tests are deterministic because `with mock analyze` replaces the live model call.

**Limits:** Educational sample only, not research, legal, operational, or customer-service authority. Live APIs can be unavailable or rate-limited. Model refusal, exhausted budgets, and provider failures remain visible outcomes; no example copies or reads credentials.

