import React from 'react';

import { composeStories, render } from '../../utils/test';

import * as stories from './text.stories';

const { Default } = composeStories(stories);

describe('Text', () => {
  it('deve renderizar', () => {
    render(<Default />);
  });
});
