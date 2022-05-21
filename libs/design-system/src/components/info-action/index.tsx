import * as React from 'react';
import cn from 'clsx';

import { Action, ActionProps } from './info-action-action';
import { Content, ContentProps } from './info-action-content';
import { Icon, IconProps } from './info-action-icon';
import { PreTitle, TextProps } from './info-action-pretitle';
import { HeadingProps as SubTitleHeadingProps, SubTitle } from './info-action-subtitle';
import { HeadingProps, Title } from './info-action-title';

export interface InfoActionComposition {
  Icon: React.FC<IconProps>;
  Title: React.FC<HeadingProps>;
  PreTitle: React.FC<TextProps>;
  SubTitle: React.FC<SubTitleHeadingProps>;
  Action: React.FC<ActionProps>;
  Content: React.FC<ContentProps>;
}

export interface InfoActionProps {
  className?: string;
  align?: string;
  children: React.ReactNode;
}

export const InfoAction: React.FC<InfoActionProps> & InfoActionComposition = ({
  className,
  children,
  align,
  ...props
}: InfoActionProps) => {
  const infoActionClasses = cn('info-action', `text-${align}`, className);

  return (
    <div className={infoActionClasses} {...props}>
      {children}
    </div>
  );
};

InfoAction.Icon = Icon;
InfoAction.Title = Title;
InfoAction.PreTitle = PreTitle;
InfoAction.SubTitle = SubTitle;
InfoAction.Action = Action;
InfoAction.Content = Content;
InfoAction.displayName = 'InfoAction';

export { Title as InfoActionTitle };
export { PreTitle as InfoActionPreTitle };
export { Action as InfoActionAction };
export { Content as InfoActionContent };

InfoAction.defaultProps = {
  align: 'left',
};
