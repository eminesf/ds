import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import { beSlot } from 'use-slots';

import type { HeadingProps, HeadingRef } from '../heading';
import { Heading } from '../heading';

type Ref = HeadingRef;

type Props = Omit<HeadingProps, 'color' | 'weight' | 'size'>;

function ModalTitle({ ...props }: Props, ref: ReactRef<Ref>) {
  return <Heading size="lg" color="support-500" weight="bold" ref={ref} {...props} />;
}

const ForwardedModalTitle = beSlot(forwardRef(ModalTitle), 'modalTitle');
ForwardedModalTitle.displayName = 'ModalTitle';

export { ForwardedModalTitle as ModalTitle };
export type { Props as ModalTitleProps, Ref as ModalTitleRef };
