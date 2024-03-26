import { test, expect, AnnotationPage } from '../../../../src';
import { REDSHIFT_SCHEMAS } from '../mocks/resource';

test('should load resources and display them as options when clicking on an input', async ({
  annotationEditPage,
  page,
  readProvisionedDataSource,
}) => {
  await annotationEditPage.mockResourceResponse('schemas', REDSHIFT_SCHEMAS);
  const ds = await readProvisionedDataSource({ fileName: 'redshift.yaml' });
  await annotationEditPage.datasource.set(ds.name);
  await page.getByLabel('Schema').click();
  await expect(annotationEditPage.getByGrafanaSelector('Select option')).toContainText(REDSHIFT_SCHEMAS);
});

test('should be able to add a new annotation when there annotations already exist', async ({
  page,
  selectors,
  grafanaVersion,
  request,
  readProvisionedDashboard,
}, testInfo) => {
  const dashboard = await readProvisionedDashboard({ fileName: 'redshift.json' });
  const annotationPage = new AnnotationPage({ page, selectors, grafanaVersion, request, testInfo }, dashboard);
  await annotationPage.goto();
  await annotationPage.clickAddNew();
  await expect(page).toHaveTitle(/New annotation.*/);
});
