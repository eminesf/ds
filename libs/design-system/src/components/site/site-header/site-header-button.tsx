import React, { forwardRef } from 'react';
import {
  AnimationDurationQuickly,
  AnimationDurationSlowly,
  Opacity0,
  Opacity100,
} from '@agi/design-tokens';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { useButton, UseButtonProps } from '@hypeflame/hooks';
import { useFocusRing } from '@react-aria/focus';
import cn from 'clsx';
import { m } from 'framer-motion';

import styles from './site-header.module.css';

export type Ref = HTMLButtonElement;

export type Props = Omit<UseButtonProps, 'as' | 'title' | 'type'>;

function SiteHeaderButton(
  { onPress, className, 'aria-expanded': ariaExpanded, ...props }: Props,
  ref: React.Ref<Ref>,
) {
  const internalRef = useForwardedRef(ref);

  const { isFocusVisible, focusProps } = useFocusRing();

  const { buttonProps } = useButton({ onPress, ...props }, internalRef);

  return (
    <button
      ref={internalRef}
      type="button"
      title={ariaExpanded ? 'Fechar menu' : 'Abrir menu'}
      className={cn(className, styles['site-header-button'], {
        [styles['-focused']]: isFocusVisible,
      })}
      aria-haspopup
      aria-expanded={ariaExpanded}
      {...buttonProps}
      {...focusProps}
    >
      <m.svg
        transition={{ duration: AnimationDurationSlowly }}
        animate={{
          originX: '50%',
          originY: '50%',
          rotateZ: ariaExpanded ? 225 : 0,
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="40px"
        height="40px"
        fill="#fff"
        viewBox="0 0 24 24"
        role="presentation"
        aria-label=""
      >
        <m.path
          transition={{ duration: 0.2 }}
          animate={{
            y: ariaExpanded ? '6px' : 0,
          }}
          d="M20.5719 4H3.42848C2.63881 4 2 4.56547 2 5.26279C2 5.96012 2.63881 6.52559 3.42848 6.52559H20.5715C21.3612 6.52559 22 5.96012 22 5.26279C22.0004 4.56509 21.3616 4 20.5719 4Z"
        />

        <m.path
          transition={{ duration: AnimationDurationQuickly }}
          animate={{
            opacity: ariaExpanded ? Opacity0 : Opacity100,
          }}
          d="M20.5719 10.3145H3.42848C2.63881 10.3145 2 10.8799 2 11.5772C2 12.2746 2.63881 12.84 3.42848 12.84H20.5715C21.3612 12.84 22 12.2746 22 11.5772C22 10.8799 21.3616 10.3145 20.5719 10.3145Z"
        />

        <m.path
          transition={{ duration: AnimationDurationQuickly }}
          animate={{
            rotateZ: ariaExpanded ? 90 : 0,
            y: ariaExpanded ? '-6.625px' : 0,
          }}
          d="M20.5719 16.6289H3.42848C2.63881 16.6289 2 17.1944 2 17.8917C2 18.589 2.63881 19.1545 3.42848 19.1545H20.5715C21.3612 19.1545 22 18.589 22 17.8917C22 17.1944 21.3616 16.6289 20.5719 16.6289Z"
        />
      </m.svg>
    </button>
  );
}

const ForwardedSiteHeaderButton = forwardRef(SiteHeaderButton);
ForwardedSiteHeaderButton.displayName = 'SiteHeaderButton';

export {
  ForwardedSiteHeaderButton as SiteHeaderButton,
  Props as SiteHeaderButtonProps,
  Ref as SiteHeaderButtonRef,
};
