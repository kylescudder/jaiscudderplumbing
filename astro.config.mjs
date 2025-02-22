import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI
    ? "https://jaiscudderplumbing.co.uk"
    : "http://localhost:4321",

  integrations: [react()],
  output: "server",

  adapter: netlify({
    edgeMiddleware: true,
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
