import React from 'react';

import { composeStories, render, screen } from '../../../utils/test';

import * as stories from './app-loader.stories';

const { Default } = composeStories(stories);

describe('AppLoader', () => {
  it('deve renderizar', () => {
    render(<Default />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
