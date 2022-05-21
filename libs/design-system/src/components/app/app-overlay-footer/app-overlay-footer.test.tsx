import React from 'react';

import { composeStories, render, screen } from '../../../utils/test';

import * as stories from './app-overlay-footer.stories';

const { Default } = composeStories(stories);

describe('AppOverlayFooter', () => {
  it('deve renderizar', () => {
    render(<Default />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Continuar' })).toBeInTheDocument();
  });
});
