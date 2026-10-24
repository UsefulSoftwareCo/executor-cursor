# Executor for Cursor

A universal tool gateway for AI agents. Connect anything once, then use it across Cursor and every other agent harness.

Executor lets you configure APIs, MCP servers, authentication, accounts, and per-tool policies once. This plugin connects Cursor to that shared catalog and teaches the agent how to discover and call its tools efficiently.

## Install

### Cursor Marketplace

Install **Executor** from Cursor's Customize page, then choose **Connect**. Executor opens in your browser: sign in, choose the organization Cursor should use and approve the connection. The connection stays bound to that organization. To use a different one, connect again and choose it.

Add apps and connect their accounts at [app.executor.sh](https://app.executor.sh).

### Local development

Copy this repository into Cursor's local plugin directory:

```bash
mkdir -p ~/.cursor/plugins/local
cp -R /path/to/executor-cursor ~/.cursor/plugins/local/executor
```

Restart Cursor or run **Developer: Reload Window**, then open Customize and connect the Executor MCP server.

## Use

Run `/executor-setup` to verify the connection and see which integrations are available. After setup, ask Cursor to use any service connected in Executor—for example, “Use Executor to list my open GitHub issues.”

Executor may pause a tool call for authentication or approval. Complete the requested interaction and let Cursor resume the execution. Credentials stay in Executor's authentication flow and should never be pasted into chat.

## What this plugin includes

- The hosted Executor MCP endpoint at `https://mcp.executor.sh/mcp`
- A skill for finding and calling Executor apps with the `skills`, `search`, `describe`, `call`, `execute` and `resume` tools
- An `/executor-setup` connection check

## Development

Validate the plugin with:

```bash
npm test
```

The validation checks the manifest, component frontmatter, referenced paths, and production MCP endpoint.

## License

MIT
