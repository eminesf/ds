import type { HTMLAttributes, Ref as ReactRef } from 'react';
import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { OverlayProvider } from '@react-aria/overlays';
import { SSRProvider } from '@react-aria/ssr';
import cn from 'clsx';
import { domMax, LazyMotion } from 'framer-motion';
import invariant from 'tiny-invariant';

import type { Color } from '../../utils';
import { getColorCssVar } from '../../utils';
import { BreakpointProvider } from '../breakpoint';

import styles from './provider.module.css';

type Ref = HTMLDivElement;

type Props = { fullScreen?: boolean } & HTMLAttributes<Ref>;

type HeaderOffset = 'site' | 'app';

type Overflow = 'hidden' | 'auto';

type State = {
  overflow: 'hidden' | 'auto';
  headered: boolean;
  footerHeight?: number;
  headerOffset?: HeaderOffset;
  backgroundColor: Color;
};

type ContextType = State & {
  setOverflow: (overflow: Overflow) => void;
  removeFooter: () => void;
  toggleHeadered: (headered: boolean) => void;
  setHeaderOffset: (offset: HeaderOffset) => void;
  removeHeaderOffset: () => void;
  setFooterHeight: (footerHeight: number) => void;
  setBackgroundColor: (color: Color) => void;
  resetBackgroundColor: () => void;
};

const INITIAL_STATE: State = {
  overflow: 'auto',
  headered: false,
  footerHeight: undefined,
  headerOffset: undefined,
  backgroundColor: 'transparent',
};

const Context = createContext<ContextType | null>(null);

// NÃO EDITAR ESSA VARIAVEL, ELA É POPULADA DINAMICAMENTE NO PROCESSO DE BUILD
const version = 'development';

function Provider(
  { dir = 'ltr', lang = 'pt-BR', className, style, fullScreen, ...props }: Props,
  ref: ReactRef<Ref>,
) {
  const [state, setState] = useState<State>(INITIAL_STATE);
  const internalRef = useForwardedRef(ref);

  const setOverflow = useCallback((overflow: Overflow) => {
    setState((currentState) => ({ ...currentState, overflow }));
  }, []);

  const toggleHeadered = useCallback((headered: boolean) => {
    setState((currentState) => ({ ...currentState, headered }));
  }, []);

  const setFooterHeight = useCallback((footerHeight: number) => {
    setState((currentState) => ({ ...currentState, footerHeight }));
  }, []);

  const removeFooter = useCallback(() => {
    setState((currentState) => ({ ...currentState, footerHeight: 0 }));
  }, []);

  const setHeaderOffset = useCallback((headerOffset: HeaderOffset) => {
    setState((currentState) => ({ ...currentState, headerOffset }));
  }, []);

  const removeHeaderOffset = useCallback(() => {
    setState((currentState) => ({ ...currentState, headerOffset: undefined }));
  }, []);

  const setBackgroundColor = useCallback((backgroundColor: Color) => {
    setState((currentState) => ({ ...currentState, backgroundColor }));
  }, []);

  const resetBackgroundColor = useCallback(() => {
    setBackgroundColor(INITIAL_STATE.backgroundColor);
  }, [setBackgroundColor]);

  const internalStyle = useMemo(
    () => ({
      ...style,
      '--background-color': getColorCssVar(state.backgroundColor),
    }),
    [state.backgroundColor],
  );

  useEffect(() => {
    const hasModal = document.querySelectorAll('[data-ismodal]').length > 0;

    if (!hasModal) {
      document.documentElement.style.overflow = state.overflow;
    }
  }, [state.overflow]);

  useEffect(() => {
    if (internalRef.current && state.footerHeight !== undefined) {
      internalRef.current.style.paddingBottom = `${state.footerHeight}px`;
    }
  }, [state.footerHeight, internalRef.current]);

  return (
    <Context.Provider
      value={{
        ...state,
        setOverflow,
        removeFooter,
        toggleHeadered,
        setFooterHeight,
        setHeaderOffset,
        removeHeaderOffset,
        setBackgroundColor,
        resetBackgroundColor,
      }}
    >
      <BreakpointProvider>
        <SSRProvider>
          <LazyMotion strict features={domMax}>
            <OverlayProvider>
              <div
                {...props}
                ref={internalRef}
                dir={dir}
                lang={lang}
                style={internalStyle}
                className={cn(className, styles.provider, {
                  [styles['-fullScreen']]: fullScreen,
                  [styles['-headered']]: state.headered,
                  [styles['-header-offset-app']]: state.headerOffset === 'app',
                  [styles['-header-offset-site']]: state.headerOffset === 'site',
                })}
                data-version={version}
              />
            </OverlayProvider>
          </LazyMotion>
        </SSRProvider>
      </BreakpointProvider>
    </Context.Provider>
  );
}

function useProviderContext() {
  const context = useContext(Context);

  invariant(context !== null, 'useProviderContext deve ser usado em um Provider');

  return context as ContextType;
}

const ForwardedProvider = forwardRef(Provider);

export { ForwardedProvider as Provider, useProviderContext };
export type { Props as ProviderProps, Ref as ProviderRef };
