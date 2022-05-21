import type { HTMLAttributes, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import cn from 'clsx';
import { useSlots } from 'use-slots';

import type { FlexRef } from '../../flex';
import { Flex } from '../../flex';

import styles from './site-footer.module.css';

type Ref = FlexRef;

type Props = HTMLAttributes<Ref>;

function SiteFooter({ children, className, ...props }: Props, ref: ReactRef<Ref>) {
  const { siteFooterSection } = useSlots(children);

  return (
    <Flex
      ref={ref}
      direction="column"
      backgroundColor="support-200"
      className={cn(className, styles['site-footer'])}
      {...props}
    >
      <Flex direction="column" padding={['none', 'md']} className={styles.wrapper}>
        {siteFooterSection}
      </Flex>
    </Flex>
  );
}

const ForwardedSiteFooter = forwardRef(SiteFooter);
ForwardedSiteFooter.displayName = 'SiteFooter';

export { ForwardedSiteFooter as SiteFooter };
export type { Props as SiteFooterProps, Ref as SiteFooterRef };
