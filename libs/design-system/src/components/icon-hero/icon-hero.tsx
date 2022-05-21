import type { Ref as ReactRef } from 'react';
import React, { createContext, forwardRef, useContext } from 'react';
import cn from 'clsx';
import { useSlots } from 'use-slots';

import type { FlexProps, FlexRef as Ref } from '../flex';
import { Flex } from '../flex';

import styles from './icon-hero.module.css';

type Alignment = 'left' | 'right' | 'center';

type Props = {
  highlighted?: boolean;
  iconPosition?: 'aside' | 'above';
  alignment?: Alignment;
} & Omit<FlexProps, 'alignItems' | 'direction' | 'gap'>;

type ContextType = {
  highlighted: boolean;
  alignment: Alignment;
};

const Context = createContext<ContextType | null>(null);

const ALIGNMENTS: Record<Alignment, FlexProps['alignItems']> = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

const DIRECTION: Record<Alignment, FlexProps['direction']> = {
  left: 'row',
  right: 'row-reverse',
  center: 'column',
};

function CardIcon(
  {
    children,
    highlighted = false,
    iconPosition = 'above',
    alignment = 'center',
    className,
    ...props
  }: Props,
  ref: ReactRef<Ref>,
) {
  const { cardIconIcon, cardIconText, cardIconTitle } = useSlots(children);

  const variantClasses = {
    [styles['-center']]: alignment === 'center',
    [styles['-right']]: alignment === 'right',
  };

  return (
    <Context.Provider value={{ highlighted, alignment }}>
      <Flex
        {...props}
        className={cn(styles['icon-hero'], variantClasses, className)}
        direction={iconPosition === 'above' ? 'column' : DIRECTION[alignment]}
        gap={{
          base: highlighted ? 'md' : 'sm',
          md: highlighted ? 'lg' : 'md',
          lg: highlighted ? 'xlg' : 'lg',
        }}
        alignItems={
          iconPosition === 'aside' && alignment !== 'center' ? 'flex-start' : ALIGNMENTS[alignment]
        }
        ref={ref}
      >
        {cardIconIcon}
        <Flex
          direction="column"
          gap={{
            base: highlighted ? 'sm' : 'xsm',
            md: highlighted ? 'md' : 'sm',
            lg: highlighted ? 'lg' : 'md',
          }}
          alignItems={ALIGNMENTS[alignment]}
        >
          {cardIconTitle}
          {cardIconText}
        </Flex>
      </Flex>
    </Context.Provider>
  );
}

function useIconHeroContext() {
  return useContext(Context) as ContextType;
}

const ForwardedIconHero = forwardRef(CardIcon);
ForwardedIconHero.displayName = 'CardIcon';

export { ForwardedIconHero as IconHero, useIconHeroContext };
export type { Props as IconHeroProps, Ref as IconHeroRef };
