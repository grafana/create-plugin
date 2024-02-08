const semver = require('semver');
import { expect, test } from '../../../../src';
import { ProvisionFile } from '../../../../src/types';

test('should return data and not display panel error when a valid query is provided', async ({
  explorePage,
  page,
  readProvision,
}) => {
  const provision = await readProvision<ProvisionFile>({ filePath: 'datasources/google-sheets-datasource-jwt.yaml' });
  await explorePage.datasource.set(provision.datasources?.[0]!.name!);
  await explorePage.timeRange.set({ from: '2019-01-11', to: '2019-12-15' });
  await explorePage.getQueryEditorRow('A').getByText('Enter SpreadsheetID').click();
  await page.keyboard.insertText('1TZlZX67Y0s4CvRro_3pCYqRCKuXer81oFp_xcsjPpe8');
  const responsePromise = page.waitForResponse((resp) => resp.url().includes('/api/ds/query'));
  await page.keyboard.press('Tab');
  await responsePromise;
  await expect(explorePage.runQuery()).toBeOK();
});

test('should return an error and display panel error when an invalid query is provided', async ({
  explorePage,
  page,
  readProvision,
}) => {
  const provision = await readProvision<ProvisionFile>({ filePath: 'datasources/google-sheets-datasource-jwt.yaml' });
  await explorePage.datasource.set(provision.datasources?.[0]!.name!);
  await explorePage.timeRange.set({ from: '2019-01-11', to: '2019-12-15' });
  await page.getByPlaceholder('Class Data!A2:E').fill('invalid range');
  await page.keyboard.press('Tab');
  await explorePage.getQueryEditorRow('A').getByText('Enter SpreadsheetID').click();
  await page.keyboard.insertText('1TZlZX67Y0s4CvRro_3pCYqRCKuXer81oFp_xcsjPpe8');
  const responsePromise = page.waitForResponse((resp) => resp.url().includes('/api/ds/query'));
  await page.keyboard.press('Tab');
  await responsePromise;
  await expect(explorePage.runQuery()).not.toBeOK();
});

test('explore page should display table and time series panel only for certain query', async ({
  explorePage,
  grafanaVersion,
}, testInfo) => {
  testInfo.skip(
    semver.lt(grafanaVersion, '9.3.0') || semver.gte(grafanaVersion, '10.4.0'),
    'Grafana version < 9.3.0 does not support data-testid on panels'
  );
  const url = semver.lt('10.0.0', grafanaVersion)
    ? `panes=%7B"RLf":%7B"datasource":"PB0CCE99F8730D01D","queries":%5B%7B"cacheDurationSeconds":300,"datasource":%7B"type":"grafana-googlesheets-datasource","uid":"PB0CCE99F8730D01D"%7D,"refId":"A","spreadsheet":"1TZlZX67Y0s4CvRro_3pCYqRCKuXer81oFp_xcsjPpe8","range":""%7D%5D,"range":%7B"from":"1547161200000","to":"1576364400000"%7D%7D%7D&schemaVersion=1&orgId=1`
    : 'left=%7B"datasource":"PB0CCE99F8730D01D","queries":%5B%7B"cacheDurationSeconds":300,"datasource":%7B"type":"grafana-googlesheets-datasource","uid":"PB0CCE99F8730D01D"%7D,"refId":"A","spreadsheet":"1TZlZX67Y0s4CvRro_3pCYqRCKuXer81oFp_xcsjPpe8","range":""%7D%5D,"range":%7B"from":"1547161200000","to":"1576364400000"%7D%7D&orgId=1';

  await explorePage.goto({
    queryParams: new URLSearchParams(url),
  });

  await expect(explorePage.timeSeriesPanel.locator()).toBeVisible();
  await expect(explorePage.tablePanel.locator()).toBeVisible();
  await expect(explorePage.logsPanel.locator()).not.toBeVisible();
});
