# Weather-Aware Packing Advisor

**Job:** turns current weather into a practical packing list.

**Data source and provenance:** keyless public Open-Meteo API. All local data is synthetic and contains no real personal data or secrets. The program reads the configured `gpt` model role; it never reads an API key itself.

**Kora features:** HTTP, JSON, tool loop, schema, failures.

## Commands

```bash
kora check agents/008-packing-advisor/main.ko
kora test agents/008-packing-advisor/main.ko
kora run agents/008-packing-advisor/main.ko
```

For durable-only effects, run `kora run --durable agents/008-packing-advisor/main.ko`. For declassification examples, inspect releases with `kora audit agents/008-packing-advisor/main.ko`.

**Expected output:** A concise, labeled result grounded in the input. Tests use `with mock analyze`, so they are deterministic and spend no model tokens.

**Limits:** This is a small demonstration, not professional advice. Live quality depends on the configured model and source availability. Synthetic fixtures are intentionally incomplete; uncertain, exhausted, and provider-failure outcomes are reported as values.

