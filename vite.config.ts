import type { UserConfig } from "vite";
import glsl from "vite-plugin-glsl";

export default {
  plugins: [glsl()],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  server: {
    host: true,           // allow external connections (needed for reverse proxies)
    allowedHosts: true,   // allow any hostname (nginx already controls access)
    open: "public/index.html",
  },
  base: "/",              // ensures all JS/CSS assets use absolute paths
  worker: {
    format: "es",
  },
} satisfies UserConfig;
