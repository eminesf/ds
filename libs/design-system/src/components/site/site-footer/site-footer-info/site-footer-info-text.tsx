import React, { forwardRef, Ref as ReactRef } from 'react';
import { beSlot } from 'use-slots';

import type { TextProps } from '../../../text';
import { Text } from '../../../text';

type Ref = HTMLParagraphElement;

type Props = Omit<TextProps, 'size' | 'color'>;

function SiteFooterInfoText(props: Props, ref: ReactRef<Ref>) {
  return <Text size="lg" color="support-500" ref={ref} {...props} />;
}

const ForwardedSiteFooterInfoText = beSlot(forwardRef(SiteFooterInfoText), 'siteFooterInfoText');
ForwardedSiteFooterInfoText.displayName = 'SiteFooterInfoText';

export { ForwardedSiteFooterInfoText as SiteFooterInfoText };
export type { Props as SiteFooterInfoTextProps, Ref as SiteFooterInfoTextRef };
