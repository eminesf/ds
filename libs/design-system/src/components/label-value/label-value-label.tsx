import type { Ref as ReactRef } from 'react';
import React, { forwardRef, HTMLAttributes } from 'react';
import { beSlot } from 'use-slots';

import { Text } from '../text';

import { useLabelValueContext } from './label-value';

type Ref = HTMLDivElement;

type Props = Omit<HTMLAttributes<Ref>, 'color'>;

function LabelValueLabel({ children, ...props }: Props, ref: ReactRef<Ref>) {
  const { highlighted, id } = useLabelValueContext();

  return (
    <Text id={id} ref={ref} color="support-400" size={highlighted ? 'lg' : 'sm'} {...props}>
      {children}
    </Text>
  );
}

const ForwardedLabelValueLabel = beSlot(forwardRef(LabelValueLabel), 'labelValueLabel');
ForwardedLabelValueLabel.displayName = 'LabelValueLabel';

export { ForwardedLabelValueLabel as LabelValueLabel };
export type { Props as LabelValueLabelProps, Ref as LabelValueLabelRef };
