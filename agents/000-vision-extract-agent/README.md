# vision-extract-agent

Reads the invoice PDFs in `datasets/invoices/` and writes one JSON file per
invoice to `output/`, in the shape of `datasets/invoices/invoice_1.json`.

```bash
kora run --record --report vision-extract-agent/extract.ko   # calls the model
kora run --replay --report vision-extract-agent/extract.ko   # free, deterministic
kora check vision-extract-agent/extract.ko
```

`INVOICES` reads only the first few, for trying a change without waiting on
the whole folder:

```bash
INVOICES=1 kora run --record vision-extract-agent/extract.ko
```

## How it works

Not every PDF needs a vision model. Half of this dataset carries a text layer,
and reading that is cheaper and exact — a rendered page is thousands of tokens
of pixels for text the document already spells out. So each invoice is routed:

| step | where |
|---|---|
| find the invoices | `fs.glob` |
| which way to read it | `pdf.info` — `has_text_layer` |
| **text layer** | `pdf.pages`, one entry per page, read by the default model |
| **no text layer** | `fs.bytes` → `pdf_render` images, read by the vision model |
| write the result | `json.stringify` + `fs.write` (atomic) |

Both paths fill the same declared `Invoice` type, and their instructions share
one `RULES` paragraph so they cannot drift into filling it two different ways.
The per-invoice line and the summary say which route each one took.

Nothing is written to disk that is not an answer. Pages exist as image values
for as long as the agent reading them needs, and no longer.

Rendering a PDF page needs PDFium, which Kora deliberately does not link: a
large C++ parser reading a file the program did not write has no business in
the process that holds the labels and the budget. It lives in the package's
helper instead, which is a separate program — so a crash or a hang in it is an
`Err` this agent can match on.

The package is handed bytes and never a path, which is why `kora.toml` grants
it `helper` and not `fs`: it can only see the documents this program chose to
open.

`model="vision"` names a role. `kora.toml` decides which model fills it. The
checked-in configuration uses OpenRouter's `openrouter/free` route and needs
`OPENROUTER_API_KEY`. For a stronger or dedicated model, change the role and
re-record:

```toml
[models]
vision = { name = "gpt-4o", api_key_env = "OPENAI_API_KEY" }
```

Cassettes are keyed on model, prompt, input, and call site, so changing the
model invalidates the matching recordings. Run `--record` once after
switching. The committed cassette is a fixture, not a fallback to a live
provider; a missing recording is reported in replay mode.

## Output shape

```json
{
  "fname": "invoice_1.pdf",
  "extracted": { "customer_name": "...", "items": [ ... ], ... }
}
```

Same fields as the dataset's `0_expected` block, with one difference: Kora has
no optional type yet, so a field the invoice does not carry comes back as `""`
or `0.0` rather than `null`.

## Layout

```
vision-extract-agent/
  extract.ko        the agent
  cassettes/        recorded model calls, committed
output/
  <invoice>.json    extracted records
```

## Setup

```bash
kora install vision-extract-agent/extract.ko
```

That fetches the `pdf_render` helper for this platform, verifies it against
the `sha256` the package pinned, and records what arrived in `kora.sums`.
Nothing else to install: no Python, no PDF library.

## Optional local vision model

The repository also includes an Ollama recipe. To use it, change the `vision`
role in `kora.toml` to the current full entry form:

```toml
[models]
vision = { name = "kora-invoice-vision", endpoint = "http://localhost:11434", api = "ollama", max_output_tokens = 8192 }
```

The context is sized from the dataset rather than guessed: every page of one
invoice goes in a single call, a page costs roughly 3000 tokens, and the
longest document here is four pages. Two of those fit side by side on a
laptop, which is what `BATCH = 2` in `extract.ko` assumes.

```bash
ollama pull qwen2.5vl:3b
ollama create kora-invoice-vision -f vision-extract-agent/Modelfile
```

For a more accurate read, `Modelfile.7b` is the same recipe on `qwen2.5vl:7b`.
Drop `BATCH` to 1 with it — six 7B vision calls at once is more than a 16 GB
machine holds, and the Ollama server dies rather than queues.

Ollama's own defaults do not work here: `moondream` holds 2048 tokens, less
than one rendered page, and the stock context truncates a multi-page invoice
because Kora sends every page in a single call and does not set `num_ctx`.

## While it runs

The program says what it is doing as it goes, so a slow model does not look
like a hang:

```
rendering datasets/invoices/*.pdf to page images at 150 dpi ...
  6 invoices rendered in 3s
reading 6 invoices, 2 at a time

  batch 1-2 of 6:
    invoice_1: reading 2 pages ...
    invoice_2: reading 2 pages ...
    ok  invoice_1  3 items  output/invoice_1.json
    ok  invoice_2  1 items  output/invoice_2.json
    2/6 done, 12840 tokens, 71s elapsed
```

`BATCH` in `extract.ko` is how many invoices are in flight at once. Results
come back in input order however the threads finish, so the log reads the same
way a sequential run would.
