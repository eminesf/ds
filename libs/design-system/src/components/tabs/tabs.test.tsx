import React from 'react';

import { composeStories, render, screen, userEvent } from '../../utils/test';

import * as stories from './tabs.stories';

const { Default, Controlled } = composeStories(stories);

describe('Tabs', () => {
  it('deve ser capaz de mudar de tab', () => {
    render(<Default />);

    let tabPanelEl = screen.getByRole('tabpanel');

    expect(tabPanelEl).toHaveTextContent('Veja os Gift Cards disponíveis para compra');

    const secondTab = screen.getAllByRole('tab')[1];

    userEvent.click(secondTab);

    tabPanelEl = screen.getByRole('tabpanel');

    expect(tabPanelEl).toHaveTextContent('Veja seus Gift Cards aqui');
  });

  it('não deve ser capaz de mudar de tab quanto o valor está sendo controlado', () => {
    render(<Controlled />);

    let tabPanelEl = screen.getByRole('tabpanel');

    expect(tabPanelEl).toHaveTextContent('Veja os Gift Cards disponíveis para compra');

    const secondTab = screen.getAllByRole('tab')[1];

    userEvent.click(secondTab);

    tabPanelEl = screen.getByRole('tabpanel');

    expect(tabPanelEl).not.toHaveTextContent('Veja seus Gift Cards aqui');
    expect(tabPanelEl).toHaveTextContent('Veja os Gift Cards disponíveis para compra');
  });
});
