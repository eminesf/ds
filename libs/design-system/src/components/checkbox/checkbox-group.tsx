import type { HTMLAttributes, Ref as ReactRef } from 'react';
import React, { forwardRef, useContext } from 'react';
import { useCheckboxGroup } from '@react-aria/checkbox';
import { useId } from '@react-aria/utils';
import type { CheckboxGroupState } from '@react-stately/checkbox';
import { useCheckboxGroupState } from '@react-stately/checkbox';
import cn from 'clsx';
import { useSlots } from 'use-slots';

import { FieldFeedback } from '../field-feedback';
import type { FlexRef } from '../flex';
import { Flex } from '../flex';
import { Grid } from '../grid';
import { Text } from '../text';

import styles from './checkbox.module.css';

type Ref = FlexRef;

type UseCheckboxGroupParameters = Parameters<typeof useCheckboxGroup>;
type UseCheckboxGroupProps = UseCheckboxGroupParameters[0];

type OwnProps = {
  name: string;
  value?: UseCheckboxGroupProps['value'];
  disabled?: UseCheckboxGroupProps['isDisabled'];
  onChange?: UseCheckboxGroupProps['onChange'];
  readOnly?: UseCheckboxGroupProps['isReadOnly'];
  required?: boolean;
  highlighted?: boolean;
  errorMessage?: string;
  helperMessage?: string;
  'data-testid'?: string;
} & HTMLAttributes<Ref>;

type Props = LabelProps<OwnProps>;

type Context = {
  required: boolean;
  isGrouped: boolean;
  highlighted: boolean;
  errorMessage?: string;
} & CheckboxGroupState;

const CheckboxGroupContext = React.createContext<Context | Pick<Context, 'isGrouped'>>({
  isGrouped: false,
});

function CheckboxGroup(
  {
    id,
    name,
    value,
    label,
    onChange,
    disabled,
    readOnly,
    required = false,
    children,
    className,
    highlighted = false,
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

  const { checkbox } = useSlots(children);

  const state = useCheckboxGroupState({
    label,
    value,
    onChange,
    isDisabled: disabled,
    isReadOnly: readOnly,
  });

  const { groupProps: checkboxGroupProps, labelProps } = useCheckboxGroup(
    {
      id,
      name,
      label,
      value,
      onChange,
      isDisabled: disabled,
      isReadOnly: readOnly,
      'aria-label': ariaLabel,
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
      className={cn(className, styles['checkbox-group'])}
      data-testid={dataTestId}
      {...checkboxGroupProps}
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

        <CheckboxGroupContext.Provider
          value={{
            ...state,
            required,
            isGrouped: true,
            highlighted,
            errorMessage,
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
            {checkbox}
          </Grid>
        </CheckboxGroupContext.Provider>
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

function useCheckboxGroupContext() {
  return useContext(CheckboxGroupContext) as Context;
}

const ForwardedCheckboxGroup = forwardRef(CheckboxGroup);
ForwardedCheckboxGroup.displayName = 'CheckboxGroup';

export { ForwardedCheckboxGroup as CheckboxGroup, useCheckboxGroupContext };
export type { Props as CheckboxGroupProps, Ref as CheckboxGroupRef };
