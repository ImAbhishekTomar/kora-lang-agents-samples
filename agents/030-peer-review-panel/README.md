# Peer Review Panel

**Job:** merges method, clarity, and reproducibility reviews.

**Data source and provenance:** synthetic data/manuscript.md. Every local fixture is synthetic and contains no secrets or real personal data. Public endpoints are keyless and read-only. The program uses the configured `gpt` model role without reading the API key.

**Kora features:** agents as tools, supervisor agent, nested budgets.

## Commands

```bash
kora check agents/030-peer-review-panel/main.ko
kora test agents/030-peer-review-panel/main.ko
kora run agents/030-peer-review-panel/main.ko
```

Use `kora run --durable agents/030-peer-review-panel/main.ko` for approval flows. Use `kora audit agents/030-peer-review-panel/main.ko` for classified-data examples.

**Expected output:** A compact labeled result grounded in the stated source. Tests are deterministic because `with mock analyze` replaces the live model call.

**Limits:** Educational sample only, not research, legal, operational, or customer-service authority. Live APIs can be unavailable or rate-limited. Model refusal, exhausted budgets, and provider failures remain visible outcomes; no example copies or reads credentials.

