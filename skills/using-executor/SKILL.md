---
name: using-executor
description: Load Executor's canonical instructions for finding and calling connected integrations. Use when a task needs an external service or the user asks to use Executor.
---

# Using Executor

Executor provides its current calling instructions through its MCP `skills` tool.

Call Executor's `skills` tool with:

```json
{ "name": "execute" }
```

Follow the returned instructions as the canonical, current contract for using Executor's `execute` tool. Do not substitute instructions from this plugin or rely on a remembered copy.

If the `skills` tool is unavailable, tell the user that the Executor MCP server needs to be connected or reloaded in Cursor.
