import React from 'react';

import type { CustomSpacing } from '../constants';
import { COLOR, CUSTOM_SPACING, SPACING } from '../constants';

import { getColorCssVar, getSpacingCssVar, isSpaceless, parseClockwiseProp } from '.';

describe('Utils > isSpaceless', () => {
  test('Deve retornar verdadeiro', () => {
    expect(isSpaceless('23142353451231232144364561213123')).toStrictEqual(true);
  });

  test('Deve retornar falso', () => {
    const Component = () => <>lorem ipsum dolor at</>;

    expect(isSpaceless('lorem ipsum dolor at')).toBe(false);
    expect(isSpaceless(['lorem ipsum dolor at'])).toBe(false);
    expect(isSpaceless(<>lorem ipsum dolor at</>)).toBe(false);
    expect(isSpaceless(<Component />)).toBe(false);
  });
});

describe('Utils > parseClockwiseProp', () => {
  test('Deve retornar [1, 1, 1, 1]', () => {
    expect(parseClockwiseProp(1)).toStrictEqual([1, 1, 1, 1]);
  });

  test('Deve retornar [1, 2, 1, 2]', () => {
    expect(parseClockwiseProp([1, 2])).toStrictEqual([1, 2, 1, 2]);
  });

  test('Deve retornar [1, 2, 3, 2]', () => {
    expect(parseClockwiseProp([1, 2, 3])).toStrictEqual([1, 2, 3, 2]);
  });

  test('Deve retornar [1, 2, 3, 4]', () => {
    expect(parseClockwiseProp([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });
});

describe('Utils > getSpacingCssVar', () => {
  test('Deve retornar o espaço correto', () => {
    SPACING.forEach((spacing) => {
      expect(getSpacingCssVar(spacing)).toBe(`var(--spacing-${spacing.replace(/^(\d+)/g, '$1-')})`);
    });

    Object.entries(CUSTOM_SPACING).forEach(([key, value]) => {
      expect(getSpacingCssVar(key as CustomSpacing)).toBe(value);
    });
  });
});

describe('Utils > getColorCssVar', () => {
  test('Deve retornar a cor correta', () => {
    COLOR.forEach((color) => {
      expect(getColorCssVar(color)).toBe(`var(--color-${color})`);
    });
  });
});
