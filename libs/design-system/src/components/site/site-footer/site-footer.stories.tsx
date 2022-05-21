import React from 'react';
import type { Meta, Story } from '@storybook/react';

import type { SiteFooterProps } from '.';
import { SiteFooter, SiteFooterEnglish } from '.';

export default {
  title: 'Site/Footer',
  component: SiteFooter,
} as Meta;

export const Default: Story<SiteFooterProps> = (args) => <SiteFooter {...args} />;

Default.storyName = 'Padrão';

export const English: Story<SiteFooterProps> = (args) => <SiteFooterEnglish {...args} />;

English.storyName = 'Inglês';
