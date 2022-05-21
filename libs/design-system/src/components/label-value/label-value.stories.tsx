import React from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';

import type { LabelValueProps } from '.';
import {
  LabelValue,
  LabelValueAction,
  LabelValueHelper,
  LabelValueLabel,
  LabelValueValue,
} from '.';

export default {
  title: 'Others/LabelValue/LabelValue',
  component: LabelValue,
  subcomponents: {
    LabelValueValue,
    LabelValueLabel,
    LabelValueHelper,
    LabelValueAction,
  },
  argTypes: {
    tone: {
      defaultValue: 'support',
      table: {
        defaultValue: { summary: 'support' },
      },
      control: {
        type: 'select',
        options: ['support', 'neutral', 'success', 'critical', 'alert'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['card'],
      },
    },
    highlighted: {
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

export const Default: Story<LabelValueProps> = (args) => (
  <LabelValue {...args}>
    <LabelValueLabel data-testid="label-value-label">Chave</LabelValueLabel>
    <LabelValueValue data-testid="label-value-value">Valor</LabelValueValue>
  </LabelValue>
);

Default.storyName = 'Padrão';

export const WithAction: Story<LabelValueProps> = (args) => (
  <LabelValue {...args}>
    <LabelValueLabel data-testid="label-value-label">Débito em conta</LabelValueLabel>
    <LabelValueValue data-testid="label-value-value">Saldo disponível R$ 100,00</LabelValueValue>
    <LabelValueAction
      onPress={action('press-action')}
      iconAfter="chevron-right"
      data-testid="label-value-action"
    >
      Editar
    </LabelValueAction>
  </LabelValue>
);

WithAction.storyName = 'Com ação';

export const WithHelper: Story<LabelValueProps> = (args) => (
  <LabelValue {...args}>
    <LabelValueLabel data-testid="label-value-label">Chave</LabelValueLabel>
    <LabelValueValue data-testid="label-value-value">Valor</LabelValueValue>
    <LabelValueHelper data-testid="label-value-helper">Mensagem de ajuda</LabelValueHelper>
  </LabelValue>
);

WithHelper.storyName = 'Com helper';

export const Highlighted: Story<LabelValueProps> = (args) => (
  <LabelValue {...args}>
    <LabelValueLabel data-testid="label-value-label">Chave</LabelValueLabel>
    <LabelValueValue data-testid="label-value-value">Valor</LabelValueValue>
  </LabelValue>
);

Highlighted.storyName = 'Destacado';
Highlighted.args = { highlighted: true };
Highlighted.parameters = {
  docs: {
    description: {
      story:
        'Por padrão, não é possível utilizar a prop `highlighted` juntamente com as props `icon` nem utilizando um LabelValueAction ',
    },
  },
};

export const Card: Story<LabelValueProps> = (args) => (
  <LabelValue {...args}>
    <LabelValueLabel data-testid="label-value-label">Número de telefone</LabelValueLabel>
    <LabelValueValue data-testid="label-value-value">(21) 98547-5647</LabelValueValue>
    <LabelValueAction
      iconBefore="pencil"
      onPress={action('press-action')}
      data-testid="label-value-action"
    >
      Editar
    </LabelValueAction>
  </LabelValue>
);

Card.storyName = 'Card';
Card.args = {
  icon: 'mobile-dollar',
  variant: 'card',
  onPress: action('press'),
};
