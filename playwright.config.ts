import { defineConfig, devices } from '@playwright/test'

const port = 4321
const baseURL = `http://127.0.0.1:${port}`

// The site is static: the suite builds it and serves dist/ with a small static
// server, so every run tests exactly what the build produces. Astro's preview
// command daemonises in non-interactive shells, so Playwright cannot supervise it.
export default defineConfig({
  testDir: 'e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
  use: {
    baseURL,
    trace: 'retain-on-failure'
  },
  projects: [
    {
      name: 'desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 800 }
      }
    },
    {
      name: 'mobile',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 390, height: 844 }
      }
    }
  ],
  webServer: {
    command: 'bun run build && bun e2e/serve-dist.ts',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000
  }
})
