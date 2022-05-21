import * as React from 'react';
import cn from 'clsx';

import { Text as BaseText, TextProps as BaseTextProps } from '../text';

export interface TextProps extends BaseTextProps {}

export const PreTitle: React.FC<TextProps> = ({ className, children, ...props }: TextProps) => (
  <BaseText className={cn('pre-title', className)} {...props}>
    {children}
  </BaseText>
);

PreTitle.displayName = `InfoAction.PreTitle`;
