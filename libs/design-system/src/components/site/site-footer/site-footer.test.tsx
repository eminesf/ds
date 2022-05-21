import React from 'react';

import { composeStories, render } from '../../../utils/test';

import * as stories from './site-footer.stories';

const { Default } = composeStories(stories);

describe('SiteFooter', () => {
  it('deve renderizar', () => {
    render(<Default />);
  });
});
