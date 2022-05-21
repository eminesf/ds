import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import { beSlot } from 'use-slots';

import type { TextButtonProps, TextButtonRef } from '../text-button';
import { TextButton } from '../text-button';

import styles from './label-value.module.css';

type Ref = TextButtonRef;

type Props = Omit<TextButtonProps, 'size' | 'variant' | 'outlined' | 'matchArea'>;

function LabelValueAction({ children, ...props }: Props, ref: ReactRef<Ref>) {
  return (
    <TextButton
      ref={ref}
      size={{
        base: 'sm',
        md: 'md',
        lg: 'lg',
      }}
      className={styles.action}
      {...props}
    >
      {children}
    </TextButton>
  );
}

const ForwardedLabelValueAction = beSlot(forwardRef(LabelValueAction), 'labelValueAction');
ForwardedLabelValueAction.displayName = 'LabelValueAction';

export { ForwardedLabelValueAction as LabelValueAction };
export type { Props as LabelValueActionProps, Ref as LabelValueActionRef };
