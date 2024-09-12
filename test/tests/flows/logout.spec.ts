import {expect, test} from '@playwright/test';

import {loginViaPreloadingLocalStorage} from '../../support/helpers';
import {HomePage, LoginPage} from '../../support/page-objects';

/**
 * Validates logout flow
 */
test.describe('logout', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

    await page.goto('/');
    await loginViaPreloadingLocalStorage(page);
  });

  test('user should be able to logout', async ({ page }) => {
    await test.step('logout', async () => {
      await homePage.logout();
    });

    await test.step(`local storage should not contain 'logged' key`, async () => {
      await expect(await page.evaluate(() => localStorage.getItem('logged'))).toBeNull();
    });
  });
});
