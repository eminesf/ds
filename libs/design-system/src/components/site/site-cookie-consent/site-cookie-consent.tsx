import type { HTMLAttributes, Ref as ReactRef } from 'react';
import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import { AnimationDurationQuickly, AnimationDurationSlowly } from '@agi/design-tokens';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import { OverlayContainer, useModal, useOverlay, usePreventScroll } from '@react-aria/overlays';
import cn from 'clsx';
import { AnimatePresence, m } from 'framer-motion';
import cookie from 'js-cookie';

import { Button } from '../../button';
import type { FlexRef } from '../../flex';
import { Flex } from '../../flex';
import { Text } from '../../text';

import styles from './site-cookie-consent.module.css';

type Ref = FlexRef;

export enum Languages {
  EN = 'en',
  PT = 'pt',
}

const content = {
  highlighted: {
    [Languages.EN]: 'This site saves your user history. ',
    [Languages.PT]: 'Esse site salva seu histórico de uso. ',
  },
  regular: {
    [Languages.EN]: 'By continue browsing you agree with our ',
    [Languages.PT]: 'Ao continuar navegando você concorda com a ',
  },
  policyDocumentHypertext: {
    [Languages.EN]: 'cookies policy',
    [Languages.PT]: 'política de cookies',
  },
  policyDocumentUrl: {
    [Languages.EN]: 'https://s3.amazonaws.com/prd-beanstalk/site/upload/Politica_Cookies_v2.pdf',
    [Languages.PT]: 'https://s3.amazonaws.com/prd-beanstalk/site/upload/Politica_Cookies_v2.pdf',
  },
  agreement: {
    [Languages.EN]: 'I Agree',
    [Languages.PT]: 'Entendido',
  },
};

type Props = { lang?: Languages; onGrant?: () => void } & HTMLAttributes<Ref>;

const KEY = 'cookieConsent';

const MotionFlex = m(Flex);

const MODAL_MOTION_PROPS = {
  initial: 'closed',
  animate: 'open',
  exit: 'closed',
  variants: {
    open: { bottom: 0, transition: { duration: AnimationDurationSlowly } },
    closed: {
      bottom: '-100%',
      transition: { duration: AnimationDurationSlowly },
    },
  },
};

function SiteCookieConsent(
  { onGrant, lang = Languages.PT, className, ...props }: Props,
  ref: ReactRef<Ref>,
) {
  const internalRef = useForwardedRef(ref);

  const [granted, setGranted] = useState(cookie.get(KEY) === 'true');

  const { modalProps } = useModal();

  const { underlayProps, overlayProps } = useOverlay({ isOpen: !granted }, internalRef);

  const { dialogProps, titleProps } = useDialog({}, internalRef);

  const { highlighted, regular, policyDocumentHypertext, agreement } = content;

  usePreventScroll({ isDisabled: granted });

  const handlePress = useCallback(() => {
    setGranted(true);
  }, [onGrant]);

  useEffect(() => {
    /* istanbul ignore else  */
    if (granted) {
      cookie.set(KEY, 'true');

      /* istanbul ignore else  */
      if (onGrant) onGrant();
    }
  }, [granted]);

  return (
    <AnimatePresence initial>
      {!granted ? (
        <OverlayContainer>
          <MotionFlex
            key="modal"
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={cn(className, styles['site-cookie-consent'])}
            transition={{ duration: AnimationDurationQuickly }}
            {...underlayProps}
          >
            <FocusScope contain restoreFocus autoFocus>
              <MotionFlex
                ref={internalRef}
                gap="md"
                wrap="wrap"
                padding={['lg', 'md', 'md']}
                className={styles.modal}
                alignItems="center"
                justifyContent={{ base: 'space-around', md: 'space-between' }}
                backgroundColor="support-100"
                {...MODAL_MOTION_PROPS}
                {...props}
                {...overlayProps}
                {...dialogProps}
                {...modalProps}
              >
                <Text {...(titleProps as Omit<typeof titleProps, 'color'>)}>
                  <strong>{highlighted[lang]}</strong>
                  {regular[lang]}
                  <a rel="noreferrer" href={content.policyDocumentUrl[lang]} target="_blank">
                    {policyDocumentHypertext[lang]}
                  </a>
                  .
                </Text>
                <Button onPress={handlePress}>{agreement[lang]}</Button>
              </MotionFlex>
            </FocusScope>
          </MotionFlex>
        </OverlayContainer>
      ) : null}
    </AnimatePresence>
  );
}

const ForwardedSiteCookieConsent = forwardRef(SiteCookieConsent);
ForwardedSiteCookieConsent.displayName = 'SiteCookieConsent';

function reset() {
  cookie.remove(KEY);
}

export {
  reset as resetSiteCookieConsent,
  ForwardedSiteCookieConsent as SiteCookieConsent,
  Languages as SiteCookieConsentLanguages,
};
export type { Props as SiteCookieConsentProps, Ref as SiteCookieConsentRef };
