import type { Ref as ReactRef, RefObject } from 'react';
import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import cn from 'clsx';

import type { ButtonProps, ButtonRef } from '../../button';
import { Button } from '../../button';

import styles from './app-button.module.css';

type Ref = ButtonRef;

type Props = { floatingTrigger?: RefObject<HTMLElement> } & ButtonProps;

/**
 * @todo refazer lógica para não emitir 2 blurs do element trigger
 */
function AppButton({ className, floatingTrigger, ...props }: Props, ref: ReactRef<Ref>) {
  const [floated, setFloated] = useState(false);

  const handleFocus = useCallback(() => {
    if (!floatingTrigger) return;

    setFloated(true);

    // eslint-disable-next-line no-param-reassign
    floatingTrigger.current!.dataset.prevent = 'true';
  }, [floatingTrigger]);

  const handleBlur = useCallback(() => {
    if (!floatingTrigger || floatingTrigger.current!.dataset.prevent === 'false') return;

    floatingTrigger.current!.focus();
  }, [floatingTrigger]);

  const handlePress = useCallback(
    (event: Event) => {
      if (!floatingTrigger || event.target === floatingTrigger.current) return;

      setFloated(false);

      // eslint-disable-next-line no-param-reassign
      floatingTrigger.current!.dataset.prevent = 'false';
      floatingTrigger.current!.blur();
    },
    [floatingTrigger],
  );

  useEffect(() => {
    if (floatingTrigger) {
      floatingTrigger.current!.addEventListener('focus', handleFocus);
      floatingTrigger.current!.addEventListener('blur', handleBlur);
      document.addEventListener('click', handlePress, true);
      document.addEventListener('press', handlePress, true);
    }

    return () => {
      if (floatingTrigger) {
        floatingTrigger.current!.removeEventListener('focus', handleFocus);
        floatingTrigger.current!.removeEventListener('blur', handleBlur);
        document.removeEventListener('click', handlePress, true);
        document.removeEventListener('press', handlePress, true);
      }
    };
  }, [handleFocus, handlePress, handleBlur, floatingTrigger]);

  return (
    <Button
      ref={ref}
      className={cn(className, styles['app-button'], { [styles['-floated']]: floated })}
      {...props}
    />
  );
}

const ForwardedAppButton = forwardRef(AppButton);
ForwardedAppButton.displayName = 'AppButton';

export { ForwardedAppButton as AppButton };
export type { Props as AppButtonProps, Ref as AppButtonRef };
