import React from 'react';

import {
  composeStories,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '../../utils/test';

import * as stories from './modal.stories';

const { Default } = composeStories(stories);

describe('Modal', () => {
  it('deve abrir e fechar', async () => {
    render(<Default data-testid="modal" />);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    // TODO: trocar por "userEvent"
    fireEvent.click(screen.getByTestId('button'));

    await waitFor(() => expect(screen.queryByRole('dialog')).toBeInTheDocument());

    fireEvent.click(screen.getByTestId('modal-close'));

    await waitForElementToBeRemoved(() => screen.queryByRole('dialog'));
  });
});
