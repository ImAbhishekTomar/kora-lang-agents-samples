# 051 - PII Redaction Reviewer

## Job

identifies PII, proposes replacements, and checks meaning preservation.

## Data source and provenance

synthetic `data/customer_note.txt`. Every fixture is synthetic. Placeholder values are deliberately nonfunctional and are not secrets. The agent relies on the configured GPT model but never reads or prints its credential.

## Kora features

classified deep labels, declassification, evaluator, and regular expressions. The agent declares a native token/call/step budget and handles `Ok`, `Uncertain`, `Exhausted`, and `Failed` as separate values.

## Check, test, and run

Run from the samples repository root:

```sh
kora check agents/051-pii-redactor/main.ko
kora test agents/051-pii-redactor/main.ko
kora run agents/051-pii-redactor/main.ko
```

## Expected output

Tests pass without network access. A live run prints `review: ...` (or another explicit decision). Model wording varies, but it should cite only facts in the fixture and name missing evidence.

## Limits

This example supports human review. It does not independently verify claims or authorize legal, financial, employment, privacy, access-control, or security actions. Review the cited source before taking consequential action.

