import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import { beSlot } from 'use-slots';

import type { TextProps } from '../../../text';
import { Text } from '../../../text';

import { useSiteFooterLabelValueContext } from './site-footer-label-value';

type Ref = HTMLParagraphElement;

type Props = Omit<TextProps, 'size' | 'weight' | 'role' | 'color' | 'aria-labelledy'>;

function SiteFooterLabelValueHelper(props: Props, ref: ReactRef<Ref>) {
  const { id } = useSiteFooterLabelValueContext();

  return (
    <Text
      ref={ref}
      size="sm"
      weight="regular"
      role="definition"
      color="support-500"
      aria-labelledby={id}
      {...props}
    />
  );
}

const ForwardedSiteFooterLabelValueHelper = beSlot(
  forwardRef(SiteFooterLabelValueHelper),
  'siteFooterLabelValueHelper',
);
ForwardedSiteFooterLabelValueHelper.displayName = 'SiteFooterLabelValueHelper';

export { ForwardedSiteFooterLabelValueHelper as SiteFooterLabelValueHelper };
export type { Props as SiteFooterLabelValueHelperProps, Ref as SiteFooterLabelValueHelperRef };
