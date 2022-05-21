import type { HTMLAttributes, ReactElement, Ref as ReactRef } from 'react';
import React, { cloneElement, createContext, forwardRef, useContext, useEffect } from 'react';
import { useId } from '@react-aria/utils';
import { useSlots } from 'use-slots';

import type { FlexRef } from '../../flex';
import { Flex } from '../../flex';
import { useProviderContext } from '../../provider';

type Ref = FlexRef;

type Variant = 'success' | 'critical';

type Props = {
  variant?: Variant;
} & HTMLAttributes<Ref>;

type ContextType = {
  variant: Variant;
};

const Context = createContext<ContextType>({ variant: 'success' });

function AppFeedback({ variant = 'success', children, ...props }: Props, ref: ReactRef<Ref>) {
  const titleId = useId();

  const { appFeedbackAction, appFeedbackContent, appFeedbackTitle } = useSlots(children);

  const { setBackgroundColor, resetBackgroundColor } = useProviderContext();

  useEffect(() => {
    if (variant === 'critical') {
      setBackgroundColor('primary-400');
    }

    return () => resetBackgroundColor();
  }, [variant]);

  return (
    <Context.Provider value={{ variant }}>
      <Flex
        as="section"
        gap="md"
        grow
        ref={ref}
        direction="column"
        minHeight="full"
        justifyContent="space-between"
        aria-labelledby={titleId}
        {...props}
      >
        <Flex direction="column" gap="md">
          {appFeedbackTitle
            ? cloneElement(appFeedbackTitle[0] as ReactElement, { id: titleId })
            : null}
          {appFeedbackContent}
        </Flex>
        <Flex direction="column" gap="sm">
          {appFeedbackAction}
        </Flex>
      </Flex>
    </Context.Provider>
  );
}

function useAppFeedbackContext() {
  return useContext(Context);
}

const ForwardedAppFeedback = forwardRef(AppFeedback);
ForwardedAppFeedback.displayName = 'AppFeedback';

export { ForwardedAppFeedback as AppFeedback, useAppFeedbackContext };
export type { Props as AppFeedbackProps, Ref as AppFeedbackRef, Variant as VariantType };
