# SQL Query Explainer

**Job:** explains a query, performance traps, and safe validation.

**Data source and provenance:** synthetic data/query.sql. Local fixtures are synthetic and contain no secrets. Public APIs are keyless and read-only. The program uses the configured `gpt` model role without reading the key.

**Kora features:** filesystem, typed analyze, guards, safe regex, and local SQLite `execute` plus bound-parameter `query` calls.

## Commands

```bash
kora check agents/018-sql-explainer/main.ko
kora test agents/018-sql-explainer/main.ko
kora run agents/018-sql-explainer/main.ko
```

Use `kora run --durable agents/018-sql-explainer/main.ko` for notes or approval flows.

**Expected output:** A concise labeled analysis grounded in the supplied source. Deterministic tests replace the model using `with mock analyze`.

**Limits:** Educational sample only. It executes only fixed statements against its synthetic local SQLite database; it never executes the query being explained. Model refusal, budget exhaustion, and provider failure remain explicit outcomes.
