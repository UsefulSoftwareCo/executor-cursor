---
name: using-executor
description: Find and call APIs, MCP servers, and connected services through Executor. Use when a task needs an external integration or the user asks to use Executor.
---

# Using Executor

Executor exposes a governed catalog of the user's connected integrations through a small MCP surface.

## Workflow

1. If the Executor MCP server is disconnected, tell the user to connect it in Cursor's MCP settings. Do not ask for credentials in chat.
2. Call Executor's `skills` tool with `{ "name": "execute" }` before the first integration call in a conversation. Treat the returned document as the current calling contract.
3. Use Executor's `execute` tool to search the live catalog, describe the selected tool, and call its exact returned path. Do not guess integration paths or enumerate the lazy `tools` proxy.
4. Keep discovery and related API work in one `execute` call when practical. Filter and aggregate inside the sandbox instead of making many model-mediated calls.
5. Branch on each tool result's `ok` field. Report expected domain errors clearly; do not present them as successful calls.
6. When an execution pauses for authentication, approval, or other interaction, surface the pause to the user and continue through Executor's supported resume flow.
7. Use Executor's live connection inventory when a requested service is ambiguous. If the needed account is not connected, name the missing integration without inventing a connection.

## Boundaries

- Executor policies and Cursor confirmations remain authoritative. Never bypass an approval or blocked policy.
- Before an irreversible or externally communicative action, state the exact proposed action and target. Execute it only when the user's request clearly authorizes that action.
- Do not request API keys, OAuth tokens, or other secrets in chat. Authentication belongs in Executor's browser flow.
- Minimize returned data. Summarize large upstream payloads unless the user asks for raw results.
