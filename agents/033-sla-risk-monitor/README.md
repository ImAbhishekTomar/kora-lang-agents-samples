# SLA Risk Analyst

**Job:** identifies support tickets at risk of breaching SLA.

**Data source and provenance:** synthetic data/open_tickets.csv. Every local fixture is synthetic and contains no secrets or real personal data. Public endpoints are keyless and read-only. The program uses the configured `gpt` model role without reading the API key.

**Kora features:** typed CSV, time, parallelism, guards, typed results.

## Commands

```bash
kora check agents/033-sla-risk-monitor/main.ko
kora test agents/033-sla-risk-monitor/main.ko
kora run agents/033-sla-risk-monitor/main.ko
```

Use `kora run --durable agents/033-sla-risk-monitor/main.ko` for approval flows. Use `kora audit agents/033-sla-risk-monitor/main.ko` for classified-data examples.

**Expected output:** A compact labeled result grounded in the stated source. Tests are deterministic because `with mock analyze` replaces the live model call.

**Limits:** Educational sample only, not research, legal, operational, or customer-service authority. Live APIs can be unavailable or rate-limited. Model refusal, exhausted budgets, and provider failures remain visible outcomes; no example copies or reads credentials.

