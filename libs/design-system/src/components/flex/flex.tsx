import type { ElementType, ReactNode, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
} from 'react-polymorphic-types';
import cn from 'clsx';
import { beSlot } from 'use-slots';

import type { Color, EnhancedSpacing, Spacing } from '../../utils';
import { FullSpacing, getColorCssVar, getSpacingCssVar, parseClockwiseProp } from '../../utils';
import { useResponsiveProp } from '../breakpoint';

import styles from './flex.module.css';

type Ref = HTMLDivElement;

const DefaultElement = 'div';

type DefaultElementType = typeof DefaultElement;

type OwnProps = {
  gap?: ResponsiveProp<Spacing>;
  wrap?: ResponsiveProp<'wrap' | 'nowrap' | 'wrap-reverse'>;
  grow?: ResponsiveProp<boolean>;
  order?: ResponsiveProp<number>;
  width?: ResponsiveProp<EnhancedSpacing>;
  margin?: ResponsiveProp<ClockwiseProp<Spacing>>;
  rowGap?: ResponsiveProp<FullSpacing>;
  shrink?: ResponsiveProp<boolean>;
  height?: ResponsiveProp<EnhancedSpacing>;
  padding?: ResponsiveProp<ClockwiseProp<Spacing>>;
  children?: ReactNode;
  minWidth?: ResponsiveProp<EnhancedSpacing>;
  minHeight?: ResponsiveProp<EnhancedSpacing>;
  columnGap?: ResponsiveProp<FullSpacing>;
  direction?: ResponsiveProp<'row' | 'column' | 'row-reverse' | 'column-reverse'>;
  alignItems?: ResponsiveProp<
    'normal' | 'center' | 'stretch' | 'baseline' | 'flex-end' | 'flex-start'
  >;
  justifyContent?: ResponsiveProp<
    | 'normal'
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-evenly'
    | 'space-between'
  >;
  backgroundColor?: Color;
};

type Props<T extends ElementType = DefaultElementType> = PolymorphicPropsWithoutRef<OwnProps, T>;

function Flex<T extends ElementType = DefaultElementType>(
  {
    as,
    gap,
    wrap = 'nowrap',
    grow = false,
    order = 0,
    style = {},
    margin = 'none',
    width = 'auto',
    rowGap = 'normal',
    shrink = true,
    height = 'auto',
    padding = 'none',
    minWidth = 'auto',
    minHeight = 'auto',
    className,
    columnGap = 'normal',
    direction = 'row',
    alignItems = 'normal',
    justifyContent = 'normal',
    backgroundColor = 'transparent',
    ...props
  }: Props<T>,
  ref: ReactRef<Ref>,
) {
  const Element: ElementType = as || DefaultElement;

  const responsiveWidth = useResponsiveProp(width);
  const responsiveMargin = useResponsiveProp(margin);
  const responsiveHeight = useResponsiveProp(height);
  const responsivePadding = useResponsiveProp(padding);
  const responsiveMinWidth = useResponsiveProp(minWidth);
  const responsiveMinHeight = useResponsiveProp(minHeight);

  const [top, right, bottom, left] = parseClockwiseProp(responsivePadding);
  const [marginTop = top, marginLeft = left] = parseClockwiseProp(responsiveMargin);

  const internalStyle = {
    ...style,
    '--flex-wrap': useResponsiveProp(wrap),
    '--flex-grow': useResponsiveProp(Number(grow)),
    '--flex-order': useResponsiveProp(order),
    '--flex-width': getSpacingCssVar(responsiveWidth === 'screen' ? 'w-screen' : responsiveWidth),
    '--flex-min-width': getSpacingCssVar(
      responsiveMinWidth === 'screen' ? 'w-screen' : responsiveMinWidth,
    ),
    '--flex-shrink': useResponsiveProp(Number(shrink)),
    '--flex-height': getSpacingCssVar(
      responsiveHeight === 'screen' ? 'h-screen' : responsiveHeight,
    ),
    '--flex-min-height': getSpacingCssVar(
      responsiveMinHeight === 'screen' ? 'h-screen' : responsiveMinHeight,
    ),
    '--flex-margin-y': getSpacingCssVar(marginTop),
    '--flex-margin-x': getSpacingCssVar(marginLeft),
    '--flex-direction': useResponsiveProp(direction),
    '--flex-align-items': useResponsiveProp(alignItems),
    '--flex-padding-top': getSpacingCssVar(top),
    '--flex-padding-left': getSpacingCssVar(left),
    '--flex-padding-right': getSpacingCssVar(right),
    '--flex-padding-bottom': getSpacingCssVar(bottom),
    '--flex-justify-content': useResponsiveProp(justifyContent),
    '--flex-background-color': getColorCssVar(backgroundColor),
    ...(gap !== undefined
      ? {
          gap: getSpacingCssVar(useResponsiveProp(gap)),
        }
      : {
          rowGap: getSpacingCssVar(useResponsiveProp(rowGap)),
          columnGap: getSpacingCssVar(useResponsiveProp(columnGap)),
        }),
  };

  return (
    <Element ref={ref} style={internalStyle} className={cn(styles.flex, className)} {...props} />
  );
}

const ForwardedFlex: PolymorphicForwardRefExoticComponent<OwnProps, typeof DefaultElement> = beSlot(
  forwardRef(Flex),
  'flex',
);
ForwardedFlex.displayName = 'Flex';

export { ForwardedFlex as Flex };
export type { Props as FlexProps, Ref as FlexRef };
