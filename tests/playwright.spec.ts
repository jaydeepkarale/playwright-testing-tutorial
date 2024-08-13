import { expect } from '@playwright/test';
import test from "../lambdatest-setup";

test('has title', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');  
  await expect(page).toHaveTitle('Your Store');
});

test('shop by category button has aria-expanded false', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('button', { name: 'Shop by Category' })).toHaveAttribute('aria-expanded', 'false');

});

test('dummy website text matches', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');  
  await expect(page.getByText('This is a dummy website for Web Automation Testing')).toBeVisible();

});

test('alt text for banner image exists', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');  
  await page.locator('#mz-carousel-217925').getByRole('listitem').nth(1).click();
  await expect(page.getByAltText('Iphone 11 pro max')).toBeVisible();
});


test('email and password placeholders exist and are editable', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');  
  await expect(page.getByPlaceholder('E-Mail Address')).toBeEditable();
  await expect(page.getByPlaceholder('Password')).toBeEditable();

});

