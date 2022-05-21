import type { ElementType, ReactNode, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import { beSlot } from 'use-slots';

import type { ButtonProps, ButtonRef } from '../button';
import { Button } from '../button';
import { TextButton } from '../text-button';

type Ref = ButtonRef;

type Variant = 'primary' | 'secondary';

// TODO: verificar tipagem do Omit a partir do PolymorphicPropsWithoutRef (ButtonProps)
type Props = {
  variant?: Variant;
  children: ReactNode;
} & Omit<ButtonProps, 'size' | 'variant' | 'outlined' | 'matchArea'>;

const BUTTON: Record<Variant, ElementType> = {
  primary: Button,
  secondary: TextButton,
};

function ModalAction({ variant = 'primary', ...props }: Props, ref: ReactRef<Ref>) {
  const Element = BUTTON[variant];

  return (
    <Element ref={ref} size={{ base: 'lg', md: 'md', lg: 'lg' }} variant="primary" {...props} />
  );
}

const ForwardedModalAction = beSlot(forwardRef(ModalAction), 'modalAction');
ForwardedModalAction.displayName = 'ModalAction';

export { ForwardedModalAction as ModalAction };
export type { Props as ModalActionProps, Ref as ModalActionRef };
