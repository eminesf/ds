import React from 'react';
import * as config from '@agi/common-rig/profile/storybook/preview';
import { BreakpointMd, BreakpointLg } from '@agi/design-tokens';
import '@agi/design-tokens/style';

import '../src/styles/global.css';
import { Provider } from '../src';

export const decorators = [
  (Story, { kind }) => {
    const withoutPadding = [
      'Site/Header',
      'Site/Footer',
      'App/Header',
      'App/OverlayFooter',
    ].includes(kind);

    const isFullScreen = ['App/Loader', 'App/Feedback'].includes(kind);

    return (
      <Provider fullScreen={isFullScreen} style={withoutPadding ? undefined : { padding: '1rem' }}>
        <Story />
      </Provider>
    );
  },
];

export const parameters = {
  ...config.parameters,
  layout: 'fullscreen',
  chromatic: {
    viewports: [320, parseInt(BreakpointMd, 10), parseInt(BreakpointLg, 10)],
  },
};
