import type { Ref as ReactRef } from 'react';
import React, { forwardRef, HTMLAttributes } from 'react';
import cn from 'clsx';
import { beSlot } from 'use-slots';

import { Heading } from '../heading';
import { Text } from '../text';

import { useLabelValueContext } from './label-value';
import styles from './label-value.module.css';

type Ref = HTMLDivElement;

type Props = Omit<HTMLAttributes<Ref>, 'color'>;

function LabelValueValue({ className, children, ...props }: Props, ref: ReactRef<Ref>) {
  const { highlighted, id } = useLabelValueContext();

  return highlighted ? (
    <Heading
      as="p"
      ref={ref}
      size="lg"
      role="definition"
      aria-labelledby={id}
      className={cn(styles.value, className)}
      {...props}
    >
      {children}
    </Heading>
  ) : (
    <Text
      ref={ref}
      size="lg"
      role="definition"
      weight="bold"
      aria-labelledby={id}
      className={cn(styles.value, className)}
      {...props}
    >
      {children}
    </Text>
  );
}

const ForwardedLabelValueValue = beSlot(forwardRef(LabelValueValue), 'labelValueValue');
ForwardedLabelValueValue.displayName = 'LabelValueValue';

export { ForwardedLabelValueValue as LabelValueValue };
export type { Props as LabelValueValueProps, Ref as LabelValueValueRef };
