# 065 - FAQ Generator

## Job

turns product documents into a sourced FAQ.

## Data source and provenance

synthetic `data/docs/*.md`; an MCP filesystem can be substituted manually. Repository fixtures are synthetic and contain no operational secrets or personal data. The program never reads or prints the GPT credential configured by the project.

## Kora features

filesystem globbing plus the configured `files` MCP server, context policy, typed output, and mocks. The live model may use MCP filesystem tools limited to `data/docs`. The agent declares a token/call/step budget and explicitly handles `Ok`, `Uncertain`, `Exhausted`, and `Failed`.

## Check, test, and run

From the samples repository root:

```sh
kora check agents/065-faq-generator/main.ko
kora test agents/065-faq-generator/main.ko
kora run agents/065-faq-generator/main.ko
```

## Expected output

Tests pass without calling a model. A live run prints a short decision and grounded summary. Exact model wording varies.

## Limits

This is a review aid, not an autonomous authority. It does not independently verify source claims, and humans must review consequential publishing, moderation, security, privacy, access, legal, or product decisions.
