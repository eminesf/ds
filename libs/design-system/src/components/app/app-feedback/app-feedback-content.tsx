import type { HTMLAttributes, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import { beSlot } from 'use-slots';

import type { FlexRef } from '../../flex';
import { Flex } from '../../flex';

type Ref = FlexRef;

type Props = HTMLAttributes<Ref>;

function AppFeedbackContent(props: Props, ref: ReactRef<Ref>) {
  return <Flex {...props} ref={ref} grow />;
}

const ForwardedAppFeedbackContent = beSlot(forwardRef(AppFeedbackContent), 'appFeedbackContent');
ForwardedAppFeedbackContent.displayName = 'AppFeedbackContent';

export { ForwardedAppFeedbackContent as AppFeedbackContent };
export type { Props as AppFeedbackContentProps, Ref as AppFeedbackContentRef };
