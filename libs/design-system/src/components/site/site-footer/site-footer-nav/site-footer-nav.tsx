import type { ReactNode, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import { beSlot, useSlots } from 'use-slots';

import { Accordion, AccordionItem } from '../../../accordion';
import { useBreakpointContext } from '../../../breakpoint';
import { Flex } from '../../../flex';

type Props = { 'aria-label': string; children?: ReactNode };

type Ref = HTMLDivElement;

function SiteFooterNav({ children, ...props }: Props, ref: ReactRef<Ref>) {
  const { siteFooterNavItem } = useSlots(children);

  const { current: breakpoint } = useBreakpointContext();

  return breakpoint === 'base' ? (
    <Accordion ref={ref} {...props}>
      {siteFooterNavItem.map(({ props: itemProps }: any) => {
        const { siteFooterNavSubItem } = useSlots(itemProps.children);

        return (
          <AccordionItem key={itemProps.title} title={itemProps.title}>
            <Flex gap="sm" direction="column">
              {siteFooterNavSubItem}
            </Flex>
          </AccordionItem>
        );
      })}
    </Accordion>
  ) : (
    <Flex justifyContent="space-between">{siteFooterNavItem}</Flex>
  );
}

const ForwardedSiteFooterNav = beSlot(forwardRef(SiteFooterNav), 'siteFooterNav');
ForwardedSiteFooterNav.displayName = 'SiteFooterNav';

export { ForwardedSiteFooterNav as SiteFooterNav };
export type { Props as SiteFooterNavProps, Ref as SiteFooterNavRef };
