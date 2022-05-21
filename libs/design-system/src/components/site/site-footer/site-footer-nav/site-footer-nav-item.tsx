import type { ReactNode, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import { beSlot, useSlots } from 'use-slots';

import type { FlexRef } from '../../../flex';
import { Flex } from '../../../flex';
import { Heading } from '../../../heading';

type Ref = FlexRef;

type Props = { title: string; children?: ReactNode };

function SiteFooterNavItem({ title, children, ...props }: Props, ref: ReactRef<Ref>) {
  const { siteFooterNavSubItem } = useSlots(children);

  return (
    <Flex gap="xsm" direction="column" ref={ref} {...props}>
      <Heading color="primary-200">{title}</Heading>
      {siteFooterNavSubItem}
    </Flex>
  );
}

const ForwardedSiteFooterNavItem = beSlot(forwardRef(SiteFooterNavItem), 'siteFooterNavItem');
ForwardedSiteFooterNavItem.displayName = 'SiteFooterNavItem';

export { ForwardedSiteFooterNavItem as SiteFooterNavItem };
export type { Props as SiteFooterNavItemProps, Ref as SiteFooterNavItemRef };
