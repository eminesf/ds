import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { useFocusRing } from '@react-aria/focus';
import { useTab } from '@react-aria/tabs';
import type { SingleSelectListState } from '@react-stately/list';
import { Node } from '@react-types/shared';
import cn from 'clsx';

import type { FlexRef } from '../flex';
import { Flex } from '../flex';
import { Text } from '../text';

import styles from './tabs.module.css';

type Ref = FlexRef;

type Props<T> = {
  stretch?: boolean;
  item: Node<T>;
  state: SingleSelectListState<T>;
};

function Tab<T>({ item, state, stretch }: Props<T>, ref: ReactRef<Ref>) {
  const { key, rendered } = item;
  const internalRef = useForwardedRef(ref);
  const { tabProps } = useTab({ key }, state, internalRef);
  const isSelected = state.selectedKey === key;

  const { isFocusVisible, focusProps } = useFocusRing();

  const stateVariants = {
    [styles['-selected']]: isSelected,
    [styles['-focused']]: isFocusVisible,
  };

  return (
    <Flex
      {...tabProps}
      ref={internalRef}
      grow={stretch}
      padding={{
        base: ['none', 'xsm', 'xsm', 'xsm'],
        md: ['none', 'md', 'xsm', 'md'],
        lg: ['none', 'lg', 'xsm', 'lg'],
      }}
      className={cn(styles.tab, stateVariants)}
      justifyContent="center"
      {...focusProps}
    >
      <Text
        color={isSelected ? 'primary-300' : 'support-500'}
        size="lg"
        weight={isSelected ? 'bold' : 'regular'}
      >
        {rendered}
      </Text>
    </Flex>
  );
}

const ForwardedTab = forwardRef(Tab);
ForwardedTab.displayName = 'Tab';

export { ForwardedTab as Tab };
export type { Props as TabProps, Ref as TabRef };
