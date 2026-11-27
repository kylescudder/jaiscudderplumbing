import { test, expect } from '@playwright/test'

test('visitors can open a gallery, page through its photos and close it', async ({
  page
}) => {
  await page.goto('/')
  const gallery = page.locator('#gallery')
  await gallery.scrollIntoViewIfNeeded()
  await gallery
    .locator('.cursor-pointer')
    .filter({ has: page.getByRole('img', { name: 'Bathrooms', exact: true }) })
    .click()

  const close = page.getByRole('button', { name: 'Close', exact: true })
  await expect(close).toBeVisible()
  const viewer = page.locator('.image-gallery')
  await expect(viewer).toBeVisible()
  await expect(
    viewer.locator('.image-gallery-slide.image-gallery-center img').first()
  ).toBeVisible()
  await expect(viewer.locator('.image-gallery-thumbnail').first()).toBeVisible()

  await viewer.getByRole('button', { name: 'Next Slide' }).click()
  await expect(
    viewer.locator('.image-gallery-slide.image-gallery-center img').first()
  ).toHaveAttribute('src', /Pic2\./)

  await close.click()
  await expect(close).toBeHidden()
  await expect(viewer).toBeHidden()
})
