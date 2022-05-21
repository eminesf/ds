import { renderHook } from '../../utils/test';

import { BreakpointProvider, useBreakpointContext, useResponsiveProp } from '.';

describe('BreakpointProvider', () => {
  it('deve retornar breakpoint atual', () => {
    const { result } = renderHook(() => useBreakpointContext(), {
      wrapper: BreakpointProvider,
    });

    expect(result.current).toStrictEqual({
      current: 'base',
      matches: ['base'],
    });
  });

  it('deve retornar valor atrelado ao breakpoint atual', () => {
    const { result } = renderHook(
      () =>
        useResponsiveProp({
          base: false,
          md: true,
          lg: false,
        }),
      {
        wrapper: BreakpointProvider,
      },
    );

    expect(result.current).toBe(false);
  });
});
