import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import type { UseButtonProps } from '@hypeflame/hooks';

import { useBreakpointContext } from '../breakpoint';
import { Button } from '../button';
import { Flex } from '../flex';
import { Icon } from '../icon';
import { IconButton } from '../icon-button';

import styles from './modal.module.css';

type Ref = HTMLButtonElement;

type Props = Omit<UseButtonProps, 'as'>;

function ModalCloseAction({ onPress, ...props }: Props, ref: ReactRef<Ref>) {
  const { current: breakpoint } = useBreakpointContext();

  return (
    <Flex
      alignItems={{
        base: 'center',
        md: 'flex-end',
        lg: 'flex-end',
      }}
      direction="column"
      className={styles['modal-close-action']}
    >
      {breakpoint === 'base' ? (
        <Button {...props} ref={ref} size="sm" onPress={onPress} className={styles.button}>
          Fechar
          <Icon size="lg" name="angle-down" color="primary-200" className={styles.icon} />
        </Button>
      ) : (
        <IconButton
          {...props}
          ref={ref}
          icon="times"
          size="2xlg"
          color="primary-200"
          onPress={onPress}
          aria-label="Fechar modal"
        />
      )}
    </Flex>
  );
}

const ForwardedModalCloseAction = forwardRef(ModalCloseAction);
ForwardedModalCloseAction.displayName = 'ModalCloseAction';

export { ForwardedModalCloseAction as ModalCloseAction };
export type { Props as ModalCloseActionProps, Ref as ModalCloseActionRef };
