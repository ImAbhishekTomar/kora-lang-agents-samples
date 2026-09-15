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

Prerequisites:

- macOS or Linux
- Rust and Cargo
- Git
- An OpenAI API key for live runs

Clone the Kora compiler beside this repository, build the revision recorded in
`KORA_REVISION`, and configure the samples:

```bash
cd ..
git clone https://github.com/kora-lang/kora-lang.git
cd kora-lang
git checkout "$(cat ../kora-lang-agents-samples/KORA_REVISION)"
cargo build

cd ../kora-lang-agents-samples
cp .env.example .env
# add OPENAI_API_KEY to .env, which is ignored by git
```

Kora reads process environment variables and does not load `.env` itself. The
provided live-smoke script loads the ignored file safely before launching Kora.

If the compiler is already checked out elsewhere, update the commands to point
to that checkout or make the expected sibling layout:

```
parent-directory/
|-- kora-lang/
`-- kora-lang-agents-samples/
```

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

## Examples

Every example has a linked folder containing its own `README.md`, runnable
`main.ko`, and any local fixture data. Run an example from the repository root
with:

```bash
../kora-lang/target/debug/kora run --report agents/<agent-folder>/main.ko
```

| Agent | Details |
|---|---|
| [Vision Extract Agent](agents/000-vision-extract-agent/) | Extracts structured fields from text-layer and image-only invoice PDFs. |
| [Daily Plan Builder](agents/001-daily-planner/) | Turns tasks, constraints, and energy into a time-blocked plan. |
| [Inbox Triage Desk](agents/002-inbox-triage/) | Classifies messages by urgency and recommends the next action. |
| [Meeting Action Extractor](agents/003-meeting-actions/) | Extracts owners, dates, decisions, and open questions. |
| [Note Connection Finder](agents/004-note-linker/) | Suggests useful cross-links between Markdown notes. |
| [Decision Journal Coach](agents/005-decision-journal/) | Challenges assumptions and pauses for the user's final choice. |
| [Interactive Study Coach](agents/006-study-coach/) | Explains, quizzes, and adapts to the learner's answer. |
| [Habit Reflection Analyst](agents/007-habit-reflection/) | Finds habit patterns and proposes one measurable experiment. |
| [Weather-Aware Packing Advisor](agents/008-packing-advisor/) | Combines a forecast and trip constraints into a packing list. |
| [Pantry Meal Planner](agents/009-pantry-meal-planner/) | Builds three meals from available ingredients and constraints. |
| [Resume Tailoring Assistant](agents/010-resume-tailor/) | Suggests truthful resume edits grounded in a job description. |
| [Software Issue Triage Agent](agents/011-issue-triage/) | Assigns severity, component, reproduction quality, and next action. |
| [Log Root-Cause Investigator](agents/012-log-root-cause/) | Correlates logs with deployment facts and ranks hypotheses. |
| [Release Notes Writer](agents/013-release-notes/) | Converts commit records into grouped user-facing notes. |
| [Patch Review Agent](agents/014-code-review/) | Reviews a diff for correctness, security, tests, and maintainability. |
| [Test Case Designer](agents/015-test-designer/) | Generates happy, edge, failure, and abuse tests from a spec. |
| [Dependency Release Scout](agents/016-dependency-release-scout/) | Summarizes recent releases and upgrade risks. |
| [Incident Commander Copilot](agents/017-incident-commander/) | Tracks an incident and asks approval before risky action. |
| [SQL Query Explainer](agents/018-sql-explainer/) | Explains a query, flags traps, and proposes validation. |
| [Regex Design Assistant](agents/019-regex-assistant/) | Designs a regex and validates it against examples. |
| [OpenAPI Documentation Auditor](agents/020-openapi-auditor/) | Finds vague descriptions, missing errors, and schema drift. |
| [arXiv Topic Digest](agents/021-arxiv-digest/) | Retrieves current papers and ranks them for a topic. |
| [Crossref Literature Scout](agents/022-crossref-literature-scout/) | Finds papers and explains why each may matter. |
| [Claim-to-Evidence Mapper](agents/023-claim-evidence-map/) | Labels claims as supported, contradicted, or missing evidence. |
| [Research Abstract Comparator](agents/024-abstract-comparer/) | Compares questions, methods, datasets, and limitations. |
| [Research Question Refiner](agents/025-question-refiner/) | Turns a broad idea into testable questions and criteria. |
| [Citation Normalizer](agents/026-citation-normalizer/) | Normalizes inconsistent citations and explains uncertain mappings. |
| [Paper Method Extractor](agents/027-paper-method-extractor/) | Extracts study design, sample, variables, and limitations. |
| [Systematic Review Screener](agents/028-review-screener/) | Applies inclusion criteria to candidate abstracts. |
| [Knowledge Gap Finder](agents/029-knowledge-gap-finder/) | Synthesizes findings, conflicts, and unanswered questions. |
| [Peer Review Panel](agents/030-peer-review-panel/) | Merges methodology, clarity, and reproducibility reviews. |
| [Support Ticket Router](agents/031-ticket-router/) | Routes tickets, assigns priority, and drafts internal notes. |
| [Refund Policy Assistant](agents/032-refund-policy-agent/) | Answers from policy and escalates ambiguous cases. |
| [SLA Risk Analyst](agents/033-sla-risk-monitor/) | Finds tickets likely to breach their SLA. |
| [Customer Reply Drafter](agents/034-customer-reply-drafter/) | Produces an accurate, empathetic response from case facts. |
| [Bug Reproduction Interviewer](agents/035-bug-repro-interviewer/) | Collects missing details until a report is reproducible. |
| [Vendor Proposal Scorer](agents/036-vendor-proposal-scorer/) | Scores proposals against a cited rubric. |
| [SOP Builder](agents/037-sop-builder/) | Converts rough notes into checks, steps, and rollback points. |
| [Escalation Briefing Agent](agents/038-escalation-summarizer/) | Condenses timeline, impact, attempted fixes, and next decision. |
| [Inventory Exception Investigator](agents/039-inventory-exception/) | Explains mismatches and proposes the next verification. |
| [Shift Handoff Writer](agents/040-shift-handoff/) | Merges notes and alerts by urgency and ownership. |
| [Expense Policy Auditor](agents/041-expense-auditor/) | Reviews expenses against policy with supported recommendations. |
| [Invoice Line Reviewer](agents/042-invoice-reviewer/) | Finds duplicate, unusual, and vague invoice lines. |
| [Contract Obligation Extractor](agents/043-contract-obligations/) | Extracts duties, dates, parties, and ambiguous clauses. |
| [Sales Call Qualifier](agents/044-sales-call-qualifier/) | Summarizes needs, authority, timing, risks, and next steps. |
| [Competitor Positioning Analyst](agents/045-competitor-positioning/) | Produces evidence-linked product differences. |
| [Pricing Feedback Clusterer](agents/046-feedback-clusterer/) | Groups comments into themes with evidence and exceptions. |
| [KPI Narrative Agent](agents/047-kpi-narrator/) | Turns metrics into factual trends and open questions. |
| [Procurement Comparison Agent](agents/048-procurement-comparison/) | Normalizes offers and compares cost, fit, risk, and gaps. |
| [Forecast Assumption Critic](agents/049-forecast-critic/) | Stress-tests assumptions and identifies key sensitivity. |
| [Board Brief Composer](agents/050-board-brief/) | Synthesizes metrics, risks, and status into a concise brief. |
| [PII Redaction Reviewer](agents/051-pii-redactor/) | Proposes redactions and checks that meaning survives. |
| [Secret Leak Review Agent](agents/052-secret-leak-reviewer/) | Combines deterministic patterns with LLM review. |
| [Prompt Injection Scanner](agents/053-prompt-injection-scanner/) | Detects task override and exfiltration attempts. |
| [Policy Compliance Checker](agents/054-policy-compliance/) | Cites the clause supporting or conflicting with an action. |
| [Access Request Reviewer](agents/055-access-request-review/) | Reviews least privilege and routes exceptions to a person. |
| [Data Retention Review Agent](agents/056-retention-reviewer/) | Maps datasets to retention rules and flags missing ownership. |
| [Moderation Appeal Reviewer](agents/057-moderation-appeal/) | Re-evaluates synthetic moderation decisions against policy. |
| [Answer Grounding Checker](agents/058-grounding-checker/) | Labels each answer claim against supplied sources. |
| [Secure Configuration Auditor](agents/059-secure-config-auditor/) | Prioritizes insecure settings and fixes. |
| [Data Sharing Approval Workflow](agents/060-data-sharing-approval/) | Releases only approved fields and waits for a human decision. |
| [Evidence-First Blog Outliner](agents/061-blog-outline/) | Builds an outline limited to supplied facts. |
| [RSS Newsletter Curator](agents/062-rss-newsletter/) | Selects relevant feed items and writes a sourced digest. |
| [Multi-Channel Copy Adapter](agents/063-channel-adapter/) | Adapts one announcement for email, chat, and social. |
| [Technical Concept Explainer](agents/064-technical-explainer/) | Creates beginner, practitioner, and expert explanations. |
| [FAQ Generator](agents/065-faq-generator/) | Produces likely questions with grounded answers. |
| [Podcast Show Notes Agent](agents/066-podcast-show-notes/) | Extracts chapters, ideas, paraphrases, and links. |
| [Grounded Product Description Writer](agents/067-product-description/) | Writes only supported claims and flags missing ones. |
| [Localization Review Agent](agents/068-localization-review/) | Checks meaning, tone, placeholders, and layout risk. |
| [Style Consistency Editor](agents/069-style-consistency/) | Finds terminology and voice drift across documents. |
| [Press Release Fact Checker](agents/070-press-release-fact-check/) | Verifies draft claims against approved facts. |
| [Receipt Vision Extractor](agents/071-receipt-vision/) | Extracts validated fields from receipt images. |
| [Form Image Reader](agents/072-form-image-reader/) | Extracts form fields and names unreadable regions. |
| [PDF Executive Summary Agent](agents/073-pdf-executive-summary/) | Produces a page-referenced summary and open questions. |
| [CSV Anomaly Narrator](agents/074-csv-anomaly-narrator/) | Explains anomalies found by deterministic statistics. |
| [JSON Structure Mapper](agents/075-json-mapper/) | Infers a data dictionary and quality warnings. |
| [YAML Configuration Explainer](agents/076-yaml-config-explainer/) | Explains interactions, defaults, and operator mistakes. |
| [XML Feed Normalizer](agents/077-xml-feed-normalizer/) | Normalizes feed items and explains malformed entries. |
| [Multilingual Transcript Summarizer](agents/078-multilingual-transcript/) | Summarizes in English while preserving names and uncertainty. |
| [Screenshot Alt-Text Agent](agents/079-accessible-alt-text/) | Produces concise and extended accessible descriptions. |
| [Semantic Duplicate Finder](agents/080-duplicate-document-finder/) | Finds near-duplicates and explains substantive differences. |
| [Earthquake Activity Briefing](agents/081-earthquake-briefing/) | Produces a severity-ordered factual briefing. |
| [Weather Risk Briefing](agents/082-weather-risk/) | Converts a forecast into heat, rain, and wind cautions. |
| [Country Profile Agent](agents/083-country-profile/) | Writes a compact profile from current country facts. |
| [Open Library Discovery Agent](agents/084-library-discovery/) | Finds books using metadata rather than invented reviews. |
| [Development Indicator Narrator](agents/085-world-bank-narrator/) | Describes trends, reversals, and missing values. |
| [Public Holiday Planning Agent](agents/086-holiday-planner/) | Builds a planning brief around public-holiday dates. |
| [GitHub Repository Scout](agents/087-github-repo-scout/) | Compares activity and documentation signals with caveats. |
| [Hacker News Trend Analyst](agents/088-hacker-news-trends/) | Groups recurring technical themes with linked evidence. |
| [Exchange Rate Movement Explainer](agents/089-exchange-rate-explainer/) | Explains a small currency series without financial advice. |
| [Spaceflight News Digest](agents/090-spaceflight-news/) | Deduplicates and summarizes recent spaceflight stories. |
| [Specialist Routing Agent](agents/091-specialist-router/) | Routes work to billing, technical, or account specialists. |
| [Supervisor and Worker Team](agents/092-supervisor-team/) | Decomposes a brief and combines completed specialist work. |
| [Evaluator-Optimizer Writer](agents/093-evaluator-optimizer/) | Drafts and critiques until a rubric passes or budget ends. |
| [Parallel Perspective Debate](agents/094-parallel-debate/) | Runs advocate, skeptic, and operator views concurrently. |
| [Consensus Review Panel](agents/095-consensus-panel/) | Returns consensus only when a typed threshold is met. |
| [Research-Then-Write Agent](agents/096-research-then-write/) | Lets a writer use keyless lookup tools before answering. |
| [First-Satisfactory Answer Race](agents/097-race-to-answer/) | Tries strategies concurrently and selects the first useful answer. |
| [Budget-Adaptive Analysis Pipeline](agents/098-budget-adaptive-pipeline/) | Degrades cleanly as token, call, or time budgets run out. |
| [Durable Human Approval Pipeline](agents/099-durable-approval-pipeline/) | Pauses after drafting and resumes without repeating the call. |
| [Context-Bounded Interactive Q&A Agent](agents/100-contextual-qa-agent/) | Answers repeated questions over a local knowledge pack. |

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
