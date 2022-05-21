import type { HTMLAttributes, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import cn from 'clsx';

import styles from './separator.module.css';

type Ref = HTMLHRElement;

type Props = { orientation?: 'vertical' | 'horizontal' } & HTMLAttributes<Ref>;

function Separator({ orientation = 'horizontal', className, ...props }: Props, ref: ReactRef<Ref>) {
  return (
    <hr
      ref={ref}
      className={cn(className, styles.separator)}
      aria-orientation={orientation !== 'horizontal' ? orientation : undefined}
      {...props}
    />
  );
}

const ForwardedSeparator = forwardRef(Separator);
ForwardedSeparator.displayName = 'Separator';

export { ForwardedSeparator as Separator };
export type { Props as SeparatorProps, Ref as SeparatorRef };
