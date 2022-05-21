import React from 'react';
import type { Meta, Story } from '@storybook/react';

import { Accordion, AccordionItem } from '.';

export default {
  title: 'Others/Accordion',
  component: Accordion,
  subcomponents: { AccordionItem },
} as Meta;

export const Default: Story = () => (
  <Accordion aria-label="Dúvidas frequentes">
    <AccordionItem title="Como realizo meu primeiro cadastro?">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus lorem quis risus
      iaculis, laoreet viverra nisi facilisis. Donec tincidunt nulla at sapien luctus euismod.
    </AccordionItem>
    <AccordionItem title="Como abrir uma conta Agi?">
      Sed gravida massa quis nulla imperdiet consequat. Nunc luctus sem a justo sodales, nec aliquam
      odio condimentum.
    </AccordionItem>
    <AccordionItem title="Onde encontro o melhor seguro para mim?">
      Curabitur massa est, placerat in nisl eu, commodo lacinia felis. Sed lacus augue, consectetur
      nec eleifend et, pretium in ligula. Sed et nisi enim.
    </AccordionItem>
  </Accordion>
);

export const Manifold: Story = () => (
  <Accordion aria-label="Dúvidas frequentes">
    <AccordionItem manifold title="Como realizo meu primeiro cadastro?">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus lorem quis risus
      iaculis, laoreet viverra nisi facilisis. Donec tincidunt nulla at sapien luctus euismod.
    </AccordionItem>
    <AccordionItem manifold title="Como abrir uma conta Agi?">
      Sed gravida massa quis nulla imperdiet consequat. Nunc luctus sem a justo sodales, nec aliquam
      odio condimentum.
    </AccordionItem>
    <AccordionItem manifold title="Onde encontro o melhor seguro para mim?">
      Curabitur massa est, placerat in nisl eu, commodo lacinia felis. Sed lacus augue, consectetur
      nec eleifend et, pretium in ligula. Sed et nisi enim.
    </AccordionItem>
  </Accordion>
);

Manifold.storyName = 'Manifold';

Default.storyName = 'Padrão';
