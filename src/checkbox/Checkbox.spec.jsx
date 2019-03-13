import React from 'react';
import { render, cleanup } from 'react-testing-library';

import { Checkbox } from './index';

afterEach(cleanup);

test('should render', () => {
  const { getByTestId } = render(<Checkbox data-testid="c-checkbox" />);
  expect(getByTestId('c-checkbox')).toBeTruthy();
});

test('should render as checked', () => {
  const { getByTestId } = render(<Checkbox data-testid="c-checkbox" checked onChange={() => {}} />);
  expect(getByTestId('c-checkbox').hasAttribute('checked')).toBeTruthy();
});
