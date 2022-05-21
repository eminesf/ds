/* eslint-disable react/destructuring-assignment */
import React from 'react';
import type { Meta, Story } from '@storybook/react';

import { COLOR, ENHANCED_SPACING, SPACING } from '../../utils';
import { Flex } from '../flex';

import type { GridProps } from '.';
import { Grid, GridItem } from '.';

export default {
  title: 'Structure/Grid',
  component: Grid,
  subcomponents: { GridItem },
  argTypes: {
    gap: {
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
    backgroundColor: {
      control: {
        type: 'select',
        options: COLOR,
      },
    },
  },
} as Meta;

export const Default: Story<GridProps> = (args) => (
  <Grid {...args}>
    <div>div</div>
    <Flex height="2xlg" backgroundColor="primary-100">
      flex
    </Flex>
    <div>div</div>
  </Grid>
);

Default.storyName = 'Padrão';
Default.args = {
  gap: 'md',
  cols: ['1fr', '1fr', '1fr'],
  backgroundColor: 'primary-300',
};

export const WithAreas: Story<GridProps> = (args) => (
  <Grid {...args}>
    <GridItem area="HEADER" backgroundColor="primary-300">
      <div>div</div>
      <Flex height="2xlg" gap="md" justifyContent="space-between" backgroundColor="primary-100">
        <div>div</div>
        <Grid>grid</Grid>
        <div>div</div>
      </Flex>
      <div>div</div>
    </GridItem>
    <GridItem area="MAIN" backgroundColor="primary-200">
      <Flex wrap="wrap" gap={args.gap} alignItems="center">
        <div>div</div>
        <Flex height="2xlg" width="2xlg" backgroundColor="primary-300">
          flex
        </Flex>
        <Flex height="2xlg" width="2xlg" backgroundColor="primary-300">
          flex
        </Flex>
        <Flex height="2xlg" width="2xlg" backgroundColor="primary-300" grow>
          flex
        </Flex>
        <Flex height="2xlg" width="2xlg" backgroundColor="primary-300">
          flex
        </Flex>
        <Flex height="2xlg" width="2xlg" backgroundColor="primary-300">
          flex
        </Flex>
        <Flex height="2xlg" width="2xlg" backgroundColor="primary-300">
          flex
        </Flex>
        <Flex height="2xlg" width="2xlg" backgroundColor="primary-300">
          flex
        </Flex>
      </Flex>
    </GridItem>
    <GridItem area="ASIDE" backgroundColor="primary-100" />
    <GridItem
      area="FOOTER"
      colsSpan={{ base: 1, lg: 2 }}
      rowsSpan={{ base: 1, lg: 2 }}
      colsStart={{ base: 1, lg: 2 }}
      colsEnd={{ base: 1, lg: 2 }}
      rowsStart={{ base: 1, lg: 2 }}
      rowsEnd={{ base: 1, lg: 2 }}
      backgroundColor="primary-300"
    />
  </Grid>
);

WithAreas.storyName = 'Com áreas';
WithAreas.args = {
  gap: { base: 'md', md: '2xlg' },
  rows: {
    base: ['7xlg', '7xlg', ['9xlg', '1fr'], '9xlg'],
    lg: ['7xlg', ['9xlg', '1fr'], '9xlg'],
  },
  cols: {
    base: ['1fr'],
    lg: ['9xlg', '1fr'],
  },
  areas: {
    base: [['HEADER'], ['ASIDE'], ['MAIN'], ['FOOTER']],
    lg: [
      ['HEADER', 'HEADER'],
      ['ASIDE', 'MAIN'],
      ['FOOTER', 'FOOTER'],
    ],
  },
};
