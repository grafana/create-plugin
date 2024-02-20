---
id: selecting-elements
title: Selecting UI elements
description: How to select UI elements on the page
keywords:
  - grafana
  - plugins
  - plugin
  - e2e
  - end-to-end
  - example test
sidebar_position: 30
---

## Grafana end-to-end selectors

Since Grafana 7.0.0, end-to-end tests in Grafana have relied on selectors defined in the [`@grafana/e2e-selectors`](https://github.com/grafana/grafana/tree/main/packages/grafana-e2e-selectors) package to select elements in the Grafana UI.

Selecting Grafana UI elements can be challenging because the selector may be defined on either the `aria-label` attribute or the `data-testid` attribute. In the beginning, the selectors used the `aria-label` attribute, but now most selectors have been migrated to use the `data-testid` attribute instead.

## Playwright locator for Grafana UI elements

All [pages](https://github.com/grafana/plugin-tools/tree/main/packages/plugin-e2e/src/models/pages) defined by `@grafana/plugin-e2e` expose a `getByTestIdOrAriaLabel` method that returns a Playwright [locator](https://playwright.dev/docs/locators) that resolves to element(s) selected, using the appropriate HTML attribute as defined on the element. Whenever you want to resolve a Playwright locator based on a Grafana UI selector, you should always use this method.

```ts
panelEditPage.getByTestIdOrAriaLabel(selectors.components.CodeEditor.container).click();
```

## The `selectors` fixture

Selectors defined in the `@grafana/e2e-selectors` package are tied to a specific Grafana version. This means that the selectors can change from one version to another. When a new end-to-end test session is started, `@grafana/plugin-e2e` checks what version of Grafana is under test and resolves selectors that are associated with the running version. The selectors are provided through the `selectors` fixture.

```ts
import { test, expect } from '@grafana/plugin-e2e';

test('annotation query should be OK when query is valid', async ({ annotationEditPage, page, selectors }) => {
  await annotationEditPage.datasource.set('E2E Test Data Source');
  await annotationEditPage
    .getByTestIdOrAriaLabel(selectors.components.CodeEditor.container)
    .fill('SELECT * FROM users');
  await expect(annotationEditPage.runQuery()).toBeOK();
});
```
