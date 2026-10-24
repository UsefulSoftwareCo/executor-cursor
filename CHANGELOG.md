# Changelog

## 0.2.0

- Use `https://mcp.executor.sh/mcp` for the shared Cursor and Grok Bot plugin connection.
- Delegate Executor usage guidance to the canonical skill served by Executor's MCP `skills` tool.
- Rewrite the bundled `using-executor` skill and `/executor-setup` command for the Executor v2 tools (`skills`, `search`, `describe`, `call`, `execute`, `resume`) and drop the v1 `skills({ name: "execute" })` contract.
- Point setup at app.executor.sh and explain that a connection is bound to the organization chosen at sign-in.

## 0.1.0

- Add the Executor Cloud MCP connection.
- Add guidance for tool discovery, execution, approvals, and authentication.
- Add the `/executor-setup` command.
