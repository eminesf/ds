import React, { forwardRef, Ref as ReactRef } from 'react';
import { beSlot, useSlots } from 'use-slots';

import { useResponsiveProp } from '../../../breakpoint';
import type { FlexProps, FlexRef } from '../../../flex';
import { Flex } from '../../../flex';

type Ref = FlexRef;

type Props = {
  align?: ResponsiveProp<'left' | 'center'>;
} & FlexProps;

function SiteFooterInfo({ children, align = 'left', ...props }: Props, ref: ReactRef<Ref>) {
  const {
    flex,
    siteFooterInfoTitle,
    siteFooterInfoText,
    siteFooterInfoAction,
    siteFooterLabelValue,
  } = useSlots(children);

  return (
    <Flex
      ref={ref}
      gap="sm"
      direction="column"
      alignItems={useResponsiveProp(align) === 'left' ? 'flex-start' : 'center'}
      {...props}
    >
      <Flex direction="column" gap="xsm">
        {siteFooterInfoTitle}
        {siteFooterInfoText}
      </Flex>
      {flex}
      {siteFooterLabelValue}
      {siteFooterInfoAction}
    </Flex>
  );
}

const ForwardedSiteFooterInfo = beSlot(forwardRef(SiteFooterInfo), 'siteFooterInfo');
ForwardedSiteFooterInfo.displayName = 'SiteFooterInfo';

export { ForwardedSiteFooterInfo as SiteFooterInfo };
export type { Props as SiteFooterInfoProps, Ref as SiteFooterInfoRef };
