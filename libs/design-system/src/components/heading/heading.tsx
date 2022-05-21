import type { ElementType, ReactNode, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
} from 'react-polymorphic-types';
import cn from 'clsx';

import type { Color } from '../../utils';
import { getColorCssVar, isSpaceless } from '../../utils';
import { useResponsiveProp } from '../breakpoint';

import styles from './heading.module.css';

type Ref = HTMLHeadingElement;

const DefaultElement = 'h3';

type DefaultElementType = typeof DefaultElement;

type OwnProps = {
  size?: ResponsiveProp<'sm' | 'md' | 'lg' | 'xlg'>;
  color?: Color;
  align?: ResponsiveProp<'left' | 'right' | 'center'>;
  weight?: 'regular' | 'semibold' | 'bold';
  children: ReactNode;
};

type Props<T extends ElementType = DefaultElementType> = PolymorphicPropsWithoutRef<OwnProps, T>;

function Heading<T extends ElementType = DefaultElementType>(
  {
    as,
    size = 'md',
    color = 'inherit',
    align,
    weight = 'bold',
    style = {},
    children,
    className,
    ...props
  }: Props<T>,
  ref: ReactRef<Ref>,
) {
  const Element: ElementType = as || DefaultElement;

  const reponsiveAlign = useResponsiveProp(align);
  const responsiveSize = useResponsiveProp(size);

  const internalStyle = {
    ...style,
    '--heading-color': getColorCssVar(color),
    '--heading-break': isSpaceless(children) ? 'break-all' : 'break-word',
  };

  const sizeClasses = {
    [styles['-sm']]: responsiveSize === 'sm',
    [styles['-md']]: responsiveSize === 'md',
    [styles['-lg']]: responsiveSize === 'lg',
    [styles['-xlg']]: responsiveSize === 'xlg',
  };

  const weightClasses = {
    [styles['-regular']]: weight === 'regular',
    [styles['-semibold']]: weight === 'semibold',
    [styles['-bold']]: weight === 'bold',
  };

  const alignClasses = {
    [styles['-left']]: reponsiveAlign === 'left',
    [styles['-right']]: reponsiveAlign === 'right',
    [styles['-center']]: reponsiveAlign === 'center',
  };

  return (
    <Element
      ref={ref}
      style={internalStyle}
      className={cn(className, styles.heading, sizeClasses, weightClasses, alignClasses)}
      {...props}
    >
      {children}
    </Element>
  );
}

const ForwardedHeading: PolymorphicForwardRefExoticComponent<OwnProps, DefaultElementType> =
  forwardRef(Heading);
ForwardedHeading.displayName = 'Heading';

export { ForwardedHeading as Heading };
export type { Props as HeadingProps, Ref as HeadingRef };
