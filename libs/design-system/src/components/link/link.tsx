import type { ElementType, ReactNode, Ref as ReactRef, RefObject } from 'react';
import React, { forwardRef } from 'react';
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
} from 'react-polymorphic-types';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import type { UseLinkProps } from '@hypeflame/hooks';
import { useLink, useMatchArea } from '@hypeflame/hooks';
import { useFocusRing } from '@react-aria/focus';
import cn from 'clsx';
import invariant from 'tiny-invariant';

import { useResponsiveProp } from '../breakpoint';
import type { FlexProps } from '../flex';
import { Flex } from '../flex';
import type { IconProps } from '../icon';
import { Icon } from '../icon';

import styles from './link.module.css';

type Ref = HTMLAnchorElement;

const DefaultElement = 'a';

type DefaultElementType = typeof DefaultElement;

type Size = 'sm' | 'md' | 'lg';

type OwnProps = {
  size?: ResponsiveProp<Size>;
  variant?: 'primary' | 'secondary';
  decorated?: boolean;
  children: ReactNode;
  className?: string;
  matchArea?: RefObject<HTMLElement>;
  iconAfter?: IconProps['name'];
  iconBefore?: IconProps['name'];
} & Omit<UseLinkProps, 'as'>;

type Props<T extends ElementType = DefaultElementType> = PolymorphicPropsWithoutRef<OwnProps, T>;

const GAP: Record<Size, FlexProps['gap']> = {
  sm: '2xsm',
  md: 'xsm',
  lg: 'sm',
};

function Link<T extends ElementType = DefaultElementType>(
  {
    size = 'md',
    variant = 'primary',
    decorated = false,
    onPress,
    disabled,
    children,
    className,
    iconAfter,
    matchArea,
    iconBefore,
    ...props
  }: Props<T>,
  ref: ReactRef<Ref>,
) {
  const areaRef = useMatchArea(matchArea || { current: null });

  const internalRef = useForwardedRef(ref);

  const responsiveSize = useResponsiveProp(size);

  const { isFocusVisible, focusProps } = useFocusRing();

  const { as: Element, linkProps } = useLink({ ...props, disabled, onPress }, internalRef);

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
    [styles['-decorated']]: decorated,
    [styles['-primary']]: variant === 'primary',
    [styles['-secondary']]: variant === 'secondary',
  };

  const icon = iconBefore || iconAfter;

  invariant(
    !(iconBefore && iconAfter),
    'iconBefore e iconAfter não podem ser usados ao mesmo tempo',
  );

  return (
    <Flex
      as={Element}
      ref={internalRef}
      className={cn(className, sizeClasses, stateClasses, variantClasses, styles.link)}
      alignItems="center"
      {...props}
      {...linkProps}
      {...focusProps}
    >
      <span ref={areaRef} className={styles['match-area']} />
      <Flex
        gap={GAP[responsiveSize]}
        grow
        direction={iconBefore ? 'row-reverse' : iconAfter ? 'row' : undefined}
        justifyContent={icon ? 'center' : 'space-between'}
      >
        {icon ? (
          <>
            <span>{children}</span> <Icon size={responsiveSize} name={icon} />
          </>
        ) : (
          children
        )}
      </Flex>
    </Flex>
  );
}

const ForwardedLink: PolymorphicForwardRefExoticComponent<OwnProps, DefaultElementType> =
  forwardRef(Link);
ForwardedLink.displayName = 'Link';

export { ForwardedLink as Link };
export type { Props as LinkProps, Ref as LinkRef };
