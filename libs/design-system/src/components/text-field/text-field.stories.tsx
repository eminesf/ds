/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';

import { Flex } from '../flex';
import { Heading } from '../heading';
import { ICON_NAME } from '../icon/constants';

import type { TextFieldProps } from '.';
import { TextField } from '.';

export default {
  title: 'Fields/TextField',
  component: TextField,
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
    icon: {
      control: {
        type: 'select',
        options: ICON_NAME,
      },
    },
  },
  args: {
    onChange: action('change'),
  },
} as Meta;

export const Default: Story<TextFieldProps> = (args) => <TextField {...args} />;

Default.storyName = 'Padrão';
Default.args = {
  name: 'name',
  label: 'Nome',
};

export const Disabled: Story<TextFieldProps> = (args) => <TextField {...args} />;

Disabled.storyName = 'Desabilitado';
Disabled.args = {
  name: 'name',
  label: 'Nome',
  disabled: true,
};

export const WithErrorMessage: Story<TextFieldProps> = (args) => <TextField {...args} />;

WithErrorMessage.storyName = 'Com mensagem de erro';
WithErrorMessage.args = {
  name: 'name',
  label: 'Nome',
  errorMessage: 'Campo obrigatório',
};

export const WithHelperMessage: Story<TextFieldProps> = (args) => <TextField {...args} />;

WithHelperMessage.storyName = 'Com mensagem de ajuda';
WithHelperMessage.args = {
  name: 'name',
  label: 'Nome',
  helperMessage: 'Mensagem de ajuda',
};

export const WithoutLabel: Story<TextFieldProps> = (args) => (
  <Flex gap="md" direction="column">
    <Heading id={args['aria-labelledby']}>Nome</Heading>
    <TextField {...args} />
  </Flex>
);

WithoutLabel.storyName = 'Sem label';
WithoutLabel.args = {
  name: 'name',
  'aria-labelledby': 'name',
};

export const WithIcon: Story<TextFieldProps> = (args) => <TextField {...args} />;

WithIcon.storyName = 'Com ícone';
WithIcon.args = {
  name: 'name',
  label: 'Nome',
  icon: 'cog',
};
