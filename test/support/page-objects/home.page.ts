import {BasePage} from './base.page';
import {Page} from '@playwright/test';
import {ButtonDriver, ElementDriver, TextBoxDriver} from '../drivers';

/**
 * Page objects for the home page
 */
export class HomePage extends BasePage {
  readonly main = this.new(ElementDriver, this.page.locator(' #content'));

  readonly navigation = {
    main: this.new(ElementDriver, this.page.locator(`#navigation`)),
    btnHome: this.new(ButtonDriver, this.page.locator(`#navigation .menu .home`)),
    btnHomeIcon: this.new(ElementDriver, this.page.locator(`#navigation .menu .home i`)),
    btnProducts: this.new(ButtonDriver, this.page.locator(`#navigation .menu .products`)),
    btnProductsIcon: this.new(ElementDriver, this.page.locator(`#navigation .menu .products i`)),
    btnContact: this.new(ButtonDriver, this.page.locator(`#navigation .menu .contact `)),
    btnContactIcon: this.new(ElementDriver, this.page.locator(`#navigation .menu .contact i`)),
    btnUser: this.new(ButtonDriver, this.page.locator(`#navigation .user`)),
    btnUserDiv: this.new(ButtonDriver, this.page.locator(`#navigation .user > div`)),
    btnUserIcon: this.new(ButtonDriver, this.page.locator(`#navigation .user > i`)),
    btnSignOut: this.new(ButtonDriver, this.page.locator('#logout')),
    btnSignOutIcon: this.new(ButtonDriver, this.page.locator('#logout i')),
  };

  readonly content = {
    main: this.new(ElementDriver, this.page.locator(`#content .div-container`)),
    firstParagraph: this.new(TextBoxDriver, this.page.locator(`#content .div-container > p:nth-child(1)`)),
    secondParagraph: this.new(TextBoxDriver, this.page.locator(`#content .div-container > p:nth-child(2)`)),
    thirdParagraph: this.new(TextBoxDriver, this.page.locator(`#content .div-container > p:nth-child(3)`)),
  };

  constructor(page: Page) {
    super(page);
  }

  logout = async () => {
    await this.navigation.btnUser.click();
    await this.navigation.btnSignOut.click();
  };
}
