import {expect, test} from '@playwright/test';
import {User, userList} from '../../support/users';
import {HomePage, LoginPage} from '../../support/page-objects';

/**
 * Validates login flow
 */
test.describe('login', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  const consoleLogs: string[] = [];

  test.beforeEach(async ({ page }) => {
    page.on('console', (msg) => {
      consoleLogs.push(msg.text());
    });

    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

    await page.goto('/');
  });

  Object.entries(userList).forEach((value) => {
    const userName: string = value[0];
    const user: User = value[1];

    test(`user should be able to login as user ${userName}`, async ({ page }) => {
      await test.step('fill in credentials and press login button', async () => {
        await loginPage.login(user);
      });

      await test.step('content page should be visible', async () => {
        await homePage.main.shouldBeVisible();
      });

      await test.step('local storage should have email from logged in user', async () => {
        await expect(await page.evaluate(() => localStorage.getItem('logged'))).toBe(user.email);
      });

      await test.step('console logging should show logged in user', async () => {
        expect(consoleLogs).toContain(`User logged: ${user.email}`);
      });
    });
  });

  test('user should not be able to login with incorrect credentials', async ({ page }) => {
    await test.step('fill in credentials and press login button', async () => {
      await loginPage.login({
        email: 'randomuser123@hotmail.com',
        password: '123123',
      });
    });

    await test.step('user should stay on the login screen', async () => {
      await loginPage.main.shouldBeVisible();
    });
  });
});
