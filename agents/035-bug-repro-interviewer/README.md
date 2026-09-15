# 035 - Bug Reproduction Interviewer

## Job

gathers missing environment/repro details.

## Data source and provenance

Two durable human answers: the initial synthetic bug report and a confirmation after the model identifies missing reproduction details. The configured GPT credential is read indirectly through `kora.toml`; the program never reads or prints the key.

## Kora features

loop, `ask_human`, durable notes, and context policy. The agent has a native token/call/step budget and handles `Ok`, `Uncertain`, `Exhausted`, and `Failed` explicitly.

## Run

From the samples repository root:

```sh
kora check agents/035-bug-repro-interviewer/main.ko
kora test agents/035-bug-repro-interviewer/main.ko
kora run --durable agents/035-bug-repro-interviewer/main.ko
```

A durable run first suspends for the bug report, then calls GPT and suspends again for confirmation. Inspect it with `kora runs agents/035-bug-repro-interviewer/main.ko` and answer each prompt with `kora answer agents/035-bug-repro-interviewer/main.ko <run-id> <answer>`.

## Expected output

The test is deterministic and prints a passing summary. A live run prints a short decision and evidence-grounded summary; wording varies by model. `ask_human` suspends once before and once after the model call.

## Limits

This is a decision-support example, not an autonomous authority. It uses synthetic or explicitly supplied data, does not validate external facts, and must not be used as legal, financial, employment, security, or safety advice. Human review is required before consequential action.
