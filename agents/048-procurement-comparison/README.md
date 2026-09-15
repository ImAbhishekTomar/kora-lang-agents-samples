# 048 - Procurement Comparison Agent

## Job

normalizes offers and compares trade-offs.

## Data source and provenance

synthetic `data/offers/*.json`. Every fixture is synthetic. Placeholder values are deliberately nonfunctional and are not secrets. The agent relies on the configured GPT model but never reads or prints its credential.

## Kora features

file modules, parallel work, typed schema, and supervisor synthesis. The agent declares a native token/call/step budget and handles `Ok`, `Uncertain`, `Exhausted`, and `Failed` as separate values.

## Check, test, and run

Run from the samples repository root:

```sh
kora check agents/048-procurement-comparison/main.ko
kora test agents/048-procurement-comparison/main.ko
kora run agents/048-procurement-comparison/main.ko
```

## Expected output

Tests pass without network access. A live run prints `review: ...` (or another explicit decision). Model wording varies, but it should cite only facts in the fixture and name missing evidence.

## Limits

This example supports human review. It does not independently verify claims or authorize legal, financial, employment, privacy, access-control, or security actions. Review the cited source before taking consequential action.

