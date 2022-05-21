import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import cn from 'clsx';
import { beSlot } from 'use-slots';

import { Button, ButtonProps, ButtonRef } from '../../button';

import styles from './site-header.module.css';

type Ref = ButtonRef;

type Props = Omit<ButtonProps, 'variant' | 'iconBefore' | 'iconAfter' | 'size'>;

function SiteHeaderAction({ children, className, ...props }: Props, ref: ReactRef<Ref>) {
  return (
    <Button
      ref={ref}
      size="sm"
      variant="secondary"
      outlined={{ base: false, md: true }}
      className={cn(className, styles['site-header-action'])}
      iconAfter={{ base: 'long-arrow-right', md: undefined }}
      {...props}
    >
      {children}
    </Button>
  );
}

const ForwardedSiteHeaderAction = beSlot(forwardRef(SiteHeaderAction), 'siteHeaderAction');
ForwardedSiteHeaderAction.displayName = 'SiteHeaderAction';

export { ForwardedSiteHeaderAction as SiteHeaderAction };
export type { Props as SiteHeaderActionProps, Ref as SiteHeaderActionRef };
