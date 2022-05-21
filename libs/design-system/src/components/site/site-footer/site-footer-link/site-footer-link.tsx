import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { useLink, UseLinkProps } from '@hypeflame/hooks';
import { useFocusRing } from '@react-aria/focus';
import cn from 'clsx';

import styles from '../site-footer.module.css';

type Ref = HTMLAnchorElement;

type Props = { className?: string } & Omit<UseLinkProps, 'as'>;

function SiteFooterLink({ onPress, className, ...props }: Props, ref: ReactRef<Ref>) {
  const internalRef = useForwardedRef(ref);

  const { isFocusVisible, focusProps } = useFocusRing();

  const { as: Element, linkProps } = useLink({ onPress, ...props }, internalRef);

  return (
    <Element
      ref={internalRef}
      className={cn(className, styles['site-footer-link'], {
        [styles['-focused']]: isFocusVisible,
      })}
      {...props}
      {...linkProps}
      {...focusProps}
    />
  );
}

const ForwardedSiteFooterLink = forwardRef(SiteFooterLink);
ForwardedSiteFooterLink.displayName = 'SiteFooterLink';

export { ForwardedSiteFooterLink as SiteFooterLink };
export type { Props as SiteFooterLinkProps, Ref as SiteFooterLinkRef };
