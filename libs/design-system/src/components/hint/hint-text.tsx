import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import { beSlot } from 'use-slots';

import type { TextProps } from '../text';
import { Text } from '../text';

type Ref = HTMLParagraphElement;

type Props = Omit<TextProps, 'color' | 'weight' | 'size'>;

function HintText({ ...props }: Props, ref: ReactRef<Ref>) {
  return <Text size="sm" color="support-500" ref={ref} {...props} />;
}

const ForwardedHintText = beSlot(forwardRef(HintText), 'hintText');
ForwardedHintText.displayName = 'HintText';

export { ForwardedHintText as HintText };
export type { Props as HintTextProps, Ref as HintTextRef };
