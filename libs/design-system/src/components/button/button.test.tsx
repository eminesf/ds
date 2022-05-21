import React from 'react';

import { composeStories, render, screen } from '../../utils/test';

import * as stories from './button.stories';

const { Default, BeforeIcon, AfterIcon } = composeStories(stories);

describe('Button', () => {
  it('deve renderizar', () => {
    render(<Default />);

    expect(screen.getByRole('button', { name: 'Saiba mais' })).toBeInTheDocument();
  });

  it('deve renderizar com um ícone antes do conteúdo', () => {
    render(<BeforeIcon data-testid="button" />);

    expect(screen.getByTestId('button-icon')).toBeInTheDocument();
    expect(screen.getByTestId('button-content')).toBeInTheDocument();
    expect(screen.getByTestId('button-wrapper')).toHaveStyle('--flex-direction: row-reverse;');
  });

  it('deve renderizar com um ícone depois do conteúdo', () => {
    render(<AfterIcon data-testid="button" />);

    expect(screen.getByTestId('button-icon')).toBeInTheDocument();
    expect(screen.getByTestId('button-content')).toBeInTheDocument();
    expect(screen.getByTestId('button-wrapper')).toHaveStyle('--flex-direction: row;');
  });
});
