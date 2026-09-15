# 040 - Shift Handoff Writer

## Job

turns notes and alerts into an urgent, owned handoff.

## Data source and provenance

synthetic `data/shift_notes.md` and `data/alerts.json`. All repository fixtures are synthetic and contain no real people, credentials, or confidential business data. The live run reads only these inputs and the configured GPT credential indirectly through `kora.toml`; the program never reads or prints the key.

## Kora features

JSON, journaled time, filesystem `exists`/`list`/`write`/`append`, types, budget, and a structured pipeline. The agent has a native token/call/step budget and handles `Ok`, `Uncertain`, `Exhausted`, and `Failed` explicitly.

## Run

From the samples repository root:

```sh
kora check agents/040-shift-handoff/main.ko
kora test agents/040-shift-handoff/main.ko
kora run agents/040-shift-handoff/main.ko
```

## Expected output

The test is deterministic and prints a passing summary. A live run writes `agents/040-shift-handoff/handoff-output.md` atomically, then prints a short decision and evidence-grounded summary; wording varies by model.

## Limits

This is a decision-support example, not an autonomous authority. It uses synthetic or explicitly supplied data, does not validate external facts, and must not be used as legal, financial, employment, security, or safety advice. Human review is required before consequential action.
