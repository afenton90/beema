import React from 'react';
import { render, cleanup } from 'react-testing-library';

import { Badge } from './index';

afterEach(cleanup);

test('should render', () => {
  const { getByText } = render(<Badge>100</Badge>);
  expect(getByText('100')).toBeTruthy();
});
