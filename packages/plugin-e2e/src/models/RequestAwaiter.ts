import { Page, Request, Response } from '@playwright/test';
import { E2ESelectors } from '..';

export function QueryResponseAggregator(
  page: Page,
  selectors: E2ESelectors,
  initiator: () => Promise<void>
): Promise<Response[]> {
  return new Promise(async (resolve) => {
    const responses: Array<Promise<Response>> = [];

    const handleRequest = (request: Request) => {
      const url = request.url();
      const isQueryUrl = url.includes(selectors.apis.DataSource.query);
      if (isQueryUrl && request.headers()['x-panel-id']) {
        responses.push(request.response());
      }
    };

    //
    page.on('request', handleRequest);

    // scroll to top of the main page content
    await page.locator('#pageContent').click();
    await page.keyboard.down('Home');

    // call the initiator cb function that will start the queries
    await initiator();

    // scroll to bottom so all dashboard queries get executed
    await page.locator('#pageContent').click();
    await page.keyboard.down('End');

    // wait for 1 second to make sure all queries have been executed
    setTimeout(async () => {
      page.removeListener('request', handleRequest);
      const res = Promise.all(responses);
      resolve(res);
    }, 2000);
  });
}
