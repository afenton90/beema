import React from 'react';
import { render, cleanup } from 'react-testing-library';

import { Select } from './index';

afterEach(cleanup);

test('should render', () => {
  const { getAllByTestId } = render(
    <Select>
      <option data-testid="opt">Option 1</option>
      <option data-testid="opt">Option 2</option>
      <option data-testid="opt">Option 3</option>
    </Select>
  );
  expect(getAllByTestId('opt')).toHaveLength(3);
});
