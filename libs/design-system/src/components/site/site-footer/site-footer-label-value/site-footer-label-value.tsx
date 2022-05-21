import type { Ref as ReactRef } from 'react';
import React, { createContext, forwardRef, useContext } from 'react';
import { useId } from '@react-aria/utils';
import invariant from 'tiny-invariant';
import { beSlot, useSlots } from 'use-slots';

import { Flex, FlexProps, FlexRef } from '../../../flex';

type Ref = FlexRef;

type Props = FlexProps;

type ContextType = {
  id?: string;
};

const Context = createContext<ContextType | null>(null);

function SiteFooterLabelValue({ children, ...props }: Props, ref: ReactRef<Ref>) {
  const id = useId();

  const { siteFooterLabelValueLabel, siteFooterLabelValueValue, siteFooterLabelValueHelper } =
    useSlots(children);

  return (
    <Context.Provider value={{ id }}>
      <Flex ref={ref} alignItems="flex-start" direction="column" gap="3xsm" {...props}>
        {siteFooterLabelValueLabel}
        {siteFooterLabelValueValue}
        {siteFooterLabelValueHelper}
      </Flex>
    </Context.Provider>
  );
}

function useSiteFooterLabelValueContext() {
  const context = useContext(Context);

  invariant(
    context !== null,
    'useSiteFooterLabelValueContext deve ser usado em um SiteFooterLabelValue',
  );

  return context;
}

const ForwardedSiteFooterLabelValue = beSlot(
  forwardRef(SiteFooterLabelValue),
  'siteFooterLabelValue',
);
ForwardedSiteFooterLabelValue.displayName = 'SiteFooterLabelValue';

export { ForwardedSiteFooterLabelValue as SiteFooterLabelValue, useSiteFooterLabelValueContext };
export type { Props as SiteFooterLabelValueProps, Ref as SiteFooterLabelValueRef };
