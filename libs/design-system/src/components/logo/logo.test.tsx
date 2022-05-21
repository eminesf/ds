import React from 'react';

import { composeStories, render } from '../../utils/test';

import * as stories from './logo.stories';

const { Default, Secondary } = composeStories(stories);

describe('Logo', () => {
  it('deve renderizar variante padrão', () => {
    render(<Default />);
  });

  it('deve renderizar variante secundária', () => {
    render(<Secondary />);
  });
});
