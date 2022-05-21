import type { HTMLAttributes, Ref as ReactRef } from 'react';
import React, { createContext, forwardRef, useContext, useEffect } from 'react';
import { useId } from '@react-aria/utils';
import cn from 'clsx';
import { useSlots } from 'use-slots';

import type { FlexRef } from '../../flex';
import { Flex } from '../../flex';
import { useProviderContext } from '../../provider';

import { AppHeaderProgressBar } from './app-header-progress-bar';
import styles from './app-header.module.css';

type Ref = FlexRef;

type Props = {
  progress?: number;
} & HTMLAttributes<Ref>;

type Context = {
  titleId: string;
};

const AppHeaderContext = createContext<Context | null>(null);

function AppHeader({ children, progress, className, ...props }: Props, ref: ReactRef<Ref>) {
  const titleId = useId();

  const { setHeaderOffset, toggleHeadered, removeHeaderOffset, backgroundColor } =
    useProviderContext();

  const { appHeaderTitle, appHeaderBackAction, appHeaderCloseAction } = useSlots(children);

  useEffect(() => {
    toggleHeadered(true);

    return () => toggleHeadered(false);
  }, [toggleHeadered]);

  useEffect(() => {
    setHeaderOffset('app');

    return () => removeHeaderOffset();
  }, [setHeaderOffset, removeHeaderOffset]);

  return (
    <AppHeaderContext.Provider value={{ titleId }}>
      <Flex
        as="header"
        ref={ref}
        className={cn(className, styles['app-header'], styles[`-${backgroundColor}`])}
        alignItems="center"
        justifyContent="center"
        {...props}
      >
        {appHeaderBackAction}
        {appHeaderTitle}
        {appHeaderCloseAction}
        {progress !== undefined ? <AppHeaderProgressBar progress={progress} /> : null}
      </Flex>
    </AppHeaderContext.Provider>
  );
}

function useAppHeaderContext() {
  return useContext(AppHeaderContext) as Context;
}

const ForwardedAppHeader = forwardRef(AppHeader);
ForwardedAppHeader.displayName = 'AppHeader';

export { ForwardedAppHeader as AppHeader, useAppHeaderContext };
export type { Props as AppHeaderProps, Ref as AppHeaderRef };
