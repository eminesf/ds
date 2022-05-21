import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { useLink, UseLinkProps } from '@hypeflame/hooks';
import { useFocusRing } from '@react-aria/focus';
import cn from 'clsx';
import { beSlot } from 'use-slots';

import styles from '../site-footer.module.css';

type Ref = HTMLAnchorElement;

type Props = { className?: string } & Omit<UseLinkProps, 'as'>;

function SiteFooterNavSubItem({ onPress, className, ...props }: Props, ref: ReactRef<Ref>) {
  const internalRef = useForwardedRef(ref);

  const { isFocusVisible, focusProps } = useFocusRing();

  const { as: Element, linkProps } = useLink({ onPress, ...props }, internalRef);

  return (
    <Element
      ref={internalRef}
      className={cn(className, styles['site-footer-nav-sub-item'], {
        [styles['-focused']]: isFocusVisible,
      })}
      {...props}
      {...linkProps}
      {...focusProps}
    />
  );
}

const ForwardedSiteFooterNavSubItem = beSlot(
  forwardRef(SiteFooterNavSubItem),
  'siteFooterNavSubItem',
);
ForwardedSiteFooterNavSubItem.displayName = 'SiteFooterNavSubItem';

export { ForwardedSiteFooterNavSubItem as SiteFooterNavSubItem };
export type { Props as SiteFooterNavSubItemProps, Ref as SiteFooterNavSubItemRef };
