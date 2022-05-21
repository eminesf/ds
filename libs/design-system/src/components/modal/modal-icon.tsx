import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import { beSlot } from 'use-slots';

import type { IconProps, IconRef } from '../icon';
import { Icon } from '../icon';

import type { ModalContextType } from './modal';
import { useModalContext } from './modal';

type Ref = IconRef;

type Props = Omit<IconProps, 'size' | 'color'>;

const ICON_COLOR: Record<ModalContextType['variant'], IconProps['color']> = {
  alert: 'alert-200',
  neutral: 'primary-200',
  critical: 'critical-200',
};

function ModalIcon(props: Props, ref: ReactRef<Ref>) {
  const { variant } = useModalContext();

  return (
    <Icon
      size={{
        base: '3xlg',
        lg: '4xlg',
      }}
      color={ICON_COLOR[variant]}
      ref={ref}
      {...props}
    />
  );
}

const ForwardedModalIcon = beSlot(forwardRef(ModalIcon), 'modalIcon');
ForwardedModalIcon.displayName = 'ModalIcon';

export { ForwardedModalIcon as ModalIcon };
export type { Props as ModalIconProps, Ref as ModalIconRef };
