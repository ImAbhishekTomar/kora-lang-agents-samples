# Country Profile Agent

## Job

This agent writes a compact profile from current country facts.

## Data source and provenance

Input comes from the public REST Countries v5 demo endpoint using its documented `rc_live_demo` token. The response identifies itself as demo data and the agent preserves that limitation. The program never reads or prints the OpenAI credential configured by the project.

## Kora features

HTTP, JSON, typed boundary validation, outcome alternatives. The live path makes a typed GPT call through the shared `gpt` role, and every model outcome is handled explicitly.

## Check and test without model spend

Run from the samples repository root:

```sh
kora check agents/083-country-profile/main.ko
kora test agents/083-country-profile/main.ko
```

## Live run

```sh
kora run --report agents/083-country-profile/main.ko
```

## Expected output

The tests are deterministic and use typed model mocks. A live run prints a grounded result or a clear uncertain, exhausted, provider, input, or network failure. Exact GPT wording varies.

## Limits

This is a review aid, not an autonomous authority. A person must review consequential publishing, security, privacy, access, legal, medical, or financial decisions. Do not record private inputs into cassettes intended for publication.
