#!/usr/bin/env node

import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

console.log("Launching QIM Volume Explorer...");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Package root (where package.json is)
const root = path.resolve(__dirname, "..");

// Local vite binary
const viteBin = path.join(root, "node_modules", ".bin", "vite");

// Spawn vite serve in the package root
const proc = spawn(
  viteBin,
  ["serve"], // same as "npm run start"
  {
    cwd: root,
    stdio: "inherit",
    shell: true
  }
);

proc.on("close", (code) => process.exit(code));