import type { InputHTMLAttributes, Ref as ReactRef } from 'react';
import React, { forwardRef } from 'react';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { useCheckbox, useCheckboxGroupItem } from '@react-aria/checkbox';
import { useFocusRing } from '@react-aria/focus';
import { useId } from '@react-aria/utils';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useToggleState } from '@react-stately/toggle';
import cn from 'clsx';
import { beSlot } from 'use-slots';

import { FieldFeedback } from '../field-feedback';
import { Flex } from '../flex';
import { Heading } from '../heading';
import { Icon } from '../icon';
import { Text } from '../text';

import { useCheckboxGroupContext } from './checkbox-group';
import styles from './checkbox.module.css';

type Ref = HTMLInputElement;

type UseCheckboxParameters = Parameters<typeof useCheckbox>;
type UseCheckboxProps = UseCheckboxParameters[0];

type UseCheckboxGroupItemParameters = Parameters<typeof useCheckboxGroupItem>;
type UseCheckboxGroupItemProps = UseCheckboxGroupItemParameters[0];

type OwnProps = {
  label: string;
  labelId?: string;
  invalid?: boolean;
  description?: string;
  highlighted?: boolean;
  'data-testid'?: string;
} & InputHTMLAttributes<Ref>;

type OmittedOwnProps = 'labelId' | 'invalid' | 'onChange';

type AloneProps = Omit<OwnProps, OmittedOwnProps> & {
  value?: UseCheckboxProps['value'];
  onChange?: UseCheckboxProps['onChange'];
  errorMessage?: string;
  helperMessage?: string;
};

type GroupedProps = Omit<OwnProps, OmittedOwnProps | 'checked' | 'highlighted'> & {
  value: UseCheckboxGroupItemProps['value'];
  onChange?: UseCheckboxGroupItemProps['onChange'];
};

type Props = AloneProps | GroupedProps;

function Checkbox(
  {
    label,
    labelId,
    checked,
    invalid,
    disabled,
    readOnly,
    className,
    description,
    highlighted,
    'data-testid': dataTestId,
    ...props
  }: OwnProps,
  ref: ReactRef<Ref>,
) {
  const internalReadOnly = readOnly || Boolean(props['aria-readonly']);

  const internalDisabled = disabled || internalReadOnly;

  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <Flex
      as="label"
      id={labelId}
      direction="column"
      className={cn(className, styles.checkbox, {
        [styles['-checked']]: checked,
        [styles['-focused']]: isFocusVisible,
        [styles['-invalid']]: invalid,
        [styles['-disabled']]: internalDisabled,
        [styles['-highlighted']]: highlighted,
      })}
      data-testid={dataTestId}
    >
      <VisuallyHidden>
        <input
          ref={ref}
          checked={checked}
          disabled={disabled}
          readOnly={internalReadOnly}
          data-testid={dataTestId ? `${dataTestId}-input` : undefined}
          {...props}
          {...focusProps}
        />
      </VisuallyHidden>

      <Flex
        gap={{ base: '2xsm', md: 'xsm', lg: 'sm' }}
        className={styles.label}
        alignItems="flex-start"
      >
        <Flex className={styles['icon-wrapper']}>
          <Icon size="lg" name="check-box-fill" className={cn(styles.icon, styles['-filled'])} />
          <Icon size="lg" name="check-box-outline" className={styles.icon} />
        </Flex>

        <Flex
          gap={{
            base: '3xsm',
            md: '2xsm',
            lg: 'xsm',
          }}
          direction="column"
          className={styles.content}
        >
          <Flex direction="column">
            {highlighted ? (
              <Heading
                as="p"
                size="sm"
                color={internalDisabled ? 'support-400' : 'primary-300'}
                title={label}
                data-testid={dataTestId ? `${dataTestId}-highlighted-label` : undefined}
              >
                {label}
              </Heading>
            ) : (
              <Text
                size="md"
                title={label}
                color={internalDisabled ? 'support-400' : 'support-500'}
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
    </Flex>
  );
}

const ForwardedCheckbox = forwardRef(Checkbox);

function AloneCheckbox(
  {
    id,
    name,
    value,
    label,
    checked,
    onChange,
    disabled,
    readOnly,
    required,
    errorMessage,
    helperMessage,
    'data-testid': dataTestId,
    ...props
  }: AloneProps,
  ref: ReactRef<Ref>,
) {
  const labelId = useId();
  const feedbackId = useId();

  const internalRef = useForwardedRef(ref);

  const state = useToggleState({
    name,
    value,
    onChange,
    children: label,
    isDisabled: disabled,
    isReadOnly: readOnly,
    isSelected: checked,
    isRequired: required,
    validationState: errorMessage ? 'invalid' : 'valid',
  });

  const { inputProps } = useCheckbox(
    {
      id,
      name,
      value,
      onChange,
      children: label,
      isDisabled: disabled,
      isReadOnly: readOnly,
      isRequired: required,
      isSelected: checked,
      validationState: errorMessage ? 'invalid' : 'valid',
      'aria-describedby': helperMessage ? feedbackId : undefined,
      'aria-errormessage': errorMessage ? feedbackId : undefined,
    },
    state,
    internalRef,
  );

  return (
    <Flex
      gap={{
        base: '3xsm',
        md: '2xsm',
        lg: 'xsm',
      }}
      direction="column"
      className={cn(styles.wrapper, {
        [styles['-invalid']]: Boolean(errorMessage),
      })}
    >
      <ForwardedCheckbox
        ref={internalRef}
        label={label}
        labelId={labelId}
        invalid={Boolean(errorMessage)}
        data-testid={dataTestId}
        {...props}
        {...inputProps}
      />
      <FieldFeedback
        id={feedbackId}
        invalid={Boolean(errorMessage)}
        className={styles['field-feedback']}
        data-testid={
          dataTestId
            ? `${dataTestId}-${errorMessage ? 'error-' : helperMessage ? 'helper-' : ''}message`
            : undefined
        }
      >
        {errorMessage || helperMessage}
      </FieldFeedback>
    </Flex>
  );
}

const ForwardedAloneCheckbox = forwardRef(AloneCheckbox);

function GroupedCheckbox(
  { id, name, value, label, onChange, disabled, readOnly, required, ...props }: GroupedProps,
  ref: ReactRef<Ref>,
) {
  const context = useCheckboxGroupContext();

  const internalRef = useForwardedRef(ref);

  const { inputProps } = useCheckboxGroupItem(
    {
      id,
      name,
      value,
      onChange,
      children: label,
      isDisabled: disabled,
      isReadOnly: readOnly,
      isRequired: required,
      validationState: context.errorMessage ? 'invalid' : 'valid',
      'aria-errormessage': context.errorMessage || undefined,
    },
    context,
    internalRef,
  );

  return (
    <ForwardedCheckbox
      ref={internalRef}
      label={label}
      invalid={Boolean(context.errorMessage)}
      highlighted={context.highlighted}
      {...props}
      {...inputProps}
    />
  );
}

const ForwardedGroupedCheckbox = forwardRef(GroupedCheckbox);

function EnhancedCheckbox(props: Props, ref: ReactRef<Ref>) {
  const context = useCheckboxGroupContext();

  return context.isGrouped ? (
    <ForwardedGroupedCheckbox ref={ref} {...(props as GroupedProps)} />
  ) : (
    <ForwardedAloneCheckbox ref={ref} {...(props as AloneProps)} />
  );
}

const ForwardedEnhancedCheckbox = beSlot(forwardRef(EnhancedCheckbox), 'checkbox');
ForwardedEnhancedCheckbox.displayName = 'Checkbox';

export { ForwardedEnhancedCheckbox as Checkbox };
export type { Props as CheckboxProps, Ref as CheckboxRef };
