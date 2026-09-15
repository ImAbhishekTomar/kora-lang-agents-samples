# 062 - RSS Newsletter Curator

## Job

turns a public science feed into a sourced digest.

## Data source and provenance

live keyless BBC Science RSS over HTTPS. Repository fixtures are synthetic and contain no operational secrets or personal data. The live URL is keyless and public; feed availability and contents can change.

## Kora features

HTTP, safe XML parsing, parallel selection, typed output, and streaming. The agent declares a token/call/step budget and explicitly handles `Ok`, `Uncertain`, `Exhausted`, and `Failed`.

## Check, test, and run

From the samples repository root:

```sh
kora check agents/062-rss-newsletter/main.ko
kora test agents/062-rss-newsletter/main.ko
kora run agents/062-rss-newsletter/main.ko
```

## Expected output

Tests pass without calling a model. A live run prints a short decision and grounded summary. It can instead print a feed/network failure as a normal value.

## Limits

This is a review aid, not an autonomous authority. It does not independently verify source claims, and humans must review consequential publishing, moderation, security, privacy, access, legal, or product decisions.

