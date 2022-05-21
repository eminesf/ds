import type { ElementType, Ref as ReactRef } from 'react';
import React, { createContext, forwardRef, useContext, useRef } from 'react';
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
} from 'react-polymorphic-types';
import type { UseButtonProps } from '@hypeflame/hooks';
import { useButton } from '@hypeflame/hooks';
import { useFocusRing } from '@react-aria/focus';
import { useId } from '@react-aria/utils';
import cn from 'clsx';
import invariant from 'tiny-invariant';
import { beSlot, useSlots } from 'use-slots';

import { Flex } from '../flex';
import type { IconProps } from '../icon';
import { Icon } from '../icon';

import { useLabelValueGroupContext } from './label-value-group';
import styles from './label-value.module.css';

type Ref = HTMLDivElement;

const DefaultElement = 'span';

type DefaultElementType = typeof DefaultElement;

type Variant = 'card';

type OwnProps = {
  icon?: IconProps['name'];
  tone?: 'support' | 'neutral' | 'success' | 'critical' | 'alert';
  variant?: Variant;
  className?: string;
  highlighted?: boolean;
} & Omit<UseButtonProps, 'as'>;

type Props<T extends ElementType = DefaultElementType> = PolymorphicPropsWithoutRef<OwnProps, T>;

type ContextType = {
  id?: string;
  variant?: Variant;
  highlighted: boolean;
};

const Context = createContext<ContextType | null>(null);

function LabelValue<T extends ElementType = DefaultElementType>(
  {
    icon,
    tone = 'support',
    variant,
    onPress,
    children,
    className,
    highlighted = false,
    'data-testid': dataTestId,
    ...props
  }: Props<T>,
  ref: ReactRef<Ref>,
) {
  const id = useId();

  const wrapperRef = useRef(null);

  const { isGrouped, variant: groupVariant } = useLabelValueGroupContext();

  const { isFocusVisible, focusProps } = useFocusRing();

  const { as: Element, buttonProps } = useButton({ ...props, onPress }, wrapperRef);

  invariant(
    !(highlighted && isGrouped),
    'Não é possível utilizar a propriedade `highlighted` dentro de um LabelValueGroup',
  );

  invariant(
    !(icon && groupVariant !== 'card' && variant !== 'card'),
    'Não é possível utilizar a propriedade `icon` fora de um LabelValue/LabelValueGroup do tipo `card`',
  );

  const { labelValueLabel, labelValueValue, labelValueHelper, labelValueAction } =
    useSlots(children);

  const toneClasses = cn({
    [styles['-support']]: tone === 'support',
    [styles['-neutral']]: tone === 'neutral',
    [styles['-success']]: tone === 'success',
    [styles['-critical']]: tone === 'critical',
    [styles['-alert']]: tone === 'alert',
  });

  const variantClasses = cn({
    [styles['-card']]: variant === 'card' || groupVariant === 'card',
  });

  const wrapperStateClasses = cn({
    [styles['-focused']]: isFocusVisible,
  });

  return (
    <Context.Provider value={{ id, variant, highlighted }}>
      <Flex
        ref={ref}
        gap={{
          base: 'lg',
          md: '2xlg',
          lg: '4xlg',
        }}
        className={cn(styles['label-value'], toneClasses, variantClasses, className)}
        alignItems="stretch"
        data-testid={dataTestId}
        justifyContent="space-between"
        {...props}
      >
        <Flex
          as={Element}
          ref={wrapperRef}
          gap={{
            base: 'sm',
            md: 'md',
            lg: 'lg',
          }}
          grow
          className={cn(styles.wrapper, wrapperStateClasses)}
          {...buttonProps}
          {...focusProps}
        >
          {icon ? (
            <Icon
              size={{
                base: 'lg',
                md: 'xlg',
                lg: '2xlg',
              }}
              name={icon}
              data-testid={dataTestId ? `${dataTestId}-icon` : undefined}
              color="primary-300"
            />
          ) : null}
          <Flex
            gap={{
              base: 'none',
              md: '3xsm',
              lg: '2xsm',
            }}
            alignItems="flex-start"
            direction="column"
            className={styles['label-value-container']}
          >
            {labelValueLabel}
            {labelValueValue}
            {labelValueHelper}
          </Flex>
        </Flex>
        {labelValueAction}
      </Flex>
    </Context.Provider>
  );
}

function useLabelValueContext() {
  const context = useContext(Context);

  invariant(context !== null, 'useLabelValueContext deve ser usado em um LabelValue');

  return context as ContextType;
}

const ForwardedLabelValue: PolymorphicForwardRefExoticComponent<OwnProps, DefaultElementType> =
  beSlot(forwardRef(LabelValue), 'labelValue');
ForwardedLabelValue.displayName = 'LabelValue';

export { ForwardedLabelValue as LabelValue, useLabelValueContext };
export type { Props as LabelValueProps, Ref as LabelValueRef };
