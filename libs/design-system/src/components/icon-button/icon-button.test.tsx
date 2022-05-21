import React from 'react';

import { composeStories, render, screen } from '../../utils/test';

import * as stories from './icon-button.stories';

const { Default } = composeStories(stories);

describe('IconButton', () => {
  it('deve renderizar com sucesso', () => {
    render(<Default />);

    expect(screen.getByRole('button', { name: 'Notificações' })).toBeInTheDocument();
  });
});
