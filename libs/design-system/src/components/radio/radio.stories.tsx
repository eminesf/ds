/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';

import { Flex } from '../flex';
import { Heading } from '../heading';

import type { RadioGroupProps } from '.';
import { Radio, RadioGroup } from '.';

export default {
  title: 'Fields/RadioGroup',
  component: RadioGroup,
  subcomponents: { Radio },
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
    onChange: {
      action: 'change',
    },
  },
  args: {
    onChange: action('change'),
  },
} as Meta;

export const Default: Story<RadioGroupProps> = (args) => (
  <RadioGroup {...args}>
    <Radio data-testid="radio" label="Bolacha" value="1" />
    <Radio data-testid="radio" label="Biscoito" value="2" />
    <Radio data-testid="radio" label="O que estiver escrito no pacote" value="3" />
  </RadioGroup>
);

Default.storyName = 'Padrão';
Default.args = {
  name: 'question',
  label: 'Bolacha ou biscoito?',
};

export const WithErrorMessage: Story<RadioGroupProps> = (args) => (
  <RadioGroup {...args}>
    <Radio data-testid="radio" label="Bolacha" value="1" />
    <Radio data-testid="radio" label="Biscoito" value="2" />
    <Radio data-testid="radio" label="O que estiver escrito no pacote" value="3" />
  </RadioGroup>
);

WithErrorMessage.storyName = 'Com mensagem de erro';
WithErrorMessage.args = {
  name: 'question',
  label: 'Bolacha ou biscoito?',
  errorMessage: 'Campo obrigatório',
};

export const WithHelperMessage: Story<RadioGroupProps> = (args) => (
  <RadioGroup {...args}>
    <Radio data-testid="radio" label="Bolacha" value="1" />
    <Radio data-testid="radio" label="Biscoito" value="2" />
    <Radio data-testid="radio" label="O que estiver escrito no pacote" value="3" />
  </RadioGroup>
);

WithHelperMessage.storyName = 'Com mensagem de ajuda';
WithHelperMessage.args = {
  name: 'question',
  label: 'Bolacha ou biscoito?',
  helperMessage: 'Mensagem de ajuda',
};

export const Highlighted: Story<RadioGroupProps> = (args) => (
  <RadioGroup {...args}>
    <Radio
      label="Bolacha"
      value="1"
      data-testid="radio"
      highlightMessage="Melhor oferta para você"
    />
    <Radio data-testid="radio" label="Biscoito" value="2" />
    <Radio data-testid="radio" label="O que estiver escrito no pacote" value="3" />
  </RadioGroup>
);

Highlighted.storyName = 'Destacado';
Highlighted.args = {
  name: 'question',
  label: 'Bolacha ou biscoito?',
};

export const HighlightedOptions: Story<RadioGroupProps> = (args) => (
  <RadioGroup {...args}>
    <Radio data-testid="radio" label="Bolacha" value="1" />
    <Radio data-testid="radio" label="Biscoito" value="2" />
    <Radio data-testid="radio" label="O que estiver escrito no pacote" value="3" />
  </RadioGroup>
);

HighlightedOptions.storyName = 'Com opções destacados';
HighlightedOptions.args = {
  name: 'question',
  label: 'Bolacha ou biscoito?',
  highlighted: true,
};

export const Disabled: Story<RadioGroupProps> = (args) => (
  <RadioGroup {...args}>
    <Radio data-testid="radio" label="Bolacha" value="1" />
    <Radio data-testid="radio" label="Biscoito" value="2" />
    <Radio data-testid="radio" label="O que estiver escrito no pacote" value="3" />
  </RadioGroup>
);

Disabled.storyName = 'Desabilitado';
Disabled.args = {
  name: 'terms',
  label: 'Bolacha ou biscoito?',
  disabled: true,
};

export const WithoutLabel: Story<RadioGroupProps> = (args) => (
  <Flex gap="md" direction="column">
    <Heading id={args['aria-labelledby']}>Bolacha ou biscoito?</Heading>
    <RadioGroup {...args}>
      <Radio data-testid="radio" label="Bolacha" value="1" />
      <Radio data-testid="radio" label="Biscoito" value="2" />
      <Radio data-testid="radio" label="O que estiver escrito no pacote" value="3" />
    </RadioGroup>
  </Flex>
);

WithoutLabel.storyName = 'Sem label';
WithoutLabel.args = {
  name: 'question',
  'aria-labelledby': 'question',
};

export const WithDescription: Story<RadioGroupProps> = (args) => (
  <RadioGroup {...args}>
    <Radio
      label="Bolacha"
      value="1"
      data-testid="radio"
      description="O que está escrito no pacote!"
    />
    <Radio
      label="Biscoito"
      value="2"
      data-testid="radio"
      description="O que está escrito no pacote!"
    />
    <Radio
      label="O que estiver escrito no pacote"
      value="3"
      data-testid="radio"
      description="O que está escrito no pacote!"
    />
  </RadioGroup>
);

WithDescription.storyName = 'Com descrição';
WithDescription.args = {
  name: 'question',
  label: 'Bolacha ou biscoito?',
};

export const WithDescriptionHighlighted: Story<RadioGroupProps> = (args) => (
  <RadioGroup {...args}>
    <Radio
      label="Bolacha"
      value="1"
      data-testid="radio"
      description="O que está escrito no pacote!"
    />
    <Radio
      label="Biscoito"
      value="2"
      data-testid="radio"
      description="O que está escrito no pacote!"
    />
    <Radio
      label="O que estiver escrito no pacote"
      value="3"
      data-testid="radio"
      description="O que está escrito no pacote!"
    />
  </RadioGroup>
);

WithDescriptionHighlighted.storyName = 'Com descrição em destaque';
WithDescriptionHighlighted.args = {
  name: 'question',
  label: 'Bolacha ou biscoito?',
  highlighted: true,
};
