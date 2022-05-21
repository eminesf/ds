import type { ElementType, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
} from 'react-polymorphic-types';
import cn from 'clsx';

import type { Color } from '../../utils';
import { cleanObject, getColorCssVar } from '../../utils';
import { useResponsiveProp } from '../breakpoint';

import styles from './grid.module.css';

type Ref = HTMLDivElement;

const DefaultElement = 'div';

type DefaultElementType = typeof DefaultElement;

type OwnProps = {
  area?: string;
  colsEnd?: ResponsiveProp<number>;
  rowsEnd?: ResponsiveProp<number>;
  colsSpan?: ResponsiveProp<number>;
  rowsSpan?: ResponsiveProp<number>;
  colsStart?: ResponsiveProp<number>;
  rowsStart?: ResponsiveProp<number>;
  backgroundColor?: Color;
};

type Props<T extends ElementType = DefaultElementType> = PolymorphicPropsWithoutRef<OwnProps, T>;

function GridItem<T extends ElementType = DefaultElementType>(
  {
    as,
    area,
    style = {},
    rowsEnd,
    colsEnd,
    colsSpan,
    rowsSpan,
    colsStart,
    rowsStart,
    className,
    backgroundColor = 'transparent',
    ...props
  }: Props<T>,
  ref: ReactRef<Ref>,
) {
  const Element: ElementType = as || DefaultElement;

  const internalStyle = cleanObject({
    ...style,
    '--grid-item-area': area,
    '--grid-item-row-end': useResponsiveProp(rowsEnd),
    '--grid-item-row-span': useResponsiveProp(rowsSpan),
    '--grid-item-row-start': useResponsiveProp(rowsStart),
    '--grid-item-column-end': useResponsiveProp(colsEnd),
    '--grid-item-column-span': useResponsiveProp(colsSpan),
    '--grid-item-column-start': useResponsiveProp(colsStart),
    '--grid-item-background-color': getColorCssVar(backgroundColor),
  });

  return (
    <Element
      ref={ref}
      style={internalStyle}
      className={cn(styles['grid-item'], className, {
        [styles['-area']]: area,
        [styles['-span']]: colsSpan || rowsSpan,
      })}
      {...props}
    />
  );
}

const ForwardedGridItem: PolymorphicForwardRefExoticComponent<OwnProps, DefaultElementType> =
  forwardRef(GridItem);
ForwardedGridItem.displayName = 'GridItem';

export { ForwardedGridItem as GridItem };
export type { Props as GridItemProps, Ref as GridItemRef };
