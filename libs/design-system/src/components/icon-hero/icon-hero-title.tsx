import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import { beSlot } from 'use-slots';

import type { HeadingProps, HeadingRef as Ref } from '../heading';
import { Heading } from '../heading';

import { useIconHeroContext } from './icon-hero';

type Props = Omit<HeadingProps, 'size' | 'color'>;

function CardIconTitle(props: Props, ref: ReactRef<Ref>) {
  const { highlighted } = useIconHeroContext();

  return (
    <Heading
      {...props}
      size={highlighted ? { base: 'lg', md: 'xlg' } : 'md'}
      color={highlighted ? 'primary-200' : 'support-500'}
      ref={ref}
    />
  );
}

const ForwardedIconHeroTitle = beSlot(forwardRef(CardIconTitle), 'cardIconTitle');
ForwardedIconHeroTitle.displayName = 'CardIconTitle';

export { ForwardedIconHeroTitle as IconHeroTitle };
export type { Ref as CardIconTitleRef, Props as IconHeroTitleProps };
