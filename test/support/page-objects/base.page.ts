import {Locator, Page} from '@playwright/test';
import {ElementDriver, TextBoxDriver} from '../drivers';

/**
 * Basic page object that contains generic elements and methods that all page objects have/need
 */
export class BasePage {
  footer: { main: ElementDriver; paragraph: TextBoxDriver };

  page: Page;

  constructor(page: Page) {
    this.page = page;

    this.footer = {
      main: this.new(ElementDriver, this.page.locator('footer')),
      paragraph: this.new(TextBoxDriver, this.page.locator('footer > p')),
    };
  }

  /**
   * Created factory to get rid of using page in the constructor from the page-objects
   * @param driverToCreate driver to be created
   * @param locator playwright locator
   */
  new<T extends new (...args: any[]) => any>(driverToCreate: T, locator: Locator): InstanceType<T> {
    return new driverToCreate(locator);
  }
}
