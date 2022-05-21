import React from 'react';

import { composeStories, fireEvent, render, screen } from '../../utils/test';

import * as stories from './card.stories';

const { Default, Highlighted, WithAction, WithCardImage, WithStar } = composeStories(stories);

describe('Button', () => {
  it('deve renderizar', () => {
    render(<Default />);

    expect(screen.queryByTestId('card-highlighted-message')).not.toBeInTheDocument();
  });

  it('deve renderizar com mensagem em destaque', () => {
    render(<Highlighted data-testid="card" />);

    expect(screen.getByTestId('card-highlighted-message')).toBeInTheDocument();
  });

  it('deve renderizar disparar um evento quando clicado', () => {
    const handlePress = jest.fn();

    render(<WithAction onPress={handlePress} />);

    const buttonEl = screen.getByRole('button');

    fireEvent.click(buttonEl);

    expect(handlePress).toBeCalled();
  });

  it('deve renderizar com uma imagem', () => {
    render(<WithCardImage />);

    expect(screen.getByTestId('card-image')).toBeInTheDocument();
  });

  it('deve renderizar com a estrela de favorito', () => {
    render(<WithStar />);

    expect(screen.getByTestId('card-star')).toBeInTheDocument();
  });
});
