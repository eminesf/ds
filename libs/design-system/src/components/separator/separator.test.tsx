import React from 'react';

import { composeStories, render, screen } from '../../utils/test';

import * as stories from './separator.stories';

const { Default } = composeStories(stories);

describe('Separator', () => {
  it('deve renderizar', () => {
    render(<Default />);

    expect(screen.getByRole('separator')).toBeInTheDocument();
  });
});
