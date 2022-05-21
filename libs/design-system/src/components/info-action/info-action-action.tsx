import * as React from 'react';
import cn from 'clsx';

export type ActionProps = {
  className?: string;
  children: React.ReactNode;
};

export const Action: React.FC<ActionProps> = ({ className, children, ...props }: ActionProps) => (
  <div className={cn('info-action-action', 'inline-block', className)} {...props}>
    {children}
  </div>
);

Action.displayName = `InfoAction.Action`;
