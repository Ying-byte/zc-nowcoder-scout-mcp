#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "nowcoder",
  boardId: "nowcoder-official",
  domain: "nowcoder.com",
  npmName: "zc-nowcoder-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
