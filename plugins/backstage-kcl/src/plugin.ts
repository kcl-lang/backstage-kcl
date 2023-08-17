import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const backstageKclPlugin = createPlugin({
  id: 'backstage-kcl',
  routes: {
    root: rootRouteRef,
  },
});

export const BackstageKclPage = backstageKclPlugin.provide(
  createRoutableExtension({
    name: 'BackstageKclPage',
    component: () => import('./components/Main').then(m => m.Main),
    mountPoint: rootRouteRef,
  }),
);
