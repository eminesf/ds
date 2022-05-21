import type { ElementType, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
} from 'react-polymorphic-types';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { useLink, UseLinkProps } from '@hypeflame/hooks';
import { useFocusRing } from '@react-aria/focus';
import cn from 'clsx';
import { beSlot } from 'use-slots';

import styles from './site-header.module.css';

type Ref = HTMLAnchorElement;

const DefaultElement = 'a';

type DefaultElementType = typeof DefaultElement;

type OwnProps = { activated?: boolean } & Omit<UseLinkProps, 'as'>;

type Props<T extends ElementType = DefaultElementType> = PolymorphicPropsWithoutRef<OwnProps, T>;

function SiteHeaderSubItem<T extends ElementType = DefaultElementType>(
  { as, onPress, children, className, ...props }: Props<T>,
  ref: ReactRef<Ref>,
) {
  const internalRef = useForwardedRef(ref);

  const { isFocusVisible, focusProps } = useFocusRing();

  const { as: Element, linkProps } = useLink(
    {
      ...props,
      as,
      onPress,
    },
    internalRef,
  );

  return (
    <Element
      ref={internalRef}
      className={cn(className, styles['site-header-subitem'], {
        [styles['-focused']]: isFocusVisible,
      })}
      {...linkProps}
      {...focusProps}
      {...props}
    >
      {children}
    </Element>
  );
}

const ForwardedSiteHeaderSubItem: PolymorphicForwardRefExoticComponent<
  OwnProps,
  DefaultElementType
> = beSlot(forwardRef(SiteHeaderSubItem), 'siteHeaderSubItem');
ForwardedSiteHeaderSubItem.displayName = 'SiteHeaderSubItem';

export { ForwardedSiteHeaderSubItem as SiteHeaderSubItem };
export type { Props as SiteHeaderSubItemProps, Ref as SiteHeaderSubItemRef };
