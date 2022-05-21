import React, {
  createContext,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  Ref as ReactRef,
  useState,
} from 'react';
import { useSlots } from 'use-slots';

import type { FlexRef } from '../flex';
import { Flex } from '../flex';

type Ref = FlexRef;

type OwnProps = {
  children: ReactNode;
} & HTMLAttributes<Ref>;

type Props = AriaLabelProps<OwnProps>;

type AccordionContextType = {
  currentOpened?: string;
  setCurrentOpened: (id: string) => void;
};

export const AccordionContext = createContext<AccordionContextType>({
  currentOpened: undefined,
  setCurrentOpened: () => {},
});

function Accordion({ children, ...props }: Props, ref: ReactRef<Ref>) {
  const [currentOpened, setCurrentOpened] = useState<string>();

  const { accordionItem } = useSlots(children);

  return (
    <AccordionContext.Provider value={{ currentOpened, setCurrentOpened }}>
      <Flex
        as="section"
        ref={ref}
        gap={{ base: 'sm', md: 'md', lg: 'lg' }}
        direction="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        {...props}
      >
        {accordionItem}
      </Flex>
    </AccordionContext.Provider>
  );
}

const ForwardedAccordion = forwardRef(Accordion);
ForwardedAccordion.displayName = 'Accordion';

export { ForwardedAccordion as Accordion };
export type { Props as AccordionProps, Ref as AccordionRef };
