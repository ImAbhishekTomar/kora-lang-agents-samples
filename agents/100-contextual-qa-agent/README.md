# Context-Bounded Interactive Q&A Agent

## Job

This agent answers repeated questions from local product and runbook files.

## Data source and provenance

Input comes from synthetic `data/knowledge/*.md` plus terminal questions. Checked-in fixtures are synthetic and contain no private or operational data. Public-source agents use keyless HTTPS endpoints and handle network failure as a value. The program never reads or prints the OpenAI credential configured by the project.

## Kora features

tools, context policy, interactive loop, budgets, typed results. The live path makes a typed GPT call through the shared `gpt` role, and every model outcome is handled explicitly.

## Check and test without model spend

Run from the samples repository root:

```sh
kora check agents/100-contextual-qa-agent/main.ko
kora test agents/100-contextual-qa-agent/main.ko
```

## Live run

```sh
kora run --report agents/100-contextual-qa-agent/main.ko
```

## Expected output

The tests are deterministic and use typed model mocks. A live run prints a grounded result or a clear uncertain, exhausted, provider, input, or network failure. Exact GPT wording varies.

## Limits

This is a review aid, not an autonomous authority. A person must review consequential publishing, security, privacy, access, legal, medical, or financial decisions. Do not record private inputs into cassettes intended for publication.
