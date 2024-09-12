import {test} from '@playwright/test';

import {loginViaPreloadingLocalStorage} from '../../../support/helpers';
import {HomePage} from '../../../support/page-objects';

/**
 * Validates home page navigation component
 */
test.describe('home-page -> navigation', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto('/');
    await loginViaPreloadingLocalStorage(page);
    await page.reload();
  });

  test('main menu should have the correct background color', async ({ page }) => {
    await homePage.navigation.main.shouldHaveBackgroundColor(118, 60, 49);
  });

  test.describe('home-page -> navigation -> home item', () => {
    test('home item should have the correct text', async ({ page }) => {
      await homePage.navigation.btnHome.shouldHaveText('Home');
    });

    test('home item should have the correct text color', async ({ page }) => {
      await homePage.navigation.btnHome.shouldHaveTextColor(255, 255, 255);
    });

    test('home item icon should have the correct icon class', async ({ page }) => {
      await homePage.navigation.btnHomeIcon.shouldHaveClass('fas fa-home');
    });
  });

  test.describe('home-page -> navigation -> products item', () => {
    test('products item should have the correct text', async ({ page }) => {
      await homePage.navigation.btnProducts.shouldHaveText('Products');
    });

    test('products item should have the correct text color', async ({ page }) => {
      await homePage.navigation.btnProducts.shouldHaveTextColor(255, 255, 255);
    });

    test('products item icon should have the correct icon class', async ({ page }) => {
      await homePage.navigation.btnProductsIcon.shouldHaveClass('fas fa-tag');
    });
  });

  test.describe('home-page -> navigation -> contact item', () => {
    test('contact item should have the correct text', async ({ page }) => {
      await homePage.navigation.btnContact.shouldHaveText('Contact');
    });

    test('contact item should have the correct text color', async ({ page }) => {
      await homePage.navigation.btnContact.shouldHaveTextColor(255, 255, 255);
    });

    test('contact item icon should have the correct icon class', async ({ page }) => {
      await homePage.navigation.btnContactIcon.shouldHaveClass('fas fa-envelope');
    });
  });

  test.describe('home-page -> navigation -> user item', () => {
    test('user item should have the correct method call', async ({ page }) => {
      await homePage.navigation.btnUserDiv.shouldHaveOnClickToMethod('logOut');
    });

    test('user item icon should have icon class', async ({ page }) => {
      await homePage.navigation.btnUserIcon.shouldHaveClass('fas fa-user-circle');
    });
  });

  test.describe('home-page -> navigation -> logout item', () => {
    test('contact item should have the correct text', async ({ page }) => {
      await homePage.navigation.btnUser.click();
      await homePage.navigation.btnSignOut.shouldHaveText('Sign Out');
    });

    test('contact item should have the correct text color', async ({ page }) => {
      await homePage.navigation.btnUser.click();
      await homePage.navigation.btnSignOut.shouldHaveTextColor(255, 255, 255);
    });

    test('contact item should have the correct background color', async ({ page }) => {
      await homePage.navigation.btnUser.click();
      await homePage.navigation.btnSignOut.shouldHaveBackgroundColor(118, 60, 49);
    });

    test('contact item icon should have the correct icon class', async ({ page }) => {
      await homePage.navigation.btnUser.click();
      await homePage.navigation.btnSignOutIcon.shouldHaveClass(`fas fa-sign-out-alt`);
    });
  });
});
