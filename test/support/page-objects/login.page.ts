import {BasePage} from './base.page';
import {Page} from '@playwright/test';
import {ButtonDriver, ElementDriver, InputDriver, TextBoxDriver} from '../drivers';
import {User} from '../users';

/**
 * Page objects for the login page
 */
export class LoginPage extends BasePage {
  readonly main = this.new(ElementDriver, this.page.locator(' section#login'));

  readonly banner = this.new(TextBoxDriver, this.page.locator(`section > h1`));

  readonly loginForm = {
    inputEmailLabel: this.new(TextBoxDriver, this.page.locator(`#login label[for='email']`)),
    inputEmail: this.new(InputDriver, this.page.getByPlaceholder('E-mail address')),
    inputPasswordLabel: this.new(TextBoxDriver, this.page.locator(`#login label[for='password']`)),
    inputPassword: this.new(InputDriver, this.page.getByLabel('Password')),
    btnLogin: this.new(ButtonDriver, this.page.getByRole('button', { name: 'LOGIN' })),
  };

  constructor(page: Page) {
    super(page);
  }

  login = async (_user: User) => {
    await this.loginForm.inputEmail.fill(_user.email);
    await this.loginForm.inputPassword.fill(_user.password);
    await this.loginForm.btnLogin.click();
  };
}
