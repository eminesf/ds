import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { useFocusRing } from '@react-aria/focus';
import { useTabPanel } from '@react-aria/tabs';
import type { SingleSelectListState } from '@react-stately/list';
import cn from 'clsx';

import type { FlexRef } from '../flex';
import { Flex } from '../flex';

import styles from './tabs.module.css';

type Ref = FlexRef;

type Props<T> = {
  state: SingleSelectListState<T>;
};

function TabPanel<T>({ state }: Props<T>, ref: ReactRef<Ref>) {
  const internalRef = useForwardedRef(ref);

  const { tabPanelProps } = useTabPanel({}, state, internalRef);

  const { isFocusVisible, focusProps } = useFocusRing();

  const stateVariants = {
    [styles['-focused']]: isFocusVisible,
  };

  return (
    <Flex
      className={cn(styles.panel, stateVariants)}
      ref={internalRef}
      {...tabPanelProps}
      {...focusProps}
    >
      {state.selectedItem?.props.children}
    </Flex>
  );
}

const ForwardedTabPanel = forwardRef(TabPanel);
ForwardedTabPanel.displayName = 'TabPanel';

export { ForwardedTabPanel as TabPanel };
export type { Props as TabPanelProps, Ref as TabPanelRef };
