# JSON Structure Mapper

## Job

This agent infers a data dictionary and quality warnings from sample events.

## Data source and provenance

Input comes from synthetic `data/events.json`. Checked-in fixtures are synthetic and contain no private or operational data. Public-source agents use keyless HTTPS endpoints and handle network failure as a value. The program never reads or prints the OpenAI credential configured by the project.

## Kora features

JSON parsing, dynamic boundary validation, typed results, failure values. The live path makes a typed GPT call through the shared `gpt` role, and every model outcome is handled explicitly.

## Check and test without model spend

Run from the samples repository root:

```sh
kora check agents/075-json-mapper/main.ko
kora test agents/075-json-mapper/main.ko
```

## Live run

```sh
kora run --report agents/075-json-mapper/main.ko
```

## Expected output

The tests are deterministic and use typed model mocks. A live run prints a grounded result or a clear uncertain, exhausted, provider, input, or network failure. Exact GPT wording varies.

## Limits

This is a review aid, not an autonomous authority. A person must review consequential publishing, security, privacy, access, legal, medical, or financial decisions. Do not record private inputs into cassettes intended for publication.
