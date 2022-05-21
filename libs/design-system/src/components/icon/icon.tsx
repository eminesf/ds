import type { CSSProperties, HTMLAttributes, Ref as ReactRef } from 'react';
import React, { forwardRef, useEffect } from 'react';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import cn from 'clsx';

import type { Color } from '../../utils';
import { getColorCssVar } from '../../utils';
import { useResponsiveProp } from '../breakpoint';
import type { FlexRef } from '../flex';
import { Flex } from '../flex';

import type { IconName } from './constants';
import styles from './icon.module.css';

type Ref = FlexRef;

type Size = 'sm' | 'md' | 'lg' | 'xlg' | '2xlg' | '3xlg' | '4xlg';

type Props = {
  name: IconName;
  size?: ResponsiveProp<Size>;
  color?: Color;
} & Omit<HTMLAttributes<Ref>, 'color'>;

function Icon(
  { name, size = 'sm', color = 'inherit', className, ...props }: Props,
  ref: ReactRef<Ref>,
) {
  const internalRef = useForwardedRef(ref);

  const style = {
    '--icon-color': getColorCssVar(color),
  } as CSSProperties;

  const responsiveSize = useResponsiveProp(size);

  const sizeClasses = {
    [styles['-sm']]: responsiveSize === 'sm',
    [styles['-md']]: responsiveSize === 'md',
    [styles['-lg']]: responsiveSize === 'lg',
    [styles['-xlg']]: responsiveSize === 'xlg',
    [styles['-2xlg']]: responsiveSize === '2xlg',
    [styles['-3xlg']]: responsiveSize === '3xlg',
    [styles['-4xlg']]: responsiveSize === '4xlg',
  };

  const iconClass = `fak fa-${name}`;

  useEffect(() => {
    /* istanbul ignore else  */
    if (!document.querySelector('#injected-font')) {
      const script = document.createElement('script');
      script.id = 'injected-font';
      script.src = 'https://kit.fontawesome.com/c2b0f755b6.js';
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    internalRef.current.innerHTML = `<i class="${cn(styles.icon, iconClass)}" />`;
  }, [name]);

  return (
    <Flex
      as="i"
      ref={internalRef}
      style={style}
      alignItems="center"
      justifyContent="center"
      className={cn(className, styles.wrapper, sizeClasses)}
      {...props}
    />
  );
}

const ForwardedIcon = forwardRef(Icon);
ForwardedIcon.displayName = 'Icon';

export { ForwardedIcon as Icon };
export type { Props as IconProps, Ref as IconRef };
