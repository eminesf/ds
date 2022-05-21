import React from 'react';

import { composeStories, fireEvent, render, screen, userEvent } from '../../utils/test';

import * as stories from './password-field.stories';

const { Default, Disabled, WithoutLabel, WithErrorMessage, WithHelperMessage } =
  composeStories(stories);

describe('PasswordField', () => {
  it('deve formatar esconder e exibir', () => {
    const handleBlur = jest.fn();
    const handleFocus = jest.fn();
    const handleChange = jest.fn();

    render(
      <Default
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        data-testid="password"
      />,
    );

    const inputEl = screen.getByTestId('password-input');

    userEvent.type(inputEl, 'secret-password');
    fireEvent.blur(inputEl);

    expect(handleBlur).toHaveBeenCalled();
    expect(handleFocus).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledTimes(15);
    expect(handleChange.mock.calls[handleChange.mock.calls.length - 1][0]).toBe('secret-password');

    const buttonEl = screen.getByTestId('password-button');

    expect(buttonEl).toHaveAttribute('aria-label', 'Mostrar senha');

    fireEvent.click(buttonEl);

    expect(buttonEl).toHaveAttribute('aria-label', 'Esconder senha');

    fireEvent.click(buttonEl);

    expect(buttonEl).toHaveAttribute('aria-label', 'Mostrar senha');
  });

  it('deve renderizar desabilitado', () => {
    const handleChange = jest.fn();

    render(<Disabled data-testid="password" onChange={handleChange} />);

    const inputEl = screen.getByTestId('password-input');

    userEvent.type(inputEl, 'secret-password');
    fireEvent.blur(inputEl);

    expect(inputEl).toHaveAttribute('disabled');
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('deve renderizar sem o label', () => {
    render(<WithoutLabel data-testid="password" value="secret-password" />);

    expect(screen.getByTestId('password-input')).toHaveAttribute('aria-labelledby', 'password');
  });

  it('deve exibir mensagem de erro', () => {
    render(<WithErrorMessage data-testid="password" />);

    expect(screen.getByTestId('password-error-message')).toBeInTheDocument();
  });

  it('deve exibir mensagem de ajuda', () => {
    render(<WithHelperMessage data-testid="password" />);

    expect(screen.getByTestId('password-helper-message')).toBeInTheDocument();
  });
});
