import React from 'react';
import type { Meta, Story } from '@storybook/react';

import { noop } from '../../../utils';
import { Flex } from '../../flex';
import { LabelValue, LabelValueGroup, LabelValueLabel, LabelValueValue } from '../../label-value';
import { Text } from '../../text';

import type { AppFeedbackProps } from '.';
import { AppFeedback, AppFeedbackAction, AppFeedbackContent, AppFeedbackTitle } from '.';

export default {
  title: 'App/Feedback',
  component: AppFeedback,
  argTypes: {
    variant: {
      defaultValue: 'success',
      table: {
        defaultValue: { summary: 'success' },
      },
      control: {
        type: 'select',
        options: ['success', 'critical'],
      },
    },
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    chromatic: {
      viewports: [320],
    },
  },
  subcomponents: { AppFeedbackAction, AppFeedbackContent, AppFeedbackTitle },
} as Meta;

export const Default: Story<AppFeedbackProps> = (args) => (
  <AppFeedback {...args}>
    <AppFeedbackTitle icon="hifive">Pagamento realizado com sucesso!</AppFeedbackTitle>
    <AppFeedbackContent>
      <LabelValueGroup aria-label="Informações da recarga">
        <LabelValue>
          <LabelValueLabel>Número de telefone</LabelValueLabel>
          <LabelValueValue>(86) 99990-4957</LabelValueValue>
        </LabelValue>
        <LabelValue>
          <LabelValueLabel>Valor da recarga</LabelValueLabel>
          <LabelValueValue>R$ 30,00</LabelValueValue>
        </LabelValue>
        <LabelValue>
          <LabelValueLabel>Operadora</LabelValueLabel>
          <LabelValueValue>TIM</LabelValueValue>
        </LabelValue>
        <LabelValue>
          <LabelValueLabel>Forma de pagamento</LabelValueLabel>
          <LabelValueValue>Saldo em conta</LabelValueValue>
        </LabelValue>
        <LabelValue>
          <LabelValueLabel>NSU</LabelValueLabel>
          <LabelValueValue>000026590</LabelValueValue>
        </LabelValue>
      </LabelValueGroup>
    </AppFeedbackContent>
    <AppFeedbackAction onPress={noop}>Fazer nova recarga</AppFeedbackAction>
  </AppFeedback>
);

Default.storyName = 'Padrão';

export const Error: Story<AppFeedbackProps> = (args) => (
  <AppFeedback {...args}>
    <AppFeedbackTitle icon="payment-error">Não foi possível realizar sua recarga.</AppFeedbackTitle>
    <AppFeedbackContent>
      <Flex gap="sm" direction="column" alignItems="flex-start">
        <Text color="support-100">
          Sua recarga para o número (31) 99138-8769 não foi concluída por [motivo].
        </Text>
        <Text color="support-100">Em caso de dúvidas, estamos com você através do nosso chat:</Text>
      </Flex>
    </AppFeedbackContent>
    <AppFeedbackAction variant="secondary" icon="chat" onPress={noop}>
      Falar no chat com a Gi
    </AppFeedbackAction>
    <AppFeedbackAction onPress={noop}>Tentar novamente</AppFeedbackAction>
  </AppFeedback>
);

Error.storyName = 'Com erro';
Error.args = { variant: 'critical' };
