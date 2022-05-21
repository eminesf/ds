import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import { beSlot } from 'use-slots';

import type { IconProps, IconRef as Ref } from '../icon';
import { Icon } from '../icon';

import { useIconHeroContext } from './icon-hero';

type Props = Omit<IconProps, 'size' | 'color'>;

function CardIconIcon(props: Props, ref: ReactRef<Ref>) {
  const { highlighted } = useIconHeroContext();

  return (
    <Icon
      {...props}
      ref={ref}
      size={{
        base: highlighted ? '3xlg' : '2xlg',
        md: '3xlg',
        lg: '4xlg',
      }}
      color="primary-200"
    />
  );
}

const ForwardedIconHeroIcon = beSlot(forwardRef(CardIconIcon), 'cardIconIcon');
ForwardedIconHeroIcon.displayName = 'CardIconIcon';

export { ForwardedIconHeroIcon as IconHeroIcon };
export type { IconProps as IconHeroIconProps, Ref as IconHeroIconRef };
