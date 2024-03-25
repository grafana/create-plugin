import { expect, test } from '../../../../src';

test('should be able to use math expressions', async ({ selectors, readProvisionedDashboard, gotoPanelEditPage }) => {
  const dashboard = await readProvisionedDashboard({ fileName: 'redshift.json' });
  const panelEditPage = await gotoPanelEditPage({ dashboard, id: '9' });
  const legend = panelEditPage.getByTestIdOrAriaLabel(selectors.components.VizLegend.seriesName(''), {
    startsWith: true,
  });
  await expect(legend).toHaveText('tmp');
  const expressionQuery = await panelEditPage.addExpression({ refId: 'EXP' });
  await expressionQuery.getByRole('textbox').fill('$A * 2');
  await expect(panelEditPage.refreshPanel()).toBeOK();
  await expect(legend).toContainText(['EXP']);
});
