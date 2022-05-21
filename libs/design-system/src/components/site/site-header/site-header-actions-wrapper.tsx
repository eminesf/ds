import type { Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import { beSlot } from 'use-slots';

import { Flex, FlexProps, FlexRef } from '../../flex';

type Ref = FlexRef;

type Props = Omit<FlexProps, 'gap' | 'direction' | 'alignItems'>;

function SiteHeaderActionsWrapper({ children, ...props }: Props, ref: ReactRef<Ref>) {
  return (
    <Flex
      ref={ref}
      gap={{
        base: 'none',
        md: 'sm',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{
        base: 'flex-start',
        md: 'center',
      }}
      {...props}
    >
      {children}
    </Flex>
  );
}

const ForwardedSiteHeaderActionsWrapper = beSlot(
  forwardRef(SiteHeaderActionsWrapper),
  'siteHeaderActionsWrapper',
);
ForwardedSiteHeaderActionsWrapper.displayName = 'SiteHeaderActionsWrapper';

export { ForwardedSiteHeaderActionsWrapper as SiteHeaderActionsWrapper };
export type { Props as SiteHeaderActionsWrapperProps, Ref as SiteHeaderActionsWrapperRef };
