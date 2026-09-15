# Meeting Action Extractor

**Job:** extracts owners, dates, decisions, and questions from a transcript.

**Data source and provenance:** synthetic data/meeting.txt. All local data is synthetic and contains no real personal data or secrets. The program reads the configured `gpt` model role; it never reads an API key itself.

**Kora features:** nested types, field metadata, outcome else binding.

## Commands

```bash
kora check agents/003-meeting-actions/main.ko
kora test agents/003-meeting-actions/main.ko
kora run agents/003-meeting-actions/main.ko
```

For durable-only effects, run `kora run --durable agents/003-meeting-actions/main.ko`. For declassification examples, inspect releases with `kora audit agents/003-meeting-actions/main.ko`.

**Expected output:** A concise, labeled result grounded in the input. Tests use `with mock analyze`, so they are deterministic and spend no model tokens.

**Limits:** This is a small demonstration, not professional advice. Live quality depends on the configured model and source availability. Synthetic fixtures are intentionally incomplete; uncertain, exhausted, and provider-failure outcomes are reported as values.

