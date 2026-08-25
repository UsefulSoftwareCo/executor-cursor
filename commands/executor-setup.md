---
name: executor-setup
description: Check the Executor connection and explain the next setup step.
---

# Set up Executor

Check whether the Executor MCP server and its `skills` and `execute` tools are available.

If they are available:

1. Call `skills` with `{ "name": "execute" }`.
2. Use `execute` to list the live saved-connection inventory.
3. Summarize the connected integration names and confirm Executor is ready. Do not expose credentials or private payload contents.

If authentication is required, ask the user to complete Cursor's Executor connection prompt, then retry.

If Executor is unavailable or disconnected, direct the user to Cursor's Customize or MCP settings, select Executor, and choose Connect. Do not ask the user to paste an access token.

If Executor connects but has no relevant integration, direct the user to [executor.sh](https://executor.sh) to add the integration, then retry the live inventory check.
