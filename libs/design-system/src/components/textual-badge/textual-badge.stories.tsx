import React from 'react';
import type { Meta, Story } from '@storybook/react';

import type { TextualBadgeProps } from '.';
import { TextualBadge, TextualBadgeText } from '.';

export default {
  title: 'Feedback/TextualBadge',
  component: TextualBadge,
  subcomponents: {
    TextualBadgeText,
  },
  argTypes: {
    illustrated: {
      defaultValue: false,
      table: {
        defaultValue: false,
      },
      control: {
        type: 'boolean',
      },
    },
    variant: {
      defaultValue: 'neutral',
      table: {
        defaultValue: { summary: 'neutral' },
      },
      control: {
        type: 'select',
        options: ['success', 'neutral', 'alert'],
      },
    },
  },
} as Meta;

export const Default: Story<TextualBadgeProps> = (args) => (
  <TextualBadge {...args}>
    <TextualBadgeText>Faturado</TextualBadgeText>
  </TextualBadge>
);

Default.storyName = 'Padrão';
Default.args = {
  'aria-label': 'Status do boleto',
};

export const WithIcon: Story<TextualBadgeProps> = (args) => (
  <TextualBadge {...args}>
    <TextualBadgeText>Em análise</TextualBadgeText>
  </TextualBadge>
);

WithIcon.storyName = 'Com ícone';
WithIcon.args = {
  variant: 'alert',
  illustrated: true,
  'aria-label': 'Status do boleto',
};
