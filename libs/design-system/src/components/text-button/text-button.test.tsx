import React from 'react';

import { composeStories, render, screen } from '../../utils/test';

import * as stories from './text-button.stories';

const { Default, BeforeIcon, AfterIcon } = composeStories(stories);

describe('TextButton', () => {
  it('deve renderizar com sucesso', () => {
    render(<Default />);

    expect(screen.getByRole('button', { name: 'Saiba mais' })).toBeInTheDocument();
  });

  it('deve renderizar com um ícone antes do conteúdo', () => {
    render(<BeforeIcon />);

    expect(screen.getByRole('button', { name: 'Saiba mais' })).toBeInTheDocument();
  });

  it('deve renderizar com um ícone depois do conteúdo', () => {
    render(<AfterIcon />);

    expect(screen.getByRole('button', { name: 'Saiba mais' })).toBeInTheDocument();
  });
});
