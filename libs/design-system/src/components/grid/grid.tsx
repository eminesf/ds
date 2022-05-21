import type { ElementType, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
} from 'react-polymorphic-types';
import cn from 'clsx';

import type { Color, EnhancedSpacing, Spacing } from '../../utils';
import {
  cleanObject,
  FullSpacing,
  getColorCssVar,
  getSpacingCssVar,
  parseClockwiseProp,
} from '../../utils';
import { useResponsiveProp } from '../breakpoint';

import styles from './grid.module.css';

type Ref = HTMLDivElement;

const DefaultElement = 'div';

type DefaultElementType = typeof DefaultElement;

type GridSpacing = EnhancedSpacing | '1fr' | 'auto';

type Fraction = GridSpacing | MinMax;

type MinMax = [GridSpacing, GridSpacing];

type OwnProps = {
  gap?: ResponsiveProp<Spacing>;
  flow?: ResponsiveProp<'row' | 'column'>;
  rows?: ResponsiveProp<Fraction[]>;
  cols?: ResponsiveProp<Fraction[]>;
  areas?: ResponsiveProp<string[][]>;
  width?: ResponsiveProp<EnhancedSpacing>;
  height?: ResponsiveProp<EnhancedSpacing>;
  rowGap?: ResponsiveProp<FullSpacing>;
  padding?: ResponsiveProp<ClockwiseProp<Spacing>>;
  minWidth?: ResponsiveProp<EnhancedSpacing>;
  minHeight?: ResponsiveProp<EnhancedSpacing>;
  columnGap?: ResponsiveProp<FullSpacing>;
  alignItems?: ResponsiveProp<'normal' | 'center' | 'stretch' | 'baseline' | 'end' | 'start'>;
  justifyContent?: ResponsiveProp<
    'normal' | 'center' | 'end' | 'start' | 'space-around' | 'space-evenly' | 'space-between'
  >;
  backgroundColor?: Color;
};

type Props<T extends ElementType = DefaultElementType> = PolymorphicPropsWithoutRef<OwnProps, T>;

function Grid<T extends ElementType = DefaultElementType>(
  {
    as,
    gap,
    rows = ['auto'],
    cols = ['auto'],
    flow = 'row',
    areas,
    style = {},
    width = 'auto',
    height = 'auto',
    rowGap = 'normal',
    padding = 'none',
    minWidth = 'auto',
    minHeight = 'auto',
    className,
    columnGap = 'normal',
    alignItems = 'normal',
    justifyContent = 'normal',
    backgroundColor = 'transparent',
    ...props
  }: Props<T>,
  ref: ReactRef<Ref>,
) {
  const Element: ElementType = as || DefaultElement;

  const templateAreas = useResponsiveProp(areas)?.reduce(
    (acc, area) => `${acc}"${area.join(' ')}"`,
    '',
  );

  const templateColumns = useResponsiveProp(cols)
    .map((col) =>
      col instanceof Array
        ? `minMax(${col
            .map((value) => getSpacingCssVar(value === 'screen' ? 'w-screen' : value))
            .join(',')})`
        : getSpacingCssVar(col === 'screen' ? 'w-screen' : col),
    )
    .join(' ');

  const templateRows = useResponsiveProp(rows)
    .map((row) =>
      row instanceof Array
        ? `minMax(${row
            .map((value) => getSpacingCssVar(value === 'screen' ? 'h-screen' : value))
            .join(',')})`
        : getSpacingCssVar(row === 'screen' ? 'w-screen' : row),
    )
    .join(' ');

  const responsiveWidth = useResponsiveProp(width);
  const responsiveHeight = useResponsiveProp(height);
  const responsivePadding = useResponsiveProp(padding);
  const responsiveMinWidth = useResponsiveProp(minWidth);
  const responsiveMinHeight = useResponsiveProp(minHeight);

  const [top, right, bottom, left] = parseClockwiseProp(responsivePadding);

  const internalStyle = cleanObject({
    ...style,
    '--grid-width': getSpacingCssVar(responsiveWidth === 'screen' ? 'w-screen' : responsiveWidth),
    '--grid-min-width': getSpacingCssVar(
      responsiveMinWidth === 'screen' ? 'w-screen' : responsiveMinWidth,
    ),
    '--grid-height': getSpacingCssVar(
      responsiveHeight === 'screen' ? 'h-screen' : responsiveHeight,
    ),
    '--grid-min-height': getSpacingCssVar(
      responsiveMinHeight === 'screen' ? 'h-screen' : responsiveMinHeight,
    ),
    '--grid-auto-flow': useResponsiveProp(flow),
    '--grid-align-items': useResponsiveProp(alignItems),
    '--grid-padding-top': getSpacingCssVar(top),
    '--grid-padding-left': getSpacingCssVar(left),
    '--grid-padding-right': getSpacingCssVar(right),
    '--grid-template-rows': templateRows,
    '--grid-padding-bottom': getSpacingCssVar(bottom),
    '--grid-template-areas': templateAreas,
    '--grid-justify-content': useResponsiveProp(justifyContent),
    '--grid-template-columns': templateColumns,
    '--grid-background-color': getColorCssVar(backgroundColor),
    ...(gap !== undefined
      ? {
          gap: getSpacingCssVar(useResponsiveProp(gap)),
        }
      : {
          rowGap: getSpacingCssVar(useResponsiveProp(rowGap)),
          columnGap: getSpacingCssVar(useResponsiveProp(columnGap)),
        }),
  });

  return (
    <Element ref={ref} style={internalStyle} className={cn(styles.grid, className)} {...props} />
  );
}

const ForwardedGrid: PolymorphicForwardRefExoticComponent<OwnProps, DefaultElementType> =
  forwardRef(Grid);
ForwardedGrid.displayName = 'Grid';

export { ForwardedGrid as Grid };
export type { Props as GridProps, Ref as GridRef };
