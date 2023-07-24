import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { backstageKclPlugin, BackstageKclPage } from '../src/plugin';

createDevApp()
  .registerPlugin(backstageKclPlugin)
  .addPage({
    element: <BackstageKclPage />,
    title: 'Root Page',
    path: '/backstage-kcl',
  })
  .render();
