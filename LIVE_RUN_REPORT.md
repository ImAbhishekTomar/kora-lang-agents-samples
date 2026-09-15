# Live run report

Date: 2026-09-15

The complete numbered suite was executed with real GPT-5.4 Mini requests through
the `OPENAI_API_KEY` supplied in the local environment.

## Result

- 100 of 100 agents completed their intended live path.
- 8 of 8 durable approval agents suspended, received an answer, and resumed to
  `completed` without repeating their finished model work.
- 99 captured process logs contained no Kora runtime errors. Agent 005 was run
  interactively and verified from its completed durable journal.
- The runs made 209 provider calls and reported 173,963 input tokens and 32,169
  output tokens.
- A final static and deterministic pass checked all 100 programs and passed all
  146 Kora model-mock tests.

## Live issues found and corrected

- Removed trailing blank records from CSV fixtures that strict parsing correctly
  rejected.
- Replaced an unsupported structured tool argument with a JSON string and gave
  multi-turn tool agents enough call budget to finish.
- Added the missing paper PDF fixture and an arXiv Atom fallback for temporary
  upstream refusal.
- Updated stale public holiday and country API examples.
- Passed the current clock value into SLA analysis instead of asking the model to
  guess it.
- Tightened structured prompts for meal planning and multi-level explanations.
- Exercised and fixed Kora durable replay when context pruning occurs inside a
  completed model call before human approval.
- Exercised and fixed static typing for `parallel for ... first` results.

Live outputs are intentionally not committed. They can contain provider-generated
text, and durable journals are ignored because they may contain user answers and
serialized model inputs.
