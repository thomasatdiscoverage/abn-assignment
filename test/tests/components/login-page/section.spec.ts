import {test} from '@playwright/test';
import {LoginPage} from '../../../support/page-objects';

/**
 * Validates login page login section component
 */
test.describe('login page -> login section', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('/');
  });

  test(`section should have the correct background color`, async () => {
    await loginPage.main.shouldHaveBackgroundColor(62, 63, 65);
  });

  test(`section should have the correct background image`, async ({ baseURL }) => {
    await loginPage.main.shouldHaveBackgroundImage(`${baseURL}img/bg1.jpg`);
  });
});
