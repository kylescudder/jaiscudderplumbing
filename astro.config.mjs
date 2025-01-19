// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless"; // Note the /serverless
import react from "@astrojs/react";

export default defineConfig({
  site: process.env.CI ? "https://jaiscudderplumbing.co.uk" : "http://localhost:4321",
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel({
    analytics: true, // Optional: Enable Vercel Analytics
    webAnalytics: true, // Optional: Enable Web Analytics
    speedInsights: true, // Optional: Enable Speed Insights
  }),
});
