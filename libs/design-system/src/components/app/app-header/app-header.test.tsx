import React from 'react';

import { composeStories, render, screen } from '../../../utils/test';

import * as stories from './app-header.stories';

const { Default, WithProgressBar, WithoutTitle } = composeStories(stories);

describe('AppHeader', () => {
  it('deve renderizar', () => {
    render(<Default />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Voltar' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Fechar' })).toBeInTheDocument();
  });

  it('deve exibir barra de progresso', () => {
    render(<WithProgressBar />);

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50');
  });

  it('deve renderizar sem título', () => {
    render(<WithoutTitle />);

    const titleEl = screen.getByRole('heading');

    expect(titleEl).toBeInTheDocument();
    expect(titleEl.parentNode).toHaveStyle(
      `border: 0px; clip-path: inset(50%); height: 1px; margin: 0px -1px -1px 0px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap;`,
    );
  });
});
