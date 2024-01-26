import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { fepulginPlugin, FepulginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(fepulginPlugin)
  .addPage({
    element: <FepulginPage />,
    title: 'Root Page',
    path: '/fepulgin',
  })
  .render();
