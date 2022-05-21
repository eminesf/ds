import React from 'react';
import type { Meta, Story } from '@storybook/react';

import { COLOR } from '../../utils';

import type { HeadingProps } from '.';
import { Heading } from '.';

export default {
  title: 'Structure/Heading',
  component: Heading,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: COLOR,
      },
    },
    size: {
      defaultValue: 'md',
      table: {
        defaultValue: { summary: 'md' },
      },
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xlg'],
      },
    },
    align: {
      control: {
        type: 'select',
        options: ['left', 'right', 'center'],
      },
    },
    weight: {
      defaultValue: 'bold',
      table: {
        defaultValue: { summary: 'bold' },
      },
      control: {
        type: 'select',
        options: ['regular', 'semibold', 'bold'],
      },
    },
  },
} as Meta;

export const Default: Story<HeadingProps> = (args) => <Heading {...args}>Título</Heading>;

Default.storyName = 'Padrão';
