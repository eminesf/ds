import type { ReactNode } from 'react';
import { beSlot } from 'use-slots';

type Props = {
  title: string;
  children: ReactNode;
};

const TabItem: (props: Props) => null = () => null;

const SlottedTabItem = beSlot(TabItem, 'tabItem');

export { SlottedTabItem as TabItem };
export type { Props as TabItemProps };
