import type { Ref as ReactRef } from 'react';
import React, { forwardRef, HTMLAttributes } from 'react';
import { beSlot } from 'use-slots';

import { Heading } from '../heading';
import { Text } from '../text';

import { useLabelValueContext } from './label-value';

type Ref = HTMLDivElement;

type Props = Omit<HTMLAttributes<Ref>, 'color'>;

function LabelValueHelper({ className, children, ...props }: Props, ref: ReactRef<Ref>) {
  const { highlighted, id } = useLabelValueContext();

  return highlighted ? (
    <Heading
      as="p"
      ref={ref}
      size="sm"
      weight="regular"
      role="definition"
      color="support-500"
      aria-labelledby={id}
      className={className}
      {...props}
    >
      {children}
    </Heading>
  ) : (
    <Text
      ref={ref}
      size="md"
      role="definition"
      color="support-500"
      aria-labelledby={id}
      className={className}
      {...props}
    >
      {children}
    </Text>
  );
}

const ForwardedLabelValueHelper = beSlot(forwardRef(LabelValueHelper), 'labelValueHelper');
ForwardedLabelValueHelper.displayName = 'LabelValueHelper';

export { ForwardedLabelValueHelper as LabelValueHelper };
export type { Props as LabelValueHelperProps, Ref as LabelValueHelperRef };
