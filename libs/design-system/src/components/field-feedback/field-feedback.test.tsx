import React from 'react';

import { composeStories, render, screen } from '../../utils/test';

import * as stories from './field-feedback.stories';

const { Default, Invalid } = composeStories(stories);

describe('FieldFeedback', () => {
  it('deve renderizar variante padrão', () => {
    render(<Default data-testid="field-feedback" />);

    const el = screen.getByTestId('field-feedback');

    expect(el).not.toHaveAttribute('aria-live');
    expect(el).toHaveAttribute('aria-labelledby', 'label-reference');
  });

  it('deve renderizar variante inválida', () => {
    render(<Invalid data-testid="field-feedback" />);

    const el = screen.getByTestId('field-feedback');

    expect(el).toHaveAttribute('aria-live', 'assertive');
    expect(el).toHaveAttribute('aria-labelledby', 'label-reference');
  });
});
