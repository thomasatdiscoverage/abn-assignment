import {Locator} from '@playwright/test';
import {ElementDriver} from './element.driver';
import {DEFAULT_TIMEOUT_SEC} from '../globals';

/**
 * Helper class for inputs, extends from ElementDriver
 */
export class InputDriver extends ElementDriver {
  constructor(locator: Locator) {
    super(locator);
  }

  fill = async (_value: string, timeoutSec: number = DEFAULT_TIMEOUT_SEC) => {
    await this.locator.fill(_value, { timeout: timeoutSec * 1000 });
  };
}
