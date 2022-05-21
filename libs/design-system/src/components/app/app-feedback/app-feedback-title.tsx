import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import { beSlot } from 'use-slots';

import type { Color } from '../../../utils';
import { Flex } from '../../flex';
import type { HeadingProps, HeadingRef } from '../../heading';
import { Heading } from '../../heading';
import type { IconProps } from '../../icon';
import { Icon } from '../../icon';

import type { VariantType } from './app-feedback';
import { useAppFeedbackContext } from './app-feedback';

type Ref = HeadingRef;

type Props = {
  icon: IconProps['name'];
} & Omit<HeadingProps, 'size' | 'color' | 'weight'>;

const VARIANT: Record<VariantType, Color> = {
  success: 'primary-200',
  critical: 'support-100',
};

function AppFeedbackTitle({ children, icon, ...props }: Props, ref: ReactRef<Ref>) {
  const { variant } = useAppFeedbackContext();

  return (
    <Flex direction="column" alignItems="flex-start" gap="md">
      <Icon name={icon} size="3xlg" color={VARIANT[variant]} />
      <Heading {...props} ref={ref} color={VARIANT[variant]}>
        {children}
      </Heading>
    </Flex>
  );
}

const ForwardedAppFeedbackTitle = beSlot(forwardRef(AppFeedbackTitle), 'appFeedbackTitle');
ForwardedAppFeedbackTitle.displayName = 'AppFeedbackTitle';

export { ForwardedAppFeedbackTitle as AppFeedbackTitle };
export type { Props as AppFeedbackTitleProps, Ref as AppFeedbackTitleRef };
