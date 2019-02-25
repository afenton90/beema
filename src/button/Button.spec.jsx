import React from 'react';
import { render, cleanup } from 'react-testing-library';

import { Button } from './index';

afterEach(cleanup);

test('should render', () => {
  const { getByText } = render(<Button>Testing 123</Button>);
  expect(getByText('Testing 123')).toBeTruthy();
});
