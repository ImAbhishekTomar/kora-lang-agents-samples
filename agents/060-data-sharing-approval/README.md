# 060 - Data Sharing Approval Workflow

## Job

summarizes a synthetic sharing request and waits for a decision.

## Data source and provenance

synthetic `data/sharing_request.json`. Repository fixtures are synthetic and contain no operational secrets or personal data. The program never reads or prints the GPT credential configured by the project.

## Kora features

classified data, scoped declassification, `ask_human`, durable execution, and auditability. The agent declares a token/call/step budget and explicitly handles `Ok`, `Uncertain`, `Exhausted`, and `Failed`.

## Check, test, and run

From the samples repository root:

```sh
kora check agents/060-data-sharing-approval/main.ko
kora test agents/060-data-sharing-approval/main.ko
kora run --durable agents/060-data-sharing-approval/main.ko
```

The review is also saved in the durable run's `notes` store before the run may suspend at `ask_human`. Find it with `kora runs agents/060-data-sharing-approval/main.ko` and resume with `kora answer agents/060-data-sharing-approval/main.ko <run-id> <answer>`. Automated tests call only `investigate`, mock only the model, and never invoke the human or notes effects.

## Expected output

Tests pass without calling a model. A live run prints a short decision and grounded summary. Exact model wording varies.

## Limits

This is a review aid, not an autonomous authority. It does not independently verify source claims, and humans must review consequential publishing, moderation, security, privacy, access, legal, or product decisions.
