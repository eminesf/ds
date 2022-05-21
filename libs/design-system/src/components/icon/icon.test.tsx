import React from 'react';

import { composeStories, render, waitFor } from '../../utils/test';

import * as stories from './icon.stories';

const { Default } = composeStories(stories);

describe('Icon', () => {
  it('deve injetar apenas um script', async () => {
    render(
      <>
        <Default />
        <Default />
      </>,
    );

    let scriptEl;
    let othersScriptEls;

    await waitFor(() => {
      [scriptEl, ...othersScriptEls] = Array.prototype.slice.call(
        document.querySelectorAll('#injected-font'),
      );

      return !scriptEl ? Promise.reject() : Promise.resolve();
    });

    expect(scriptEl).toBeInTheDocument();
    expect(scriptEl).toHaveAttribute('src', 'https://kit.fontawesome.com/c2b0f755b6.js');
    expect(othersScriptEls).toHaveLength(0);
  });
});
