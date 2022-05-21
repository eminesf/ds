import React from 'react';
import type { Meta, Story } from '@storybook/react';

import type { LogoProps } from '.';
import { Logo } from '.';

export default {
  title: 'Others/Logo',
  component: Logo,
  argTypes: {
    size: {
      defaultValue: 'lg',
      table: {
        defaultValue: { summary: 'sm' },
      },
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    variant: {
      defaultValue: 'primary',
      table: {
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
  },
} as Meta;

export const Default: Story<LogoProps> = (args) => <Logo {...args} />;

Default.storyName = 'Padrão';

export const Secondary: Story<LogoProps> = (args) => <Logo {...args} />;

Secondary.storyName = 'Secundário';
Secondary.args = { variant: 'secondary' };
Secondary.parameters = { backgrounds: { default: 'dark' } };
