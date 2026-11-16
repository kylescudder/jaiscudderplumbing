import { test, expect } from '@playwright/test'

test('visitors can find the work and contact details', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'JAI SCUDDER LTD'
  )
  if (page.viewportSize()!.width < 768) {
    await page.getByRole('button', { name: 'Toggle mobile menu' }).click()
    await page
      .locator('#mobile-menu')
      .getByRole('link', { name: 'Contact', exact: true })
      .click()
  } else {
    await page
      .getByRole('link', { name: 'Contact', exact: true })
      .first()
      .click()
  }
  await expect(
    page.getByRole('heading', { name: 'Contact Us', level: 2, exact: true })
  ).toBeInViewport()
  await expect(
    page.getByRole('heading', { name: 'Contact Us', level: 2, exact: true })
  ).toBeVisible()
  await expect(page.locator('#contact a[href^="tel:"]').first()).toBeVisible()
  await expect(
    page.locator('#contact a[href^="mailto:"]').first()
  ).toBeVisible()
  await page.evaluate(() => document.fonts.ready)
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth
    )
  ).toBe(true)
})
test('unknown pages return 404', async ({ page }) => {
  const response = await page.goto('/e2e-missing-page')
  expect(response?.status()).toBe(404)
  await expect(page.locator('body')).toContainText(/404|not found/i)
})
