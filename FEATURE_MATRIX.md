# Kora feature coverage

This matrix maps the implemented Kora 0.2.0 surface to numbered, runnable
examples. It intentionally does not claim proposed features such as list
comprehensions, random values, subprocesses, native embeddings, browser
control, audio, or video because the pinned compiler does not implement them.

## Language and agent runtime

| Feature | Owning examples | What is exercised |
|---|---|---|
| Primitive values, lists, dicts, indexing, loops, f-strings | 001, 019, 031 | Ordinary Kora data and control flow around an LLM workflow |
| Declared and nested types | 003, 014, 024, 042 | Model JSON schema plus runtime boundary validation |
| Field descriptions and regex patterns | 003, 014, 043, 071, 091 | Model guidance and enforced string constraints |
| Typed `analyze` | 001-100 | Every example has at least one real typed GPT call |
| Model roles | 001-100 | Source names `model="gpt"`; `kora.toml` owns provider and key selection |
| `agent` functions | 001-100 | Every example places model work behind an agent boundary |
| Typed tools | 008, 012, 019, 047, 074 | Function signatures become tool schemas |
| Agents used as tools | 030, 064, 091, 092 | Supervisors delegate to bounded specialist agents |
| Tool-call watcher | 019, 096 | `on tool_call(name, args)` observes a model tool loop |
| All model outcomes | 001-100 | `Ok`, `Uncertain`, `Exhausted`, and `Failed` are explicit values |
| Match guards | 002, 011, 018, 028, 095, 097 | A typed successful result takes guarded branches |
| Pattern alternatives | 096 | `Uncertain(reason) | Failed(reason)` shares a recovery branch with identical binders |
| Outcome `else` binding | 003, 025, 037, 093, 098 | Success stays flat while failure exits with reason and kind |
| Context policy | 006, 012, 023, 038, 061, 092, 096, 100 | Lexical input and output reservation around tool loops |
| `stream` shortcut | 006, 013, 034, 044, 050, 062, 067, 078 | Plain-text output streams while retaining a terminal outcome |
| Custom token handler | 017, 078, 090 | `on token(piece)` handles streamed text explicitly |
| Parallel collection | 002, 004, 011, 024, 029, 036, 094 | Real worker threads return results in input order |
| Parallel first result | 097 | `parallel for ... first` selects the earliest input-order answer |
| Parallel break value | 097 | A collecting fan-out stops early and keeps the stopping value |
| Agent budgets | 001-100 | Every model workflow has a token, call, or step limit |
| Nested and shared budgets | 011, 030, 036, 064, 092, 094, 098 | Child agents and fan-outs tighten a common ceiling |
| Time budget | 016, 038, 080, 087, 094, 097, 098 | Outbound work is bounded by seconds as well as tokens |
| Budget introspection | 098 | Final output reports `tokens_spent()` and `calls_spent()` |
| Classified variables and fields | 010, 023, 034, 041, 044, 051, 052, 055, 060, 099 | Sensitive values carry a transitive label |
| Scoped declassification | 010, 023, 034, 041, 044, 051, 052, 055, 060 | Only an explicit `declassify ... for openai` block releases data |
| Redaction | 051, 099 | Classified leaves become safe placeholders before output or approval |
| Unverified external input | 012, 053, 059 | Files, web bodies, and parsed data remain data rather than control values |
| Terminal input | 001, 006, 019, 025, 064, 091, 093, 094, 096, 097, 099, 100 | Interactive examples use the built-in `input` function |
| Durable human approval | 005, 017, 032, 035, 055, 060, 072, 099 | `ask_human` suspends a durable run and resumes after an answer |
| Durable notes | 005, 017, 035, 055, 060, 099 | Per-run state crosses a resume without becoming an ad hoc file protocol |
| Exactly-once durable write | 099 | The approved artifact uses journaled `fs.write` after human approval |
| File modules | 020, 029 | Quoted relative `.ko` imports with required aliases |
| Package helper | 073 | The `pdf_render` package receives bytes under an explicit helper grant |
| MCP tools | 065 | A filesystem MCP server exposes its tool set to `analyze` |
| Python sidecar | 074 | Python `statistics.mean` runs across the journaled language boundary |
| Images | 071, 072, 079 | PNG and JPEG values go directly into the GPT vision input |
| PDF text and scanned routes | 027, 073 | Native PDF text/pages plus package-rendered image fallback |
| Tests and typed mocks | 001-100 | Every folder has a deterministic model mock test |
| Nested mocks by result type | 057, 093, 095, 098 | Multi-stage calls select the compatible mock from the stack |
| Mock propagation into workers | 094, 097 | Parallel workers inherit the model mock rather than making a live call |

## Standard library

Every native standard-library module and every function documented for the
pinned compiler has at least one owning example.

| Module | Covered functions | Owning examples |
|---|---|---|
| `json` | `parse`, typed `parse`, `stringify`, `get` | 002, 008, 031, 047, 075 |
| `csv` | typed `parse`, `rows`, `write` | 007, 028, 041, 046, 074 |
| `http` | `get`, `post` | 008, 016, 021, 022, 031, 081-090, 096 |
| `sql` | `execute`, parameterized `query` | 018 |
| `fs` | `read`, `lines`, `image`, `bytes`, `list`, `glob`, `write`, `append`, `exists` | 004, 027, 031, 040, 065, 071-073, 079, 099 |
| `env` | `has`, `get` | 001, 031 |
| `time` | `now`, `format`, `elapsed` | 033, 040, 066, 086 |
| `re` | `matches`, `find`, `find_all`, `replace`, `split` | 012, 019, 043, 051, 052 |
| `notes` | `read`, `write` | 005, 017, 035, 055, 060, 099 |
| `pdf` | `text`, `pages`, `info` | 027, 073 |
| `yaml` | typed and untyped `parse`, `documents`, `stringify`, `get` | 059, 076 |
| `xml` | `parse`, `find`, `find_all`, `text`, `get` | 021, 062, 077 |

## Provider behavior

The shared GPT role uses `OPENAI_API_KEY`, two transport retries, a 900-second
per-call ceiling for document examples, and a project-wide token wall. Live
network and model runs are opt-in. The default validation path uses Kora mocks
and spends no API credit.
