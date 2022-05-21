import React, { forwardRef, Ref as ReactRef } from 'react';
import { beSlot } from 'use-slots';

import type { ButtonProps, ButtonRef } from '../../../button';
import { Button } from '../../../button';

type Ref = ButtonRef;

type Props = ButtonProps;

function SiteFooterInfoAction(props: Props, ref: ReactRef<Ref>) {
  return <Button ref={ref} variant="primary" size="md" {...props} />;
}

const ForwardedSiteFooterInfoAction = beSlot(
  forwardRef(SiteFooterInfoAction),
  'siteFooterInfoAction',
);
ForwardedSiteFooterInfoAction.displayName = 'SiteFooterInfoAction';

export { ForwardedSiteFooterInfoAction as SiteFooterInfoAction };
export type { Props as SiteFooterInfoActionProps, Ref as SiteFooterInfoActionRef };
