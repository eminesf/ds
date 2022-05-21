import React, { useRef } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react';

import { ICON_NAME } from '../icon/constants';

import type { LinkProps } from '.';
import { Link } from '.';
import styles from './link.stories.module.css';

export default {
  title: 'Buttons/Link',
  component: Link,
  argTypes: {
    size: {
      defaultValue: 'md',
      table: {
        defaultValue: { summary: 'md' },
      },
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
    target: {
      defaultValue: '_blank',
      table: {
        defaultValue: { summary: '_blank' },
      },
      control: {
        type: 'select',
        options: ['_blank', '_top', '_self', '_parent'],
      },
    },
    decorated: {
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
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
  },
  args: {
    onPress: action('press'),
  },
} as Meta;

export const Default: Story<LinkProps> = (args) => (
  <Link href="https://google.com" {...args}>
    Saiba mais
  </Link>
);

Default.storyName = 'Padrão';

export const Secondary: Story<LinkProps> = (args) => <Link {...args}>Saiba mais</Link>;

Secondary.args = { variant: 'secondary' };
Secondary.storyName = 'Secundário';
Secondary.parameters = { backgrounds: { default: 'darkest' } };

export const AfterIcon: Story<LinkProps> = (args) => <Link {...args}>Saiba mais</Link>;

AfterIcon.args = { iconAfter: 'chat' };
AfterIcon.storyName = 'Ícone após o conteúdo';

export const BeforeIcon: Story<LinkProps> = (args) => <Link {...args}>Saiba mais</Link>;

BeforeIcon.args = { iconBefore: 'chat' };
BeforeIcon.storyName = 'Ícone antes do conteúdo';

export const Presentation: Story<LinkProps> = (args) => (
  <Link {...args} onPress={undefined}>
    Saiba mais
  </Link>
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

export const MatchArea: Story<LinkProps> = (args) => {
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <div className={styles['match-area']}>
      <img
        alt=""
        ref={imageRef}
        src="https://image.freepik.com/fotos-gratis/fundo-branco-texturizado_53876-89439.jpg"
        role="presentation"
      />
      <footer>
        <Link {...args} onPress={action('press')} matchArea={imageRef}>
          Saiba mais
        </Link>
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
