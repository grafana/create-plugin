import { test, expect, DashboardPage } from '../../../src';
import { Dashboard } from '../../../src/types';

test('dashboard', async ({ page, selectors, grafanaVersion, readProvision, request }) => {
  const dashboard = await readProvision<Dashboard>({ filePath: 'dashboards/google-sheets.json' });
  const dashboardPage = new DashboardPage({ page, selectors, grafanaVersion, request }, { uid: '-CTtXWXMks' });
  // const queryResponses = await dashboardPage.goto();
  await dashboardPage.goto();
  const queryResponses = await dashboardPage.refreshDashboard();
  expect(queryResponses).allToBeOK();
});

test('dashboard2', async ({ page, selectors, grafanaVersion, readProvision, request }) => {
  const dashboard = await readProvision<Dashboard>({ filePath: 'dashboards/google-sheets.json' });
  const dashboardPage = new DashboardPage({ page, selectors, grafanaVersion, request }, { uid: 'x9jSO5c7z' });
  const queryResponses = await dashboardPage.goto();
  expect(queryResponses).allToBeOK();
});

test('dashboard3', async ({ page, selectors, grafanaVersion, readProvision, request }) => {
  const dashboardPage = new DashboardPage({ page, selectors, grafanaVersion, request }, { uid: '7M8fNhz7k' });
  expect(await dashboardPage.gotoAndWaitForQueryResponses()).allToBeOK();
});

test('dashboard4', async ({ page, selectors, grafanaVersion, readProvision, request }) => {
  const dashboardPage = new DashboardPage({ page, selectors, grafanaVersion, request }, { uid: '7M8fNhz7k' });
  await dashboardPage.goto();
  expect(await dashboardPage.refreshDashboard()).allToBeOK();
});
