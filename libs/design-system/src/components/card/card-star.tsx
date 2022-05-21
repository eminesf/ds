import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import cn from 'clsx';
import { beSlot } from 'use-slots';

import { Flex } from '../flex';
import type { IconButtonProps, IconButtonRef } from '../icon-button';
import { IconButton } from '../icon-button';

import styles from './card.module.css';

type Ref = IconButtonRef;

type Props = { starred?: boolean } & Omit<IconButtonProps, 'icon' | 'size' | 'color'>;

function CardStar({ className, starred, ...props }: Props, ref: ReactRef<Ref>) {
  return (
    <Flex
      padding={{ base: '2xsm', md: ['2xsm', 'xsm', '2xsm', '2xsm'], lg: 'xsm' }}
      className={cn(styles['card-star'], className)}
    >
      <IconButton
        color="alert-200"
        ref={ref}
        size="sm"
        icon={starred ? 'star-fill' : 'star-outline'}
        aria-label="Botão de favorito"
        {...props}
      />
    </Flex>
  );
}

const ForwardedCardStar = beSlot(forwardRef(CardStar), 'cardStar');
ForwardedCardStar.displayName = 'CardStar';

export { ForwardedCardStar as CardStar };
export type { Props as CardStarProps, Ref as CardStarRef };
