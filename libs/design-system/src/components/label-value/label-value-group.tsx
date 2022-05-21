import type { Ref as ReactRef } from 'react';
import React, { createContext, forwardRef, HTMLAttributes, useContext } from 'react';
import cn from 'clsx';
import { useSlots } from 'use-slots';

import { Flex, FlexRef } from '../flex';

import styles from './label-value.module.css';

type Ref = FlexRef;

type Variant = 'card';

type Props = AriaLabelProps<
  {
    variant?: Variant;
  } & HTMLAttributes<Ref>
>;

type ContextType = {
  variant?: Variant;
  isGrouped: boolean;
};

const Context = createContext<ContextType | Pick<ContextType, 'isGrouped'>>({
  isGrouped: false,
});

function LabelValueGroup({ children, className, variant, ...props }: Props, ref: ReactRef<Ref>) {
  const { labelValue } = useSlots(children);

  const sizeClasses = {
    [styles['-card']]: variant === 'card',
  };

  return (
    <Context.Provider value={{ isGrouped: true, variant }}>
      <Flex
        as="section"
        ref={ref}
        gap={
          variant === 'card'
            ? {
                base: 'xsm',
                md: 'sm',
                lg: 'md',
              }
            : {
                base: 'sm',
                md: 'lg',
                lg: '2xlg',
              }
        }
        className={cn(className, styles['label-value-group'], sizeClasses)}
        direction="column"
        {...props}
      >
        {labelValue}
      </Flex>
    </Context.Provider>
  );
}

function useLabelValueGroupContext() {
  return useContext(Context) as ContextType;
}

const ForwardedLabelValueGroup = forwardRef(LabelValueGroup);
ForwardedLabelValueGroup.displayName = 'LabelValueGroup';

export { ForwardedLabelValueGroup as LabelValueGroup, useLabelValueGroupContext };
export type { Props as LabelValueGroupProps, Ref as LabelValueGroupRef };
