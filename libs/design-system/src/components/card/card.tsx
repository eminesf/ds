import type { ElementType, ReactNode, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
} from 'react-polymorphic-types';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import type { UseButtonProps } from '@hypeflame/hooks';
import { useButton } from '@hypeflame/hooks';
import { useFocusRing } from '@react-aria/focus';
import cn from 'clsx';
import { useSlots } from 'use-slots';

import { Flex } from '../flex';
import { Text } from '../text';

import styles from './card.module.css';

type Ref = HTMLButtonElement;

const DefaultElement = 'button';

type DefaultElementType = typeof DefaultElement;

type OwnProps = {
  children: ReactNode;
  highlightedMessage?: string;
} & Omit<UseButtonProps, 'as'>;

type Props<T extends ElementType = DefaultElementType> = PolymorphicPropsWithoutRef<OwnProps, T>;

function Card<T extends ElementType = DefaultElementType>(
  {
    href,
    onPress,
    children,
    className,
    'data-testid': dataTestId,
    highlightedMessage,
    tone = 'support',
    ...props
  }: Props<T>,
  ref: ReactRef<Ref>,
) {
  const { cardImage, cardStar } = useSlots(children);

  const internalRef = useForwardedRef(ref);

  const { isFocusVisible, focusProps } = useFocusRing();

  const { as, isPressed, buttonProps } = useButton({ ...props, onPress }, internalRef);

  const toneClasses = cn({
    [styles['-support']]: tone === 'support',
    [styles['-alert']]: tone === 'alert',
    [styles['-none']]: tone === 'none',
  });

  return (
    <Flex className={styles['card-wrapper']}>
      {cardStar}
      <Flex
        as={as}
        ref={internalRef}
        className={cn(
          { [styles['-clickable']]: onPress || href, [styles['-focused']]: isFocusVisible },
          styles.card,
          toneClasses,
          className,
        )}
        width="full"
        padding={{
          base: ['md', 'sm'],
          md: ['2xlg', 'sm'],
          lg: ['3xlg', 'lg'],
        }}
        direction="column"
        data-testid={dataTestId}
        aria-pressed={isPressed}
        {...props}
        {...buttonProps}
        {...focusProps}
      >
        {cardImage || children}
        {highlightedMessage ? (
          <Flex
            as={Text}
            size="sm"
            color="support-100"
            weight="bold"
            height={{ base: 'md', md: 'md', lg: 'lg' }}
            className={styles['highlighted-message']}
            alignItems="center"
            justifyContent="center"
            backgroundColor="primary-200"
            data-testid={dataTestId ? `${dataTestId}-highlighted-message` : undefined}
          >
            {highlightedMessage}
          </Flex>
        ) : null}
      </Flex>
    </Flex>
  );
}

const ForwardedCard: PolymorphicForwardRefExoticComponent<OwnProps, DefaultElementType> =
  forwardRef(Card);

ForwardedCard.displayName = 'Card';

export { ForwardedCard as Card };
export type { Props as CardProps, Ref as CardRef };
