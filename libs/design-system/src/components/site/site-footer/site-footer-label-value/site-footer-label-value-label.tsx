import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import { beSlot } from 'use-slots';

import type { TextProps } from '../../../text';
import { Text } from '../../../text';

import { useSiteFooterLabelValueContext } from './site-footer-label-value';

type Ref = HTMLParagraphElement;

type Props = Omit<TextProps, 'id' | 'color' | 'size' | 'weight'>;

function SiteFooterLabelValueLabel(props: Props, ref: ReactRef<Ref>) {
  const { id } = useSiteFooterLabelValueContext();

  return <Text id={id} ref={ref} color="support-500" size="md" weight="semibold" {...props} />;
}

const ForwardedSiteFooterLabelValueLabel = beSlot(
  forwardRef(SiteFooterLabelValueLabel),
  'siteFooterLabelValueLabel',
);
ForwardedSiteFooterLabelValueLabel.displayName = 'SiteFooterLabelValueLabel';

export { ForwardedSiteFooterLabelValueLabel as SiteFooterLabelValueLabel };
export type { Props as SiteFooterLabelValueLabelProps, Ref as SiteFooterLabelValueLabelRef };
