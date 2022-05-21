import * as React from 'react';
import cn from 'clsx';

export type ContentProps = {
  className?: string;
  children: React.ReactNode;
};

export const Content: React.FC<ContentProps> = ({
  className,
  children,
  ...props
}: ContentProps) => (
  <div className={cn('info-action-content', className)} {...props}>
    {children}
  </div>
);

Content.displayName = `InfoAction.Content`;
