import React, { useRef, useState } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';

import buttonMeta from '../../button/button.stories';
import { PhoneField } from '../../phone-field';

import type { AppButtonProps } from '.';
import { AppButton } from '.';
import styles from './app-button.stories.module.css';

export default {
  title: 'App/Button',
  component: AppButton,
  argTypes: buttonMeta.argTypes,
  args: buttonMeta.args,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    chromatic: {
      viewports: [320],
    },
  },
} as Meta;

export const Default: Story<AppButtonProps> = (args) => <AppButton {...args}>Saiba mais</AppButton>;

Default.storyName = 'Padrão';

export const Secondary: Story<AppButtonProps> = (args) => (
  <AppButton {...args}>Saiba mais</AppButton>
);

Secondary.args = { variant: 'secondary' };
Secondary.storyName = 'Secundário';
Secondary.parameters = { backgrounds: { default: 'dark' } };

export const AfterIcon: Story<AppButtonProps> = (args) => (
  <AppButton {...args}>Saiba mais</AppButton>
);

AfterIcon.args = { iconAfter: 'spinner' };
AfterIcon.storyName = 'Ícone após o conteúdo';

export const BeforeIcon: Story<AppButtonProps> = (args) => (
  <AppButton {...args}>Saiba mais</AppButton>
);

BeforeIcon.args = { iconBefore: 'spinner' };
BeforeIcon.storyName = 'Ícone antes do conteúdo';

export const Presentation: Story<AppButtonProps> = (args) => (
  <AppButton {...args} onPress={undefined}>
    Saiba mais
  </AppButton>
);

Presentation.storyName = 'Apresentação';
Presentation.parameters = {
  docs: {
    description: {
      story:
        'Quando o componente não recebe evento de `onPress` ou `href` ele automaticamente entende que o componente serve apenas para visualização, ou seja, sem semântica alguma.',
    },
  },
};

export const MatchArea: Story<AppButtonProps> = (args) => {
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <div className={styles['match-area']}>
      <img
        alt=""
        ref={imageRef}
        src="https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2018/06/12_pl540_unesco1-696x392.jpg"
        role="presentation"
      />
      <footer>
        <AppButton {...args} onPress={action('press')} matchArea={imageRef}>
          Saiba mais
        </AppButton>
      </footer>
    </div>
  );
};

MatchArea.storyName = 'Ocupar área';
MatchArea.parameters = {
  docs: {
    description: {
      story:
        'Às vezes precisamos que a area de uso do botão seja a mesma de outro elemento, nesse caso, podemos passar um elemento para o `matchArea` para o botão ter a mesma area de uso que esse elemento.',
    },
  },
};

export const Floated: Story<AppButtonProps> = (args) => {
  const [counter, setCounter] = useState(0);
  const phoneRef = useRef(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        setCounter((prevCounter) => prevCounter + 1);
      }}
    >
      <PhoneField ref={phoneRef} label="Telefone" />
      <AppButton {...args} type="submit" floatingTrigger={phoneRef}>
        Continuar {counter}
      </AppButton>
    </form>
  );
};

Floated.storyName = 'Flutuando';
Floated.parameters = {
  docs: {
    description: {
      story:
        'Quando for necessário fazer o comportamento onde o botão fica acima do teclado quando um elemento é focado, basta passar a referência do elemento via `floatingTrigger`.',
    },
  },
};
Floated.args = {
  size: 'lg',
  iconAfter: 'long-arrow-right',
};
