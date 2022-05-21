import React from 'react';

import { composeStories, render, screen, userEvent, within } from '../../utils/test';

import * as stories from './checkbox.stories';
import * as storiesGroup from './checkbox-group.stories';

const { Default, Disabled, Highlighted, WithDescription, WithErrorMessage, WithHelperMessage } =
  composeStories(stories);

const {
  Default: DefaultGroup,
  Disabled: DisabledGroup,
  Highlighted: HighlightedGroup,
  WithoutLabel: WithoutLabelGroup,
  WithDescription: WithDescriptionGroup,
  WithErrorMessage: WithErrorMessageGroup,
  WithHelperMessage: WithHelperMessageGroup,
} = composeStories(storiesGroup);

describe('Checkbox > Checkbox', () => {
  it('deve habilitar e desabilitar', () => {
    const handleChange = jest.fn();

    render(<Default data-testid="checkbox" onChange={handleChange} />);

    const checkboxEl = screen.getByRole('checkbox');

    expect(screen.getByTestId('checkbox-label')).toBeInTheDocument();
    expect(checkboxEl).toHaveAttribute('aria-checked', 'false');

    userEvent.click(checkboxEl);

    expect(checkboxEl).toHaveAttribute('aria-checked', 'true');
    expect(handleChange).toBeCalledWith(true);

    userEvent.click(checkboxEl);

    expect(checkboxEl).toHaveAttribute('aria-checked', 'false');
    expect(handleChange).toBeCalledWith(false);
  });

  it('deve renderizar destacado', () => {
    render(<Highlighted data-testid="checkbox" />);

    expect(screen.queryByTestId('checkbox-label')).not.toBeInTheDocument();
    expect(screen.getByTestId('checkbox-highlighted-label')).toBeInTheDocument();
  });

  it('deve renderizar desabilitado', () => {
    const handleChange = jest.fn();

    [
      <Disabled onChange={handleChange} />,
      <Disabled onChange={handleChange} highlighted />,
    ].forEach((el) => {
      const { container } = render(el);

      const checkboxEl = within(container).getByRole('checkbox');

      expect(checkboxEl).toHaveAttribute('disabled');
      expect(checkboxEl).toHaveAttribute('aria-checked', 'false');

      userEvent.click(checkboxEl);

      expect(checkboxEl).toHaveAttribute('aria-checked', 'false');
    });

    expect(handleChange).not.toBeCalled();
  });

  it('deve exibir mensagem de descrição', () => {
    render(<WithDescription data-testid="checkbox" />);

    expect(screen.getByTestId('checkbox-description')).toBeInTheDocument();
  });

  it('deve exibir mensagem de erro', () => {
    render(<WithErrorMessage data-testid="checkbox" />);

    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByTestId('checkbox-error-message')).toBeInTheDocument();
  });

  it('deve exibir mensagem de ajuda', () => {
    render(<WithHelperMessage data-testid="checkbox" />);

    expect(screen.getByRole('checkbox')).not.toHaveAttribute('aria-invalid');
    expect(screen.getByTestId('checkbox-helper-message')).toBeInTheDocument();
  });
});

describe('Checkbox > Group', () => {
  it('deve habilitar e desabilitar', () => {
    const handleChange = jest.fn();

    render(<DefaultGroup onChange={handleChange} />);

    const checkboxEls = screen.getAllByRole('checkbox');

    expect(screen.getAllByTestId('checkbox-label')).toHaveLength(3);
    expect(checkboxEls[0]).toHaveAttribute('aria-checked', 'false');

    userEvent.click(checkboxEls[0]);

    expect(checkboxEls[0]).toHaveAttribute('aria-checked', 'true');
    expect(handleChange).toBeCalledWith(['1']);

    expect(checkboxEls[1]).toHaveAttribute('aria-checked', 'false');

    userEvent.click(checkboxEls[1]);

    expect(checkboxEls[1]).toHaveAttribute('aria-checked', 'true');
    expect(handleChange).toBeCalledWith(['1', '2']);

    userEvent.click(checkboxEls[0]);
    userEvent.click(checkboxEls[1]);

    expect(checkboxEls[0]).toHaveAttribute('aria-checked', 'false');
    expect(checkboxEls[1]).toHaveAttribute('aria-checked', 'false');
    expect(handleChange).toBeCalledWith([]);
  });

  it('deve renderizar elementos com destaque', () => {
    render(<HighlightedGroup />);

    expect(screen.queryAllByTestId('checkbox-label')).toHaveLength(0);
    expect(screen.getAllByTestId('checkbox-highlighted-label')).toHaveLength(3);
  });

  it('deve renderizar elementos desabilitados', () => {
    const handleChange = jest.fn();

    [
      <DisabledGroup onChange={handleChange} />,
      <DisabledGroup onChange={handleChange} highlighted />,
    ].forEach((component) => {
      const { container } = render(component);

      const checkboxEls = within(container).getAllByRole('checkbox');

      expect(checkboxEls[0]).toHaveAttribute('disabled');
      expect(checkboxEls[0]).toHaveAttribute('aria-checked', 'false');
      expect(checkboxEls[1]).toHaveAttribute('disabled');
      expect(checkboxEls[1]).toHaveAttribute('aria-checked', 'false');

      userEvent.click(checkboxEls[0]);
      userEvent.click(checkboxEls[1]);

      expect(checkboxEls[0]).toHaveAttribute('aria-checked', 'false');
      expect(checkboxEls[1]).toHaveAttribute('aria-checked', 'false');
    });

    expect(handleChange).not.toBeCalled();
  });

  it('deve renderizar sem label', () => {
    render(<WithoutLabelGroup />);

    expect(screen.getByRole('group')).toHaveAttribute('aria-labelledby', 'question');
    expect(screen.getAllByTestId('checkbox-label')).toHaveLength(3);
  });

  it('deve exibir mensagem de descrição', () => {
    render(<WithDescriptionGroup />);

    expect(screen.getAllByTestId('checkbox-description')).toHaveLength(3);
  });

  it('deve exibir mensagem de erro', () => {
    render(<WithErrorMessageGroup data-testid="checkbox-group" />);

    const checkboxEls = screen.getAllByRole('checkbox');

    checkboxEls.forEach((el) => {
      expect(el).toHaveAttribute('aria-invalid', 'true');
    });

    expect(screen.getByTestId('checkbox-group-error-message')).toBeInTheDocument();
  });

  it('deve exibir mensagem de ajuda', () => {
    render(<WithHelperMessageGroup data-testid="checkbox-group" />);

    expect(screen.getByTestId('checkbox-group-helper-message')).toBeInTheDocument();
  });
});
