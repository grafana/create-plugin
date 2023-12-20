import { TestFixture } from '@playwright/test';
import { PluginFixture, PluginOptions } from '../api';
import { PlaywrightCombinedArgs } from './types';

type FeatureToggleFixture = TestFixture<
  <T = object>(featureToggle: keyof T) => Promise<boolean>,
  PluginFixture & PluginOptions & PlaywrightCombinedArgs
>;

const isFeatureToggleEnabled: FeatureToggleFixture = async ({ page }, use) => {
  await use(async <T = object>(featureToggle: keyof T) => {
    const featureToggles: T = await page.evaluate('window.grafanaBootData.settings.featureToggles');
    return Boolean(featureToggles[featureToggle]);
  });
};

export default isFeatureToggleEnabled;
