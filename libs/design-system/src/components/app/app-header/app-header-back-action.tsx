import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import cn from 'clsx';
import { beSlot } from 'use-slots';

import type { IconButtonProps, IconButtonRef } from '../../icon-button';
import { IconButton } from '../../icon-button';

import styles from './app-header.module.css';

type Ref = IconButtonRef;

type Props = Omit<IconButtonProps, 'as' | 'color' | 'size' | 'icon' | 'aria-label'>;

function AppHeaderBackAction({ className, ...props }: Props, ref: ReactRef<Ref>) {
  return (
    <IconButton
      ref={ref}
      size="md"
      icon="chevron-left"
      className={cn(styles['app-header-back-action'], className)}
      aria-label="Voltar"
      {...props}
    />
  );
}

const ForwardedAppHeaderBackAction = beSlot(forwardRef(AppHeaderBackAction), 'appHeaderBackAction');
ForwardedAppHeaderBackAction.displayName = 'AppHeaderBackAction';

export { ForwardedAppHeaderBackAction as AppHeaderBackAction };
export type { Props as AppHeaderBackActionProps, Ref as AppHeaderBackActionRef };
