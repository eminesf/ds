import type { ElementType, ReactNode, Ref as ReactRef } from 'react';
import React, { forwardRef, useRef } from 'react';
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
} from 'react-polymorphic-types';
import { AnimationDurationQuickly, AnimationDurationSlowly } from '@agi/design-tokens';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import type { UseButtonProps, UseLinkProps } from '@hypeflame/hooks';
import { useButton, useLink } from '@hypeflame/hooks';
import { FocusScope, useFocusRing } from '@react-aria/focus';
import { useOverlay } from '@react-aria/overlays';
import cn from 'clsx';
import { AnimatePresence, m } from 'framer-motion';
import { beSlot, useSlots } from 'use-slots';

import { useBreakpointContext } from '../../breakpoint';
import type { FlexRef } from '../../flex';
import { Flex } from '../../flex';
import type { GridProps } from '../../grid';
import { Grid } from '../../grid';
import { Icon } from '../../icon';
import { Text } from '../../text';

import { useSiteHeaderContext } from './site-header';
import styles from './site-header.module.css';

type Ref = HTMLAnchorElement | HTMLButtonElement;

const DefaultElement = 'span';

const DefaultLinkElement = 'a';

const DefaultButtonElement = 'button';

type DefaultLinkElementType = typeof DefaultLinkElement;

type DefaultButtonElementType = typeof DefaultButtonElement;

type DefaultElementType = DefaultLinkElementType | DefaultButtonElementType;

type OwnProps = {
  title: string;
  children?: ReactNode;
  activated?: boolean;
  description?: string;
} & (Omit<UseButtonProps, 'as' | 'title'> | Omit<UseLinkProps, 'as' | 'title'>);

type ButtonProps = OwnProps & Omit<UseButtonProps, 'as' | 'title'>;

type LinkProps = OwnProps & Omit<UseLinkProps, 'as' | 'title'>;

type Props<T extends ElementType = DefaultElementType> = PolymorphicPropsWithoutRef<OwnProps, T>;

const MotionFlex = m(Flex);

function SiteHeaderItem<T extends ElementType = DefaultElementType>(
  { as, title, children, activated = false, className, description, ...props }: Props<T>,
  ref: ReactRef<Ref>,
) {
  const Element: ElementType = as || DefaultElement;

  const { headerRef, openedItem, closeItem } = useSiteHeaderContext();

  const { current: breakpoint } = useBreakpointContext();

  const { siteHeaderSubItem } = useSlots(children);

  const overlayRef = useRef<FlexRef>(null);

  const { isFocusVisible, focusProps } = useFocusRing();

  const isOpen = openedItem === title;

  const internalActivated = isOpen || activated;

  const { overlayProps } = useOverlay(
    {
      isOpen,
      onClose: closeItem,
      isDismissable: true,
      shouldCloseOnBlur: true,
      shouldCloseOnInteractOutside(element) {
        return !headerRef.current?.contains(element);
      },
    },
    overlayRef,
  );

  return (
    <>
      <Element
        ref={ref}
        className={cn(className, styles['site-header-item'], {
          [styles['-focused']]: isFocusVisible,
          [styles['-activated']]: internalActivated,
        })}
        {...props}
        {...focusProps}
      >
        <Flex
          gap="2xsm"
          height={{ base: '4xlg', md: 'auto' }}
          alignItems="center"
          justifyContent="space-between"
        >
          <span data-text={title} className={styles.content}>
            {title}
            {activated ? <span className={styles.underline} /> : null}
          </span>
          {children ? <Icon name="angle-down" size="xlg" className={styles.icon} /> : null}
        </Flex>
      </Element>
      <AnimatePresence exitBeforeEnter>
        {isOpen ? (
          <FocusScope restoreFocus autoFocus>
            <MotionFlex
              key="overlay"
              ref={overlayRef}
              exit="hidden"
              initial="hidden"
              animate="show"
              transition={{
                duration: AnimationDurationSlowly,
              }}
              variants={{
                show: {
                  opacity: 1,
                  visibility: 'visible',
                  height: 'auto',
                  transition: { delay: AnimationDurationQuickly / 2 },
                },
                hidden: {
                  opacity: 0,
                  visibility: 'hidden',
                  height: 0,
                },
              }}
              className={styles.overlay}
              {...overlayProps}
            >
              <Grid
                cols={breakpoint === 'base' ? ['1fr'] : ['1fr', '1fr']}
                className={styles.content}
                alignItems="start"
                justifyContent="space-between"
              >
                <Grid
                  cols={breakpoint === 'base' ? ['1fr'] : ['1fr', '1fr']}
                  rows={
                    breakpoint === 'base'
                      ? undefined
                      : (Array.from({
                          length: siteHeaderSubItem.length <= 5 ? siteHeaderSubItem.length : 5,
                        }).fill('1fr') as GridProps['rows'])
                  }
                  flow={{ base: 'row', md: 'column' }}
                  width={{ base: 'full', md: 'content' }}
                  rowGap={{ base: 'none', md: 'md' }}
                  columnGap={{ base: 'none', md: '2xlg', lg: '7xlg' }}
                >
                  {siteHeaderSubItem}
                </Grid>
                {breakpoint !== 'base' && description ? (
                  <Flex>
                    <Text size="md" color="support-100">
                      {description}
                    </Text>
                  </Flex>
                ) : null}
              </Grid>
            </MotionFlex>
          </FocusScope>
        ) : null}
      </AnimatePresence>
    </>
  );
}

const ForwardedSiteHeaderItem: PolymorphicForwardRefExoticComponent<OwnProps, DefaultElementType> =
  forwardRef(SiteHeaderItem);

function LinkSiteHeaderItem<T extends ElementType = DefaultLinkElementType>(
  { as, title, children, onPress, ...props }: Props<T>,
  ref: ReactRef<HTMLAnchorElement>,
) {
  const internalRef = useForwardedRef(ref);

  const { closeItem } = useSiteHeaderContext();

  const { as: Element, linkProps } = useLink(
    {
      ...props,
      as,
      onPress(e: any) {
        closeItem();

        if (onPress) onPress(e);
      },
    },
    internalRef,
  );

  return (
    <ForwardedSiteHeaderItem as={Element} ref={internalRef} title={title} {...props} {...linkProps}>
      {children}
    </ForwardedSiteHeaderItem>
  );
}

const ForwardedLinkSiteHeaderItem: PolymorphicForwardRefExoticComponent<
  OwnProps,
  DefaultElementType
> = forwardRef(LinkSiteHeaderItem);

function ButtonSiteHeaderItem<T extends ElementType = DefaultButtonElementType>(
  { as, title, children, onPress, ...props }: Props<T>,
  ref: ReactRef<HTMLButtonElement>,
) {
  const internalRef = useForwardedRef(ref);

  const { closeItem, openedItem, setOpenedItem } = useSiteHeaderContext();

  const isOpen = openedItem === title;

  const { as: Element, buttonProps } = useButton(
    {
      ...props,
      as,
      onPress(e: any) {
        if (children && !isOpen) {
          setOpenedItem(title);
        } else {
          closeItem();
        }

        if (onPress) onPress(e);
      },
      'aria-expanded': isOpen,
      'aria-haspopup': true,
    },
    internalRef,
  );

  return (
    <ForwardedSiteHeaderItem
      as={Element}
      ref={internalRef}
      title={title}
      {...props}
      {...buttonProps}
    >
      {children}
    </ForwardedSiteHeaderItem>
  );
}

const ForwardedButtonSiteHeaderItem: PolymorphicForwardRefExoticComponent<
  OwnProps,
  DefaultElementType
> = forwardRef(ButtonSiteHeaderItem);

function EnhancedSiteHeaderItem<T extends ElementType = DefaultElementType>(
  { children, ...props }: Props<T>,
  ref: ReactRef<Ref>,
) {
  return children ? (
    <ForwardedButtonSiteHeaderItem
      ref={ref as ReactRef<HTMLButtonElement>}
      {...(props as ButtonProps)}
    >
      {children}
    </ForwardedButtonSiteHeaderItem>
  ) : (
    <ForwardedLinkSiteHeaderItem ref={ref as ReactRef<HTMLAnchorElement>} {...(props as LinkProps)}>
      {children}
    </ForwardedLinkSiteHeaderItem>
  );
}

const ForwardedEnhancedSiteHeaderItem: PolymorphicForwardRefExoticComponent<
  OwnProps,
  DefaultElementType
> = beSlot(forwardRef(EnhancedSiteHeaderItem), 'siteHeaderItem');
ForwardedEnhancedSiteHeaderItem.displayName = 'SiteHeaderItem';

export { ForwardedEnhancedSiteHeaderItem as SiteHeaderItem };
export type { Props as SiteHeaderItemProps, Ref as SiteHeaderItemRef };
