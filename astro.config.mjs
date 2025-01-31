// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI
    ? "https://jaiscudderplumbing.co.uk"
    : "http://localhost:4321",

  integrations: [react()],
  output: "server",
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },
});
