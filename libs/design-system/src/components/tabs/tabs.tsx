import type { HTMLAttributes, Ref as ReactRef } from 'react';
import React, { forwardRef, useMemo, useRef } from 'react';
import { useTabList } from '@react-aria/tabs';
import { Item } from '@react-stately/collections';
import { useTabListState } from '@react-stately/tabs';
import { useSlots } from 'use-slots';

import type { FlexProps, FlexRef } from '../flex';
import { Flex } from '../flex';

import { Tab } from './tab';
import { TabPanel } from './tab-panel';
import styles from './tabs.module.css';

type Ref = FlexRef;

type Align = 'left' | 'right' | 'center' | 'stretch';

type TabValue = string | number;

type Props = {
  align?: Align;
  value?: TabValue;
  onChange?: (arg: TabValue) => void;
} & AriaLabelProps<Omit<HTMLAttributes<Ref>, 'onChange'>>;

const TABS_ALIGN: Record<Align, FlexProps['justifyContent']> = {
  left: 'flex-start',
  stretch: 'flex-start',
  right: 'flex-end',
  center: 'center',
};

function Tabs(
  {
    children,
    align = 'left',
    'aria-labelledby': ariaLabelledby,
    'aria-label': ariaLabel,
    onChange,
    value,
    ...props
  }: Props,
  ref: ReactRef<Ref>,
) {
  const { tabItem } = useSlots(children);

  const internalChildren = useMemo(
    // TODO: revisar tipagem na lib use-slots
    () => tabItem.map(({ props: slotProps }: any) => <Item key={slotProps.title} {...slotProps} />),
    [tabItem],
  );

  const state = useTabListState({
    children: internalChildren,
    onSelectionChange: onChange,
    selectedKey: value,
  });

  const tabsHeaderRef = useRef(null);

  const { tabListProps } = useTabList(
    {
      children: internalChildren,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
    },
    state,
    tabsHeaderRef,
  );

  return (
    <Flex ref={ref} width="full" height="full" direction="column" {...props}>
      <Flex
        {...tabListProps}
        justifyContent={TABS_ALIGN[align]}
        wrap="wrap"
        rowGap="xsm"
        ref={tabsHeaderRef}
        className={styles.header}
      >
        {[...state.collection].map((item) => (
          <Tab stretch={align === 'stretch'} key={item.key} item={item} state={state} />
        ))}
      </Flex>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </Flex>
  );
}

const ForwardedTabs = forwardRef(Tabs);
ForwardedTabs.displayName = 'Tabs';

export { ForwardedTabs as Tabs };
export type { Props as TabsProps };
