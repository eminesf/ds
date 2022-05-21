import React, {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  Ref as ReactRef,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { useButton } from '@hypeflame/hooks';
import { useFocusRing } from '@react-aria/focus';
import { useId } from '@react-aria/utils';
import { useToggleState } from '@react-stately/toggle';
import cn from 'clsx';
import { m } from 'framer-motion';
import { beSlot } from 'use-slots';

import type { FlexRef } from '../flex';
import { Flex } from '../flex';
import { Icon } from '../icon';
import { Text } from '../text';

import { AccordionContext } from '.';
import styles from './accordion.module.css';

type Ref = FlexRef;

type Props = {
  manifold?: boolean;
  title: string;
  children: ReactNode;
} & Omit<HTMLAttributes<Ref>, 'title'>;

const MotionFlex = m(Flex);

function AccordionItem(
  { title, children, className, manifold, ...props }: Props,
  ref: ReactRef<Ref>,
) {
  const { currentOpened, setCurrentOpened } = useContext(AccordionContext);

  const regionId = useId();

  const buttonId = useId();

  const buttonRef = useRef<HTMLButtonElement>(null);

  const state = useToggleState({});

  const { isFocusVisible, focusProps } = useFocusRing();

  const { buttonProps } = useButton(
    {
      id: buttonId,
      onPress() {
        state.toggle();
        setCurrentOpened(regionId);
      },
      'aria-controls': regionId,
      'aria-expanded': state.isSelected,
    },
    buttonRef,
  );

  const stateClasses = {
    [styles['-focused']]: isFocusVisible,
    [styles['-activated']]: state.isSelected,
  };

  useEffect(() => {
    if (currentOpened !== regionId && !manifold) {
      state.setSelected(false);
    }
  }, [currentOpened]);

  return (
    <Flex
      ref={ref}
      width="full"
      direction="column"
      className={cn(className, stateClasses, styles['accordion-item'])}
      {...props}
    >
      <Flex as="h3" direction="column">
        <Flex
          as="button"
          gap={{ base: 'xsm', md: 'sm', lg: 'md' }}
          ref={buttonRef}
          padding={{
            base: ['sm', 'none', 'sm', 'none'],
            md: ['sm', 'none', 'sm', 'none'],
            lg: ['sm', 'none', 'sm', 'none'],
          }}
          className={styles.button}
          alignItems="center"
          justifyContent="space-between"
          {...buttonProps}
          {...focusProps}
        >
          <Text as="span" style={{ fontSize: '16px' }} color="support-500">
            {title}
          </Text>
          <Icon
            size={{ base: 'md', md: '2xlg' }}
            color="primary-300"
            name="angle-down"
            className={styles.icon}
          />
        </Flex>
      </Flex>

      <MotionFlex
        id={regionId}
        role="region"
        initial="hidden"
        animate={state.isSelected ? 'show' : 'hidden'}
        variants={{
          show: { opacity: 1, visibility: 'visible', height: 'auto' },
          hidden: { opacity: 0, visibility: 'hidden', height: 0 },
        }}
        direction="column"
        style={{ fontSize: '16px' }}
        aria-hidden={!state.isSelected}
        aria-labelledby={buttonId}
      >
        <Flex
          padding={{
            base: ['none', 'none', 'sm'],
            md: ['none', 'none', 'sm'],
            lg: ['none', 'none', 'sm'],
          }}
        >
          {children}
        </Flex>
      </MotionFlex>

      <Flex className={styles['accordion-separator']} />
    </Flex>
  );
}

const ForwardedAccordionItem = beSlot(forwardRef(AccordionItem), 'accordionItem');
ForwardedAccordionItem.displayName = 'AccordionItem';

export { ForwardedAccordionItem as AccordionItem };
export type { Props as AccordionItemProps, Ref as AccordionItemRef };
