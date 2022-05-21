import React from 'react';

import { composeStories, fireEvent, render, screen } from '../../utils/test';

import * as stories from './accordion.stories';

const { Default } = composeStories(stories);

describe('Accordion', () => {
  it('deve abrir e fechar os paineis', () => {
    render(<Default />);

    const [button] = screen.getAllByRole('button');
    const [, region] = screen.getAllByRole('region', { hidden: true });

    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(region).toHaveAttribute('aria-hidden', 'true');

    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(region).toHaveAttribute('aria-hidden', 'false');

    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(region).toHaveAttribute('aria-hidden', 'true');
  });
});
