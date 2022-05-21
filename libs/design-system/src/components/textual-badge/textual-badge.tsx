import type { HTMLAttributes, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import cn from 'clsx';
import { useSlots } from 'use-slots';

import type { FlexRef } from '../flex';
import { Flex } from '../flex';
import type { IconProps } from '../icon';
import { Icon } from '../icon';

import styles from './textual-badge.module.css';

type Ref = FlexRef;

type Variant = 'success' | 'neutral' | 'alert';

type OwnProps = {
  variant?: Variant;
  illustrated: boolean;
  'data-testid'?: string;
} & HTMLAttributes<FlexRef>;

const ICON_NAME: Record<Variant, IconProps['name']> = {
  alert: 'exclamation-triangle-solid',
  success: 'check-circle-fill',
  neutral: 'exclamation-circle-fill',
};

const ICON_COLOR: Record<Variant, IconProps['color']> = {
  alert: 'alert-200',
  success: 'success-200',
  neutral: 'primary-300',
};

type Props = AriaLabelProps<OwnProps>;

function TextualBadge(
  { illustrated, variant = 'neutral', 'data-testid': dataTestId, children, ...props }: Props,
  ref: ReactRef<Ref>,
) {
  const { textualBadgeText } = useSlots(children);

  const variantClasses = {
    [styles['-neutral']]: variant === 'neutral',
    [styles['-success']]: variant === 'success',
    [styles['-alert']]: variant === 'alert',
  };

  return (
    <Flex
      as="span"
      ref={ref}
      gap="2xsm"
      role="status"
      padding={['2xsm', 'xsm']}
      alignItems="center"
      className={cn(styles['textual-badge'], variantClasses)}
      {...props}
    >
      {illustrated ? (
        <Icon
          size={{ base: 'sm', md: 'md', lg: 'lg' }}
          color={ICON_COLOR[variant]}
          name={ICON_NAME[variant]}
          data-testid={dataTestId ? `${dataTestId}-icon` : undefined}
        />
      ) : null}
      {textualBadgeText}
    </Flex>
  );
}

const ForwardedTextualBadge = forwardRef(TextualBadge);
ForwardedTextualBadge.displayName = 'TextualBadge';

export { ForwardedTextualBadge as TextualBadge };
export type { Props as TextualBadgeProps, Ref as TextualBadgeRef };
