# 064 - Technical Concept Explainer

## Job

creates beginner, practitioner, and expert explanations with a consistency check.

## Data source and provenance

stdin. Repository fixtures are synthetic and contain no operational secrets or personal data. The program never reads or prints the GPT credential configured by the project.

## Kora features

parallel agents, evaluator flow, and nested budgets. The agent declares a token/call/step budget and explicitly handles `Ok`, `Uncertain`, `Exhausted`, and `Failed`.

## Check, test, and run

From the samples repository root:

```sh
kora check agents/064-technical-explainer/main.ko
kora test agents/064-technical-explainer/main.ko
kora run agents/064-technical-explainer/main.ko
```

## Expected output

Tests pass without calling a model. A live run prints a short decision and grounded summary. Exact model wording varies.

## Limits

This is a review aid, not an autonomous authority. It does not independently verify source claims, and humans must review consequential publishing, moderation, security, privacy, access, legal, or product decisions.

