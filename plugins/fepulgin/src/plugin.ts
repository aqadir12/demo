import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const fepulginPlugin = createPlugin({
  id: 'fepulgin',
  routes: {
    root: rootRouteRef,
  },
});

export const FepulginPage = fepulginPlugin.provide(
  createRoutableExtension({
    name: 'FepulginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
