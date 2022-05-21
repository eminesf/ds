import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';

import { Button } from '../button';

import type { ModalProps } from '.';
import { Modal, ModalAction, ModalIcon, ModalText, ModalTitle } from '.';

export default {
  title: 'Feedback/Modal',
  component: Modal,
  subcomponents: {
    ModalTitle,
    ModalIcon,
    ModalAction,
    ModalText,
  },
  argTypes: {
    show: {
      defaultValue: false,
      table: {
        defaultValue: false,
      },
      control: {
        type: 'boolean',
      },
    },
    variant: {
      defaultValue: 'neutral',
      table: {
        defaultValue: 'neutral',
      },
      control: {
        type: 'select',
        options: ['neutral', 'alert', 'critical'],
      },
    },
  },
  args: {
    onClose: action('close'),
  },
  parameters: {
    chromatic: { delay: 500 },
  },
} as Meta;

export const Default: Story<ModalProps> = (args) => {
  const [showModal, setShowModal] = useState(isChromatic());

  const toggleShowModal = () => {
    if (showModal) {
      action('close')();
    }

    if (!isChromatic()) setShowModal(!showModal);
  };

  return (
    <>
      {isChromatic() ? null : (
        <Button data-testid="button" onPress={toggleShowModal}>
          Abrir modal
        </Button>
      )}
      <Modal {...args} show={showModal} onClose={toggleShowModal}>
        <ModalIcon name="bell" />
        <ModalTitle>Sucesso</ModalTitle>
        <ModalText>
          Deu tudo certo com seu cadastro, agora é só confirmar no seu e-mail e curtir o novo app do
          Agi
        </ModalText>
        <ModalAction onPress={action('press-action')}>Concluir</ModalAction>
      </Modal>
    </>
  );
};

Default.storyName = 'Padrão';
Default.parameters = {
  docs: {
    description: {
      story:
        'É possível compor o modal adicionando seus subcomponentes. Entretanto, a recomendação do Design System é que seja obrigatório adicionar no mínimo título e ação. Só é permitido ter um Action `primary` (obrigatório) e um Action `secondary` (opcional)',
    },
  },
};

export const WithSecondaryAction: Story<ModalProps> = (args) => {
  const [showModal, setShowModal] = useState(isChromatic());

  const toggleShowModal = () => {
    if (showModal) {
      action('close')();
    }

    if (!isChromatic()) setShowModal(!showModal);
  };

  return (
    <>
      {isChromatic() ? null : <Button onPress={toggleShowModal}>Abrir modal</Button>}
      <Modal {...args} show={showModal} onClose={toggleShowModal}>
        <ModalIcon name="bell" />
        <ModalTitle>Sucesso</ModalTitle>
        <ModalText>
          Deu tudo certo com seu cadastro, agora é só confirmar no seu e-mail e curtir o novo app do
          Agi
        </ModalText>
        <ModalAction onPress={action('press-action')}>Concluir</ModalAction>
        <ModalAction variant="secondary" onPress={action('press-action')}>
          Reenviar e-mail
        </ModalAction>
      </Modal>
    </>
  );
};

WithSecondaryAction.storyName = 'Com botão secundário';

export const WithoutIcon: Story<ModalProps> = (args) => {
  const [showModal, setShowModal] = useState(isChromatic());

  const toggleShowModal = () => {
    if (showModal) {
      action('close')();
    }

    if (!isChromatic()) setShowModal(!showModal);
  };

  return (
    <>
      {isChromatic() ? null : <Button onPress={toggleShowModal}>Abrir modal</Button>}
      <Modal {...args} show={showModal} onClose={toggleShowModal}>
        <ModalTitle>Sucesso</ModalTitle>
        <ModalText>
          Deu tudo certo com seu cadastro, agora é só confirmar no seu e-mail e curtir o novo app do
          Agi
        </ModalText>
        <ModalAction onPress={action('press-action')}>Concluir</ModalAction>
      </Modal>
    </>
  );
};

WithoutIcon.storyName = 'Sem ícone';
