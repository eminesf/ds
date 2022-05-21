import React from 'react';

import { composeStories, render, screen } from '../../utils/test';

import * as stories from './chat-wpp.stories';

const { Default } = composeStories(stories);

describe('ChatWhatsapp', () => {
  it('deve renderizar', () => {
    render(<Default />);

    expect(screen.queryByTestId('blip-chat-site')).not.toBeInTheDocument();
  });
});
