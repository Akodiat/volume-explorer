#!/usr/bin/env node

import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

console.log("Launching QIM Volume Explorer...");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// project root (one level above /bin)
const root = path.resolve(__dirname, "..");

const proc = spawn("npx", ["vite", "serve"], {
  cwd: root,
  stdio: "inherit",
  shell: true
});

proc.on("close", (code) => process.exit(code));