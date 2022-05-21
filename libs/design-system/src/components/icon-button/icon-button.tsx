import type { ElementType, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
} from 'react-polymorphic-types';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import type { UseButtonProps } from '@hypeflame/hooks';
import { useButton } from '@hypeflame/hooks';
import { useFocusRing } from '@react-aria/focus';
import cn from 'clsx';

import type { Color } from '../../utils';
import { Flex } from '../flex';
import type { IconProps } from '../icon';
import { Icon } from '../icon';

import styles from './icon-button.module.css';

type Ref = HTMLButtonElement;

const DefaultElement = 'button';

type DefaultElementType = typeof DefaultElement;

type OwnProps = {
  className?: string;
  'aria-label': string;
  icon: IconProps['name'];
  size?: IconProps['size'];
  color?: Color;
} & Omit<UseButtonProps, 'as' | 'children'>;

type Props<T extends ElementType = DefaultElementType> = PolymorphicPropsWithoutRef<OwnProps, T>;

function IconButton<T extends ElementType = DefaultElementType>(
  { size = 'md', icon, color, onPress, disabled, className, ...props }: Props<T>,
  ref: ReactRef<Ref>,
) {
  const internalRef = useForwardedRef(ref);

  const { isFocusVisible, focusProps } = useFocusRing();

  const {
    as: Element,
    isPressed,
    buttonProps,
  } = useButton({ ...props, disabled, onPress }, internalRef);

  const stateClasses = {
    [styles['-disabled']]: disabled,
    [styles['-focused']]: isFocusVisible,
  };

  return (
    <Flex
      as={Element}
      ref={internalRef}
      className={cn(className, stateClasses, styles['icon-button'])}
      alignItems="center"
      justifyContent="center"
      aria-pressed={isPressed}
      {...props}
      {...buttonProps}
      {...focusProps}
    >
      <Icon name={icon} size={size} color={color} />
    </Flex>
  );
}

const ForwardedIconButton: PolymorphicForwardRefExoticComponent<OwnProps, DefaultElementType> =
  forwardRef(IconButton);
ForwardedIconButton.displayName = 'IconButton';

export { ForwardedIconButton as IconButton };
export type { Props as IconButtonProps, Ref as IconButtonRef };
