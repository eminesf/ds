import React from 'react';
import type { Meta, Story } from '@storybook/react';

import { ChatWhatsapp, ChatWhatsappProps } from '.';

export default {
  title: 'Components/ChatWhatsapp',
  component: ChatWhatsapp,
} as Meta;

export const Default: Story<ChatWhatsappProps> = (args) => <ChatWhatsapp {...args} />;

Default.args = {
  keyChat: 'aG9tbXNnYWdpYmFua3JvdXRlcjo0YjVmODEwYi0xNmMyLTRmNDUtYWY1Ny01ODZkZDEwNmExYjk=',
  colorChat: '#f8b14b',
  canalChat: 'Site',
  originChat: 'LP Home',
  phoneWpp: '555139211342',
  messageWpp: 'Olá! Vim do site Agi',
};

Default.storyName = 'Padrão';
