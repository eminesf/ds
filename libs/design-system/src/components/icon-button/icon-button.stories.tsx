import React from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';

import { COLOR } from '../../utils';
import { ICON_NAME } from '../icon/constants';

import type { IconButtonProps } from '.';
import { IconButton } from '.';

export default {
  title: 'Buttons/IconButton',
  component: IconButton,
  argTypes: {
    size: {
      defaultValue: '3xlg',
      table: {
        defaultValue: { summary: 'md' },
      },
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xlg', '2xlg', '3xlg'],
      },
    },
    disabled: {
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    icon: {
      defaultValue: 'bell',
      control: {
        type: 'select',
        options: ICON_NAME,
      },
    },
    'aria-label': {
      control: {
        type: 'text',
      },
    },
    color: {
      control: {
        type: 'select',
        options: COLOR,
      },
    },
  },
  args: {
    onPress: action('press'),
  },
} as Meta;

export const Default: Story<IconButtonProps> = (args) => <IconButton {...args} />;

Default.storyName = 'Padrão';
Default.args = {
  'aria-label': 'Notificações',
};
