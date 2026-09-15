# 055 - Access Request Reviewer

## Job

checks least privilege and routes consequential cases to a human.

## Data source and provenance

synthetic `data/requests.json`. Every fixture is synthetic. Placeholder values are deliberately nonfunctional and are not secrets. The agent relies on the configured GPT model but never reads or prints its credential.

## Kora features

classified data, parallel work, `ask_human`, and durable execution. The agent declares a native token/call/step budget and handles `Ok`, `Uncertain`, `Exhausted`, and `Failed` as separate values.

## Check, test, and run

Run from the samples repository root:

```sh
kora check agents/055-access-request-review/main.ko
kora test agents/055-access-request-review/main.ko
kora run --durable agents/055-access-request-review/main.ko
```

The human decision is intentionally a durable suspension point. Use `kora runs agents/055-access-request-review/main.ko` to find the run and `kora answer agents/055-access-request-review/main.ko <run-id> <answer>` to resume it. Tests mock only the model and never execute `ask_human`.

## Expected output

Tests pass without network access. A live run prints `review: ...` (or another explicit decision). Model wording varies, but it should cite only facts in the fixture and name missing evidence.

## Limits

This example supports human review. It does not independently verify claims or authorize legal, financial, employment, privacy, access-control, or security actions. Review the cited source before taking consequential action.

