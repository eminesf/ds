/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';

import { Flex } from '../flex';
import { Heading } from '../heading';

import type { CheckboxGroupProps } from '.';
import { Checkbox, CheckboxGroup } from '.';

export default {
  title: 'Fields/Checkbox/CheckboxGroup',
  component: CheckboxGroup,
  subcomponents: { Checkbox },
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
      control: true,
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

export const Default: Story<CheckboxGroupProps> = (args) => (
  <CheckboxGroup {...args}>
    <Checkbox data-testid="checkbox" label="Bolacha" value="1" />
    <Checkbox data-testid="checkbox" label="Biscoito" value="2" />
    <Checkbox data-testid="checkbox" label="O que estiver escrito no pacote" value="3" />
  </CheckboxGroup>
);

Default.storyName = 'Padrão';
Default.args = {
  name: 'question',
  label: 'Bolacha ou biscoito?',
};

export const WithErrorMessage: Story<CheckboxGroupProps> = (args) => (
  <CheckboxGroup {...args}>
    <Checkbox data-testid="checkbox" label="Bolacha" value="1" />
    <Checkbox data-testid="checkbox" label="Biscoito" value="2" />
    <Checkbox data-testid="checkbox" label="O que estiver escrito no pacote" value="3" />
  </CheckboxGroup>
);

WithErrorMessage.storyName = 'Com mensagem de erro';
WithErrorMessage.args = {
  name: 'question',
  label: 'Bolacha ou biscoito?',
  errorMessage: 'Campo obrigatório',
};

export const WithHelperMessage: Story<CheckboxGroupProps> = (args) => (
  <CheckboxGroup {...args}>
    <Checkbox data-testid="checkbox" label="Bolacha" value="1" />
    <Checkbox data-testid="checkbox" label="Biscoito" value="2" />
    <Checkbox data-testid="checkbox" label="O que estiver escrito no pacote" value="3" />
  </CheckboxGroup>
);

WithHelperMessage.storyName = 'Com mensagem de ajuda';
WithHelperMessage.args = {
  name: 'question',
  label: 'Bolacha ou biscoito?',
  helperMessage: 'Mensagem de ajuda',
};

export const Highlighted: Story<CheckboxGroupProps> = (args) => (
  <CheckboxGroup {...args}>
    <Checkbox data-testid="checkbox" label="Bolacha" value="1" />
    <Checkbox data-testid="checkbox" label="Biscoito" value="2" />
    <Checkbox data-testid="checkbox" label="O que estiver escrito no pacote" value="3" />
  </CheckboxGroup>
);

Highlighted.storyName = 'Destacado';
Highlighted.args = {
  name: 'question',
  label: 'Bolacha ou biscoito?',
  highlighted: true,
};

export const Disabled: Story<CheckboxGroupProps> = (args) => (
  <CheckboxGroup {...args}>
    <Checkbox data-testid="checkbox" label="Bolacha" value="1" />
    <Checkbox data-testid="checkbox" label="Biscoito" value="2" />
    <Checkbox data-testid="checkbox" label="O que estiver escrito no pacote" value="3" />
  </CheckboxGroup>
);

Disabled.storyName = 'Desabilitado';
Disabled.args = {
  name: 'terms',
  label: 'Bolacha ou biscoito?',
  disabled: true,
};

export const WithoutLabel: Story<CheckboxGroupProps> = (args) => (
  <Flex gap="md" direction="column">
    <Heading id={args['aria-labelledby']}>Valor unitário</Heading>
    <CheckboxGroup {...args}>
      <Checkbox data-testid="checkbox" label="Bolacha" value="1" />
      <Checkbox data-testid="checkbox" label="Biscoito" value="2" />
      <Checkbox data-testid="checkbox" label="O que estiver escrito no pacote" value="3" />
    </CheckboxGroup>
  </Flex>
);

WithoutLabel.storyName = 'Sem label';
WithoutLabel.args = {
  name: 'question',
  'aria-labelledby': 'question',
};

export const WithDescription: Story<CheckboxGroupProps> = (args) => (
  <CheckboxGroup {...args}>
    <Checkbox
      label="Bolacha"
      value="1"
      data-testid="checkbox"
      description="O que está escrito no pacote!"
    />
    <Checkbox
      label="Biscoito"
      value="2"
      data-testid="checkbox"
      description="O que está escrito no pacote!"
    />
    <Checkbox
      label="O que estiver escrito no pacote"
      value="3"
      data-testid="checkbox"
      description="O que está escrito no pacote!"
    />
  </CheckboxGroup>
);

WithDescription.storyName = 'Com descrição';
WithDescription.args = {
  name: 'question',
  label: 'Bolacha ou biscoito?',
};
