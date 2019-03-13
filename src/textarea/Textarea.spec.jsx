import React from 'react';
import { render, cleanup } from 'react-testing-library';

import { Textarea } from './index';

afterEach(cleanup);

test('should render', () => {
  const { getByTestId } = render(<Textarea data-testid="c-textarea" />);
  expect(getByTestId('c-textarea')).toBeTruthy();
});

test('should render as disabled', () => {
  const { getByTestId } = render(<Textarea data-testid="c-textarea" disabled />);
  expect(getByTestId('c-textarea').hasAttribute('disabled')).toBeTruthy();
});
