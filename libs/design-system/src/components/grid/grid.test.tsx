import React from 'react';

import { composeStories, render } from '../../utils/test';

import * as stories from './grid.stories';

const { WithAreas } = composeStories(stories);

describe('Grid', () => {
  it('deve renderizar', () => {
    const { rerender } = render(<WithAreas />);

    rerender(<WithAreas width="screen" height="screen" />);
  });
});
