import type { HTMLAttributes, Ref as ReactRef } from 'react';
import React, { forwardRef, useCallback, useState } from 'react';
import { AnimationDurationQuickly } from '@agi/design-tokens';
import cn from 'clsx';
import { AnimatePresence, m } from 'framer-motion';
import { useSlots } from 'use-slots';

import { getScrollbarWidth } from '../../utils';
import type { FlexRef } from '../flex';
import { Flex } from '../flex';
import type { IconProps } from '../icon';
import { Icon } from '../icon';
import { IconButton } from '../icon-button';
import { useProviderContext } from '../provider';

import styles from './hint.module.css';

type Ref = FlexRef;

type Variant = 'success' | 'neutral' | 'alert' | 'critical';

type OwnProps = {
  variant?: Variant;
  onClose?: () => void;
  closable: boolean;
  illustrated: boolean;
  'data-testid'?: string;
  floatable?: boolean;
} & HTMLAttributes<FlexRef>;

type Props = AriaLabelProps<OwnProps>;

const MotionFlex = m(Flex);

const ICON_NAME: Record<Variant, IconProps['name']> = {
  alert: 'exclamation-triangle-solid',
  success: 'check-circle-fill',
  neutral: 'info-circle-solid',
  critical: 'exclamation-triangle-solid',
};

const ICON_COLOR: Record<Variant, IconProps['color']> = {
  alert: 'alert-200',
  success: 'success-200',
  neutral: 'primary-300',
  critical: 'critical-200',
};

function Hint(
  {
    variant = 'neutral',
    onClose,
    children,
    closable,
    className,
    illustrated,
    'data-testid': dataTestId,
    floatable,
    style,
    ...props
  }: Props,
  ref: ReactRef<Ref>,
) {
  const [show, setShow] = useState(true);

  const { hintText, hintAction } = useSlots(children);

  const { headered } = useProviderContext();

  const styleClasses = {
    [styles['-neutral']]: variant === 'neutral',
    [styles['-critical']]: variant === 'critical',
    [styles['-success']]: variant === 'success',
    [styles['-alert']]: variant === 'alert',
  };

  const variantClasses = {
    [styles['-floatable']]: floatable,
    [styles['-floatable-headered']]: floatable && headered,
  };

  const internalStyle = {
    ...style,
    '--scrollbar-width': `${getScrollbarWidth()}px`,
  };

  const handleClose = useCallback(() => {
    setShow(false);

    /* istanbul ignore else  */
    if (onClose) onClose();
  }, []);

  return (
    <AnimatePresence initial>
      {show ? (
        <MotionFlex
          ref={ref}
          gap="xsm"
          exit={{ opacity: 0 }}
          role="alert"
          width={floatable ? undefined : 'full'}
          style={internalStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          padding={['xsm', 'sm']}
          direction="column"
          className={cn(className, styles.hint, styleClasses, variantClasses)}
          transition={{ duration: AnimationDurationQuickly }}
          alignItems="flex-end"
          {...props}
        >
          <Flex alignItems="flex-start" gap="2xsm" width="full" justifyContent="space-between">
            <Flex alignItems="flex-start" gap="2xsm" width="full">
              {illustrated ? (
                <Icon
                  size={{ base: 'sm', md: 'md', lg: 'lg' }}
                  color={ICON_COLOR[variant]}
                  name={ICON_NAME[variant]}
                  data-testid={dataTestId ? `${dataTestId}-icon` : undefined}
                />
              ) : null}
              {hintText}
            </Flex>
            {closable ? (
              <IconButton
                size={{ base: 'sm', md: 'md', lg: 'lg' }}
                aria-label="Fechar alerta"
                color="support-500"
                icon="times"
                className={styles['hint-close']}
                onPress={handleClose}
              />
            ) : null}
          </Flex>
          {hintAction}
        </MotionFlex>
      ) : null}
    </AnimatePresence>
  );
}

const ForwardedHint = forwardRef(Hint);
ForwardedHint.displayName = 'Hint';

export { ForwardedHint as Hint };
export type { Props as HintProps, Ref as HintRef };
