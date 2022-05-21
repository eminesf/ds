import React from 'react';
import type { Meta, Story } from '@storybook/react';

import type { AppLoaderProps } from '.';
import { AppLoader } from '.';

export default {
  title: 'App/Loader',
  component: AppLoader,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    chromatic: {
      viewports: [320],
    },
  },
} as Meta;

export const Default: Story<AppLoaderProps> = (args) => <AppLoader {...args} />;

Default.storyName = 'Padrão';
