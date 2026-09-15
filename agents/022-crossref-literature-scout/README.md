# Crossref Literature Scout

**Job:** finds relevant papers and explains why to read them.

**Data source and provenance:** keyless public Crossref REST API. Every local fixture is synthetic and contains no secrets or real personal data. Public endpoints are keyless and read-only. The program uses the configured `gpt` model role without reading the API key.

**Kora features:** HTTP, JSON, constant URL, typed results, explicit failures.

## Commands

```bash
kora check agents/022-crossref-literature-scout/main.ko
kora test agents/022-crossref-literature-scout/main.ko
kora run agents/022-crossref-literature-scout/main.ko
```

Use `kora run --durable agents/022-crossref-literature-scout/main.ko` for approval flows. Use `kora audit agents/022-crossref-literature-scout/main.ko` for classified-data examples.

**Expected output:** A compact labeled result grounded in the stated source. Tests are deterministic because `with mock analyze` replaces the live model call.

**Limits:** Educational sample only, not research, legal, operational, or customer-service authority. Live APIs can be unavailable or rate-limited. Model refusal, exhausted budgets, and provider failures remain visible outcomes; no example copies or reads credentials.

