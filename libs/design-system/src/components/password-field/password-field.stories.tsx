/* eslint-disable react/destructuring-assignment */
import React from 'react';
import type { Meta, Story } from '@storybook/react';

import { Flex } from '../flex';
import { Heading } from '../heading';

import type { PasswordFieldProps } from '.';
import { PasswordField } from '.';

export default {
  title: 'Fields/PasswordField',
  component: PasswordField,
  argTypes: {
    readOnly: {
      defaultValue: false,
      table: {
        defaultValue: { summary: undefined },
      },
      control: {
        type: 'boolean',
      },
    },
    errorMessage: {
      defaultValue: '',
      table: {
        defaultValue: { summary: '' },
      },
      control: {
        type: 'text',
      },
    },
    helperMessage: {
      defaultValue: '',
      table: {
        defaultValue: { summary: '' },
      },
      control: {
        type: 'text',
      },
    },
    value: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
} as Meta;

export const Default: Story<PasswordFieldProps> = (args) => <PasswordField {...args} />;

Default.storyName = 'Padrão';
Default.args = {
  name: 'password',
  label: 'Senha',
};

export const Disabled: Story<PasswordFieldProps> = (args) => <PasswordField {...args} />;

Disabled.storyName = 'Desabilitado';
Disabled.args = {
  name: 'password',
  label: 'Senha',
  disabled: true,
};

export const WithErrorMessage: Story<PasswordFieldProps> = (args) => <PasswordField {...args} />;

WithErrorMessage.storyName = 'Com mensagem de erro';
WithErrorMessage.args = {
  name: 'password',
  label: 'Senha',
  errorMessage: 'Campo obrigatório',
};

export const WithHelperMessage: Story<PasswordFieldProps> = (args) => <PasswordField {...args} />;

WithHelperMessage.storyName = 'Com mensagem de ajuda';
WithHelperMessage.args = {
  name: 'password',
  label: 'Senha',
  helperMessage: 'Mensagem de ajuda',
};

export const WithoutLabel: Story<PasswordFieldProps> = (args) => (
  <Flex gap="md" direction="column">
    <Heading id={args['aria-labelledby']}>Senha</Heading>
    <PasswordField {...args} />
  </Flex>
);

WithoutLabel.storyName = 'Sem label';
WithoutLabel.args = {
  name: 'password',
  'aria-labelledby': 'password',
};
