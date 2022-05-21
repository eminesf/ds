/* eslint-disable react/destructuring-assignment */
import React from 'react';
import type { Meta, Story } from '@storybook/react';

import { Flex } from '../flex';
import { Heading } from '../heading';

import type { PhoneFieldProps } from '.';
import { PhoneField } from '.';

export default {
  title: 'Fields/PhoneField',
  component: PhoneField,
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
    onChange: {
      action: 'change',
    },
  },
} as Meta;

export const Default: Story<PhoneFieldProps> = (args) => <PhoneField {...args} />;

Default.storyName = 'Padrão';
Default.args = {
  name: 'phone',
  label: 'Telefone',
};

export const Disabled: Story<PhoneFieldProps> = (args) => <PhoneField {...args} />;

Disabled.storyName = 'Desabilitado';
Disabled.args = {
  name: 'phone',
  label: 'Telefone',
  disabled: true,
};

export const WithErrorMessage: Story<PhoneFieldProps> = (args) => <PhoneField {...args} />;

WithErrorMessage.storyName = 'Com mensagem de erro';
WithErrorMessage.args = {
  name: 'phone',
  label: 'Telefone',
  errorMessage: 'Campo obrigatório',
};

export const WithHelperMessage: Story<PhoneFieldProps> = (args) => <PhoneField {...args} />;

WithHelperMessage.storyName = 'Com mensagem de ajuda';
WithHelperMessage.args = {
  name: 'phone',
  label: 'Telefone',
  helperMessage: 'Mensagem de ajuda',
};

export const WithoutLabel: Story<PhoneFieldProps> = (args) => (
  <Flex gap="md" direction="column">
    <Heading id={args['aria-labelledby']}>Telefone</Heading>
    <PhoneField {...args} />
  </Flex>
);

WithoutLabel.storyName = 'Sem label';
WithoutLabel.args = {
  name: 'phone',
  'aria-labelledby': 'phone',
};
