import React from 'react';
import type { Meta, Story } from '@storybook/react';

import type { FieldFeedbackProps } from '.';
import { FieldFeedback } from '.';

export default {
  title: 'Shared/FieldFeedback',
  component: FieldFeedback,
  argTypes: {
    invalid: {
      defaultValue: false,
      table: {
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

export const Default: Story<FieldFeedbackProps> = (args) => (
  <FieldFeedback {...args}>Lorem ipsum dolor sit</FieldFeedback>
);

Default.storyName = 'Padrão';
Default.args = {
  'aria-labelledby': 'label-reference',
};

export const Invalid: Story<FieldFeedbackProps> = (args) => (
  <FieldFeedback {...args}>Lorem ipsum dolor sit</FieldFeedback>
);

Invalid.storyName = 'Inválido';
Invalid.args = {
  invalid: true,
  'aria-labelledby': 'label-reference',
};
