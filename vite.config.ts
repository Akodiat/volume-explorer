import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { UserConfig } from "vite";
import glsl from "vite-plugin-glsl";

const projectRoot = dirname(fileURLToPath(import.meta.url));
const appRoot = resolve(projectRoot, "public");

export default {
  root: appRoot,
  publicDir: false,
  plugins: [glsl()],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version ?? "development"),
  },
  server: {
    host: true,
    allowedHosts: true,
    open: "/index.html",
  },
  build: {
    outDir: resolve(projectRoot, "dist/app"),
    emptyOutDir: true,
  },
  base: "./",
  worker: {
    format: "es",
  },
} satisfies UserConfig;
