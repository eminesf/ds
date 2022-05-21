import type { HTMLAttributeReferrerPolicy, HTMLAttributes, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import cn from 'clsx';
import { beSlot } from 'use-slots';

import { Flex } from '../flex';

import styles from './card.module.css';

type Ref = HTMLImageElement;

type Props = {
  src: string;
  alt: string;
  referrerPolicy?: HTMLAttributeReferrerPolicy;
  withMargin?: boolean;
} & Omit<HTMLAttributes<Ref>, 'src' | 'alt' | 'title' | 'loading'>;

function CardImage({ className, withMargin, ...props }: Props, ref: ReactRef<Ref>) {
  return (
    <Flex
      ref={ref}
      as="img"
      width="full"
      loading="lazy"
      height={{
        base: '3xlg',
        md: '6xlg',
        lg: '7xlg',
      }}
      padding={['2xsm', 'none']}
      className={cn(styles['card-image'], withMargin && [styles['with-margin']], className)}
      {...props}
    />
  );
}

const ForwardedCardImage = beSlot(forwardRef(CardImage), 'cardImage');
ForwardedCardImage.displayName = 'CardImage';

export { ForwardedCardImage as CardImage };
export type { Props as CardImageProps, Ref as CardImageRef };
