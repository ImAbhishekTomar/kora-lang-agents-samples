# Support Ticket Router

**Job:** routes support tickets with priority and an internal note.

**Data source and provenance:** synthetic data/tickets.jsonl. Every local fixture is synthetic and contains no secrets or real personal data. Public endpoints are keyless and read-only. The program uses the configured `gpt` model role without reading the API key.

**Kora features:** filesystem lines, per-line JSON, JSON serialization, parallelism, typed guards, and an opt-in `http.post` demo.

## Commands

```bash
kora check agents/031-ticket-router/main.ko
kora test agents/031-ticket-router/main.ko
kora run agents/031-ticket-router/main.ko
```

Use `kora run --durable agents/031-ticket-router/main.ko` for approval flows. Use `kora audit agents/031-ticket-router/main.ko` for classified-data examples.

Set `KORA_POST_DEMO=1` only if you want the live run to POST the synthetic route list to the fixed public `https://httpbin.org/post` echo endpoint. It is off by default.

**Expected output:** A compact labeled result grounded in the stated source. Tests are deterministic because `with mock analyze` replaces the live model call.

**Limits:** Educational sample only, not research, legal, operational, or customer-service authority. Live APIs can be unavailable or rate-limited. Model refusal, exhausted budgets, and provider failures remain visible outcomes; no example copies or reads credentials.
