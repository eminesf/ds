import React from 'react';
import type { Meta, Story } from '@storybook/react';

import { COLOR } from '../../utils';

import type { IconProps } from '.';
import { ICON_NAME } from './constants';
import { Icon } from '.';

export default {
  title: 'Others/Icon',
  component: Icon,
  argTypes: {
    size: {
      defaultValue: '3xlg',
      table: {
        defaultValue: { summary: 'sm' },
      },
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xlg', '2xlg', '3xlg', '4xlg'],
      },
    },
    name: {
      defaultValue: 'bell',
      control: {
        type: 'select',
        options: ICON_NAME,
      },
    },
    color: {
      control: {
        type: 'select',
        options: COLOR,
      },
    },
  },
} as Meta;

export const Default: Story<IconProps> = (args) => <Icon {...args} />;

Default.storyName = 'Padrão';
