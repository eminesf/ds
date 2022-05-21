import React from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';

import type { CheckboxProps } from '.';
import { Checkbox } from '.';

export default {
  title: 'Fields/Checkbox/Checkbox',
  component: Checkbox,
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
    description: {
      control: {
        type: 'text',
      },
    },
    checked: {
      control: {
        type: 'boolean',
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

export const Default: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

Default.storyName = 'Padrão';
Default.args = {
  name: 'terms',
  label: 'Concordo com os termos',
};

export const WithErrorMessage: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

WithErrorMessage.storyName = 'Com mensagem de erro';
WithErrorMessage.args = {
  name: 'terms',
  label: 'Concordo com os termos',
  errorMessage: 'Campo obrigatório',
};

export const WithHelperMessage: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

WithHelperMessage.storyName = 'Com mensagem de ajuda';
WithHelperMessage.args = {
  name: 'terms',
  label: 'Concordo com os termos',
  helperMessage: 'Mensagem de ajuda',
};

export const Highlighted: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

Highlighted.storyName = 'Destacado';
Highlighted.args = {
  name: 'terms',
  label: 'Concordo com os termos',
  highlighted: true,
};

export const Disabled: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

Disabled.storyName = 'Desabilitado';
Disabled.args = {
  name: 'terms',
  label: 'Concordo com os termos',
  disabled: true,
};

export const WithDescription: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

WithDescription.storyName = 'Com descrição';
WithDescription.args = {
  name: 'terms',
  label: 'Concordo com os termos',
  description: 'Lorem ipsum dolor at',
};
