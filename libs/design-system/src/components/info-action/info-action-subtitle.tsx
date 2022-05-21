import * as React from 'react';
import cn from 'clsx';

import { Heading as BaseTitle, HeadingProps as BaseHeadingProps } from '../heading';

import styles from './info-action.module.css';

export interface HeadingProps extends BaseHeadingProps {}

export const SubTitle: React.FC<HeadingProps> = ({
  className,
  children,
  ...props
}: HeadingProps) => (
  <BaseTitle as="h4" className={cn(styles['sub-title'], className)} {...props}>
    {children}
  </BaseTitle>
);

SubTitle.displayName = `InfoAction.SubTitle`;
