import type { HTMLAttributes, ReactElement, Ref as ReactRef } from 'react';
import React, { cloneElement, createContext, forwardRef, useContext } from 'react';
import { AnimationDurationQuickly, AnimationDurationSlowly } from '@agi/design-tokens';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import { OverlayContainer, useModal, useOverlay, usePreventScroll } from '@react-aria/overlays';
import { useId } from '@react-aria/utils';
import cn from 'clsx';
import { AnimatePresence, m } from 'framer-motion';
import { useSlots } from 'use-slots';

import type { FlexRef } from '../flex';
import { Flex } from '../flex';

import { ModalCloseAction } from './modal-close-action';
import styles from './modal.module.css';

type Ref = FlexRef;

type Variant = 'neutral' | 'alert' | 'critical';

type Props = {
  show: boolean;
  variant?: Variant;
  onClose?: () => void;
  'data-testid'?: string;
} & HTMLAttributes<HTMLElement>;

type ContextType = {
  variant: Variant;
};

const Context = createContext<ContextType | null>(null);

const MotionFlex = m(Flex);

function Modal(
  {
    show,
    onClose,
    variant = 'neutral',
    children,
    className,
    'data-testid': dataTestId,
    ...props
  }: Props,
  ref: ReactRef<Ref>,
) {
  const { modalIcon, modalText, modalTitle, modalAction } = useSlots(children);

  const internalRef = useForwardedRef(ref);

  const { modalProps } = useModal();

  const { underlayProps, overlayProps } = useOverlay(
    { isOpen: show, onClose, isDismissable: true },
    internalRef,
  );

  const titleId = useId();

  const { dialogProps, titleProps } = useDialog({ 'aria-labelledby': titleId }, internalRef);

  usePreventScroll({ isDisabled: !show });

  return (
    <AnimatePresence initial>
      {show ? (
        <OverlayContainer>
          <MotionFlex
            key="modal"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            padding={{
              md: ['5xlg', '6xlg'],
              lg: ['6xlg', '7xlg'],
            }}
            className={cn(className, styles.overlay)}
            transition={{ duration: AnimationDurationQuickly }}
            {...underlayProps}
          >
            <FocusScope contain restoreFocus autoFocus>
              <MotionFlex
                ref={internalRef}
                direction="column"
                className={cn(styles.modal)}
                data-testid={dataTestId}
                backgroundColor="support-100"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { y: 0, opacity: 1, transition: { duration: AnimationDurationSlowly } },
                  closed: {
                    y: '100%',
                    opacity: 0,
                    transition: { duration: AnimationDurationSlowly },
                  },
                }}
                {...props}
                {...overlayProps}
                {...dialogProps}
                {...modalProps}
              >
                <Flex
                  direction="column"
                  padding={{
                    base: ['none', 'sm', 'md', 'sm'],
                    md: ['lg', 'md'],
                    lg: ['xlg', 'lg'],
                  }}
                  gap={{ base: 'md', md: 'sm' }}
                >
                  <Context.Provider value={{ variant }}>
                    <ModalCloseAction
                      onPress={onClose}
                      data-testid={dataTestId ? `${dataTestId}-close` : undefined}
                    />
                    <Flex
                      direction="column"
                      alignItems="center"
                      gap={{ base: 'md', md: 'lg', lg: 'xlg' }}
                    >
                      <Flex
                        direction="column"
                        alignItems="center"
                        gap={{ base: 'sm', md: 'md', lg: 'lg' }}
                      >
                        <Flex
                          direction="column"
                          alignItems="center"
                          gap={{ base: '2xsm', md: 'xsm', lg: 'sm' }}
                        >
                          {modalIcon}
                          {modalTitle
                            ? cloneElement(modalTitle[0] as ReactElement, {
                                ...titleProps,
                                id: titleId,
                              })
                            : null}
                        </Flex>
                        {modalText}
                      </Flex>
                      <Flex
                        as="footer"
                        width="full"
                        direction="column"
                        alignItems="center"
                        gap={{ base: 'md', md: 'lg', lg: 'xlg' }}
                      >
                        {modalAction}
                      </Flex>
                    </Flex>
                  </Context.Provider>
                </Flex>
              </MotionFlex>
            </FocusScope>
          </MotionFlex>
        </OverlayContainer>
      ) : null}
    </AnimatePresence>
  );
}

function useModalContext() {
  return useContext(Context) as ContextType;
}

const ForwardedModal = forwardRef(Modal);
ForwardedModal.displayName = 'Modal';

export { ForwardedModal as Modal, useModalContext };
export type { ContextType as ModalContextType, Props as ModalProps, Ref as ModalRef };
