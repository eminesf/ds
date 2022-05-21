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
import { Icon, IconProps } from '../icon';

import styles from './text-field.module.css';

type UseTextFieldParameters = Parameters<typeof useTextField>;
type UseTextFieldProps = UseTextFieldParameters[0];

type Ref = HTMLInputElement;

type OwnProps = {
  type?: UseTextFieldProps['type'];
  icon?: IconProps['name'];
  name?: UseTextFieldProps['name'];
  value?: UseTextFieldProps['value'];
  onBlur?: UseTextFieldProps['onBlur'];
  onFocus?: UseTextFieldProps['onFocus'];
  onChange?: UseTextFieldProps['onChange'];
  required?: UseTextFieldProps['isRequired'];
  readOnly?: UseTextFieldProps['isReadOnly'];
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

function TextField(
  {
    id,
    name,
    type,
    icon,
    label,
    value,
    onBlur,
    onFocus,
    onChange,
    readOnly,
    disabled,
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

  const internalDisabled = readOnly || disabled;

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
      type,
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
      className={cn(className, styles['text-field'], stateClasses)}
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
            data-testid={dataTestId ? `${dataTestId}-label` : undefined}
            {...labelProps}
          >
            {label}
          </MotionFlex>
        ) : null}
        <Flex
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
          {icon ? (
            <Icon
              name={icon}
              data-testid={dataTestId ? `${dataTestId}-icon` : undefined}
              color={internalDisabled ? 'support-400' : 'primary-200'}
              size={{ base: 'lg', lg: 'xlg' }}
            />
          ) : null}
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

const ForwardedTextField = forwardRef(TextField);
ForwardedTextField.displayName = 'TextField';

export { ForwardedTextField as TextField };
export type { Props as TextFieldProps, Ref as TextFieldRef };
