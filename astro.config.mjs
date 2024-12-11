// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI
    ? "https://jaiscudderplumbing.co.uk"
    : "http://localhost:4321",

  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel(),
});
