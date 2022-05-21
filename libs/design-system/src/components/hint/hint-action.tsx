import type { ReactNode, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import { beSlot } from 'use-slots';

import type { TextButtonProps, TextButtonRef } from '../text-button';
import { TextButton } from '../text-button';

type Ref = TextButtonRef;

// TODO: verificar tipagem do Omit a partir do PolymorphicPropsWithoutRef (ButtonProps)
type Props = {
  children: ReactNode;
} & Omit<TextButtonProps, 'size' | 'variant' | 'outlined' | 'matchArea'>;

function HintAction({ ...props }: Props, ref: ReactRef<Ref>) {
  return <TextButton ref={ref} size="sm" {...props} />;
}

const ForwardedHintAction = beSlot(forwardRef(HintAction), 'hintAction');
ForwardedHintAction.displayName = 'HintAction';

export { ForwardedHintAction as HintAction };
export type { Props as HintActionProps, Ref as HintActionRef };
