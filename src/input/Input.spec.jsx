import React from 'react';
import { render, cleanup } from 'react-testing-library';

import { Input } from './index';

afterEach(cleanup);

test('should render', () => {
  const { getByTestId } = render(<Input data-testid="c-input" />);
  expect(getByTestId('c-input')).toBeTruthy();
});
