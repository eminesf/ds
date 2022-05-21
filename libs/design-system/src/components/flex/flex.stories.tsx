import React from 'react';
import { Meta, Story } from '@storybook/react';

import { COLOR, ENHANCED_SPACING, SPACING } from '../../utils';

import type { FlexProps } from '.';
import { Flex } from '.';

export default {
  title: 'Structure/Flex',
  component: Flex,
  argTypes: {
    gap: {
      defaultValue: 'none',
      table: {
        defaultValue: { summary: 'none' },
      },
      control: {
        type: 'select',
        options: SPACING,
      },
    },
    wrap: {
      defaultValue: 'wrap',
      table: {
        defaultValue: { summary: 'wrap' },
      },
      control: {
        type: 'select',
        options: ['wrap', 'nowrap', 'wrap-reverse'],
      },
    },
    width: {
      control: {
        type: 'select',
        options: ENHANCED_SPACING,
      },
    },
    height: {
      control: {
        type: 'select',
        options: ENHANCED_SPACING,
      },
    },
    grow: {
      control: {
        type: 'number',
      },
    },
    order: {
      control: {
        type: 'number',
      },
    },
    shrink: {
      control: {
        type: 'number',
      },
    },
    margin: {
      control: {
        type: 'select',
        options: SPACING,
      },
    },
    padding: {
      control: {
        type: 'select',
        options: SPACING,
      },
    },
    minHeight: {
      defaultValue: 'auto',
      table: {
        defaultValue: { summary: 'auto' },
      },
      control: {
        type: 'select',
        options: ENHANCED_SPACING,
      },
    },
    minWidth: {
      defaultValue: 'auto',
      table: {
        defaultValue: { summary: 'auto' },
      },
      control: {
        type: 'select',
        options: ENHANCED_SPACING,
      },
    },
    direction: {
      defaultValue: 'row',
      table: {
        defaultValue: { summary: 'row' },
      },
      control: {
        type: 'select',
        options: ['row', 'column', 'row-reverse', 'column-reverse'],
      },
    },
    alignItems: {
      defaultValue: 'normal',
      table: {
        defaultValue: { summary: 'normal' },
      },
      control: {
        type: 'select',
        options: ['normal', 'center', 'stretch', 'baseline', 'flex-end', 'flex-start'],
      },
    },
    justifyContent: {
      defaultValue: 'normal',
      table: {
        defaultValue: { summary: 'normal' },
      },
      control: {
        type: 'select',
        options: [
          'normal',
          'center',
          'flex-end',
          'flex-start',
          'space-around',
          'space-evenly',
          'space-between',
        ],
      },
    },
    backgroundColor: {
      control: {
        type: 'select',
        options: COLOR,
      },
    },
  },
} as Meta;

export const Default: Story<FlexProps> = (args) => (
  <Flex {...args}>
    <Flex backgroundColor="primary-300">
      <div>div</div>
      <Flex height="2xlg" backgroundColor="primary-100">
        flex
      </Flex>
      <Flex height="2xlg" backgroundColor="primary-200">
        flex
      </Flex>
      <Flex height="2xlg" backgroundColor="primary-100" grow>
        flex
      </Flex>
      <Flex height="2xlg" backgroundColor="primary-200">
        flex
      </Flex>
      <Flex height="2xlg" backgroundColor="primary-100">
        flex
      </Flex>
      <div>flex</div>
    </Flex>
    <Flex backgroundColor="primary-300">
      <div>div</div>
      <Flex height="2xlg" backgroundColor="primary-100">
        flex
      </Flex>
      <Flex height="2xlg" backgroundColor="primary-200">
        flex
      </Flex>
      <Flex height="2xlg" backgroundColor="primary-100" grow>
        flex
      </Flex>
      <Flex height="2xlg" backgroundColor="primary-200">
        flex
      </Flex>
      <Flex height="2xlg" backgroundColor="primary-100">
        flex
      </Flex>
      <div>flex</div>
    </Flex>
  </Flex>
);

Default.storyName = 'Padrão';
Default.args = {
  gap: 'xlg',
  direction: 'column',
};
