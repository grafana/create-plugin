const gte = require('semver/functions/gte');
import EventEmitter from 'node:events';
import { DashboardPageArgs, NavigateOptions, PluginTestCtx } from '../types';
import { DataSourcePicker } from './DataSourcePicker';
import { GrafanaPage } from './GrafanaPage';
import { PanelEditPage } from './PanelEditPage';
import { TimeRange } from './TimeRange';
import { Request, Response } from '@playwright/test';

export class DashboardPage extends GrafanaPage {
  dataSourcePicker: any;
  timeRange: TimeRange;
  requests: Array<Promise<Response>>;

  constructor(readonly ctx: PluginTestCtx, readonly dashboard?: DashboardPageArgs) {
    super(ctx);
    this.dataSourcePicker = new DataSourcePicker(ctx);
    this.timeRange = new TimeRange(ctx);
    this.requests = [];
  }

  // async goto(options?: NavigateOptions): Promise<Response[]> {
  //   return new Promise(async (resolve) => {
  //     this.eventEmitter.once('queriesCompleted', () => {
  //       resolve([...this.requests.values()]);
  //     });
  //     let url = this.dashboard?.uid
  //       ? this.ctx.selectors.pages.Dashboard.url(this.dashboard.uid)
  //       : this.ctx.selectors.pages.AddDashboard.url;

  //     this.requests.clear();
  //     this.ctx.page.on('request', this.handleRequest.bind(this));
  //     this.ctx.page.on('response', this.handleResponse.bind(this));

  //     await super.navigate(url, options);

  //     setTimeout(() => this.ctx.page.removeListener('request', this.handleRequest), 1000);
  //     setTimeout(() => this.ctx.page.removeListener('response', this.handleResponse), 10000);
  //   });
  // }

  async goto(options: NavigateOptions = { waitUntil: 'load' }) {
    let url = this.dashboard?.uid
      ? this.ctx.selectors.pages.Dashboard.url(this.dashboard.uid)
      : this.ctx.selectors.pages.AddDashboard.url;

    if (this.dashboard?.timeRange) {
      options.queryParams = options.queryParams ?? new URLSearchParams();
      options.queryParams.append('from', this.dashboard.timeRange.from);
      options.queryParams.append('to', this.dashboard.timeRange.to);
    }

    return super.navigate(url, options);
  }

  async gotoAndWaitForQueryResponses(options?: NavigateOptions): Promise<Response[]> {
    return new Promise(async (resolve) => {
      this.requests = [];
      this.ctx.page.on('request', this.handleRequest.bind(this));

      await this.goto({ ...options, waitUntil: 'networkidle' });
      await this.ctx.page.locator('#pageContent').click();
      await this.ctx.page.keyboard.down('End');

      setTimeout(async () => {
        this.ctx.page.removeListener('request', this.handleRequest);
        resolve(Promise.all(this.requests));
      }, 2000);
    });
  }

  async gotoPanelEditPage(panelId: string) {
    const panelEditPage = new PanelEditPage(this.ctx, { dashboard: this.dashboard, id: panelId });
    await panelEditPage.goto();
    return panelEditPage;
  }

  async addPanel(): Promise<PanelEditPage> {
    const { components, pages } = this.ctx.selectors;
    if (gte(this.ctx.grafanaVersion, '10.0.0')) {
      await this.getByTestIdOrAriaLabel(
        components.PageToolbar.itemButton(components.PageToolbar.itemButtonTitle)
      ).click();
      await this.getByTestIdOrAriaLabel(pages.AddDashboard.itemButton(pages.AddDashboard.itemButtonAddViz)).click();
    } else {
      await this.getByTestIdOrAriaLabel(pages.AddDashboard.addNewPanel).click();
    }

    const panelId = await this.ctx.page.evaluate(() => {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('editPanel');
    });

    return new PanelEditPage(this.ctx, { dashboard: this.dashboard, id: panelId });
  }

  async deleteDashboard() {
    await this.ctx.request.delete(this.ctx.selectors.apis.Dashboard.delete(this.dashboard.uid));
  }

  private handleRequest(request: Request) {
    const url = request.url();
    const isQueryUrl =
      url.includes(this.ctx.selectors.apis.DataSource.query) ||
      url.includes(this.ctx.selectors.apis.DataSource.annotations);
    if (isQueryUrl && request.headers()['x-panel-id']) {
      this.requests.push(request.response());
    }
  }

  async refreshDashboard(): Promise<Response[]> {
    this.requests = [];
    this.ctx.page.on('request', this.handleRequest.bind(this));

    await this.ctx.page.keyboard.down('Home');
    await this.getByTestIdOrAriaLabel(this.ctx.selectors.components.RefreshPicker.runButtonV2).click();
    // focus on the page content and scroll to bottom so all dashboard queries get executed
    await this.ctx.page.locator('#pageContent').click();
    await this.ctx.page.keyboard.down('End');
    return new Promise(async (resolve) => {
      // wait for 1 second to make sure all queries have been executed
      setTimeout(async () => {
        this.ctx.page.removeListener('request', this.handleRequest);
        resolve(Promise.all(this.requests));
      }, 2000);
    });
  }
}
