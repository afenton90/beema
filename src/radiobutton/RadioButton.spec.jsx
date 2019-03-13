import React from 'react';
import { render, cleanup } from 'react-testing-library';

import { RadioButton } from './index';

afterEach(cleanup);

test('should render', () => {
  const { getByTestId } = render(<RadioButton data-testid="c-radiobutton" />);
  expect(getByTestId('c-radiobutton')).toBeTruthy();
});

test('should render as checked', () => {
  const { getByTestId } = render(
    <RadioButton data-testid="c-radiobutton" checked onChange={() => {}} />
  );
  expect(getByTestId('c-radiobutton').hasAttribute('checked')).toBeTruthy();
});
