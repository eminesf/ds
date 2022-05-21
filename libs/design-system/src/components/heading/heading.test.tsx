import React from 'react';

import { composeStories, render } from '../../utils/test';

import * as stories from './heading.stories';

const { Default } = composeStories(stories);

describe('Heading', () => {
  it('deve renderizar', () => {
    render(<Default />);
  });
});
