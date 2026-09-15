# Specialist Routing Agent

## Job

This agent routes a request to billing, technical, or account specialist agents.

## Data source and provenance

Input comes from terminal prompt and fixed synthetic requests. Checked-in fixtures are synthetic and contain no private or operational data. Public-source agents use keyless HTTPS endpoints and handle network failure as a value. The program never reads or prints the OpenAI credential configured by the project.

## Kora features

agents as tools, nested budgets, typed routing, field patterns. The live path makes a typed GPT call through the shared `gpt` role, and every model outcome is handled explicitly.

## Check and test without model spend

Run from the samples repository root:

```sh
kora check agents/091-specialist-router/main.ko
kora test agents/091-specialist-router/main.ko
```

## Live run

```sh
kora run --report agents/091-specialist-router/main.ko
```

## Expected output

The tests are deterministic and use typed model mocks. A live run prints a grounded result or a clear uncertain, exhausted, provider, input, or network failure. Exact GPT wording varies.

## Limits

This is a review aid, not an autonomous authority. A person must review consequential publishing, security, privacy, access, legal, medical, or financial decisions. Do not record private inputs into cassettes intended for publication.
