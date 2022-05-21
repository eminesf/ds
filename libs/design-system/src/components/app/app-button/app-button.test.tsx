import React from 'react';

import { composeStories, fireEvent, render, screen } from '../../../utils/test';

import * as stories from './app-button.stories';

const { Floated } = composeStories(stories);

describe('Button', () => {
  it('deve flutuar ao focar em um elemento e voltar ao normal após desfoca-lo', () => {
    render(<Floated />);

    const inputEl = screen.getByRole('textbox');
    const buttonEl = screen.getByRole('button');

    expect(buttonEl).not.toHaveClass('-floated');

    fireEvent.focus(inputEl);

    expect(buttonEl).toHaveClass('-floated');

    fireEvent.click(document);

    expect(buttonEl).not.toHaveClass('-floated');
  });
});
