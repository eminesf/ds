import type { CSSProperties, HTMLAttributes, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import { useProgressBar } from '@react-aria/progress';
import { useId } from '@react-aria/utils';
import { VisuallyHidden } from '@react-aria/visually-hidden';

import { useAppHeaderContext } from './app-header';
import styles from './app-header.module.css';

type Ref = HTMLDivElement;

type Props = {
  progress: number;
} & HTMLAttributes<Ref>;

function AppHeaderProgressBar({ progress }: Props, ref: ReactRef<Ref>) {
  const labelId = useId();

  const { titleId } = useAppHeaderContext();

  const { progressBarProps } = useProgressBar({
    value: progress,
    minValue: 0,
    maxValue: 100,
    'aria-labelledby': `${labelId} ${titleId}`,
  });

  const style = { '--app-header-progress': `${progress}%` } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={styles['app-header-progress-bar']}
      {...progressBarProps}
    >
      <VisuallyHidden id={labelId}>Barra de progresso do fluxo de</VisuallyHidden>
    </div>
  );
}

const ForwardedAppHeaderProgressBar = forwardRef(AppHeaderProgressBar);
ForwardedAppHeaderProgressBar.displayName = 'AppHeaderProgressBar';

export { ForwardedAppHeaderProgressBar as AppHeaderProgressBar };
export type { Props as AppHeaderProgressBarProps, Ref as AppHeaderProgressBarRef };
