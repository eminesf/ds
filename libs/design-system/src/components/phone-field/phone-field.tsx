/* eslint-disable jsx-a11y/label-has-associated-control */
import type { HTMLAttributes, InputHTMLAttributes, Ref as ReactRef } from 'react';
import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { AnimationDurationSlowly } from '@agi/design-tokens';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { useTextField } from '@react-aria/textfield';
import { useId } from '@react-aria/utils';
import cn from 'clsx';
import { m, Variants } from 'framer-motion';

import { formatPhone, noop } from '../../utils';
import { FieldFeedback } from '../field-feedback';
import { Flex } from '../flex';

import styles from './phone-field.module.css';

type UseTextFieldParameters = Parameters<typeof useTextField>;
type UseTextFieldProps = UseTextFieldParameters[0];

type Ref = HTMLInputElement;

type OwnProps = {
  name?: UseTextFieldProps['name'];
  value?: UseTextFieldProps['value'];
  onBlur?: UseTextFieldProps['onBlur'];
  onFocus?: UseTextFieldProps['onFocus'];
  onChange?: UseTextFieldProps['onChange'];
  readOnly?: UseTextFieldProps['isReadOnly'];
  disabled?: UseTextFieldProps['isDisabled'];
  required?: UseTextFieldProps['isRequired'];
  errorMessage?: string;
  helperMessage?: string;
  'data-testid'?: string;
} & Omit<HTMLAttributes<Ref>, 'maxLength' | 'minLength'>;

type Props = LabelProps<OwnProps>;

const MotionFlex = m(Flex);

const variants: Variants = {
  inactive: { y: '125%' },
  active: { y: 0 },
};

function PhoneField(
  {
    id,
    name,
    label,
    value,
    onBlur = noop,
    onFocus = noop,
    onChange = noop,
    required,
    readOnly,
    disabled,
    className,
    errorMessage,
    'aria-label': ariaLabel,
    'data-testid': dataTestId,
    helperMessage,
    'aria-labelledby': ariaLabelledby,
    ...props
  }: Props,
  ref: ReactRef<Ref>,
) {
  const feedbackId = useId();

  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(value ? formatPhone(value) : '');

  const internalDisabled = readOnly || disabled;

  const handleChange: UseTextFieldProps['onChange'] = useCallback(
    (fieldValue) => {
      const formattedValue = formatPhone(fieldValue);

      setIsFilled(fieldValue !== '');
      setInternalValue(formattedValue);

      /* istanbul ignore else  */
      if (onChange) onChange(formattedValue);
    },
    [onChange],
  );

  const handleFocus: UseTextFieldProps['onFocus'] = useCallback(
    (e) => {
      setIsFocused(true);

      /* istanbul ignore else  */
      if (onFocus) onFocus(e);
    },
    [onFocus],
  );

  const handleBlur: UseTextFieldProps['onBlur'] = useCallback(
    (e) => {
      setIsFocused(false);

      /* istanbul ignore else  */
      if (onBlur) onBlur(e);
    },
    [onBlur],
  );

  const internalRef = useForwardedRef(ref);

  const { labelProps, inputProps } = useTextField(
    {
      id,
      name,
      type: 'tel',
      label,
      value: value !== undefined ? formatPhone(value) : internalValue,
      onBlur: handleBlur,
      onFocus: handleFocus,
      onChange: handleChange,
      isReadOnly: readOnly,
      isRequired: required,
      isDisabled: disabled,
      'aria-label': ariaLabel,
      validationState: errorMessage ? 'invalid' : 'valid',
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': helperMessage ? feedbackId : undefined,
      'aria-errormessage': errorMessage ? feedbackId : undefined,
    },
    internalRef,
  );

  const isActive = useMemo(
    () => isFocused || isFilled || inputProps.value,
    [isFocused, isFilled, inputProps.value],
  );

  const labelClasses = {
    [styles['label-active']]: isActive,
  };

  const stateClasses = {
    [styles['-filled']]: isFilled || inputProps.value,
    [styles['-focused']]: isFocused,
    [styles['-invalid']]: errorMessage,
    [styles['-disabled']]: internalDisabled,
  };

  return (
    <Flex
      gap={{
        base: '3xsm',
        md: '2xsm',
        lg: 'xsm',
      }}
      direction="column"
      className={cn(className, styles['phone-field'], stateClasses)}
      data-testid={dataTestId}
    >
      <Flex
        gap={{
          base: 'xsm',
          md: 'sm',
          lg: 'md',
        }}
        alignItems="flex-end"
        padding={['none', 'none', 'xsm', 'none']}
        className={styles['input-wrapper']}
      >
        <Flex grow direction="column">
          {label ? (
            <MotionFlex
              as="label"
              initial={variants.inactive}
              animate={isActive ? 'active' : 'inactive'}
              variants={variants}
              transition={{ duration: AnimationDurationSlowly, type: 'spring' }}
              padding={{
                base: ['none', 'none', 'none', 'none'],
                md: ['none', 'none', '2xsm', 'none'],
                lg: ['none', 'none', 'xsm', 'none'],
              }}
              className={cn(styles.label, labelClasses)}
              {...labelProps}
            >
              {label}
            </MotionFlex>
          ) : null}
          <Flex gap="sm" alignItems="center" className={cn(styles['input-container'])}>
            <input
              {...(inputProps as InputHTMLAttributes<Ref>)}
              ref={internalRef}
              required={required}
              className={styles.input}
              maxLength={15}
              data-testid={dataTestId ? `${dataTestId}-input` : undefined}
              {...props}
            />
          </Flex>
        </Flex>
      </Flex>
      <FieldFeedback
        id={feedbackId}
        disabled={internalDisabled}
        invalid={Boolean(errorMessage)}
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

const ForwardedPhoneField = forwardRef(PhoneField);
ForwardedPhoneField.displayName = 'PhoneField';

export { ForwardedPhoneField as PhoneField };
export type { Props as PhoneFieldProps, Ref as PhoneFieldRef };
