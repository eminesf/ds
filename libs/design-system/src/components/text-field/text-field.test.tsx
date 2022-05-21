import React from 'react';

import { composeStories, fireEvent, render, screen, userEvent } from '../../utils/test';

import * as stories from './text-field.stories';

const { Default, Disabled, WithoutLabel, WithErrorMessage, WithHelperMessage, WithIcon } =
  composeStories(stories);

describe('TextField', () => {
  it('deve preencher', () => {
    const handleBlur = jest.fn();
    const handleFocus = jest.fn();
    const handleChange = jest.fn();

    render(<Default onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} />);

    const inputEl = screen.getByRole('textbox');

    userEvent.type(inputEl, 'Bruno Mars');
    fireEvent.blur(inputEl);

    expect(handleBlur).toHaveBeenCalled();
    expect(handleFocus).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledTimes(10);
    expect(handleChange.mock.calls[handleChange.mock.calls.length - 1][0]).toBe('Bruno Mars');
  });

  it('deve renderizar desabilitado', () => {
    const handleChange = jest.fn();

    render(<Disabled onChange={handleChange} />);

    const inputEl = screen.getByRole('textbox');

    userEvent.type(inputEl, 'Bruno Mars');
    fireEvent.blur(inputEl);

    expect(inputEl).toHaveAttribute('disabled');
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('deve renderizar sem o label', () => {
    render(<WithoutLabel value="Bruno Mars" />);

    expect(screen.getByRole('textbox')).toHaveAttribute('aria-labelledby', 'name');
  });

  it('deve exibir mensagem de erro', () => {
    render(<WithErrorMessage data-testid="text-field" />);

    expect(screen.getByTestId('text-field-error-message')).toBeInTheDocument();
  });

  it('deve exibir mensagem de ajuda', () => {
    render(<WithHelperMessage data-testid="text-field" />);

    expect(screen.getByTestId('text-field-helper-message')).toBeInTheDocument();
  });

  it('deve exibir ícone caso a prop seja passada', () => {
    render(<WithIcon data-testid="text-field" />);

    expect(screen.getByTestId('text-field-icon')).toBeInTheDocument();
  });
});
