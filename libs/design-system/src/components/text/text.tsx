import type { ElementType, ReactNode, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
} from 'react-polymorphic-types';
import cn from 'clsx';

import type { Color } from '../../utils';
import { getColorCssVar, isSpaceless } from '../../utils';

import styles from './text.module.css';

type Ref = HTMLElement;

const DefaultElement = 'p';

type DefaultElementType = typeof DefaultElement;

type OwnProps = {
  size?: 'xsm' | 'sm' | 'md' | 'lg';
  color?: Color;
  align?: ResponsiveProp<'left' | 'right' | 'center'>;
  weight?: 'regular' | 'semibold' | 'bold';
  children: ReactNode;
};

type Props<T extends ElementType = DefaultElementType> = PolymorphicPropsWithoutRef<OwnProps, T>;

function Text<T extends ElementType = DefaultElementType>(
  {
    as,
    size = 'md',
    color = 'inherit',
    style = {},
    align,
    weight = 'regular',
    children,
    className,
    ...props
  }: Props<T>,
  ref: ReactRef<Ref>,
) {
  const Element: ElementType = as || DefaultElement;

  const internalStyle = {
    ...style,
    '--text-color': getColorCssVar(color),
    '--text-break': isSpaceless(children) ? 'break-all' : 'break-word',
  };

  const sizeClasses = {
    [styles['-xsm']]: size === 'xsm',
    [styles['-sm']]: size === 'sm',
    [styles['-md']]: size === 'md',
    [styles['-lg']]: size === 'lg',
  };

  const weightClasses = {
    [styles['-bold']]: weight === 'bold',
    [styles['-regular']]: weight === 'regular',
    [styles['-semibold']]: weight === 'semibold',
  };

  const alignClasses = {
    [styles['-left']]: align === 'left',
    [styles['-right']]: align === 'right',
    [styles['-center']]: align === 'center',
  };

  return (
    <Element
      ref={ref}
      style={internalStyle}
      className={cn(className, styles.text, sizeClasses, weightClasses, alignClasses)}
      {...props}
    >
      {children}
    </Element>
  );
}

const ForwardedText: PolymorphicForwardRefExoticComponent<OwnProps, DefaultElementType> =
  forwardRef(Text);
ForwardedText.displayName = 'Text';

export { ForwardedText as Text };
export type { Props as TextProps, Ref as TextRef };
