# 059 - Secure Configuration Auditor

## Job

finds insecure configuration and prioritizes fixes.

## Data source and provenance

synthetic `data/service.yaml`. Repository fixtures are synthetic and contain no operational secrets or personal data. The program never reads or prints the GPT credential configured by the project.

## Kora features

safe YAML parsing, deterministic tools, typed output, and evaluator flow. The agent declares a token/call/step budget and explicitly handles `Ok`, `Uncertain`, `Exhausted`, and `Failed`.

## Check, test, and run

From the samples repository root:

```sh
kora check agents/059-secure-config-auditor/main.ko
kora test agents/059-secure-config-auditor/main.ko
kora run agents/059-secure-config-auditor/main.ko
```

## Expected output

Tests pass without calling a model. A live run prints a short decision and grounded summary. Exact model wording varies.

## Limits

This is a review aid, not an autonomous authority. It does not independently verify source claims, and humans must review consequential publishing, moderation, security, privacy, access, legal, or product decisions.

