import React, { forwardRef, Ref as ReactRef } from 'react';
import { beSlot } from 'use-slots';

import type { HeadingProps, HeadingRef } from '../../../heading';
import { Heading } from '../../../heading';

type Ref = HeadingRef;

type Props = Omit<HeadingProps, 'size' | 'color'>;

function SiteFooterInfoTitle(props: Props, ref: ReactRef<Ref>) {
  return <Heading ref={ref} size="md" color="primary-200" {...props} />;
}

const ForwardedSiteFooterInfoTitle = beSlot(forwardRef(SiteFooterInfoTitle), 'siteFooterInfoTitle');
ForwardedSiteFooterInfoTitle.displayName = 'SiteFooterInfoTitle';

export { ForwardedSiteFooterInfoTitle as SiteFooterInfoTitle };
export type { Props as SiteFooterInfoTitleProps, Ref as SiteFooterInfoTitleRef };
