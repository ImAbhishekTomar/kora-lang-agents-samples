# Refund Policy Assistant

**Job:** answers from policy and escalates ambiguity.

**Data source and provenance:** synthetic data/policy.md and data/request.txt. Every local fixture is synthetic and contains no secrets or real personal data. Public endpoints are keyless and read-only. The program uses the configured `gpt` model role without reading the API key.

**Kora features:** retrieval tool, context policy, Uncertain, ask_human, budget.

## Commands

```bash
kora check agents/032-refund-policy-agent/main.ko
kora test agents/032-refund-policy-agent/main.ko
kora run agents/032-refund-policy-agent/main.ko
```

Use `kora run --durable agents/032-refund-policy-agent/main.ko` for approval flows. Use `kora audit agents/032-refund-policy-agent/main.ko` for classified-data examples.

**Expected output:** A compact labeled result grounded in the stated source. Tests are deterministic because `with mock analyze` replaces the live model call.

**Limits:** Educational sample only, not research, legal, operational, or customer-service authority. Live APIs can be unavailable or rate-limited. Model refusal, exhausted budgets, and provider failures remain visible outcomes; no example copies or reads credentials.

