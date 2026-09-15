# 100 real Kora agents

[Kora Official Documentation](https://kora-lang.vercel.app/)

This repository contains 100 runnable LLM agents written in Kora, plus the
original invoice vision sample. The numbered suite is designed to exercise the
language as a product: typed model results, tools, agent delegation, parallel
work, budgets, context limits, streaming, durable approval, information-flow
controls, modules, integrations, and deterministic model mocks.

Every numbered agent lives in its own folder under `agents/` with:

- `main.ko` - runnable Kora code with a real GPT call and mock tests
- `README.md` - job, input source, privacy notes, features, and commands
- `data/` - a small synthetic fixture when the agent is not interactive or live

See [CATALOG.md](CATALOG.md) for all titles, jobs, and data sources, and
[FEATURE_MATRIX.md](FEATURE_MATRIX.md) for proof of language coverage.
[LIVE_RUN_REPORT.md](LIVE_RUN_REPORT.md) records the full real-model verification.

## Model

The numbered examples call the shared `gpt` role in `kora.toml`. It is pinned
to `gpt-5.4-mini` and reads `OPENAI_API_KEY` from the process environment. The
key is never embedded in Kora code, loaded as agent input, printed, or committed.

The [official OpenAI model page](https://developers.openai.com/api/docs/models/gpt-5.4-mini)
documents that GPT-5.4 Mini supports Chat Completions, structured outputs,
function calling, streaming, and image input, which are the capabilities these
examples need.

## Setup

Build the Kora compiler at the revision in `KORA_REVISION`, then export the key:

```bash
cd ../kora-lang
cargo build

cd ../kora-lang-agents-samples
cp .env.example .env
# add OPENAI_API_KEY to .env, which is ignored by git
```

Kora reads process environment variables and does not load `.env` itself. The
provided live-smoke script loads the ignored file safely before launching Kora.

## Validate without spending API credit

```bash
./scripts/check-all
```

This statically checks all 100 programs and runs their Kora `test` blocks. Model
calls in tests use typed `with mock analyze` fixtures, so this command is free
and deterministic.

## Run one real agent

```bash
./scripts/live-smoke agents/001-daily-planner/main.ko
```

Or run any folder directly from the repository root:

```bash
../kora-lang/target/debug/kora run --report agents/014-code-review/main.ko
```

Do not run all 100 live in one command. Some examples use multiple model calls,
public APIs, or human approval and can consume meaningful time and credit.

## Input policy

The suite uses three explicit input classes:

1. Checked-in synthetic fixtures - the default, safe for tests and examples.
2. Keyless public endpoints - used only when current public data is the point.
3. User-provided private data - never committed and never recorded to a
   publishable cassette.

Model cassettes can contain prompts and serialized inputs. Treat them as
publishable data, not as harmless cache files.

## Original invoice sample

`vision-extract-agent/` remains as the original larger end-to-end sample. It
routes text-layer PDFs through Kora's PDF reader and image-only PDFs through a
package helper. Its existing OpenRouter model roles are separate from the
numbered GPT suite.
