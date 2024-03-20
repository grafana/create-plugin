import { TestFixture } from '@playwright/test';
import { PluginFixture, PluginOptions } from '../../api';
import { DashboardEditViewArgs } from '../../types';
import { PlaywrightCombinedArgs } from '../types';
import { PanelEditPage } from '../../models';

type GotoPanelEditPageFixture = TestFixture<
  (args: DashboardEditViewArgs<string>) => Promise<PanelEditPage>,
  PluginFixture & PluginOptions & PlaywrightCombinedArgs
>;

const gotoPanelEditPage: GotoPanelEditPageFixture = async (
  { request, page, selectors, grafanaVersion },
  use,
  testInfo
) => {
  await use(async (args) => {
    const panelEditPage = new PanelEditPage({ page, selectors, grafanaVersion, request, testInfo }, args);
    await panelEditPage.goto();
    return panelEditPage;
  });
};

export default gotoPanelEditPage;
