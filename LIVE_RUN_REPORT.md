# Live run report

Date: 2026-09-16

The complete numbered suite was executed with real GPT-5.4 Mini requests through
the `OPENAI_API_KEY` supplied in the local environment.

## Result

- 100 of 100 agents completed their intended live path.
- 8 of 8 durable approval agents suspended, received an answer, and resumed to
  `completed` without repeating their finished model work.
- A final static and deterministic pass checked all 100 programs and passed all
  146 Kora model-mock tests.

The suite is now reproducible without a person at the keyboard.
`scripts/live-run` drives every agent, feeding `data/seed.txt` to the 14 that
read standard input and answering the 8 that suspend on `ask_human` from
`data/answer.txt`, then verifying each of those runs reaches `completed` rather
than trusting an exit status. Before this the run was driven by a throwaway
script outside the repository, and the inputs it typed were never recorded, so
nothing here could reproduce it.

## Kora defects this run found

Both are fixed in the compiler, and are why `KORA_REVISION` moved.

- **A budget that ran out inside a tool loop crashed instead of returning
  `Exhausted(meter)`.** Exhaustion is a value everywhere else in the language,
  so this made every `case Exhausted(meter)` arm on a tool-using call
  unreachable: the programs that handled a spent budget correctly were the ones
  that died. Six different agents hit it across two runs, and which six varied
  with how often the model chose to call a tool.
- **`kora check` accepted programs whose tool signatures no model can be
  given.** The runtime refuses any tool parameter outside `str`, `int`,
  `float`, `bool`, and `list[str]` when it builds the request, so a program
  started, spent whatever the calls before it cost, and then stopped for a
  reason that had been visible in the source all along.

## Sample defects this run found

- `039-inventory-exception` and `096-research-then-write` had call budgets too
  small for a tool round trip, so the model could ask for its tool but had no
  call left to answer with. `096` is now also told to search at most once with
  each tool.

## Earlier run

The first full live run (2026-09-15) made 209 provider calls for 173,963 input
and 32,169 output tokens, and found eight issues: trailing blank CSV records, an
unsupported structured tool argument, a missing PDF fixture, stale public
holiday and country endpoints, an SLA analysis asked to guess the clock, two
loose structured prompts, and the durable context replay and
`parallel for ... first` typing defects fixed in `6d41c95`.

Live outputs are intentionally not committed. They can contain provider-generated
text, and durable journals are ignored because they may contain user answers and
serialized model inputs.
