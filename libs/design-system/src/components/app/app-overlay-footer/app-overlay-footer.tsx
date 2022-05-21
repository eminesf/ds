import type { HTMLAttributes, Ref as ReactRef } from 'react';
import React, { forwardRef, useEffect } from 'react';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import cn from 'clsx';

import type { FlexRef } from '../../flex';
import { Flex } from '../../flex';
import { useProviderContext } from '../../provider';

import styles from './app-overlay-footer.module.css';

type Ref = FlexRef;

type Props = HTMLAttributes<Ref>;

function AppOverlayFooter({ className, ...props }: Props, ref: ReactRef<Ref>) {
  const { setFooterHeight, removeFooter } = useProviderContext();
  const internalRef = useForwardedRef(ref);

  useEffect(() => {
    if (internalRef.current) {
      setFooterHeight(internalRef.current.clientHeight);
    }

    return () => removeFooter();
  }, [internalRef.current, setFooterHeight, removeFooter]);

  return (
    <Flex
      as="footer"
      ref={internalRef}
      padding={['xsm', 'sm', 'sm', 'sm']}
      className={cn(className, styles['app-overlay-footer'])}
      alignItems="center"
      justifyContent="center"
      {...props}
    />
  );
}

const ForwardedAppOverlayFooter = forwardRef(AppOverlayFooter);
ForwardedAppOverlayFooter.displayName = 'AppOverlayFooter';

export { ForwardedAppOverlayFooter as AppOverlayFooter };
export type { Props as AppOverlayFooterProps, Ref as AppOverlayFooterRef };
