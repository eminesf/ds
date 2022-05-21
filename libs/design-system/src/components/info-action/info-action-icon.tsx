import * as React from 'react';
import cn from 'clsx';

import { Icon as BaseIcon, IconProps as BaseIconProps } from '../icon';

import styles from './info-action.module.css';

export type IconProps = BaseIconProps;

export const Icon: React.FC<IconProps> = ({ className, name, ...props }: IconProps) => (
  <BaseIcon name={name} className={cn(styles.icon, className)} {...props} />
);

Icon.displayName = `InfoAction.Icon`;
