import React from 'react';

import { composeStories, render, screen, within } from '../../utils/test';

import * as stories from './label-value.stories';
import * as storiesGroup from './label-value-group.stories';

const { Default, Highlighted, WithAction, WithHelper, Card } = composeStories(stories);
const {
  Card: CardGroup,
  Default: DefaultGroup,
  WithAction: WithActionGroup,
} = composeStories(storiesGroup);

describe('LabelValue > LabelValue', () => {
  it('deve renderizar', () => {
    render(<Default />);

    expect(screen.getByTestId('label-value-label')).toBeInTheDocument();
    expect(screen.getByTestId('label-value-value')).toBeInTheDocument();
  });

  it('deve renderizar com ação', () => {
    render(<WithAction />);

    expect(screen.getByTestId('label-value-label')).toBeInTheDocument();
    expect(screen.getByTestId('label-value-value')).toBeInTheDocument();
    expect(screen.getByTestId('label-value-action')).toBeInTheDocument();
  });

  it('deve renderizar variant Card', () => {
    render(<Card />);

    expect(screen.getByTestId('label-value-label')).toBeInTheDocument();
    expect(screen.getByTestId('label-value-value')).toBeInTheDocument();
  });

  it('deve renderizar destacado', () => {
    render(<Highlighted />);

    expect(screen.getByTestId('label-value-label')).toBeInTheDocument();
    expect(screen.getByTestId('label-value-value')).toBeInTheDocument();
  });

  it('deve exibir mensagem de ajuda', () => {
    const { rerender } = render(<WithHelper />);
    rerender(<WithHelper highlighted />);

    expect(screen.getByTestId('label-value-label')).toBeInTheDocument();
    expect(screen.getByTestId('label-value-value')).toBeInTheDocument();
    expect(screen.getByTestId('label-value-helper')).toBeInTheDocument();
  });
});

describe('LabelValue > Group', () => {
  it('deve renderizar variante padrão', () => {
    render(<DefaultGroup />);

    const labelValueEls = screen.getAllByTestId('label-value');
    expect(labelValueEls).toHaveLength(3);

    labelValueEls.forEach((el) => {
      expect(within(el).getByTestId('label-value-label')).toBeInTheDocument();
      expect(within(el).getByTestId('label-value-value')).toBeInTheDocument();
    });
  });

  it('deve renderizar com ação', () => {
    render(<WithActionGroup />);

    const labelValueEls = screen.getAllByTestId('label-value');
    expect(labelValueEls).toHaveLength(3);

    labelValueEls.forEach((el) => {
      expect(within(el).getByTestId('label-value-label')).toBeInTheDocument();
      expect(within(el).getByTestId('label-value-value')).toBeInTheDocument();
      expect(within(el).getByTestId('label-value-action')).toBeInTheDocument();
    });
  });

  it('deve renderizar variante card', () => {
    render(<CardGroup />);

    const labelValueEls = screen.getAllByTestId('label-value');
    expect(labelValueEls).toHaveLength(3);

    labelValueEls.forEach((el) => {
      expect(within(el).getByTestId('label-value-label')).toBeInTheDocument();
      expect(within(el).getByTestId('label-value-value')).toBeInTheDocument();
      expect(within(el).getByTestId('label-value-action')).toBeInTheDocument();
    });
  });
});
