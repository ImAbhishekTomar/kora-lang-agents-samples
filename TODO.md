# 100-agent suite

## Queue

- [ ] Record reviewed cassettes for a small live smoke-test subset.
- [ ] Add provenance and redistribution terms for the legacy PDF datasets.
- [ ] Turn the check and mock-test scripts into CI once this repository has a remote.

## Development

- No work in progress.

## Completed

- [x] Made the live run reproducible: `scripts/live-run`, committed stdin seeds
      for the 14 agents that read input, and canned answers for the 8 that
      suspend on `ask_human`.
- [x] Re-ran all 100 agents live against the released compiler: 100 of 100,
      including all eight durable approval resumes.
- [x] Found and fixed two Kora defects from that run -- tool-loop budget
      exhaustion crashing instead of returning `Exhausted`, and `kora check`
      accepting tool signatures no model can be given -- and two sample call
      budgets too small for a tool round trip.

- [x] Audited the existing sample repository and environment-variable names.
- [x] Classified this as examples-only work using existing Kora effects.
- [x] Defined the 10-category, 100-agent catalog and per-folder contract.
- [x] Implemented 100 numbered Kora agent folders with source documentation.
- [x] Proved every implemented language and standard-library feature has an owning example.
- [x] Checked 100 programs and ran 146 deterministic mock tests.
- [x] Ran one live GPT-5.4 Mini smoke test through `OPENAI_API_KEY`.
- [x] Reproduced and fixed live-only CSV, tool-schema, PDF-fixture, and public-endpoint failures.
- [x] Completed and reviewed live GPT execution of all 100 numbered agents, including all eight durable approval resumes.
