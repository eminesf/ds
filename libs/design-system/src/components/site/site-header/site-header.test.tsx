import React from 'react';

import { composeStories, render } from '../../../utils/test';

import * as stories from './site-header.stories';

const { Default } = composeStories(stories);

describe('Header', () => {
  it('deve renderizar', () => {
    render(<Default />);
  });
});
