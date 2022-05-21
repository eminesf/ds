import type { HTMLAttributes, Ref as ReactRef } from 'react';
import React, { forwardRef, useContext } from 'react';
import { useRadioGroup } from '@react-aria/radio';
import { useId } from '@react-aria/utils';
import type { RadioGroupState } from '@react-stately/radio';
import { useRadioGroupState } from '@react-stately/radio';
import cn from 'clsx';
import invariant from 'tiny-invariant';
import { useSlots } from 'use-slots';

import { noop } from '../../utils';
import { useBreakpointContext } from '../breakpoint';
import { FieldFeedback } from '../field-feedback';
import { Flex, FlexRef } from '../flex';
import { Grid } from '../grid';
import { Text } from '../text';

import styles from './radio.module.css';

type Ref = FlexRef;

type UseRadioGroupParameters = Parameters<typeof useRadioGroup>;
type UseRadioGroupProps = UseRadioGroupParameters[0];

type OwnProps = {
  name: string;
  value?: UseRadioGroupProps['value'];
  disabled?: UseRadioGroupProps['isDisabled'];
  onChange?: UseRadioGroupProps['onChange'];
  readOnly?: UseRadioGroupProps['isReadOnly'];
  required?: UseRadioGroupProps['isRequired'];
  highlighted?: boolean;
  errorMessage?: string;
  helperMessage?: string;
  'data-testid'?: string;
} & HTMLAttributes<Ref>;

type Props = LabelProps<OwnProps>;

type Context = {
  required: boolean;
  highlighted: boolean;
} & RadioGroupState;

const RadioGroupContext = React.createContext<Context | null>(null);

function RadioGroup(
  {
    id,
    name,
    value,
    label,
    onChange = noop,
    disabled,
    readOnly,
    required = false,
    children,
    className,
    highlighted = false,
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

  const { radio } = useSlots(children);

  const { current: breakpoint } = useBreakpointContext();

  const orientation = breakpoint === 'base' ? 'vertical' : 'horizontal';

  const validationState = errorMessage ? 'invalid' : 'valid';

  const state = useRadioGroupState({
    name,
    label,
    value,
    onChange,
    isRequired: required,
    isDisabled: disabled,
    isReadOnly: readOnly,
    orientation,
    validationState,
  });

  const { radioGroupProps, labelProps } = useRadioGroup(
    {
      id,
      name,
      label,
      value,
      onChange,
      isRequired: required,
      isDisabled: disabled,
      isReadOnly: readOnly,
      orientation,
      'aria-label': ariaLabel,
      validationState,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': helperMessage ? feedbackId : undefined,
      'aria-errormessage': errorMessage ? feedbackId : undefined,
    },
    state,
  );

  return (
    <Flex
      ref={ref}
      gap={{ base: 'sm', md: 'md', lg: 'lg' }}
      direction="column"
      className={cn(className, styles['radio-group'], {
        [styles['-highlighted']]: highlighted,
      })}
      data-testid={dataTestId}
      {...radioGroupProps}
      {...props}
    >
      <Flex
        gap={{
          base: 'sm',
          md: 'md',
          lg: 'lg',
        }}
        direction="column"
      >
        {label ? (
          <Text
            {...labelProps}
            as="label"
            color="support-500"
            data-testid={dataTestId ? `${dataTestId}-label` : undefined}
          >
            {label}
          </Text>
        ) : null}

        <RadioGroupContext.Provider
          value={{
            ...state,
            required,
            highlighted,
          }}
        >
          <Grid
            cols={{
              base: ['1fr'],
              md: ['1fr', '1fr', '1fr'],
            }}
            gap={{ base: 'xsm', md: 'sm', lg: 'md' }}
            alignItems="end"
          >
            {radio}
          </Grid>
        </RadioGroupContext.Provider>
      </Flex>
      <FieldFeedback
        id={feedbackId}
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

function useRadioGroupContext() {
  const context = useContext(RadioGroupContext);

  invariant(context !== null, 'useRadioGroupContext deve ser usado em um RadioGroup');

  return context as Context;
}

const ForwardedRadioGroup = forwardRef(RadioGroup);
ForwardedRadioGroup.displayName = 'RadioGroup';

export { ForwardedRadioGroup as RadioGroup, useRadioGroupContext };
export type { Props as RadioGroupProps, Ref as RadioGroupRef };
