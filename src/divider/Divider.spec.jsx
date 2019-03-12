import React from 'react';
import { render, cleanup } from 'react-testing-library';

import { Divider } from './index';

afterEach(cleanup);

test('should render', () => {
  const { getByTestId } = render(<Divider data-testid="c-divider" />);
  expect(getByTestId('c-divider')).toBeTruthy();
});
