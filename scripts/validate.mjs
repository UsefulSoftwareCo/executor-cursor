#!/usr/bin/env node

import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const readJson = async (relativePath) =>
  JSON.parse(await readFile(path.join(root, relativePath), "utf8"));

const manifest = await readJson(".cursor-plugin/plugin.json");
const mcp = await readJson("mcp.json");

assert.match(manifest.name, /^[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?$/);
assert.equal(manifest.name, "executor");
assert.match(manifest.version, /^\d+\.\d+\.\d+$/);
assert.equal(manifest.mcpServers, "mcp.json");
assert.equal(mcp.mcpServers.executor.url, "https://executor.sh/mcp");
assert.deepEqual(Object.keys(mcp.mcpServers), ["executor"]);

for (const referencedPath of [
  manifest.logo,
  manifest.mcpServers,
  manifest.skills,
  manifest.commands,
]) {
  assert.equal(path.isAbsolute(referencedPath), false, `${referencedPath} must be relative`);
  assert.equal(referencedPath.split(path.sep).includes(".."), false, `${referencedPath} escapes root`);
  await access(path.join(root, referencedPath));
}

for (const relativePath of [
  "skills/using-executor/SKILL.md",
  "commands/executor-setup.md",
]) {
  const content = await readFile(path.join(root, relativePath), "utf8");
  assert.match(content, /^---\n[\s\S]+?\n---\n/);
  assert.match(content, /\nname: [a-z0-9-]+\n/);
  assert.match(content, /\ndescription: .+\n/);
}

assert.equal((await stat(path.join(root, "assets/executor-icon.png"))).isFile(), true);

console.log("Executor Cursor plugin validation passed.");
