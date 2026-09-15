# Catalog and build plan

The suite is organized as ten groups of ten. Each row names the real job and
where the example gets its input. Checked-in files are synthetic unless a row
explicitly names a public endpoint.

## 001-010 Personal productivity

| # | Agent | What it does | Data source |
|---|---|---|---|
| 001 | [Daily Plan Builder](agents/001-daily-planner/) | Turns tasks, constraints, and energy into a time-blocked plan. | Terminal prompt |
| 002 | [Inbox Triage Desk](agents/002-inbox-triage/) | Classifies messages by urgency and recommends the next action. | `data/inbox.json` |
| 003 | [Meeting Action Extractor](agents/003-meeting-actions/) | Extracts owners, dates, decisions, and open questions. | `data/meeting.txt` |
| 004 | [Note Connection Finder](agents/004-note-linker/) | Suggests useful cross-links between Markdown notes. | `data/notes/*.md` |
| 005 | [Decision Journal Coach](agents/005-decision-journal/) | Challenges assumptions and pauses for the user's final choice. | Terminal prompt and durable notes |
| 006 | [Interactive Study Coach](agents/006-study-coach/) | Explains, quizzes, and adapts to the learner's answer. | Terminal prompt |
| 007 | [Habit Reflection Analyst](agents/007-habit-reflection/) | Finds habit patterns and proposes one measurable experiment. | `data/habits.csv` |
| 008 | [Weather-Aware Packing Advisor](agents/008-packing-advisor/) | Combines a forecast and trip constraints into a packing list. | Public Open-Meteo API |
| 009 | [Pantry Meal Planner](agents/009-pantry-meal-planner/) | Builds three meals from available ingredients and constraints. | `data/pantry.json` |
| 010 | [Resume Tailoring Assistant](agents/010-resume-tailor/) | Suggests truthful resume edits grounded in a job description. | `data/resume.md`, `data/job.txt` |

## 011-020 Software engineering

| # | Agent | What it does | Data source |
|---|---|---|---|
| 011 | [Software Issue Triage Agent](agents/011-issue-triage/) | Assigns severity, component, reproduction quality, and next action. | `data/issues.json` |
| 012 | [Log Root-Cause Investigator](agents/012-log-root-cause/) | Correlates logs with deployment facts and ranks hypotheses. | `data/app.log`, `data/deploy.json` |
| 013 | [Release Notes Writer](agents/013-release-notes/) | Converts commit records into grouped user-facing notes. | `data/commits.json` |
| 014 | [Patch Review Agent](agents/014-code-review/) | Reviews a diff for correctness, security, tests, and maintainability. | `data/change.diff` |
| 015 | [Test Case Designer](agents/015-test-designer/) | Generates happy, edge, failure, and abuse tests from a spec. | `data/api_spec.md` |
| 016 | [Dependency Release Scout](agents/016-dependency-release-scout/) | Summarizes recent releases and upgrade risks. | Public GitHub Releases API |
| 017 | [Incident Commander Copilot](agents/017-incident-commander/) | Tracks an incident and asks approval before risky action. | Terminal updates and durable notes |
| 018 | [SQL Query Explainer](agents/018-sql-explainer/) | Explains a query, flags traps, and proposes validation. | `data/query.sql` |
| 019 | [Regex Design Assistant](agents/019-regex-assistant/) | Designs a regex and validates it against examples. | Terminal prompt and fixed cases |
| 020 | [OpenAPI Documentation Auditor](agents/020-openapi-auditor/) | Finds vague descriptions, missing errors, and schema drift. | `data/openapi.json` |

## 021-030 Research and knowledge

| # | Agent | What it does | Data source |
|---|---|---|---|
| 021 | [arXiv Topic Digest](agents/021-arxiv-digest/) | Retrieves current papers and ranks them for a topic. | Public arXiv API |
| 022 | [Crossref Literature Scout](agents/022-crossref-literature-scout/) | Finds papers and explains why each may matter. | Public Crossref API |
| 023 | [Claim-to-Evidence Mapper](agents/023-claim-evidence-map/) | Labels claims as supported, contradicted, or missing evidence. | `data/article.md`, `data/sources/*.txt` |
| 024 | [Research Abstract Comparator](agents/024-abstract-comparer/) | Compares questions, methods, datasets, and limitations. | `data/abstracts.json` |
| 025 | [Research Question Refiner](agents/025-question-refiner/) | Turns a broad idea into testable questions and criteria. | Terminal prompt |
| 026 | [Citation Normalizer](agents/026-citation-normalizer/) | Normalizes inconsistent citations and explains uncertain mappings. | `data/citations.json` |
| 027 | [Paper Method Extractor](agents/027-paper-method-extractor/) | Extracts study design, sample, variables, and limitations. | `data/paper.pdf` |
| 028 | [Systematic Review Screener](agents/028-review-screener/) | Applies inclusion criteria to candidate abstracts. | `data/candidates.csv` |
| 029 | [Knowledge Gap Finder](agents/029-knowledge-gap-finder/) | Synthesizes findings, conflicts, and unanswered questions. | `data/corpus/*.md` |
| 030 | [Peer Review Panel](agents/030-peer-review-panel/) | Merges methodology, clarity, and reproducibility reviews. | `data/manuscript.md` |

## 031-040 Customer support and operations

| # | Agent | What it does | Data source |
|---|---|---|---|
| 031 | [Support Ticket Router](agents/031-ticket-router/) | Routes tickets, assigns priority, and drafts internal notes. | `data/tickets.jsonl` |
| 032 | [Refund Policy Assistant](agents/032-refund-policy-agent/) | Answers from policy and escalates ambiguous cases. | `data/policy.md`, `data/request.txt` |
| 033 | [SLA Risk Analyst](agents/033-sla-risk-monitor/) | Finds tickets likely to breach their SLA. | `data/open_tickets.csv` |
| 034 | [Customer Reply Drafter](agents/034-customer-reply-drafter/) | Produces an accurate, empathetic response from case facts. | `data/thread.json` |
| 035 | [Bug Reproduction Interviewer](agents/035-bug-repro-interviewer/) | Collects missing details until a report is reproducible. | Durable human answers and notes |
| 036 | [Vendor Proposal Scorer](agents/036-vendor-proposal-scorer/) | Scores proposals against a cited rubric. | `data/rubric.json`, `data/proposals/*.md` |
| 037 | [SOP Builder](agents/037-sop-builder/) | Converts rough notes into checks, steps, and rollback points. | `data/rough_notes.md` |
| 038 | [Escalation Briefing Agent](agents/038-escalation-summarizer/) | Condenses timeline, impact, attempted fixes, and next decision. | `data/escalation.txt` |
| 039 | [Inventory Exception Investigator](agents/039-inventory-exception/) | Explains mismatches and proposes the next verification. | `data/inventory.csv` |
| 040 | [Shift Handoff Writer](agents/040-shift-handoff/) | Merges notes and alerts by urgency and ownership. | `data/shift_notes.md`, `data/alerts.json` |

## 041-050 Business and finance

| # | Agent | What it does | Data source |
|---|---|---|---|
| 041 | [Expense Policy Auditor](agents/041-expense-auditor/) | Reviews expenses against policy with supported recommendations. | `data/expenses.csv`, `data/policy.md` |
| 042 | [Invoice Line Reviewer](agents/042-invoice-reviewer/) | Finds duplicate, unusual, and vague invoice lines. | `data/invoice.json` |
| 043 | [Contract Obligation Extractor](agents/043-contract-obligations/) | Extracts duties, dates, parties, and ambiguous clauses. | `data/sample_contract.txt` |
| 044 | [Sales Call Qualifier](agents/044-sales-call-qualifier/) | Summarizes needs, authority, timing, risks, and next steps. | `data/sales_call.txt` |
| 045 | [Competitor Positioning Analyst](agents/045-competitor-positioning/) | Produces evidence-linked product differences. | `data/products/*.md` |
| 046 | [Pricing Feedback Clusterer](agents/046-feedback-clusterer/) | Groups comments into themes with evidence and exceptions. | `data/feedback.csv` |
| 047 | [KPI Narrative Agent](agents/047-kpi-narrator/) | Turns metrics into factual trends and open questions. | `data/kpis.json` |
| 048 | [Procurement Comparison Agent](agents/048-procurement-comparison/) | Normalizes offers and compares cost, fit, risk, and gaps. | `data/offers/*.json` |
| 049 | [Forecast Assumption Critic](agents/049-forecast-critic/) | Stress-tests assumptions and identifies key sensitivity. | `data/forecast.csv` |
| 050 | [Board Brief Composer](agents/050-board-brief/) | Synthesizes metrics, risks, and status into a concise brief. | `data/metrics.json`, `data/status.md` |

## 051-060 Safety, privacy, and governance

| # | Agent | What it does | Data source |
|---|---|---|---|
| 051 | [PII Redaction Reviewer](agents/051-pii-redactor/) | Proposes redactions and checks that meaning survives. | `data/customer_note.txt` |
| 052 | [Secret Leak Review Agent](agents/052-secret-leak-reviewer/) | Combines deterministic patterns with LLM review. | `data/sample.diff` |
| 053 | [Prompt Injection Scanner](agents/053-prompt-injection-scanner/) | Detects task override and exfiltration attempts. | `data/untrusted_pages.json` |
| 054 | [Policy Compliance Checker](agents/054-policy-compliance/) | Cites the clause supporting or conflicting with an action. | `data/policy.md`, `data/proposal.txt` |
| 055 | [Access Request Reviewer](agents/055-access-request-review/) | Reviews least privilege and routes exceptions to a person. | `data/requests.json` |
| 056 | [Data Retention Review Agent](agents/056-retention-reviewer/) | Maps datasets to retention rules and flags missing ownership. | `data/datasets.csv`, `data/retention_policy.md` |
| 057 | [Moderation Appeal Reviewer](agents/057-moderation-appeal/) | Re-evaluates synthetic moderation decisions against policy. | `data/appeals.json` |
| 058 | [Answer Grounding Checker](agents/058-grounding-checker/) | Labels each answer claim against supplied sources. | `data/answer.md`, `data/sources/*.md` |
| 059 | [Secure Configuration Auditor](agents/059-secure-config-auditor/) | Prioritizes insecure settings and fixes. | `data/service.yaml` |
| 060 | [Data Sharing Approval Workflow](agents/060-data-sharing-approval/) | Releases only approved fields and waits for a human decision. | `data/sharing_request.json` |

## 061-070 Content and communication

| # | Agent | What it does | Data source |
|---|---|---|---|
| 061 | [Evidence-First Blog Outliner](agents/061-blog-outline/) | Builds an outline limited to supplied facts. | `data/brief.md`, `data/facts.json` |
| 062 | [RSS Newsletter Curator](agents/062-rss-newsletter/) | Selects relevant feed items and writes a sourced digest. | Public BBC science RSS feed |
| 063 | [Multi-Channel Copy Adapter](agents/063-channel-adapter/) | Adapts one announcement for email, chat, and social. | `data/announcement.md` |
| 064 | [Technical Concept Explainer](agents/064-technical-explainer/) | Creates beginner, practitioner, and expert explanations. | Terminal prompt |
| 065 | [FAQ Generator](agents/065-faq-generator/) | Produces likely questions with grounded answers. | `data/docs/*.md` |
| 066 | [Podcast Show Notes Agent](agents/066-podcast-show-notes/) | Extracts chapters, ideas, paraphrases, and links. | `data/transcript.txt` |
| 067 | [Grounded Product Description Writer](agents/067-product-description/) | Writes only supported claims and flags missing ones. | `data/product.json` |
| 068 | [Localization Review Agent](agents/068-localization-review/) | Checks meaning, tone, placeholders, and layout risk. | `data/strings.json` |
| 069 | [Style Consistency Editor](agents/069-style-consistency/) | Finds terminology and voice drift across documents. | `data/chapters/*.md` |
| 070 | [Press Release Fact Checker](agents/070-press-release-fact-check/) | Verifies draft claims against approved facts. | `data/draft.md`, `data/approved_facts.json` |

## 071-080 Document, data, and media

| # | Agent | What it does | Data source |
|---|---|---|---|
| 071 | [Receipt Vision Extractor](agents/071-receipt-vision/) | Extracts validated fields from receipt images. | `data/receipts/*.png` |
| 072 | [Form Image Reader](agents/072-form-image-reader/) | Extracts form fields and names unreadable regions. | `data/form.jpg` |
| 073 | [PDF Executive Summary Agent](agents/073-pdf-executive-summary/) | Produces a page-referenced summary and open questions. | `data/report.pdf` |
| 074 | [CSV Anomaly Narrator](agents/074-csv-anomaly-narrator/) | Explains anomalies found by deterministic statistics. | `data/metrics.csv` |
| 075 | [JSON Structure Mapper](agents/075-json-mapper/) | Infers a data dictionary and quality warnings. | `data/events.json` |
| 076 | [YAML Configuration Explainer](agents/076-yaml-config-explainer/) | Explains interactions, defaults, and operator mistakes. | `data/app.yaml` |
| 077 | [XML Feed Normalizer](agents/077-xml-feed-normalizer/) | Normalizes feed items and explains malformed entries. | `data/feed.xml` |
| 078 | [Multilingual Transcript Summarizer](agents/078-multilingual-transcript/) | Summarizes in English while preserving names and uncertainty. | `data/multilingual.txt` |
| 079 | [Screenshot Alt-Text Agent](agents/079-accessible-alt-text/) | Produces concise and extended accessible descriptions. | `data/dashboard.png` |
| 080 | [Semantic Duplicate Finder](agents/080-duplicate-document-finder/) | Finds near-duplicates and explains substantive differences. | `data/documents/*.md` |

## 081-090 Public data agents

| # | Agent | What it does | Data source |
|---|---|---|---|
| 081 | [Earthquake Activity Briefing](agents/081-earthquake-briefing/) | Produces a severity-ordered factual briefing. | Public USGS Earthquake API |
| 082 | [Weather Risk Briefing](agents/082-weather-risk/) | Converts a forecast into heat, rain, and wind cautions. | Public Open-Meteo API |
| 083 | [Country Profile Agent](agents/083-country-profile/) | Writes a compact profile from current country facts. | Public REST Countries API |
| 084 | [Open Library Discovery Agent](agents/084-library-discovery/) | Finds books using metadata rather than invented reviews. | Public Open Library API |
| 085 | [Development Indicator Narrator](agents/085-world-bank-narrator/) | Describes trends, reversals, and missing values. | Public World Bank API |
| 086 | [Public Holiday Planning Agent](agents/086-holiday-planner/) | Builds a planning brief around public-holiday dates. | Public Nager.Date API |
| 087 | [GitHub Repository Scout](agents/087-github-repo-scout/) | Compares activity and documentation signals with caveats. | Public GitHub REST API |
| 088 | [Hacker News Trend Analyst](agents/088-hacker-news-trends/) | Groups recurring technical themes with linked evidence. | Public Hacker News Algolia API |
| 089 | [Exchange Rate Movement Explainer](agents/089-exchange-rate-explainer/) | Explains a small currency series without financial advice. | Public Frankfurter API |
| 090 | [Spaceflight News Digest](agents/090-spaceflight-news/) | Deduplicates and summarizes recent spaceflight stories. | Public Spaceflight News API |

## 091-100 Advanced agent patterns

| # | Agent | What it does | Data source |
|---|---|---|---|
| 091 | [Specialist Routing Agent](agents/091-specialist-router/) | Routes work to billing, technical, or account specialists. | Terminal prompt and fixed requests |
| 092 | [Supervisor and Worker Team](agents/092-supervisor-team/) | Decomposes a brief and combines completed specialist work. | `data/brief.md` |
| 093 | [Evaluator-Optimizer Writer](agents/093-evaluator-optimizer/) | Drafts and critiques until a rubric passes or budget ends. | Terminal prompt, `data/rubric.md` |
| 094 | [Parallel Perspective Debate](agents/094-parallel-debate/) | Runs advocate, skeptic, and operator views concurrently. | Terminal prompt |
| 095 | [Consensus Review Panel](agents/095-consensus-panel/) | Returns consensus only when a typed threshold is met. | Fixed synthetic cases |
| 096 | [Research-Then-Write Agent](agents/096-research-then-write/) | Lets a writer use keyless lookup tools before answering. | Terminal prompt, public Open Library and Crossref APIs |
| 097 | [First-Satisfactory Answer Race](agents/097-race-to-answer/) | Tries strategies concurrently and selects the first useful answer. | Fixed reasoning tasks |
| 098 | [Budget-Adaptive Analysis Pipeline](agents/098-budget-adaptive-pipeline/) | Degrades cleanly as token, call, or time budgets run out. | `data/long_report.md` |
| 099 | [Durable Human Approval Pipeline](agents/099-durable-approval-pipeline/) | Pauses after drafting and resumes without repeating the call. | Terminal prompt and human answer |
| 100 | [Context-Bounded Interactive Q&A Agent](agents/100-contextual-qa-agent/) | Answers repeated questions over a local knowledge pack. | `data/knowledge/*.md`, terminal prompts |

## Delivery phases

1. Build the 100 folders and synthetic fixtures.
2. Statistically check every Kora program.
3. Run every deterministic mock test without network or model spend.
4. Run one live GPT smoke test and keep the other 99 opt-in.
5. Add reviewed cassettes and CI only after data provenance is settled.
