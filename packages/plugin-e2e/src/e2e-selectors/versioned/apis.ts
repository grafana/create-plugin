import { MIN_GRAFANA_VERSION } from './constants';

export const versionedAPIs = {
  DataSource: {
    resourcePattern: {
      [MIN_GRAFANA_VERSION]: '/api/datasources/*/resources',
    },
    resourceUIDPattern: {
      '9.4.4': '/api/datasources/uid/*/resources',
      [MIN_GRAFANA_VERSION]: '/api/datasources/*/resources',
    },
    queryPattern: {
      [MIN_GRAFANA_VERSION]: '*/**/api/ds/query*',
    },
    query: {
      [MIN_GRAFANA_VERSION]: '/api/ds/query',
    },
    healthPattern: {
      ['9.5.0']: 'api/datasources/uid/*/health',
      [MIN_GRAFANA_VERSION]: '/api/datasources/*/health',
    },
    health: {
      [MIN_GRAFANA_VERSION]: (uid: string) => `/api/datasources/uid/${uid}/health`,
    },
    delete: {
      [MIN_GRAFANA_VERSION]: (uid: string) => `/api/datasources/uid/${uid}`,
    },
  },
  Dashboard: {
    delete: {
      [MIN_GRAFANA_VERSION]: (uid: string) => `/api/datasources/uid/${uid}`,
    },
  },
};
