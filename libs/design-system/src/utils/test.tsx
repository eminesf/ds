import React from 'react';
import { render as testingLibraryRender } from '@testing-library/react';

import { Provider } from '../components/provider';

type TestingLibraryRenderReturn = ReturnType<typeof testingLibraryRender>;
type TestingLibraryRenderParameters = Parameters<typeof testingLibraryRender>;
type TestingLibraryRenderUi = TestingLibraryRenderParameters[0];
type TestingLibraryRenderOptions = TestingLibraryRenderParameters[1];

export { composeStories } from '@storybook/testing-react';
export * from '@testing-library/react';
export { renderHook } from '@testing-library/react-hooks';
export { default as userEvent } from '@testing-library/user-event';

export function render(
  ui: TestingLibraryRenderUi,
  options?: TestingLibraryRenderOptions,
): TestingLibraryRenderReturn {
  return testingLibraryRender(ui, {
    wrapper: (props) => <Provider data-testid="provider" {...props} />,
    ...options,
  });
}
