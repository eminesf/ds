import { act, renderHook } from '../../utils/test';

import { Provider, useProviderContext } from '.';

describe('Provider', () => {
  it('deve retornar context atual', () => {
    const { result } = renderHook(() => useProviderContext(), {
      wrapper: Provider,
    });

    expect(result.current.headerOffset).toBe(undefined);

    act(() => result.current.setHeaderOffset('site'));
    expect(result.current.headerOffset).toBe('site');

    act(() => result.current.setHeaderOffset('app'));
    expect(result.current.headerOffset).toBe('app');

    act(() => result.current.removeHeaderOffset());
    expect(result.current.headerOffset).toBe(undefined);

    expect(result.current.backgroundColor).toBe('transparent');
    act(() => result.current.setBackgroundColor('primary-400'));
    expect(result.current.backgroundColor).toBe('primary-400');
    act(() => result.current.resetBackgroundColor());
    expect(result.current.backgroundColor).toBe('transparent');
  });
});
