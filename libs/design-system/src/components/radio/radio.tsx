import type { HTMLAttributes, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { useFocusRing } from '@react-aria/focus';
import { useRadio } from '@react-aria/radio';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import cn from 'clsx';
import { beSlot } from 'use-slots';

import { Flex } from '../flex';
import { Heading } from '../heading';
import { Icon } from '../icon';
import { Text } from '../text';

import { useRadioGroupContext } from './radio-group';
import styles from './radio.module.css';

type Ref = HTMLInputElement;

type UseRadioParameters = Parameters<typeof useRadio>;
type UseRadioProps = UseRadioParameters[0];

type Props = {
  label: string;
  value: UseRadioProps['value'];
  description?: string;
  'data-testid'?: string;
  highlightMessage?: string;
} & HTMLAttributes<Ref>;

function Radio(
  {
    id,
    label,
    value,
    className,
    description,
    'data-testid': dataTestId,
    highlightMessage,
    ...props
  }: Props,
  ref: ReactRef<Ref>,
) {
  const internalRef = useForwardedRef(ref);

  const { isFocusVisible, focusProps } = useFocusRing();

  const { required, highlighted, ...context } = useRadioGroupContext();

  const { inputProps } = useRadio(
    {
      id,
      value,
      children: label,
      isRequired: required,
      isDisabled: context.isDisabled,
      isReadOnly: context.isReadOnly,
    },
    context,
    internalRef,
  );

  const checked = context.selectedValue === value;

  const disabled = context.isReadOnly || context.isDisabled;

  return (
    <Flex
      as="label"
      direction="column"
      className={cn(className, styles.radio, {
        [styles['-checked']]: checked,
        [styles['-focused']]: isFocusVisible,
        [styles['-expanded']]: Boolean(description),
        [styles['-disabled']]: disabled,
        [styles['-highlighted']]: Boolean(highlightMessage),
      })}
      data-testid={dataTestId}
    >
      <VisuallyHidden>
        <input
          ref={internalRef}
          data-testid={dataTestId ? `${dataTestId}-input` : undefined}
          {...inputProps}
          {...focusProps}
          {...props}
        />
      </VisuallyHidden>

      {highlightMessage ? (
        <Flex
          gap={{
            base: '2xsm',
            md: 'xsm',
            lg: 'sm',
          }}
          padding={{
            base: ['2xsm', 'xsm'],
            md: ['xsm', 'sm'],
            lg: ['sm', 'md'],
          }}
          className={styles['highlight-message']}
          alignItems="center"
          data-testid={dataTestId ? `${dataTestId}-highlighted-message` : undefined}
          backgroundColor={disabled ? 'support-400' : 'primary-200'}
        >
          <Icon name="star-circle" size="lg" color="support-100" className={styles.icon} />
          <Text color="support-100" size="md" weight="bold">
            {highlightMessage}
          </Text>
        </Flex>
      ) : null}

      <Flex
        padding={{
          base: ['md', 'xsm'],
          md: 'sm',
          lg: 'md',
        }}
        className={styles.label}
        alignItems="flex-start"
        backgroundColor="support-100"
      >
        <Flex className={styles['icon-wrapper']}>
          <Icon size="lg" name="dot-circle-solid" className={cn(styles.icon, styles['-filled'])} />
          <Icon size="lg" name="dot-circle-outline" className={styles.icon} />
        </Flex>
        <Flex
          direction="column"
          className={styles.content}
          margin={{ base: ['none', '2xsm'], md: ['none', 'xsm'], lg: ['none', 'sm'] }}
        >
          {highlighted ? (
            <Heading
              title={label}
              as="p"
              size="sm"
              color={disabled ? 'support-400' : 'primary-200'}
              data-testid={dataTestId ? `${dataTestId}-highlighted-label` : undefined}
            >
              {label}
            </Heading>
          ) : (
            <Text
              size="md"
              title={label}
              color={disabled ? 'support-400' : 'support-500'}
              data-testid={dataTestId ? `${dataTestId}-label` : undefined}
            >
              {label}
            </Text>
          )}

          {description ? (
            <Text
              size="md"
              color="support-400"
              data-testid={dataTestId ? `${dataTestId}-description` : undefined}
            >
              {description}
            </Text>
          ) : null}
        </Flex>
      </Flex>
    </Flex>
  );
}

const ForwardedRadio = beSlot(forwardRef(Radio), 'radio');
ForwardedRadio.displayName = 'Radio';

export { ForwardedRadio as Radio };
export type { Props as RadioProps, Ref as RadioRef };
