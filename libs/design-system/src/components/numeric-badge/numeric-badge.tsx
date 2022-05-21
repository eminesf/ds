import type { HTMLAttributes, Ref as ReactRef } from 'react';
import React, { forwardRef, useMemo } from 'react';

import type { FlexRef } from '../flex';
import { Flex } from '../flex';
import { Text } from '../text';

import styles from './numeric-badge.module.css';

type Ref = FlexRef;

type OwnProps = {
  count?: number;
} & HTMLAttributes<FlexRef>;

type Props = AriaLabelProps<Omit<OwnProps, 'children'>>;

function NumericBadge({ count, ...props }: Props, ref: ReactRef<Ref>) {
  const formattedCount = useMemo(() => {
    if (count !== undefined) {
      if (count > 9) return '+9';
      if (count < 0) return '';
      return count;
    }
    return '';
  }, [count]);

  return (
    <Flex
      as="span"
      role="status"
      alignItems="center"
      justifyContent="center"
      className={styles['numeric-badge']}
      ref={ref}
      {...props}
    >
      <Text size="xsm" color="support-100" weight="bold">
        {formattedCount}
      </Text>
    </Flex>
  );
}

const ForwardedNumericBadge = forwardRef(NumericBadge);
ForwardedNumericBadge.displayName = 'NumericBadge';

export { ForwardedNumericBadge as NumericBadge };
export type { Props as NumericBadgeProps, Ref as NumericBadgeRef };
