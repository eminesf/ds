import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import { beSlot } from 'use-slots';

import type { ButtonProps, ButtonRef } from '../../button';
import { Button } from '../../button';

import type { VariantType } from './app-feedback';
import { useAppFeedbackContext } from './app-feedback';

type Ref = ButtonRef;

type Props = {
  icon: ButtonProps['iconAfter'];
} & Omit<ButtonProps, 'size' | 'variant' | 'outlined' | 'matchArea' | 'iconBefore' | 'iconAfter'>;

const VARIANT: Record<VariantType, ButtonProps['variant']> = {
  success: 'primary',
  critical: 'secondary',
};

function AppFeedbackAction({ icon, variant, children, ...props }: Props, ref: ReactRef<Ref>) {
  const { variant: feedbackVariant } = useAppFeedbackContext();

  return (
    <Button
      ref={ref}
      size="lg"
      variant={VARIANT[feedbackVariant]}
      outlined={variant === 'secondary'}
      iconBefore={icon}
      {...props}
    >
      {children}
    </Button>
  );
}

const ForwardedAppFeedbackAction = beSlot(forwardRef(AppFeedbackAction), 'appFeedbackAction');
ForwardedAppFeedbackAction.displayName = 'AppFeedbackAction';

export { ForwardedAppFeedbackAction as AppFeedbackAction };
export type { Props as AppFeedbackActionProps, Ref as AppFeedbackActionRef };
