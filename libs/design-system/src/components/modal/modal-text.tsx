import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import cn from 'clsx';
import { beSlot } from 'use-slots';

import type { TextProps } from '../text';
import { Text } from '../text';

import styles from './modal.module.css';

type Ref = HTMLParagraphElement;

type Props = Omit<TextProps, 'color' | 'size' | 'weight'>;

function ModalText({ className, ...props }: Props, ref: ReactRef<Ref>) {
  return (
    <Text
      ref={ref}
      size="md"
      color="support-500"
      className={cn(className, styles['modal-text'])}
      {...props}
    />
  );
}

const ForwardedModalText = beSlot(forwardRef(ModalText), 'modalText');
ForwardedModalText.displayName = 'ModalText';

export { ForwardedModalText as ModalText };
export type { Props as ModalTextProps, Ref as ModalTextRef };
