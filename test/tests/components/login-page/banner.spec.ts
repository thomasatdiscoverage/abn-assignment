import {test} from '@playwright/test';
import {LoginPage} from '../../../support/page-objects';

/**
 * Validates login page banner component
 */
test.describe('login page -> banner', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('/');
  });

  test(`banner should have the correct text`, async () => {
    await loginPage.banner.shouldHaveText(`Automation doesn't stop at testing, it's just a beginning!`);
  });

  test(`banner should have the correct background color`, async () => {
    await loginPage.banner.shouldHaveBackgroundColor(85, 107, 47);
  });

  test(`banner should have the correct text color`, async () => {
    await loginPage.banner.shouldHaveTextColor(255, 255, 255);
  });
});
