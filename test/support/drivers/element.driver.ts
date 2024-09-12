import {expect, Locator} from '@playwright/test';
import {DEFAULT_TIMEOUT_SEC} from '../globals';

/**
 * Helper class for basic elements
 */
export class ElementDriver {
  locator: Locator;

  constructor(locator: Locator) {
    this.locator = locator;
  }

  protected getCssValue = async (_cssProperty: string) => {
    return this.locator.evaluate((el, property) => {
      return window.getComputedStyle(el).getPropertyValue(property);
    }, _cssProperty);
  };

  click = async (timeoutSec: number = DEFAULT_TIMEOUT_SEC) => {
    await this.locator.click({ timeout: timeoutSec * 1000 });
  };

  shouldBeVisible = async (timeoutSec: number = DEFAULT_TIMEOUT_SEC) => {
    await expect(this.locator).toBeVisible({ timeout: timeoutSec * 1000 });
  };

  shouldHaveBackgroundColor = async (_r: number, _g: number, _b: number, _a?: number) => {
    await expect(await this.getCssValue('background-color')).toBe(
      _a !== undefined ? `rgba(${_r}, ${_g}, ${_b}, ${_a})` : `rgb(${_r}, ${_g}, ${_b})`,
    );
  };

  shouldHaveBackgroundImage = async (_imageUrl: string) => {
    await expect(await this.getCssValue('background-image')).toBe(`url("${_imageUrl}")`);
  };

  shouldHaveClass = async (_cssClass: string, timeoutSec: number = DEFAULT_TIMEOUT_SEC) => {
    await expect(await this.locator).toHaveClass(_cssClass, { timeout: timeoutSec * 1000 });
  };
}
