import React from 'react';

import { composeStories, render, screen, userEvent, within } from '../../utils/test';

import * as stories from './radio.stories';

const {
  Default,
  Disabled,
  Highlighted,
  WithoutLabel,
  WithDescription,
  WithErrorMessage,
  WithHelperMessage,
  HighlightedOptions,
  WithDescriptionHighlighted,
} = composeStories(stories);

describe('Radio > Group', () => {
  it('deve habilitar e desabilitar', () => {
    const handleChange = jest.fn();

    render(<Default onChange={handleChange} />);

    const radioEls = screen.getAllByRole('radio');

    expect(screen.getAllByTestId('radio-label')).toHaveLength(3);

    radioEls.forEach((el) => expect(el).toHaveProperty('checked', false));

    userEvent.click(radioEls[0]);

    expect(radioEls[0]).toHaveProperty('checked', true);
    expect(handleChange).toBeCalledWith('1');

    expect(radioEls[1]).toHaveProperty('checked', false);

    userEvent.click(radioEls[1]);

    expect(radioEls[1]).toHaveProperty('checked', true);
    expect(handleChange).toBeCalledWith('2');

    expect(radioEls[0]).toHaveProperty('checked', false);
  });

  it('deve renderizar elemento destacado', () => {
    render(<Highlighted />);

    expect(screen.getByTestId('radio-highlighted-message')).toBeInTheDocument();
  });

  it('deve renderizar elementos com destaque', () => {
    render(<HighlightedOptions />);

    expect(screen.queryAllByTestId('radio-label')).toHaveLength(0);
    expect(screen.getAllByTestId('radio-highlighted-label')).toHaveLength(3);
  });

  it('deve renderizar elementos desabilitados', () => {
    const handleChange = jest.fn();

    [
      <Disabled onChange={handleChange} />,
      <Highlighted disabled onChange={handleChange} />,
      <HighlightedOptions disabled onChange={handleChange} />,
    ].forEach((component) => {
      const { container } = render(component);

      const radioEls = within(container).getAllByRole('radio');

      expect(radioEls[0]).toHaveAttribute('disabled');
      expect(radioEls[0]).toHaveProperty('checked', false);
      expect(radioEls[1]).toHaveAttribute('disabled');
      expect(radioEls[1]).toHaveProperty('checked', false);

      userEvent.click(radioEls[0]);
      userEvent.click(radioEls[1]);

      expect(radioEls[0]).toHaveProperty('checked', false);
      expect(radioEls[1]).toHaveProperty('checked', false);
    });

    expect(handleChange).not.toBeCalled();
  });

  it('deve renderizar sem label', () => {
    render(<WithoutLabel />);

    expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-labelledby', 'question');
    expect(screen.getAllByTestId('radio-label')).toHaveLength(3);
  });

  it('deve exibir mensagem de descrição', () => {
    render(<WithDescription />);

    expect(screen.getAllByTestId('radio-description')).toHaveLength(3);
  });

  it('deve exibir mensagem de erro', () => {
    render(<WithErrorMessage data-testid="radio-group" />);

    expect(screen.getByTestId('radio-group-error-message')).toBeInTheDocument();
  });

  it('deve exibir mensagem de ajuda', () => {
    render(<WithHelperMessage data-testid="radio-group" />);

    expect(screen.getByTestId('radio-group-helper-message')).toBeInTheDocument();
  });

  it('deve exibir mensagem de descrição com destaque', () => {
    render(<WithDescriptionHighlighted />);

    expect(screen.getAllByTestId('radio-description')).toHaveLength(3);
  });
});
