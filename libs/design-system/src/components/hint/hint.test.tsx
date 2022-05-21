import React from 'react';

import { composeStories, fireEvent, render, screen, waitFor } from '../../utils/test';

import * as stories from './hint.stories';

const { Default, WithIcon, WithAction, WithCloseButton, Floatable, FloatableWithHeader } =
  composeStories(stories);

describe('Hint', () => {
  it('deve renderizar', () => {
    render(<Default />);

    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('deve renderizar com um ícone antes do conteúdo', () => {
    render(<WithIcon data-testid="hint" />);

    expect(screen.getByTestId('hint-icon')).toBeInTheDocument();
  });

  it('deve fechar ao clicar no botão de fechar', async () => {
    render(<WithCloseButton closable />);

    expect(screen.getByRole('alert')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Fechar alerta' }));

    await waitFor(() => expect(screen.queryByRole('alert')).not.toBeInTheDocument());
  });

  it('deve rendedizar com um botão de ação', () => {
    render(<WithAction />);

    expect(screen.getByRole('button', { name: 'Entendi' })).toBeInTheDocument();
  });

  it('deve sobrepor o conteúdo em seu formato flutuante', () => {
    render(<Floatable />);

    const hint = screen.getByRole('alert');

    expect(hint).toHaveClass('-floatable');
  });

  it('deve sobrepor o conteúdo em seu formato flutuante respeitando o espaço do header', () => {
    render(<FloatableWithHeader />);

    const hint = screen.getByRole('alert');

    expect(hint).toHaveClass('-floatable');
    expect(hint).toHaveClass('-floatable-headered');
  });
});
