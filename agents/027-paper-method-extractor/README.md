# Paper Method Extractor

**Job:** extracts study design, sample, variables, and limits.

**Data source and provenance:** copied synthetic data/paper.pdf from Kora's generated PDF fixtures. Every local fixture is synthetic and contains no secrets or real personal data. Public endpoints are keyless and read-only. The program uses the configured `gpt` model role without reading the API key.

**Kora features:** PDF pages, typed schema, context policy.

## Commands

```bash
kora check agents/027-paper-method-extractor/main.ko
kora test agents/027-paper-method-extractor/main.ko
kora run agents/027-paper-method-extractor/main.ko
```

Use `kora run --durable agents/027-paper-method-extractor/main.ko` for approval flows. Use `kora audit agents/027-paper-method-extractor/main.ko` for classified-data examples.

**Expected output:** A compact labeled result grounded in the stated source. Tests are deterministic because `with mock analyze` replaces the live model call.

**Limits:** Educational sample only, not research, legal, operational, or customer-service authority. Live APIs can be unavailable or rate-limited. Model refusal, exhausted budgets, and provider failures remain visible outcomes; no example copies or reads credentials.

