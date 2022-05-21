import React from 'react';

import { composeStories, render } from '../../utils/test';

import * as stories from './flex.stories';

const { Default } = composeStories(stories);

describe('Flex', () => {
  it('deve renderizar', () => {
    const { rerender } = render(<Default />);

    rerender(<Default width="screen" height="screen" />);
  });
});
