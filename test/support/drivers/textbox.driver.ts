import {expect, Locator} from '@playwright/test';
import {ElementDriver} from './element.driver';

/**
 * Helper class for text boxes, extends from ElementDriver
 */
export class TextBoxDriver extends ElementDriver {
  constructor(locator: Locator) {
    super(locator);
  }

  shouldHaveText = async (_value: string) => {
    await expect(this.locator).toHaveText(_value);
  };

  shouldHaveTextColor = async (_r: number, _g: number, _b: number, _a?: number) => {
    await expect(await this.getCssValue('color')).toBe(
      _a !== undefined ? `rgba(${_r}, ${_g}, ${_b}, ${_a})` : `rgb(${_r}, ${_g}, ${_b})`,
    );
  };
}
