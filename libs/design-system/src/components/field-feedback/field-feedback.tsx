import type { HTMLAttributes, ReactNode, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import cn from 'clsx';

import type { FlexRef } from '../flex';
import { Flex } from '../flex';
import { Icon } from '../icon';
import { Text } from '../text';

import styles from './field-feedback.module.css';

type Ref = FlexRef;

type Props = {
  invalid?: boolean;
  disabled?: boolean;
  children: ReactNode;
} & Omit<HTMLAttributes<Ref>, 'role' | 'aria-live'>;

function FieldFeedback(
  { invalid = false, disabled = false, children, className, ...props }: Props,
  ref: ReactRef<Ref>,
) {
  const internalInvalid = invalid && Boolean(children);

  return (
    <Flex
      as="p"
      ref={ref}
      gap={{
        base: '2xsm',
        md: 'xsm',
        lg: 'sm',
      }}
      role={internalInvalid ? 'alert' : undefined}
      aria-live={internalInvalid ? 'assertive' : undefined}
      className={cn(styles['field-feedback'], className)}
      alignItems="center"
      {...props}
    >
      {invalid ? (
        <Icon
          name="exclamation-triangle-outline"
          size={{
            base: 'sm',
            md: 'lg',
          }}
          color="critical-300"
        />
      ) : null}
      <Text as="small" size="sm" color={invalid && !disabled ? 'critical-300' : 'support-400'}>
        {children}
      </Text>
    </Flex>
  );
}

const ForwardedFieldFeedback = forwardRef(FieldFeedback);
ForwardedFieldFeedback.displayName = 'FieldFeedback';

export { ForwardedFieldFeedback as FieldFeedback };
export type { Props as FieldFeedbackProps, Ref as FieldFeedbackRef };
