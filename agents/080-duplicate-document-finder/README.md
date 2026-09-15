# Semantic Duplicate Finder

## Job

This agent finds near-duplicate documents and explains substantive differences.

## Data source and provenance

Input comes from synthetic `data/documents/*.md`. Checked-in fixtures are synthetic and contain no private or operational data. Public-source agents use keyless HTTPS endpoints and handle network failure as a value. The program never reads or prints the OpenAI credential configured by the project.

## Kora features

filesystem globbing, pair generation, parallelism, time budgets. The live path makes a typed GPT call through the shared `gpt` role, and every model outcome is handled explicitly.

## Check and test without model spend

Run from the samples repository root:

```sh
kora check agents/080-duplicate-document-finder/main.ko
kora test agents/080-duplicate-document-finder/main.ko
```

## Live run

```sh
kora run --report agents/080-duplicate-document-finder/main.ko
```

## Expected output

The tests are deterministic and use typed model mocks. A live run prints a grounded result or a clear uncertain, exhausted, provider, input, or network failure. Exact GPT wording varies.

## Limits

This is a review aid, not an autonomous authority. A person must review consequential publishing, security, privacy, access, legal, medical, or financial decisions. Do not record private inputs into cassettes intended for publication.
