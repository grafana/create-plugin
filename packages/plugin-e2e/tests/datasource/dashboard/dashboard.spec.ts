import { test, expect, DashboardPage } from '../../../src';
import { Dashboard } from '../../../src/types';

test('two successful queries should be executed when loading the Google Sheets dashboard', async ({
  page,
  selectors,
  grafanaVersion,
  request,
  readProvision,
}) => {
  const dashboard = await readProvision<Dashboard>({ filePath: 'dashboards/google-sheets.json' });
  const dashboardPage = new DashboardPage({ page, selectors, grafanaVersion, request }, { uid: dashboard.uid });
  expect(await dashboardPage.gotoAndWaitForQueries()).toHaveNSuccessfulResponses(2);
});

test('all queries should be successful when loading the ', async ({
  page,
  selectors,
  grafanaVersion,
  request,
  readProvision,
}) => {
  const dashboard = await readProvision<Dashboard>({ filePath: 'dashboards/redshift.json' });
  const dashboardPage = new DashboardPage({ page, selectors, grafanaVersion, request }, { uid: dashboard.uid });
  await dashboardPage.goto();
  expect(await dashboardPage.refreshDashboard()).toBeOK();
});
