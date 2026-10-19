import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// Static output is deployed to Herman by the main-branch release workflow.
export default defineConfig({
  site: "https://jaiscudderplumbing.co.uk",
  integrations: [react()],
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
