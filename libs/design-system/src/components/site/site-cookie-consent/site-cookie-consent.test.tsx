import React from 'react';

import { composeStories, fireEvent, render, screen } from '../../../utils/test';

import * as stories from './site-cookie-consent.stories';

const { Default } = composeStories(stories);

describe('SiteCookieConsent', () => {
  it('deve renderizar conteúdo após aceite dos termos', () => {
    render(<Default />);

    expect(screen.queryByText('Reiniciar')).not.toBeInTheDocument();

    const buttonEl = screen.getByRole('button');

    fireEvent.click(buttonEl);

    expect(screen.queryByText('Reiniciar')).toBeInTheDocument();
  });
});
