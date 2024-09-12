import {Page} from '@playwright/test';

/**
 * Preloads the local storage by setting the 'logged' key to skip the login functionality
 */
export const loginViaPreloadingLocalStorage = async (_page: Page) => {
  await _page.evaluate(() => localStorage.setItem('logged', 'admin@admin.com'));
  await _page.reload();
};
