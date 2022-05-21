import React from 'react';

import { composeStories, render, screen } from '../../../utils/test';

import * as stories from './app-feedback.stories';

const { Default, Error } = composeStories(stories);

describe('AppFeedback', () => {
  it('deve renderizar variante padrão', () => {
    render(<Default />);

    expect(screen.getByTestId('provider')).toHaveStyle(
      '--background-color: var(--color-transparent)',
    );
  });

  it('deve renderizar variante com erro', async () => {
    render(<Error />);

    expect(screen.getByTestId('provider')).toHaveStyle(
      '--background-color: var(--color-primary-400)',
    );
  });
});
