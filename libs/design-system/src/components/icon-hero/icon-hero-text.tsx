import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import { beSlot } from 'use-slots';

import type { TextProps } from '../text';
import { Text } from '../text';

type Props = Omit<TextProps, 'size' | 'color'>;

type Ref = HTMLParagraphElement;

function CardIconText(props: Props, ref: ReactRef<Ref>) {
  return <Text {...props} size="sm" color="support-500" ref={ref} />;
}

const ForwardedIconHeroText = beSlot(forwardRef(CardIconText), 'cardIconText');
ForwardedIconHeroText.displayName = 'CardIconText';

export { ForwardedIconHeroText as IconHeroText };
export type { Ref as IconHeroTextRef };
