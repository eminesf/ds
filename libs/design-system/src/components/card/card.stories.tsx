import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';

import { Flex } from '../flex';
import { Heading } from '../heading';
import { Icon } from '../icon';

import type { CardProps } from '.';
import { Card, CardImage, CardStar } from '.';

export default {
  title: 'Structure/Card',
  component: Card,
  subcomponents: { CardImage, CardStar },
  argTypes: {
    tone: {
      defaultValue: 'support',
      table: {
        defaultValue: { summary: 'support' },
      },
      control: {
        type: 'select',
        options: ['support', 'alert', 'none'],
      },
    },
    highlightedMessage: {
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
    withMargin: {
      defaultValue: false,
      control: {
        type: 'boolean',
        control: 'select',
        options: [true, false],
      },
    },
  },
} as Meta;

export const Default: Story<CardProps> = (args) => (
  <Card {...args}>
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Icon name="grin-beam-outline" size="3xlg" />
      <Heading align="center">Parabéns meu consagrado</Heading>
    </Flex>
  </Card>
);

Default.storyName = 'Padrão';

export const Highlighted: Story<CardProps> = (args) => (
  <Card {...args}>
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Icon name="grin-beam-outline" size="3xlg" />
      <Heading align="center">Parabéns meu consagrado</Heading>
    </Flex>
  </Card>
);

Highlighted.storyName = 'Com destaque';
Highlighted.args = {
  highlightedMessage: 'Você ganhou 5% de cashback',
};

export const WithCardImage: Story<CardProps> = (args) => (
  <Card {...args}>
    <CardImage
      alt="Árvore de desenho com fundo branco"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQelK0xhVg25d_DZytU07gHeerhCBwhSmm12UTi1jnKeGkhMIRKeMvwW5Ue9KzOqXofogE&usqp=CAU"
      data-testid="card-image"
      {...args}
    />
  </Card>
);

WithCardImage.storyName = 'Com imagem';

export const WithAction: Story<CardProps> = (args) => (
  <Card {...args}>
    <CardImage
      alt="Desenho de uma árvore com fundo branco"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQelK0xhVg25d_DZytU07gHeerhCBwhSmm12UTi1jnKeGkhMIRKeMvwW5Ue9KzOqXofogE&usqp=CAU"
      {...args}
    />
  </Card>
);

WithAction.storyName = 'Com uma ação';
WithAction.args = {
  onPress: action('press'),
};

export const WithStar: Story<CardProps> = (args) => {
  const [starred, setStarred] = useState(false);

  return (
    <Card {...args}>
      <CardStar starred={starred} onPress={() => setStarred(!starred)} data-testid="card-star" />
      <CardImage
        alt="Desenho de uma árvore com fundo branco"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQelK0xhVg25d_DZytU07gHeerhCBwhSmm12UTi1jnKeGkhMIRKeMvwW5Ue9KzOqXofogE&usqp=CAU"
        {...args}
      />
    </Card>
  );
};

WithStar.storyName = 'Com favorito';
WithStar.args = {
  onPress: action('press'),
};
