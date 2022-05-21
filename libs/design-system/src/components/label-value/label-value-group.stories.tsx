import React from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';

import type { LabelValueGroupProps } from '.';
import { LabelValue, LabelValueAction, LabelValueGroup, LabelValueLabel, LabelValueValue } from '.';

export default {
  title: 'Others/LabelValue/LabelValueGroup',
  component: LabelValueGroup,
  subcomponents: {
    LabelValue,
    LabelValueLabel,
    LabelValueValue,
    LabelValueGroup,
    LabelValueAction,
  },
  argTypes: {
    variant: {
      defaultValue: 'default',
      table: {
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'select',
        options: ['default', 'card'],
      },
    },
  },
} as Meta;

export const Default: Story<LabelValueGroupProps> = (args) => (
  <LabelValueGroup {...args}>
    <LabelValue data-testid="label-value">
      <LabelValueLabel data-testid="label-value-label">Número de telefone</LabelValueLabel>
      <LabelValueValue data-testid="label-value-value">(21) 98547-5647</LabelValueValue>
    </LabelValue>
    <LabelValue data-testid="label-value">
      <LabelValueLabel data-testid="label-value-label">Valor da recarga</LabelValueLabel>
      <LabelValueValue data-testid="label-value-value">R$ 30,00</LabelValueValue>
    </LabelValue>
    <LabelValue data-testid="label-value">
      <LabelValueLabel data-testid="label-value-label">Operadora</LabelValueLabel>
      <LabelValueValue data-testid="label-value-value">Tps</LabelValueValue>
    </LabelValue>
  </LabelValueGroup>
);

Default.storyName = 'Padrão';
Default.args = {
  'aria-label': 'Dados da recarga',
};

export const WithAction: Story<LabelValueGroupProps> = (args) => (
  <LabelValueGroup {...args}>
    <LabelValue data-testid="label-value">
      <LabelValueLabel data-testid="label-value-label">Número de telefone</LabelValueLabel>
      <LabelValueValue data-testid="label-value-value">(21) 98547-5647</LabelValueValue>
      <LabelValueAction
        onPress={action('press-action')}
        iconAfter="chevron-right"
        data-testid="label-value-action"
      >
        Editar
      </LabelValueAction>
    </LabelValue>
    <LabelValue data-testid="label-value">
      <LabelValueLabel data-testid="label-value-label">Valor da recarga</LabelValueLabel>
      <LabelValueValue data-testid="label-value-value">R$ 30,00</LabelValueValue>
      <LabelValueAction
        onPress={action('press-action')}
        iconAfter="chevron-right"
        data-testid="label-value-action"
      >
        Editar
      </LabelValueAction>
    </LabelValue>
    <LabelValue data-testid="label-value">
      <LabelValueLabel data-testid="label-value-label">Operadora</LabelValueLabel>
      <LabelValueValue data-testid="label-value-value">Tps</LabelValueValue>
      <LabelValueAction
        onPress={action('press-action')}
        iconAfter="chevron-right"
        data-testid="label-value-action"
      >
        Editar
      </LabelValueAction>
    </LabelValue>
  </LabelValueGroup>
);

WithAction.storyName = 'Com ação';
WithAction.args = {
  'aria-label': 'Dados da recarga',
};

export const Card: Story<LabelValueGroupProps> = (args) => (
  <LabelValueGroup {...args}>
    <LabelValue data-testid="label-value" onPress={action('press')} icon="mobile-dollar">
      <LabelValueLabel data-testid="label-value-label">Número de telefone</LabelValueLabel>
      <LabelValueValue data-testid="label-value-value">(21) 98547-5647</LabelValueValue>
      <LabelValueAction
        onPress={action('press-action')}
        iconBefore="pencil"
        data-testid="label-value-action"
      >
        Editar
      </LabelValueAction>
    </LabelValue>
    <LabelValue data-testid="label-value" onPress={action('press')} icon="mobile-dollar">
      <LabelValueLabel data-testid="label-value-label">Valor da recarga</LabelValueLabel>
      <LabelValueValue data-testid="label-value-value">R$ 30,00</LabelValueValue>
      <LabelValueAction
        onPress={action('press-action')}
        iconBefore="pencil"
        data-testid="label-value-action"
      >
        Editar
      </LabelValueAction>
    </LabelValue>
    <LabelValue data-testid="label-value" onPress={action('press')} icon="mobile-dollar">
      <LabelValueLabel data-testid="label-value-label">Operadora</LabelValueLabel>
      <LabelValueValue data-testid="label-value-value">Tps</LabelValueValue>
      <LabelValueAction
        onPress={action('press-action')}
        iconBefore="pencil"
        data-testid="label-value-action"
      >
        Editar
      </LabelValueAction>
    </LabelValue>
  </LabelValueGroup>
);

Card.storyName = 'Card';
Card.args = {
  'aria-label': 'Dados da recarga',
};
Card.args = { variant: 'card' };
