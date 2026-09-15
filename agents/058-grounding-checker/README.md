# 058 - Answer Grounding Checker

## Job

labels claims supported, contradicted, or absent.

## Data source and provenance

synthetic `data/answer.md` and `data/sources/*.md`. Repository fixtures are synthetic and contain no operational secrets or personal data. The program never reads or prints the GPT credential configured by the project.

## Kora features

filesystem tools, parallel checks, typed output, and uncertainty. The agent declares a token/call/step budget and explicitly handles `Ok`, `Uncertain`, `Exhausted`, and `Failed`.

## Check, test, and run

From the samples repository root:

```sh
kora check agents/058-grounding-checker/main.ko
kora test agents/058-grounding-checker/main.ko
kora run agents/058-grounding-checker/main.ko
```

## Expected output

Tests pass without calling a model. A live run prints a short decision and grounded summary. Exact model wording varies.

## Limits

This is a review aid, not an autonomous authority. It does not independently verify source claims, and humans must review consequential publishing, moderation, security, privacy, access, legal, or product decisions.

