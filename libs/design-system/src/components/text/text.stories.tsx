import React from 'react';
import type { Meta, Story } from '@storybook/react';

import { COLOR } from '../../utils';

import type { TextProps } from '.';
import { Text } from '.';

export default {
  title: 'Structure/Text',
  component: Text,
  argTypes: {
    size: {
      defaultValue: 'md',
      table: {
        defaultValue: { summary: 'md' },
      },
      control: {
        type: 'select',
        options: ['xsm', 'sm', 'md', 'lg'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: COLOR,
      },
    },
    align: {
      control: {
        type: 'select',
        options: ['left', 'right', 'center'],
      },
    },
    weight: {
      defaultValue: 'regular',
      table: {
        defaultValue: { summary: 'regular' },
      },
      control: {
        type: 'select',
        options: ['regular', 'semibold', 'bold'],
      },
    },
  },
} as Meta;

export const Default: Story<TextProps> = (args) => (
  <Text as="p" {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis erat ex. Fusce quam
    sapien, ultrices in lacus et, pretium interdum augue. Proin sit amet laoreet nisi. Nullam non
    faucibus nunc. Fusce eleifend erat a justo pellentesque consectetur. Donec nunc arcu, convallis
    mattis lacus ut, commodo imperdiet nibh. <strong>Donec rhoncus ex accumsan</strong> ipsum
    lobortis, vel blandit turpis sagittis. Etiam maximus blandit nibh non dictum. Integer
    condimentum aliquam lorem, vitae consequat est congue in. Nulla massa nisl, dignissim eget
    consequat eget, ullamcorper sed arcu.
  </Text>
);

Default.storyName = 'Padrão';
