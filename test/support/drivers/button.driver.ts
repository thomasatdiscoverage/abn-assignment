import {expect, Locator} from '@playwright/test';
import {ElementDriver} from './element.driver';
import {DEFAULT_TIMEOUT_SEC} from '../globals';

/**
 * Helper class for buttons, extends from ElementDriver
 */
export class ButtonDriver extends ElementDriver {
  constructor(locator: Locator) {
    super(locator);
  }

  click = async () => {
    await this.locator.click();
  };

  shouldHaveText = async (_value: string, timeoutSec: number = DEFAULT_TIMEOUT_SEC) => {
    await expect(this.locator).toHaveText(_value, { timeout: timeoutSec * 1000 });
  };

  shouldHaveTextColor = async (_r: number, _g: number, _b: number, _a?: number) => {
    await expect(await this.getCssValue('color')).toBe(
      _a !== undefined ? `rgba(${_r}, ${_g}, ${_b}, ${_a})` : `rgb(${_r}, ${_g}, ${_b})`,
    );
  };

  shouldHaveOnClickToMethod = async (_methodName: string, timeoutSec: number = DEFAULT_TIMEOUT_SEC) => {
    await expect(await this.locator.getAttribute('onClick', { timeout: timeoutSec * 1000 })).toBe(`${_methodName}()`);
  };
}
