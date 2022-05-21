import type { InputHTMLAttributes, Ref as ReactRef } from 'react';
import React, { forwardRef, useCallback, useState } from 'react';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { useTextField } from '@react-aria/textfield';
import { useId } from '@react-aria/utils';
import cn from 'clsx';

import { formatCurrency } from '../../utils';
import { FieldFeedback } from '../field-feedback';
import { Flex } from '../flex';
import { Text } from '../text';

import styles from './currency-field.module.css';

type UseTextFieldParameters = Parameters<typeof useTextField>;
type UseTextFieldProps = UseTextFieldParameters[0];

type Ref = HTMLInputElement;

type OwnProps = {
  name?: UseTextFieldProps['name'];
  value?: UseTextFieldProps['value'];
  onBlur?: UseTextFieldProps['onBlur'];
  onFocus?: UseTextFieldProps['onFocus'];
  onChange?: UseTextFieldProps['onChange'];
  disabled?: UseTextFieldProps['isDisabled'];
  readOnly?: UseTextFieldProps['isReadOnly'];
  required?: UseTextFieldProps['isRequired'];
  errorMessage?: string;
  helperMessage?: string;
  'data-testid'?: string;
} & InputHTMLAttributes<Ref>;

type Props = LabelProps<OwnProps>;

function CurrencyField(
  {
    id,
    name,
    label,
    value,
    onBlur,
    onFocus,
    onChange,
    disabled,
    readOnly,
    required,
    className,
    errorMessage,
    'aria-label': ariaLabel,
    helperMessage,
    'data-testid': dataTestId,
    'aria-labelledby': ariaLabelledby,
    ...props
  }: Props,
  ref: ReactRef<Ref>,
) {
  const feedbackId = useId();

  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(value ? formatCurrency(value) : '');

  const internalDisabled = readOnly || disabled;

  const handleChange: UseTextFieldProps['onChange'] = useCallback(
    (fieldValue) => {
      const formattedValue = formatCurrency(fieldValue);

      setIsFilled(fieldValue !== '');
      setInternalValue(formatCurrency(fieldValue));

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
      value: value !== undefined ? formatCurrency(value) : internalValue,
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

  const stateClasses = {
    [styles['-filled']]: isFilled || inputProps.value,
    [styles['-focused']]: isFocused,
    [styles['-invalid']]: Boolean(errorMessage),
    [styles['-disabled']]: internalDisabled,
  };

  return (
    <Flex
      gap={{
        base: '2xsm',
        md: 'xsm',
        lg: 'sm',
      }}
      direction="column"
      className={cn(className, styles['currency-field'], stateClasses)}
      data-testid={dataTestId}
    >
      <Flex
        direction="column"
        gap={{
          base: 'sm',
          md: 'md',
          lg: 'lg',
        }}
      >
        {label ? (
          <Text
            {...labelProps}
            as="label"
            color={internalDisabled ? 'support-400' : 'support-500'}
            className={styles.label}
            data-testid={dataTestId ? `${dataTestId}-label` : undefined}
          >
            {label}
          </Text>
        ) : null}
        <Flex
          alignItems="center"
          className={styles['input-container']}
          gap={{
            base: 'sm',
            md: 'md',
            lg: 'lg',
          }}
          padding={{
            base: ['none', 'none', '2xsm', 'none'],
            md: ['none', 'none', 'xsm', 'none'],
            lg: ['none', 'none', 'sm', 'none'],
          }}
        >
          <input
            {...(inputProps as InputHTMLAttributes<Ref>)}
            ref={internalRef}
            required={required}
            className={styles.input}
            placeholder="0,00"
            data-testid={dataTestId ? `${dataTestId}-input` : undefined}
            {...props}
          />
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

const ForwardedCurrencyField = forwardRef(CurrencyField);
ForwardedCurrencyField.displayName = 'CurrencyField';

export { ForwardedCurrencyField as CurrencyField };
export type { Props as CurrencyFieldProps, Ref as CurrencyFieldRef };
