import { Response } from '@playwright/test';
import { GrafanaPage, VariableEditPage } from './models';
import { AlertPageOptions, AlertVariant, ContainTextOptions, PanelError } from './types';

export { expect, test, type PluginFixture, type PluginOptions } from './api';
export * from './e2e-selectors';
export * from './fixtures';
export * from './models';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace PlaywrightTest {
    const r: unique symbol;
    const t: unique symbol;
    interface Matchers<R, T> {
      [r]: R;
      [t]: T;

      /**
       * Asserts that the Playwright response/responses is/are successful (status in the range 200-299).
       */
      toBeOK(this: Matchers<unknown, Response | Response[]>): R;

      /**
       * Asserts that preview text elements are displayed on the Variable Edit Page. You should make sure any variable queries are completed before calling this matcher.
       */
      toDisplayPreviews(
        this: Matchers<unknown, VariableEditPage>,
        previewTexts: Array<string | RegExp>,
        options: ContainTextOptions
      ): R;

      /**
       * Asserts that a GrafanaPage contains an alert with the specified severity. Use the options to specify the timeout and to filter the alerts.
       */
      toHaveAlert(this: Matchers<unknown, GrafanaPage>, severity: AlertVariant, options?: AlertPageOptions): R;

      /**
       * Asserts that the number of panel errors displayed on the page is equal to 1.
       */
      toHavePanelError(this: Matchers<unknown, PanelError>): R;

      /**
       * Asserts that a given number of the Playwright responses are successful (status in the range 200-299).
       */
      toHaveNSuccessfulResponses(this: Matchers<unknown, Response[]>, n: number): R;
    }
  }
}
