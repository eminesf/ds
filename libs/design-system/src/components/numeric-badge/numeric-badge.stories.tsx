import React from 'react';
import type { Meta, Story } from '@storybook/react';

import type { NumericBadgeProps } from '.';
import { NumericBadge } from '.';

export default {
  title: 'Feedback/NumericBadge',
  component: NumericBadge,
  argTypes: {
    count: {
      table: {
        defaultValue: undefined,
      },
      control: {
        type: 'number',
      },
    },
  },
} as Meta;

export const Default: Story<NumericBadgeProps> = (args) => <NumericBadge {...args} />;

Default.storyName = 'Padrão';
Default.args = {
  count: 5,
  'aria-label': 'Número de dados não resolvidos',
};

export const AboveNine: Story<NumericBadgeProps> = (args) => <NumericBadge {...args} />;

AboveNine.storyName = 'Acima de 9';
AboveNine.args = {
  count: 10,
  'aria-label': 'Número de dados não resolvidos',
};

export const NoNumber: Story<NumericBadgeProps> = (args) => <NumericBadge {...args} />;

NoNumber.storyName = 'Sem número';
NoNumber.args = {
  'aria-label': 'Número de dados não resolvidos',
};
