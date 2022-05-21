import type { HTMLAttributes } from 'react';
import React, { forwardRef, Ref as ReactRef } from 'react';
import cn from 'clsx';
import { beSlot, useSlots } from 'use-slots';

import type { FlexRef } from '../../flex';
import { Flex } from '../../flex';

import styles from './site-footer.module.css';

type Ref = FlexRef;

type Props = HTMLAttributes<Ref>;

function SiteFooterSection({ children, className, ...props }: Props, ref: ReactRef<Ref>) {
  const { flex, siteFooterInfo } = useSlots(children);

  return (
    <Flex
      ref={ref}
      gap="xlg"
      padding={{ base: ['2xlg', 'none'] }}
      direction="column"
      className={cn(className, styles['site-footer-section'])}
      {...props}
    >
      {flex || siteFooterInfo}
    </Flex>
  );
}

const ForwardedSiteFooterSection = beSlot(forwardRef(SiteFooterSection), 'siteFooterSection');
ForwardedSiteFooterSection.displayName = 'SiteFooterSection';

export { ForwardedSiteFooterSection as SiteFooterSection };
export type { Props as SiteFooterSectionProps, Ref as SiteFooterSectionRef };
