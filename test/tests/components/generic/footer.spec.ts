import {test} from '@playwright/test';

import {loginViaPreloadingLocalStorage} from '../../../support/helpers';
import {HomePage} from '../../../support/page-objects';

/**
 * Validates footer component
 */
test.describe('generic components -> footer', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto('/');
    await loginViaPreloadingLocalStorage(page);
    await page.reload();
  });

  test('footer should have a thank you text in the paragraph', async ({ page }) => {
    await homePage.footer.paragraph.shouldHaveText('Thank you for participating!');
  });

  test('footer should have a grey background', async ({ page }) => {
    await homePage.footer.main.shouldHaveBackgroundColor(60, 64, 65);
  });
});
