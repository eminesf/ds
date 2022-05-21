import type { ElementType, ReactNode, Ref as ReactRef, RefObject } from 'react';
import React, { forwardRef } from 'react';
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
} from 'react-polymorphic-types';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import type { UseButtonProps } from '@hypeflame/hooks';
import { useButton, useMatchArea } from '@hypeflame/hooks';
import { useFocusRing } from '@react-aria/focus';
import cn from 'clsx';
import invariant from 'tiny-invariant';

import { useResponsiveProp } from '../breakpoint';
import type { FlexProps } from '../flex';
import { Flex } from '../flex';
import type { IconProps } from '../icon';
import { Icon } from '../icon';

import styles from './button.module.css';

type Ref = HTMLButtonElement;

const DefaultElement = 'button';

type DefaultElementType = typeof DefaultElement;

type Size = 'sm' | 'md' | 'lg';

type OwnProps = {
  size?: ResponsiveProp<Size>;
  blocked?: ResponsiveProp<boolean>;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  outlined?: ResponsiveProp<boolean>;
  className?: string;
  matchArea?: RefObject<HTMLElement>;
  iconAfter?: ResponsiveProp<IconProps['name']>;
  iconBefore?: ResponsiveProp<IconProps['name']>;
} & Omit<UseButtonProps, 'as'>;

type Props<T extends ElementType = DefaultElementType> = PolymorphicPropsWithoutRef<OwnProps, T>;

const GAP: Record<Size, FlexProps['gap']> = {
  sm: 'xsm',
  md: 'sm',
  lg: 'md',
};

function Button<T extends ElementType = DefaultElementType>(
  {
    size,
    blocked,
    variant = 'primary',
    onPress,
    disabled,
    outlined,
    children,
    className,
    iconAfter,
    matchArea,
    iconBefore,
    'data-testid': dataTestId,
    ...props
  }: Props<T>,
  ref: ReactRef<Ref>,
) {
  const areaRef = useMatchArea(matchArea || { current: null });

  const internalRef = useForwardedRef(ref);

  const defaultSize = size || useResponsiveProp({ base: 'sm', md: 'md' });
  const responsiveSize = useResponsiveProp(defaultSize);
  const responsiveIconAfter = useResponsiveProp(iconAfter);
  const responsiveIconBefore = useResponsiveProp(iconBefore);
  const responsiveBlocked = useResponsiveProp(blocked);

  const { isFocusVisible, focusProps } = useFocusRing();

  const { as: Element, buttonProps } = useButton({ ...props, disabled, onPress }, internalRef);

  const sizeClasses = {
    [styles['-sm']]: responsiveSize === 'sm',
    [styles['-md']]: responsiveSize === 'md',
    [styles['-lg']]: responsiveSize === 'lg',
  };

  const stateClasses = {
    [styles['-focused']]: isFocusVisible,
    [styles['-disabled']]: disabled,
    [styles['-match-area']]: Boolean(matchArea),
  };

  const variantClasses = {
    [styles['-primary']]: variant === 'primary',
    [styles['-outlined']]: useResponsiveProp(outlined),
    [styles['-secondary']]: variant === 'secondary',
  };

  const icon = responsiveIconBefore || responsiveIconAfter;

  invariant(
    !(responsiveIconBefore && responsiveIconAfter),
    'iconBefore e iconAfter não podem ser usados ao mesmo tempo',
  );

  return (
    <Flex
      width={{
        base: responsiveSize === 'lg' || responsiveBlocked ? 'full' : undefined,
        md: responsiveBlocked ? 'full' : undefined,
      }}
      as={Element}
      ref={internalRef}
      className={cn(className, sizeClasses, stateClasses, styles.button, variantClasses)}
      alignItems="center"
      data-testid={dataTestId}
      {...props}
      {...buttonProps}
      {...focusProps}
    >
      <span ref={areaRef} className={styles['match-area']} />
      <Flex
        gap={GAP[responsiveSize]}
        grow
        direction={responsiveIconBefore ? 'row-reverse' : responsiveIconAfter ? 'row' : undefined}
        alignItems="center"
        justifyContent={responsiveIconAfter ? 'space-between' : 'center'}
        data-testid={dataTestId ? `${dataTestId}-wrapper` : undefined}
      >
        {icon ? (
          <>
            <span data-testid={dataTestId ? `${dataTestId}-content` : undefined}>{children}</span>{' '}
            <Icon
              size="lg"
              name={icon}
              data-testid={dataTestId ? `${dataTestId}-icon` : undefined}
            />
          </>
        ) : (
          children
        )}
      </Flex>
    </Flex>
  );
}

const ForwardedButton: PolymorphicForwardRefExoticComponent<OwnProps, DefaultElementType> =
  forwardRef(Button);
ForwardedButton.displayName = 'Button';

export { ForwardedButton as Button };
export type { Props as ButtonProps, Ref as ButtonRef };
