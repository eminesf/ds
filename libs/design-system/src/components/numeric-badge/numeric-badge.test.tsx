import React from 'react';

import { composeStories, render, screen } from '../../utils/test';

import * as stories from './numeric-badge.stories';

const { Default, AboveNine, NoNumber } = composeStories(stories);

describe('NumericBadge', () => {
  it('deve renderizar', () => {
    render(<Default />);

    expect(screen.getByRole('status')).toHaveTextContent('5');
  });

  it('deve renderizar com um + em casos de numeros maiores que 9', () => {
    render(<AboveNine />);

    expect(screen.getByRole('status')).toHaveTextContent('+9');
  });

  it('deve renderizar sem número', async () => {
    render(<NoNumber />);

    expect(screen.getByRole('status')).toHaveTextContent('');
  });
});
