import type { ReactNode, Ref as ReactRef } from 'react';
import React, { forwardRef, HTMLAttributes } from 'react';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import cn from 'clsx';
import { beSlot } from 'use-slots';

import { Text } from '../../text';

import { useAppHeaderContext } from './app-header';
import styles from './app-header.module.css';

type Ref = HTMLHeadingElement;

type Props = {
  children: ReactNode;
} & HTMLAttributes<Ref>;

function AppHeaderTitle(
  { 'aria-hidden': ariaHidden, className, children }: Props,
  ref: ReactRef<Ref>,
) {
  const { titleId } = useAppHeaderContext();

  const title = (
    <Text
      id={titleId}
      as="h1"
      size="lg"
      ref={ref}
      className={cn(className, styles['app-header-title'])}
    >
      {children}
    </Text>
  );

  return String(ariaHidden) === 'true' ? <VisuallyHidden>{title}</VisuallyHidden> : title;
}

const ForwardedAppHeaderTitle = beSlot(forwardRef(AppHeaderTitle), 'appHeaderTitle');
ForwardedAppHeaderTitle.displayName = 'AppHeaderTitle';

export { ForwardedAppHeaderTitle as AppHeaderTitle };
export type { Props as AppHeaderTitleProps, Ref as AppHeaderTitleRef };
