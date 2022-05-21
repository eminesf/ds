/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';

import { Flex } from '../flex';
import { Heading } from '../heading';

import type { CurrencyFieldProps } from '.';
import { CurrencyField } from '.';

export default {
  title: 'Fields/CurrencyField',
  component: CurrencyField,
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    value: {
      control: {
        type: 'text',
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
    readOnly: {
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    required: {
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    errorMessage: {
      control: {
        type: 'text',
      },
    },
    helperMessage: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    onChange: action('change'),
  },
} as Meta;

export const Default: Story<CurrencyFieldProps> = (args) => <CurrencyField {...args} />;

Default.storyName = 'Padrão';
Default.args = {
  name: 'amount',
  label: 'Valor',
};

export const Disabled: Story<CurrencyFieldProps> = (args) => <CurrencyField {...args} />;

Disabled.storyName = 'Desabilitado';
Disabled.args = {
  name: 'amount',
  label: 'Valor',
  disabled: true,
};

export const WithErrorMessage: Story<CurrencyFieldProps> = (args) => <CurrencyField {...args} />;

WithErrorMessage.storyName = 'Com mensagem de erro';
WithErrorMessage.args = {
  name: 'amount',
  label: 'Valor',
  errorMessage: 'Campo obrigatório',
};

export const WithHelperMessage: Story<CurrencyFieldProps> = (args) => <CurrencyField {...args} />;

WithHelperMessage.storyName = 'Com mensagem de ajuda';
WithHelperMessage.args = {
  name: 'amount',
  label: 'Valor',
  helperMessage: 'Mensagem de ajuda',
};

export const WithoutLabel: Story<CurrencyFieldProps> = (args) => (
  <Flex gap="md" direction="column">
    <Heading id={args['aria-labelledby']}>Valor</Heading>
    <CurrencyField {...args} />
  </Flex>
);

WithoutLabel.storyName = 'Sem label';
WithoutLabel.args = {
  name: 'amount',
  'aria-labelledby': 'amount',
};
