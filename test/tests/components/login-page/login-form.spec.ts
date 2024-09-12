import {test} from '@playwright/test';
import {LoginPage} from '../../../support/page-objects';

/**
 * Validates login page login form component
 */
test.describe('login page -> login form', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('/');
  });

  test(`login field should have correct label`, async () => {
    await loginPage.loginForm.inputEmailLabel.shouldHaveText('User');
  });

  test(`login field should have correct background color`, async () => {
    await loginPage.loginForm.inputEmailLabel.shouldHaveBackgroundColor(0, 0, 0, 0);
  });

  test(`password field should have correct label`, async () => {
    await loginPage.loginForm.inputPasswordLabel.shouldHaveText('Password');
  });

  test(`password field should have correct background color`, async () => {
    await loginPage.loginForm.inputEmailLabel.shouldHaveBackgroundColor(0, 0, 0, 0);
  });

  test(`login button should have correct label`, async () => {
    await loginPage.loginForm.btnLogin.shouldHaveText('LOGIN');
  });

  test(`login button should have correct background color`, async () => {
    await loginPage.loginForm.btnLogin.shouldHaveBackgroundColor(62, 63, 65);
  });
});
