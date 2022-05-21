import type { HTMLAttributes, Ref as ReactRef, RefObject } from 'react';
import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { FocusScope, useFocusRing } from '@react-aria/focus';
import { useToggleState } from '@react-stately/toggle';
import cn from 'clsx';
import { AnimatePresence, m } from 'framer-motion';
import { useSlots } from 'use-slots';

import { useBreakpointContext } from '../../breakpoint';
import type { FlexRef } from '../../flex';
import { Flex } from '../../flex';
import { Grid } from '../../grid';
import { Logo } from '../../logo';
import { useProviderContext } from '../../provider';

import { SiteHeaderButton } from './site-header-button';
import styles from './site-header.module.css';

type Ref = FlexRef;

type Props = {
  offsetted: boolean;
} & HTMLAttributes<Ref>;

type ContextType = {
  activated: boolean;
  headerRef: RefObject<HTMLElement>;
  closeItem: () => void;
  openedItem?: string;
  setOpenedItem: (item: string) => void;
  isMenuVisible: boolean;
};

const Context = createContext<ContextType | null>(null);

const MotionGrid = m(Grid);

function SiteHeader(
  { children, className, offsetted = true, ...props }: Props,
  ref: ReactRef<Ref>,
) {
  const { current: breakpoint } = useBreakpointContext();

  const menuState = useToggleState();

  const { setOverflow, setHeaderOffset, toggleHeadered, removeHeaderOffset } = useProviderContext();

  const internalRef = useForwardedRef(ref);

  const [openedItem, setOpenedItem] = useState('');

  const [scrolled, setScrolled] = useState(false);

  const { siteHeaderItem, siteHeaderActionsWrapper } = useSlots(children);

  const { isFocusVisible, focusProps } = useFocusRing();

  const activated = scrolled || openedItem !== '' || menuState.isSelected;

  const handleScrollChange = useCallback(() => {
    setScrolled(window.scrollY > 0);
  }, []);

  const closeItem = useCallback(() => {
    setOpenedItem('');
  }, []);

  useEffect(() => {
    toggleHeadered(true);

    return () => toggleHeadered(false);
  }, [toggleHeadered]);

  useEffect(() => {
    if (offsetted) setHeaderOffset('site');

    return () => removeHeaderOffset();
  }, [offsetted, setHeaderOffset, removeHeaderOffset]);

  useEffect(() => {
    setOverflow(menuState.isSelected ? 'hidden' : 'auto');
  }, [menuState.isSelected]);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollChange);

    return () => window.removeEventListener('scroll', handleScrollChange);
  }, [handleScrollChange]);

  const items = siteHeaderItem ? (
    <Flex
      as="nav"
      gap={{ base: 'none', md: 'md', lg: '5xlg' }}
      padding={{ base: ['md', 'none', 'none'], md: 'none' }}
      direction={{ base: 'column', md: 'row' }}
      alignItems={{ base: 'normal', md: 'center' }}
    >
      {siteHeaderItem}
    </Flex>
  ) : null;

  const actions = siteHeaderActionsWrapper || null;

  return (
    <Context.Provider
      value={{
        headerRef: internalRef,
        activated,
        closeItem,
        openedItem,
        setOpenedItem,
        isMenuVisible: menuState.isSelected,
      }}
    >
      <Flex
        as="header"
        ref={internalRef}
        direction="column"
        height={menuState.isSelected ? 'full' : 'auto'}
        className={cn(className, styles['site-header'], {
          [styles['-opened']]: menuState.isSelected,
          [styles['-activated']]: !offsetted ? activated : true,
        })}
        justifyContent="space-between"
        {...props}
      >
        <Grid height="full" rows={['5xlg', '1fr']}>
          <Flex
            padding={['none', 'md']}
            className={styles.nav}
            alignItems="center"
            justifyContent="space-between"
          >
            <a
              href="https://agi.com.br/"
              className={cn(styles.logo, {
                [styles['-focused']]: isFocusVisible,
              })}
              {...focusProps}
            >
              <Logo variant="secondary" />
            </a>

            {breakpoint === 'base' ? (
              <SiteHeaderButton onPress={menuState.toggle} aria-expanded={menuState.isSelected} />
            ) : (
              <>
                {items}
                {actions}
              </>
            )}
          </Flex>
          {breakpoint === 'base' ? (
            <AnimatePresence exitBeforeEnter>
              {menuState.isSelected ? (
                <FocusScope restoreFocus autoFocus>
                  <MotionGrid
                    key="menu"
                    exit="hidden"
                    initial="hidden"
                    animate="show"
                    variants={{
                      show: {
                        height: 'auto',
                        opacity: 1,
                        visibility: 'visible',
                      },
                      hidden: {
                        height: 0,
                        opacity: 0,
                        visibility: 'hidden',
                      },
                    }}
                    width="full"
                    rows={['1fr', 'auto']}
                    className={styles.menu}
                  >
                    {items}
                    {actions}
                  </MotionGrid>
                </FocusScope>
              ) : null}
            </AnimatePresence>
          ) : null}
        </Grid>
      </Flex>
    </Context.Provider>
  );
}

function useSiteHeaderContext() {
  return useContext(Context) as ContextType;
}

const ForwardedSiteHeader = forwardRef(SiteHeader);
ForwardedSiteHeader.displayName = 'SiteHeader';

export { ForwardedSiteHeader as SiteHeader, useSiteHeaderContext };
export type { Props as SiteHeaderProps, Ref as SiteHeaderRef };
