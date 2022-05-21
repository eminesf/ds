import React from 'react';
import type { Meta, Story } from '@storybook/react';

import type { IconHeroProps } from '.';
import { IconHero, IconHeroIcon, IconHeroText, IconHeroTitle } from '.';

export default {
  title: 'Others/IconHero',
  component: IconHero,
  subcomponents: { IconHeroIcon, IconHeroText, IconHeroTitle },
  argTypes: {
    highlighted: {
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    alignment: {
      defaultValue: 'left',
      table: {
        defaultValue: { summary: 'left' },
      },
      control: {
        type: 'select',
        options: ['left', 'right', 'center'],
      },
    },
    iconPosition: {
      defaultValue: 'above',
      table: {
        defaultValue: { summary: 'above' },
      },
      control: {
        type: 'select',
        options: ['above', 'aside'],
      },
    },
  },
} as Meta;

export const Default: Story<IconHeroProps> = (args) => (
  <IconHero {...args}>
    <IconHeroIcon name="payment-error" />
    <IconHeroTitle>Não foi possível realizar sua recarga.</IconHeroTitle>
    <IconHeroText>Tente novamente mais tarde.</IconHeroText>
  </IconHero>
);

Default.storyName = 'Padrão';

export const Highlighted: Story<IconHeroProps> = (args) => (
  <IconHero {...args}>
    <IconHeroIcon name="hifive" />
    <IconHeroTitle>Pagamento realizado com sucesso!</IconHeroTitle>
    <IconHeroText>Realizar nova recarga</IconHeroText>
  </IconHero>
);

Highlighted.storyName = 'Hero';
Highlighted.args = { highlighted: true };
