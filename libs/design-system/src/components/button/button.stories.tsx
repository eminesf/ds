import React, { useRef } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';

import { ICON_NAME } from '../icon/constants';

import type { ButtonProps } from '.';
import { Button } from '.';
import styles from './button.stories.module.css';

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    variant: {
      defaultValue: 'primary',
      table: {
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    iconBefore: {
      control: {
        type: 'select',
        options: ICON_NAME,
      },
    },
    iconAfter: {
      control: {
        type: 'select',
        options: ICON_NAME,
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
    outlined: {
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    blocked: {
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    onPress: action('press'),
  },
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args}>Saiba mais</Button>;

Default.storyName = 'Padrão';

export const Secondary: Story<ButtonProps> = (args) => <Button {...args}>Saiba mais</Button>;

Secondary.args = { variant: 'secondary' };
Secondary.storyName = 'Secundário';
Secondary.parameters = { backgrounds: { default: 'dark' } };

export const AfterIcon: Story<ButtonProps> = (args) => <Button {...args}>Saiba mais</Button>;

AfterIcon.args = { iconAfter: 'spinner' };
AfterIcon.storyName = 'Ícone após o conteúdo';

export const BeforeIcon: Story<ButtonProps> = (args) => <Button {...args}>Saiba mais</Button>;

BeforeIcon.args = { iconBefore: 'spinner' };
BeforeIcon.storyName = 'Ícone antes do conteúdo';

export const Blocked: Story<ButtonProps> = (args) => <Button {...args}>Saiba mais</Button>;

Blocked.args = { blocked: true };
Blocked.storyName = 'Bloco';

export const Presentation: Story<ButtonProps> = (args) => (
  <Button {...args} onPress={undefined}>
    Saiba mais
  </Button>
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

export const MatchArea: Story<ButtonProps> = (args) => {
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
        <Button {...args} onPress={action('press')} matchArea={imageRef}>
          Saiba mais
        </Button>
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
