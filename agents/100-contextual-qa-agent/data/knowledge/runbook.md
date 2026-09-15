# Operations runbook

If an export fails, capture the request id, check the export worker health, and
retry once. Escalate after the second failure. Never ask a user for an API key,
password, or session cookie.
