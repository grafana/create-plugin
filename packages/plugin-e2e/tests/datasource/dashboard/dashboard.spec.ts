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

const dashboards: Array<{ name?: string; uid: string; successful: number; total: number }> = [
  { uid: 'x9jSO5c7z', name: 'Cloudwatch', successful: 15, total: 17 },
  { uid: 'GbeyiI3Gz', name: 'Azure Monitor Erik', successful: 5, total: 5 },
  { uid: 'vmie2cmWz', name: 'Bar gauge data', successful: 6, total: 6 },
];

for (const d of dashboards) {
  test('dashboards' + d.uid, async ({ page, selectors, grafanaVersion, request }) => {
    const dashboardPage = new DashboardPage({ page, selectors, grafanaVersion, request }, { uid: d.uid });
    const res = await dashboardPage.gotoAndWaitForQueries();
    expect.soft(res.length).toEqual(d.total);
    expect(res).toHaveNSuccessfulResponses(d.successful);
  });
  // You can also do it with test.describe() or with multiple tests as long the test name is unique.
}
