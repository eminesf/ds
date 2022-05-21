import React from 'react';

import { composeStories, fireEvent, render, screen, userEvent } from '../../utils/test';

import * as stories from './currency-field.stories';

const { Default, Disabled, WithoutLabel, WithErrorMessage, WithHelperMessage } =
  composeStories(stories);

describe('CurrencyField', () => {
  it('deve formatar o valor corretamente', () => {
    const handleBlur = jest.fn();
    const handleFocus = jest.fn();
    const handleChange = jest.fn();

    render(<Default onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} />);

    const inputEl = screen.getByRole('textbox');

    userEvent.type(inputEl, '133700');
    fireEvent.blur(inputEl);

    expect(handleBlur).toHaveBeenCalled();
    expect(handleFocus).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledTimes(6);
    expect(handleChange.mock.calls[handleChange.mock.calls.length - 1][0]).toBe('1.337,00');
  });

  it('deve renderizar desabilitado', () => {
    const handleChange = jest.fn();

    render(<Disabled onChange={handleChange} />);

    const inputEl = screen.getByRole('textbox');

    userEvent.type(inputEl, '133700');
    fireEvent.blur(inputEl);

    expect(inputEl).toHaveAttribute('disabled');
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('deve renderizar sem o label', () => {
    render(<WithoutLabel value="133700" />);

    expect(screen.getByRole('textbox')).toHaveAttribute('aria-labelledby', 'amount');
  });

  it('deve exibir mensagem de erro', () => {
    render(<WithErrorMessage data-testid="currency-field" />);

    expect(screen.getByTestId('currency-field-error-message')).toBeInTheDocument();
  });

  it('deve exibir mensagem de ajuda', () => {
    render(<WithHelperMessage data-testid="currency-field" />);

    expect(screen.getByTestId('currency-field-helper-message')).toBeInTheDocument();
  });
});
