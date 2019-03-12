import React from 'react';
import { render, cleanup } from 'react-testing-library';

import { Spinner } from './index';

afterEach(cleanup);

test('should render', () => {
  const { getByTestId } = render(<Spinner data-testid="c-spinner" />);
  expect(getByTestId('c-spinner')).toBeTruthy();
});
