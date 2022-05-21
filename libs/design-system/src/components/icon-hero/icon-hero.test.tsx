import React from 'react';

import { composeStories, render, screen } from '../../utils/test';

import * as stories from './icon-hero.stories';

const { Default } = composeStories(stories);

describe('IconHero', () => {
  it('deve renderizar com sucesso', () => {
    render(<Default />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Não foi possível realizar sua recarga.',
    );

    expect(screen.getByText('Tente novamente mais tarde.')).toBeInTheDocument();
  });
});
