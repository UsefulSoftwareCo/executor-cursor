---
name: executor-setup
description: Check the Executor connection and explain the next setup step.
---

# Set up Executor

Check whether the Executor MCP server and its `skills`, `search`, `describe`, `call`, `execute` and `resume` tools are available.

If they are available:

1. Follow the instructions the Executor server sent when Cursor connected. Call `skills({})` to list the apps and skills this connection can see.
2. Run this program with `execute`, passing it as the program source its input schema asks for:

   ```js
   return await tools.search({ query: "Executor" });
   ```

   It should return callable paths for the Executor app itself. If it does, the connection works.
3. Summarize the apps you found and confirm Executor is ready. Do not show credentials or private payload contents.

If authentication is required, ask the user to finish Cursor's Executor connection prompt. Executor opens in the browser. The user signs in, chooses an organization and approves the connection. Then retry.

The connection is bound to the organization chosen at sign-in. Switching organization in the dashboard later does not change it. To use a different organization, disconnect Executor in Cursor, connect again and choose that organization.

If Executor is unavailable or disconnected, direct the user to Cursor's Customize or MCP settings, select Executor and choose Connect. If its tools still do not appear, reload the window or start a new chat. Do not ask the user to paste an access token.

If Executor connects but has no app for the service the user needs, direct them to [app.executor.sh](https://app.executor.sh). There they can add the app from the catalog and connect its account on the app's Accounts tab. Then retry the check.
