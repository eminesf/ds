import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import cn from 'clsx';
import { beSlot } from 'use-slots';

import type { IconButtonProps, IconButtonRef } from '../../icon-button';
import { IconButton } from '../../icon-button';

import styles from './app-header.module.css';

type Ref = IconButtonRef;

type Props = Omit<IconButtonProps, 'as' | 'color' | 'size' | 'icon' | 'aria-label'>;

function AppHeaderCloseAction({ className, ...props }: Props, ref: ReactRef<Ref>) {
  return (
    <IconButton
      ref={ref}
      size="md"
      icon="times"
      className={cn(styles['app-header-close-action'], className)}
      aria-label="Fechar"
      {...props}
    />
  );
}

const ForwardedAppHeaderCloseAction = beSlot(
  forwardRef(AppHeaderCloseAction),
  'appHeaderCloseAction',
);
ForwardedAppHeaderCloseAction.displayName = 'AppHeaderCloseAction';

export { ForwardedAppHeaderCloseAction as AppHeaderCloseAction };
export type { Props as AppHeaderCloseActionProps, Ref as AppHeaderCloseActionRef };
