import React from 'react';
import type { Meta, Story } from '@storybook/react';

import type { TabsProps } from '.';
import { TabItem, Tabs } from '.';

export default {
  title: 'Structure/Tabs',
  component: Tabs,
  subcomponents: { TabItem },
  argTypes: {
    align: {
      defaultValue: 'left',
      table: {
        defaultValue: { summary: 'left' },
      },
      control: {
        type: 'select',
        options: ['left', 'right', 'center', 'stretch'],
      },
    },
  },
} as Meta;

export const Default: Story<TabsProps> = (args) => (
  <Tabs {...args}>
    <TabItem title="Comprar cartões">Veja os Gift Cards disponíveis para compra</TabItem>
    <TabItem title="Meus cartões">Veja seus Gift Cards aqui</TabItem>
  </Tabs>
);

Default.storyName = 'Padrão';
Default.args = {
  'aria-label': 'Gift Cards',
};
Default.parameters = {
  docs: {
    description: {
      story:
        'A propriedade `title` de cada TabItem é usada como chave para controlar a seleção das Tabs, portanto, os `titles` devem ser únicos.',
    },
  },
};

export const Controlled: Story<TabsProps> = (args) => (
  <Tabs {...args}>
    <TabItem title="Comprar cartões">Veja os Gift Cards disponíveis para compra</TabItem>
    <TabItem title="Meus cartões">Veja seus Gift Cards aqui</TabItem>
  </Tabs>
);

Controlled.storyName = 'Controlado';
Controlled.args = {
  'aria-label': 'Gift Cards',
  value: 'Comprar cartões',
};
Controlled.argTypes = {
  value: {
    control: {
      type: 'select',
      options: ['Comprar cartões', 'Meus cartões'],
    },
  },
};
Controlled.parameters = {
  docs: {
    description: {
      story:
        'A propriedade `title` de cada TabItem é usada como chave para controlar a seleção das Tabs, portanto, os `titles` devem ser únicos.',
    },
  },
};
