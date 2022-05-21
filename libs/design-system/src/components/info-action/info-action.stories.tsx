import * as React from 'react';

import { Link } from '../link';
import { Text } from '../text';

import { InfoAction, InfoActionProps } from '.';

export default {
  component: InfoAction,
  title: 'Components/InfoAction',
  argTypes: {
    align: {
      defaultValue: 'left',
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
    },
  },
};

export const basicHeroMaster = (args: InfoActionProps) => (
  <InfoAction align={args.align}>
    <InfoAction.Icon name="lightbulb-on" size="3xlg" />
    <InfoAction.Title as="h1" size="lg" color="primary-200">
      H1 - Assunto principal aqui
    </InfoAction.Title>
    <InfoAction.SubTitle className="font-bold">
      H4 - Subtítulo Campanha ou Produto
    </InfoAction.SubTitle>
    <InfoAction.Content>
      <Text size="sm">Body 1 - Seu parágrafo aqui complementando o título e instruções</Text>
    </InfoAction.Content>
  </InfoAction>
);

export const basicInfoMaster = (args: InfoActionProps) => (
  <InfoAction align={args.align}>
    <InfoAction.Icon name="lightbulb-on" size="xlg" />
    <InfoAction.Title as="h2" size="md" color="primary-200">
      H2 - Assunto
    </InfoAction.Title>
    <InfoAction.Content>
      <Text size="sm">
        Body 1 Conte para os seus amigos beneficiários do INSS as vantagens e indique que eles abram
        uma conta no Agi.
      </Text>
    </InfoAction.Content>
    <InfoAction.Action>
      <Link href="https://google.com" target="_blank">
        Placeholder
      </Link>
    </InfoAction.Action>
  </InfoAction>
);

export const basicInfoContent = (args: InfoActionProps) => (
  <InfoAction align={args.align}>
    <InfoAction.Icon name="lightbulb-on" size="xlg" />
    <InfoAction.Title as="h2" size="sm">
      H3 - Indique o Agi para os seus amigos
    </InfoAction.Title>
    <InfoAction.Content>
      <Text size="sm">
        Body 1 - Conte para os seus amigos beneficiários do INSS as vantagens e indique que eles
        abram uma conta no Agi.
      </Text>
    </InfoAction.Content>
    <InfoAction.Action>
      <Link href="https://google.com" target="_blank">
        Placeholder
      </Link>
    </InfoAction.Action>
  </InfoAction>
);
