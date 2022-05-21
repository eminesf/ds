import React from 'react';

import { composeStories, render, screen } from '../../utils/test';

import * as stories from './textual-badge.stories';

const { Default, WithIcon } = composeStories(stories);

describe('TextualBadge', () => {
  it('deve renderizar', () => {
    render(<Default />);

    expect(screen.getByRole('status')).toHaveTextContent('Faturado');
  });

  it('deve renderizar ícone', () => {
    render(<WithIcon data-testid="textual-badge" />);

    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByTestId('textual-badge-icon')).toBeInTheDocument();
  });
});
