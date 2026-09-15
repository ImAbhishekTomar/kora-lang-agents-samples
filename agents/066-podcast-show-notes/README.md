# 066 - Podcast Show Notes Agent

## Job

creates chapters, key ideas, paraphrases, and links.

## Data source and provenance

synthetic `data/transcript.txt`. Repository fixtures are synthetic and contain no operational secrets or personal data. The program never reads or prints the GPT credential configured by the project.

## Kora features

chunked parallel work, timecode pattern metadata, and reducer. The agent declares a token/call/step budget and explicitly handles `Ok`, `Uncertain`, `Exhausted`, and `Failed`.

## Check, test, and run

From the samples repository root:

```sh
kora check agents/066-podcast-show-notes/main.ko
kora test agents/066-podcast-show-notes/main.ko
kora run agents/066-podcast-show-notes/main.ko
```

## Expected output

Tests pass without calling a model. A live run prints a short decision and grounded summary. Exact model wording varies.

## Limits

This is a review aid, not an autonomous authority. It does not independently verify source claims, and humans must review consequential publishing, moderation, security, privacy, access, legal, or product decisions.

