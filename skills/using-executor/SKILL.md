---
name: using-executor
description: Find and call apps connected in Executor through its MCP tools. Use when a task needs an external service or the user asks to use Executor.
---

# Using Executor

Executor serves every app in the user's organization through one MCP server and six tools: `skills`, `search`, `describe`, `call`, `execute` and `resume`. Each app is reached by its slug, as `tools.<app>.<tool>`.

When Cursor connects, the server's MCP initialize instructions introduce Executor. Treat those instructions and each tool's input schema as the current contract. This file gives the order of steps. It does not replace them.

## Read the instructions apps ship

- `skills({})` lists the skills visible to this connection.
- `skills({ "app": "<app>" })` lists one app's skills.
- `skills({ "app": "<app>", "name": "<skill>" })` reads one skill.

The Executor app's own skills are `executor`, `code-mode` and `app-authoring`. Read `code-mode` before writing a long `execute` program. If an app you are about to use ships a skill, read it first. Use only app and skill names that `skills({})` or `search` returned.

## Find a tool

1. Call `search` with words describing the task. It returns each tool's exact path and input type.
2. Call `describe` with those paths for the full description and signature.

Never guess a tool path or argument name. Take both from `search` and `describe`.

## Call tools

For one call, or a few independent ones, use `call`:

```json
{ "calls": [{ "path": "tools.<app>.<tool>", "input": {} }] }
```

Each result has `ok` and either `value` or `error`. One failed call does not stop the others.

Use `execute` when one result feeds the next call, or when a large result should be filtered before it reaches you. It runs a JavaScript program in which app tools are async functions, and returns what the program returns:

```js
const result = await tools.<app>.<tool>({});
return result;
```

Inside a program, `tools.search({ query })` and `tools.search.describe({ paths })` work like the MCP tools. The program has no `fetch`, filesystem, timers or imports. Return only the fields you need. Output over the server's limit is refused, not truncated. After the user adds or changes an app, search again in a new `execute`.

## Approvals and input

A `call` or `execute` can pause for the user's approval or for input. Show the request to the user, then pass their answer to `resume` using the shape its schema and the paused result give. If the result has an `approvalUrl`, give the user that link and call `resume` once they have answered.

Never repeat the call or run the program again to get past a pause or a refusal. Earlier tool calls in it may already have taken effect.

## Accounts and credentials

Executor attaches credentials inside the app, so you never handle them. Never ask the user to paste a token, key or password into chat, and never read one from their files. If an app is missing an account, have Executor create a connection link and give it to the user, or send them to the app's Accounts tab at [app.executor.sh](https://app.executor.sh).

## When Executor is missing

If the `skills` tool is unavailable, tell the user to connect or reload the Executor MCP server in Cursor, or run `/executor-setup`.
