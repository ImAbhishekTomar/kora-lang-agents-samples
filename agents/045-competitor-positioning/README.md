# 045 - Competitor Positioning Analyst

## Job

produces evidence-linked product differences.

## Data source and provenance

synthetic `data/products/*.md`. All repository fixtures are synthetic and contain no real people, credentials, or confidential business data. The live run reads only these inputs and the configured GPT credential indirectly through `kora.toml`; the program never reads or prints the key.

## Kora features

filesystem globbing, parallel evaluation, and context policy. The agent has a native token/call/step budget and handles `Ok`, `Uncertain`, `Exhausted`, and `Failed` explicitly.

## Run

From the samples repository root:

```sh
kora check agents/045-competitor-positioning/main.ko
kora test agents/045-competitor-positioning/main.ko
kora run agents/045-competitor-positioning/main.ko
```

## Expected output

The test is deterministic and prints a passing summary. A live run prints a short decision and evidence-grounded summary; wording varies by model. `review: ...`

## Limits

This is a decision-support example, not an autonomous authority. It uses synthetic or explicitly supplied data, does not validate external facts, and must not be used as legal, financial, employment, security, or safety advice. Human review is required before consequential action.

