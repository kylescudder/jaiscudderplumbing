import { expect, test } from '@playwright/test'

const businessEmail = 'mail@jaiscudderplumbing.co.uk'

test('home page introduces the business and its sections', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Jai Scudder/)
  await expect(page.locator('h1')).toContainText('JAI SCUDDER LTD')
  for (const id of ['services', 'gallery', 'testimonials', 'contact']) {
    await expect(page.locator(`#${id}`)).toBeAttached()
  }
})

test('contact details link to the business email', async ({ page }) => {
  await page.goto('/')

  const emailLink = page.locator(`#contact a[href="mailto:${businessEmail}"]`)
  // Bring the contact block into view so the test's final state shows it.
  await emailLink.scrollIntoViewIfNeeded()
  await expect(emailLink).toBeVisible()
  await expect(emailLink).toHaveText(businessEmail)
})

test('gallery opens a lightbox and closes it again', async ({ page }) => {
  await page.goto('/')

  // The gallery is a React island: wait for Astro to hydrate it, otherwise the
  // click lands before its handler is attached.
  await expect(
    page.locator('astro-island[component-url*="Gallery"]')
  ).not.toHaveAttribute('ssr')

  const galleryCard = page.locator('#gallery .group').first()
  await galleryCard.scrollIntoViewIfNeeded()
  await galleryCard.click()

  const lightbox = page.locator('.image-gallery')
  await expect(lightbox).toBeVisible()

  await page.getByRole('button', { name: 'Close', exact: true }).click()
  await expect(lightbox).toHaveCount(0)
})

test('desktop navigation scrolls to the gallery', async ({
  page
}, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop', 'desktop navigation only')
  await page.goto('/')

  await page.locator('nav a.smooth-scroll', { hasText: 'Gallery' }).click()

  await expect(page.locator('#gallery')).toBeInViewport()
})

test('mobile menu opens and navigates to a section', async ({
  page
}, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile', 'mobile menu only')
  await page.goto('/')

  await page.getByRole('button', { name: 'Toggle mobile menu' }).click()
  const menu = page.locator('#mobile-menu')
  await expect(menu).toHaveClass(/translate-x-0/)

  await menu.locator('.mobile-nav-link', { hasText: 'Contact' }).click()

  await expect(page.locator('#contact')).toBeInViewport()
  await expect(menu).toHaveClass(/-translate-x-full/)
})

test('unknown pages return 404', async ({ page }) => {
  const response = await page.goto('/this-page-does-not-exist')

  expect(response?.status()).toBe(404)
})
