import { MIN_GRAFANA_VERSION } from './constants';

export const versionedPages = {
  Home: {
    url: {
      [MIN_GRAFANA_VERSION]: '/',
    },
  },
  DataSource: {
    saveAndTest: {
      '10.0.0': 'data-testid Data source settings page Save and Test button',
      [MIN_GRAFANA_VERSION]: 'Data source settings page Save and Test button',
    },
  },
  EditDataSource: {
    url: {
      '10.2.0': (dataSourceUid: string) => `/connections/datasources/edit/${dataSourceUid}`,
      [MIN_GRAFANA_VERSION]: (dataSourceUid: string) => `/datasources/edit/${dataSourceUid}`,
    },
  },
  AddDashboard: {
    url: {
      [MIN_GRAFANA_VERSION]: '/dashboard/new',
    },
    itemButton: {
      //did not exist prior to 9.5.0
      '9.5.0': (title: string) => `data-testid ${title}`,
    },
    addNewPanel: {
      [MIN_GRAFANA_VERSION]: 'Add new panel',
    },
    itemButtonAddViz: {
      [MIN_GRAFANA_VERSION]: 'Add new visualization menu item',
    },
    Settings: {
      Annotations: {
        List: {
          url: {
            [MIN_GRAFANA_VERSION]: '/dashboard/new?orgId=1&editview=annotations',
          },
        },
        Edit: {
          url: {
            [MIN_GRAFANA_VERSION]: (annotationIndex: string) =>
              `/dashboard/new?editview=annotations&editIndex=${annotationIndex}`,
          },
        },
      },
      Variables: {
        List: {
          url: {
            [MIN_GRAFANA_VERSION]: '/dashboard/new?orgId=1&editview=templating',
          },
        },
        Edit: {
          url: {
            [MIN_GRAFANA_VERSION]: (annotationIndex: string) =>
              `/dashboard/new?orgId=1&editview=templating&editIndex=${annotationIndex}`,
          },
        },
      },
    },
  },
  Dashboard: {
    url: {
      [MIN_GRAFANA_VERSION]: (uid: string) => `/d/${uid}`,
    },
    Settings: {
      Annotations: {
        Edit: {
          url: {
            [MIN_GRAFANA_VERSION]: (dashboardUid: string, annotationIndex: string) =>
              `/d/${dashboardUid}?editview=annotations&editIndex=${annotationIndex}`,
          },
        },
        List: {
          url: {
            [MIN_GRAFANA_VERSION]: (dashboardUid: string) => `/d/${dashboardUid}?editview=annotations`,
          },
          addAnnotationCTA: 'Call to action button Add annotation query',
          addAnnotationCTAV2: {
            //did not exist prior to 8.3.0
            '8.3.0': 'data-testid Call to action button Add annotation query',
          },
        },
      },
      Variables: {
        List: {
          url: {
            [MIN_GRAFANA_VERSION]: (dashboardUid: string) => `/d/${dashboardUid}?editview=templating`,
          },
          newButton: {
            [MIN_GRAFANA_VERSION]: 'Variable editor New variable button',
          },
          table: {
            [MIN_GRAFANA_VERSION]: 'Variable editor Table',
          },
          addVariableCTAV2: {
            [MIN_GRAFANA_VERSION]: (name: string) => `data-testid Call to action button ${name}`,
          },
          addVariableCTAV2Item: {
            [MIN_GRAFANA_VERSION]: 'Add variable',
          },
        },
        Edit: {
          url: {
            [MIN_GRAFANA_VERSION]: (dashboardUid: string, editIndex: string) =>
              `/d/${dashboardUid}?editview=templating&editIndex=${editIndex}`,
          },
          General: {
            generalTypeSelectV2: {
              '8.5.0': 'data-testid Variable editor Form Type select',
              [MIN_GRAFANA_VERSION]: 'Variable editor Form Type select',
            },
            previewOfValuesOption: {
              [MIN_GRAFANA_VERSION]: 'Variable editor Preview of Values option',
            },
            submitButton: {
              [MIN_GRAFANA_VERSION]: 'Variable editor Submit button',
            },
          },
        },
      },
    },
  },
  Explore: {
    url: {
      [MIN_GRAFANA_VERSION]: '/explore',
    },
  },
};
