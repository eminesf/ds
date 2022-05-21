import * as React from 'react';
import cn from 'clsx';

import { Heading as BaseHeading, HeadingProps as BaseHeadingProps } from '../heading';

import styles from './info-action.module.css';

export interface HeadingProps extends BaseHeadingProps {}

export const Title: React.FC<HeadingProps> = ({ className, children, ...props }: HeadingProps) => (
  <BaseHeading className={cn(styles.title, className)} {...props}>
    {children}
  </BaseHeading>
);

Title.displayName = `InfoAction.Title`;
