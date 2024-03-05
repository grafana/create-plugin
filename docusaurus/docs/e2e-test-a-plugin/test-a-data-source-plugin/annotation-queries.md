---
id: annotation-queries
title: Annotation queries
description: Test a custom annotation editor and the execution of annotation queries.
keywords:
  - grafana
  - plugins
  - plugin
  - testing
  - e2e
  - data-source
  - annotation queries
sidebar_position: 50
---

## Introduction

Annotations are used to mark points on a visualization with events such as "AB test started" or "Marketing campaign started". Data source plugins that support annotations can be used to query for annotation events. Optionally, you can implement a custom annotation editor for the data source plugin that assists users in writing the annotation query. 

In many cases, the execution of annotation queries requires different handling than normal data queries, and in those cases we recommend that you write end-to-end tests that verify that data source annotations work as expected.

### Test the annotation editor

If your data source plugin implements a custom annotation editor, you can write tests that verify that the editor works as expected. If you haven't implemented a custom editor, then the plugin will use the built-in in editor. In that case, you don't need to write tests.

### Test the entire annotation query execution flow

In the next example, we perform an integration test where we test a plugin's entire annotation query data flow:

```ts title="annotations.spec.ts"
test('should run successfully and display a success alert box when query is valid', async ({
  annotationEditPage,
  page,
  selectors,
  readProvisionedDataSource,
}) => {
  const ds = await readProvisionedDataSource({ fileName: 'datasources.yml' });
  await annotationEditPage.datasource.set(ds.name);
  await page.waitForFunction(() => window.monaco);
  await annotationEditPage.getByTestIdOrAriaLabel(selectors.components.CodeEditor.container).click();
  await page.keyboard.insertText(`select time as time, humidity as text
  from dataset
  where $__timeFilter(time) and humidity > 95`);
  await expect(annotationEditPage.runQuery()).toBeOK();
  await expect(annotationEditPage).toHaveAlert('success');
});
```

#### Test error scenarios

If an error occurs in the plugin or if the upstream API returns an error, you may want to capture that and return a meaningful error message to the user.

```ts title="annotations.spec.ts"
test('should fail and display an error alert box when time field is missing in the response', async ({
  annotationEditPage,
  page,
  selectors,
  readProvisionedDataSource,
}) => {
  const ds = await readProvisionedDataSource({ fileName: 'datasources.yml' });
  await annotationEditPage.datasource.set(ds.name);
  await page.waitForFunction(() => window.monaco);
  await annotationEditPage.getByTestIdOrAriaLabel(selectors.components.CodeEditor.container).click();
  await page.keyboard.insertText(`select humidity as text
  from dataset
  where humidity > 95`);
  await expect(annotationEditPage.runQuery()).not.toBeOK();
  await expect(annotationEditPage).toHaveAlert('error', { hasText: 'Time field is missing' });
});
```
