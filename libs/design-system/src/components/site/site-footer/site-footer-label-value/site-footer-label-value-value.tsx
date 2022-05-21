import type { ReactNode, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { useLink, UseLinkProps } from '@hypeflame/hooks';
import { useFocusRing } from '@react-aria/focus';
import cn from 'clsx';
import { beSlot } from 'use-slots';

import { Heading } from '../../../heading';

import { useSiteFooterLabelValueContext } from './site-footer-label-value';
import styles from '../site-footer.module.css';

type Ref = HTMLHeadElement;

type Props = { className?: string; children: ReactNode } & Omit<UseLinkProps, 'as'>;

function SiteFooterLabelValueValue({ onPress, className, ...props }: Props, ref: ReactRef<Ref>) {
  const { id } = useSiteFooterLabelValueContext();

  const internalRef = useForwardedRef(ref);

  const { isFocusVisible, focusProps } = useFocusRing();

  const { as: Element, linkProps } = useLink({ onPress, ...props }, internalRef);

  return (
    <Heading
      as={Element}
      ref={internalRef}
      size="sm"
      color="primary-200"
      aria-labelledby={id}
      weight="semibold"
      className={cn(className, styles['site-footer-label-value-value'], {
        [styles['-focused']]: isFocusVisible,
      })}
      {...props}
      {...linkProps}
      {...(focusProps as Omit<typeof focusProps, 'color'>)}
    />
  );
}

const ForwardedSiteFooterLabelValueValue = beSlot(
  forwardRef(SiteFooterLabelValueValue),
  'siteFooterLabelValueValue',
);
ForwardedSiteFooterLabelValueValue.displayName = 'SiteFooterLabelValueValue';

export { ForwardedSiteFooterLabelValueValue as SiteFooterLabelValueValue };
export type { Props as SiteFooterLabelValueValueProps, Ref as SiteFooterLabelValueValueRef };
