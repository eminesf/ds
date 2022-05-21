/* eslint-disable jsx-a11y/label-has-associated-control */
import type { HTMLAttributes, InputHTMLAttributes, Ref as ReactRef } from 'react';
import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { AnimationDurationSlowly } from '@agi/design-tokens';
import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import { useTextField } from '@react-aria/textfield';
import { useId } from '@react-aria/utils';
import cn from 'clsx';
import { m, Variants } from 'framer-motion';

import { FieldFeedback } from '../field-feedback';
import { Flex } from '../flex';
import { IconButton } from '../icon-button';

import styles from './password-field.module.css';

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
  required?: UseTextFieldProps['isRequired'];
  disabled?: UseTextFieldProps['isDisabled'];
  errorMessage?: string;
  helperMessage?: string;
  'data-testid'?: string;
} & HTMLAttributes<Ref>;

type Props = LabelProps<OwnProps>;

const MotionFlex = m(Flex);

const variants: Variants = {
  inactive: { y: '125%' },
  active: { y: 0 },
};

function PasswordField(
  {
    id,
    name,
    label,
    value,
    onBlur,
    onFocus,
    onChange,
    readOnly,
    required,
    disabled,
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
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const internalDisabled = readOnly || disabled;

  const handleClick = useCallback(() => {
    setIsPasswordVisible((currentIsPasswordVisible) => !currentIsPasswordVisible);
  }, []);

  const handleChange: UseTextFieldProps['onChange'] = useCallback(
    (fieldValue) => {
      setIsFilled(fieldValue !== '');

      /* istanbul ignore else  */
      if (onChange) onChange(fieldValue);
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
      type: isPasswordVisible ? 'text' : 'password',
      label,
      value,
      onBlur: handleBlur,
      onFocus: handleFocus,
      onChange: handleChange,
      isDisabled: disabled,
      isReadOnly: readOnly,
      isRequired: required,
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
      className={cn(className, styles['password-field'], stateClasses)}
      data-testid={dataTestId}
    >
      <Flex direction="column">
        {label ? (
          <MotionFlex
            as="label"
            variants={variants}
            initial={variants.inactive}
            padding={{
              base: ['none', 'none', 'none', 'none'],
              md: ['none', 'none', '2xsm', 'none'],
              lg: ['none', 'none', 'xsm', 'none'],
            }}
            animate={isActive ? 'active' : 'inactive'}
            transition={{ duration: AnimationDurationSlowly, type: 'spring' }}
            className={cn(styles.label, labelClasses)}
            {...labelProps}
          >
            {label}
          </MotionFlex>
        ) : null}
        <Flex
          gap="sm"
          alignItems="center"
          padding={['none', 'none', 'xsm', 'none']}
          className={styles['input-container']}
        >
          <input
            ref={internalRef}
            required={required}
            className={styles.input}
            data-testid={dataTestId ? `${dataTestId}-input` : undefined}
            {...(inputProps as InputHTMLAttributes<Ref>)}
            {...props}
          />
          <IconButton
            color={internalDisabled ? 'support-400' : 'primary-200'}
            size={{
              base: 'lg',
              md: 'xlg',
              lg: '2xlg',
            }}
            icon={isPasswordVisible ? 'eye-slash' : 'eye'}
            onPress={internalDisabled ? undefined : handleClick}
            aria-label={isPasswordVisible ? 'Esconder senha' : 'Mostrar senha'}
            data-testid={dataTestId ? `${dataTestId}-button` : undefined}
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

const ForwardedPasswordField = forwardRef(PasswordField);
ForwardedPasswordField.displayName = 'PasswordField';

export { ForwardedPasswordField as PasswordField };
export type { Props as PasswordFieldProps, Ref as PasswordFieldRef };
