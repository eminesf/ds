import type { Color, Spacing } from '../constants';
import { CUSTOM_SPACING, SPACING } from '../constants';

export type FullSpacing = Spacing | keyof typeof CUSTOM_SPACING;

export const cleanObject = (vars: { [key in string]?: string | number }) =>
  Object.keys(vars).reduce((acc, key) => (vars[key] ? { ...acc, [key]: vars[key] } : acc), {});

export const getSpacingCssVar = (spacing: FullSpacing) =>
  SPACING.includes(spacing as Spacing)
    ? `var(--spacing-${spacing.replace(/^(\d+)/g, '$1-')})`
    : CUSTOM_SPACING[spacing as keyof typeof CUSTOM_SPACING];

export const getColorCssVar = (color: Color) => `var(--color-${color})`;

export function parseClockwiseProp<T>(prop: ClockwiseProp<T>): [T, T, T, T] {
  if (!Array.isArray(prop)) return [prop, prop, prop, prop];

  const [top, right, bottom, left] = prop;

  if (left) return [top, right, bottom!, left];

  if (bottom) return [top, right, bottom, right];

  return [top, right, top, right];
}

export function isSpaceless(str: unknown) {
  return typeof str === 'string' && !/\s/g.test(str);
}
