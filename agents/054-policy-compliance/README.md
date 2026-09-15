# 054 - Policy Compliance Checker

## Job

compares an action to policy and cites an exact clause.

## Data source and provenance

synthetic `data/policy.md` and `data/proposal.txt`. Every fixture is synthetic. Placeholder values are deliberately nonfunctional and are not secrets. The agent relies on the configured GPT model but never reads or prints its credential.

## Kora features

retrieval tool, structured output, guards, and uncertainty. The agent declares a native token/call/step budget and handles `Ok`, `Uncertain`, `Exhausted`, and `Failed` as separate values.

## Check, test, and run

Run from the samples repository root:

```sh
kora check agents/054-policy-compliance/main.ko
kora test agents/054-policy-compliance/main.ko
kora run agents/054-policy-compliance/main.ko
```

## Expected output

Tests pass without network access. A live run prints `review: ...` (or another explicit decision). Model wording varies, but it should cite only facts in the fixture and name missing evidence.

## Limits

This example supports human review. It does not independently verify claims or authorize legal, financial, employment, privacy, access-control, or security actions. Review the cited source before taking consequential action.

