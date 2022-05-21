import type { ReactNode } from 'react';
import React, { createContext, useContext } from 'react';
import { BreakpointLg, BreakpointMd } from '@agi/design-tokens';
import { useBreakpoint } from '@hypeflame/hooks';
import invariant from 'tiny-invariant';

type Props = {
  children?: ReactNode;
};

type ContextType = ReturnType<typeof useBreakpoint>;

const Context = createContext<ContextType | null>(null);

function BreakpointProvider({ children }: Props) {
  const breakpoint = useBreakpoint({ md: BreakpointMd, lg: BreakpointLg });

  return <Context.Provider value={breakpoint}>{children}</Context.Provider>;
}

function useBreakpointContext() {
  const context = useContext(Context);

  invariant(context !== null, 'useBreakpointContext deve ser usado em um Breakpoint');

  return context as ContextType;
}

function useResponsiveProp<T>(prop: ResponsiveProp<T>): T {
  const { current } = useBreakpointContext();

  if (typeof prop !== 'object') return prop;

  const lastMatchedBreakpoint = ['lg', 'md', 'base'].find((breakpoint) => breakpoint in prop);

  const breakpoint = (prop as any)?.[current] !== undefined ? current : lastMatchedBreakpoint;

  return breakpoint ? (prop as any)?.[breakpoint] : prop;
}

export { BreakpointProvider, useBreakpointContext, useResponsiveProp };
export type { Props as BreakpointProviderProps };
