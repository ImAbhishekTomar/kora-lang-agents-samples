import { existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const agentsRoot = join(root, "agents");

const agents = [
  ["068-localization-review", "Localization Review Agent", "reviews paired strings for meaning, tone, placeholders, and layout risk", "synthetic `data/strings.json`", "JSON parsing, field patterns, parallel agents, typed results"],
  ["069-style-consistency", "Style Consistency Editor", "finds terminology and voice drift across a document set", "synthetic `data/chapters/*.md`", "filesystem globbing, parallel analysis, a glossary tool, synthesis"],
  ["070-press-release-fact-check", "Press Release Fact Checker", "checks every factual draft claim against approved facts", "synthetic `data/draft.md` and `data/approved_facts.json`", "claim extraction, parallel evidence checks, evaluator results, uncertainty"],
  ["071-receipt-vision", "Receipt Vision Extractor", "extracts validated merchant, date, total, tax, and category fields", "generated synthetic `data/receipts/*.png` images", "image values, vision input, typed schemas, field patterns, parallelism"],
  ["072-form-image-reader", "Form Image Reader", "extracts form fields and identifies unreadable regions", "generated synthetic `data/form.jpg`", "image values, multimodal analysis, uncertainty, human escalation"],
  ["073-pdf-executive-summary", "PDF Executive Summary Agent", "creates a page-referenced summary and unresolved questions", "synthetic `data/report.pdf`", "PDF pages, context policy, parallel summaries, reducer analysis"],
  ["074-csv-anomaly-narrator", "CSV Anomaly Narrator", "finds deterministic candidate anomalies and explains the meaningful ones", "synthetic `data/metrics.csv`", "typed CSV, calculation tools, model tool loop, guards"],
  ["075-json-mapper", "JSON Structure Mapper", "infers a data dictionary and quality warnings from sample events", "synthetic `data/events.json`", "JSON parsing, dynamic boundary validation, typed results, failure values"],
  ["076-yaml-config-explainer", "YAML Configuration Explainer", "explains configuration interactions, defaults, and operator mistakes", "synthetic `data/app.yaml`", "safe YAML parsing, deterministic tools, typed output, guards"],
  ["077-xml-feed-normalizer", "XML Feed Normalizer", "normalizes feed items and explains malformed entries", "synthetic `data/feed.xml`", "safe XML parsing, constructors, result matching, parallel analysis"],
  ["078-multilingual-transcript", "Multilingual Transcript Summarizer", "summarizes mixed-language text while preserving names and uncertainty", "synthetic `data/multilingual.txt`", "field patterns, context policy, typed analysis, streaming"],
  ["079-accessible-alt-text", "Screenshot Alt-Text Agent", "writes concise and extended accessible image descriptions", "generated synthetic `data/dashboard.png`", "image input, vision, typed output, evaluator agent"],
  ["080-duplicate-document-finder", "Semantic Duplicate Finder", "finds near-duplicate documents and explains substantive differences", "synthetic `data/documents/*.md`", "filesystem globbing, pair generation, parallelism, time budgets"],
  ["081-earthquake-briefing", "Earthquake Activity Briefing", "turns recent events into a severity-ordered factual briefing", "keyless public USGS Earthquake GeoJSON API", "HTTP, JSON, guards, typed results, failure handling"],
  ["082-weather-risk", "Weather Risk Briefing", "converts a forecast into heat, rain, and wind cautions", "keyless public Open-Meteo API", "HTTP, JSON, threshold tools, structured analysis"],
  ["083-country-profile", "Country Profile Agent", "writes a compact profile from current country facts", "keyless public REST Countries API", "HTTP, JSON, typed boundary validation, outcome alternatives"],
  ["084-library-discovery", "Open Library Discovery Agent", "finds books from metadata without inventing reviews", "keyless public Open Library Search API", "HTTP, JSON, parallel scoring, typed results, budgets"],
  ["085-world-bank-narrator", "Development Indicator Narrator", "describes indicator trends, reversals, and missing values", "keyless public World Bank API", "HTTP, JSON, calculation tools, uncertainty"],
  ["086-holiday-planner", "Public Holiday Planning Agent", "builds a planning brief around official holiday dates", "keyless public Nager.Date API", "HTTP, JSON, journaled time, typed schedules, validation tools"],
  ["087-github-repo-scout", "GitHub Repository Scout", "compares public repository activity and documentation signals", "unauthenticated public GitHub REST API", "HTTP, JSON, parallel requests, shared time and token budgets"],
  ["088-hacker-news-trends", "Hacker News Trend Analyst", "groups recurring technical themes with linked evidence", "keyless public Hacker News Algolia API", "HTTP, JSON, map-reduce analysis, context policy"],
  ["089-exchange-rate-explainer", "Exchange Rate Movement Explainer", "explains a historical currency series without financial advice", "keyless public Frankfurter API", "HTTP, JSON, deterministic deltas, tools, guards"],
  ["090-spaceflight-news", "Spaceflight News Digest", "deduplicates and summarizes recent spaceflight stories", "keyless public Spaceflight News API", "HTTP, JSON, parallel fetches, reducer agent, token streaming"],
  ["091-specialist-router", "Specialist Routing Agent", "routes a request to billing, technical, or account specialist agents", "terminal prompt and fixed synthetic requests", "agents as tools, nested budgets, typed routing, field patterns"],
  ["092-supervisor-team", "Supervisor and Worker Team", "delegates evidence and risk work, then combines completed results", "synthetic `data/brief.md`", "supervisor, agents as tools, context policy, nested budgets"],
  ["093-evaluator-optimizer", "Evaluator-Optimizer Writer", "drafts and critiques until a rubric passes or the loop ends", "terminal prompt and synthetic `data/rubric.md`", "agent loop, max-step budget, typed feedback, nested mocks"],
  ["094-parallel-debate", "Parallel Perspective Debate", "runs advocate, skeptic, and operator views before synthesis", "terminal prompt", "parallel agents, isolated heaps, shared budget, parallel mock propagation"],
  ["095-consensus-panel", "Consensus Review Panel", "returns consensus only when a deterministic vote threshold is met", "fixed synthetic case data", "parallel agents, vote tool, match guards, nested typed mocks"],
  ["096-research-then-write", "Research-Then-Write Agent", "uses public metadata lookup tools before writing a sourced answer", "terminal prompt plus keyless Open Library and Crossref APIs", "tool loop, HTTP tools, context policy, tool-call watcher"],
  ["097-race-to-answer", "First-Satisfactory Answer Race", "tries several solution strategies and selects the earliest satisfactory answer", "terminal prompt and fixed strategy list", "parallel first, guarded outcomes, break values, time budget"],
  ["098-budget-adaptive-pipeline", "Budget-Adaptive Analysis Pipeline", "keeps partial extraction and critique work when later stages fail", "synthetic `data/long_report.md`", "nested budgets, outcome alternatives, partial work, budget introspection"],
  ["099-durable-approval-pipeline", "Durable Human Approval Pipeline", "drafts a reversible plan, pauses for approval, and writes once on resume", "terminal request and durable human answer", "durable journal, notes, ask_human, redaction, exactly-once write"],
  ["100-contextual-qa-agent", "Context-Bounded Interactive Q&A Agent", "answers repeated questions from local product and runbook files", "synthetic `data/knowledge/*.md` plus terminal questions", "tools, context policy, interactive loop, budgets, typed results"],
];

for (const [slug, title, job, source, features] of agents) {
  const readme = join(agentsRoot, slug, "README.md");
  if (existsSync(readme)) continue;
  const durable = slug === "099-durable-approval-pipeline";
  const liveCommand = durable
    ? `kora run --durable agents/${slug}/main.ko\nkora runs agents/${slug}/main.ko\n# after it pauses: kora answer agents/${slug}/main.ko <run-id> yes`
    : `kora run --report agents/${slug}/main.ko`;
  writeFileSync(
    readme,
    `# ${title}\n\n## Job\n\nThis agent ${job}.\n\n## Data source and provenance\n\nInput comes from ${source}. Checked-in fixtures are synthetic and contain no private or operational data. Public-source agents use keyless HTTPS endpoints and handle network failure as a value. The program never reads or prints the OpenAI credential configured by the project.\n\n## Kora features\n\n${features}. The live path makes a typed GPT call through the shared \`gpt\` role, and every model outcome is handled explicitly.\n\n## Check and test without model spend\n\nRun from the samples repository root:\n\n\`\`\`sh\nkora check agents/${slug}/main.ko\nkora test agents/${slug}/main.ko\n\`\`\`\n\n## Live run\n\n\`\`\`sh\n${liveCommand}\n\`\`\`\n\n## Expected output\n\nThe tests are deterministic and use typed model mocks. A live run prints a grounded result or a clear uncertain, exhausted, provider, input, or network failure. Exact GPT wording varies.\n\n## Limits\n\nThis is a review aid, not an autonomous authority. A person must review consequential publishing, security, privacy, access, legal, medical, or financial decisions. Do not record private inputs into cassettes intended for publication.\n`,
  );
}
