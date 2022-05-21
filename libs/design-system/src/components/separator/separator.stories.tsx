import React from 'react';
import type { Meta, Story } from '@storybook/react';

import type { SeparatorProps } from '.';
import { Separator } from '.';

export default {
  title: 'Others/Separator',
  component: Separator,
  argTypes: {
    orientation: {
      defaultValue: 'horizontal',
      table: {
        defaultValue: { summary: 'horizontal' },
      },
      control: {
        type: 'select',
        options: ['horizontal', 'vertical'],
      },
    },
  },
} as Meta;

export const Default: Story<SeparatorProps> = (args) => (
  <>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <Separator {...args} />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </>
);

Default.storyName = 'Padrão';
