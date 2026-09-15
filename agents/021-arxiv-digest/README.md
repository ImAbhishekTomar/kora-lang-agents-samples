# arXiv Topic Digest

**Job:** creates a current-paper relevance digest.

**Data source and provenance:** keyless public arXiv Atom API. When arXiv rate-limits or is unavailable, the program reports that fact and uses `data/arxiv_fallback.xml`, a synthetic Atom fixture, so the live GPT path remains testable. The program uses the configured `gpt` model role without reading the API key.

**Kora features:** HTTP, XML, typed model output, parallel analysis, shared budget.

## Commands

```bash
kora check agents/021-arxiv-digest/main.ko
kora test agents/021-arxiv-digest/main.ko
kora run agents/021-arxiv-digest/main.ko
```

Use `kora run --durable agents/021-arxiv-digest/main.ko` for approval flows. Use `kora audit agents/021-arxiv-digest/main.ko` for classified-data examples.

**Expected output:** A compact labeled result grounded in the stated source. Tests are deterministic because `with mock analyze` replaces the live model call.

**Limits:** Educational sample only, not research, legal, operational, or customer-service authority. Live APIs can be unavailable or rate-limited. Model refusal, exhausted budgets, and provider failures remain visible outcomes; no example copies or reads credentials.
