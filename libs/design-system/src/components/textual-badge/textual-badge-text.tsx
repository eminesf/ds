import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import { beSlot } from 'use-slots';

import type { TextProps } from '../text';
import { Text } from '../text';

type Ref = HTMLParagraphElement;

type Props = Omit<TextProps, 'color' | 'weight' | 'size'>;

function TextualBadgeText({ ...props }: Props, ref: ReactRef<Ref>) {
  return <Text size="md" color="support-500" ref={ref} {...props} />;
}

const ForwardedTextualBadgeText = beSlot(forwardRef(TextualBadgeText), 'textualBadgeText');
ForwardedTextualBadgeText.displayName = 'TextualBadgeText';

export { ForwardedTextualBadgeText as TextualBadgeText };
export type { Props as TextualBadgeTextProps, Ref as TextualBadgeTextRef };
