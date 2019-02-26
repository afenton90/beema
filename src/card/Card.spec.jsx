import React from 'react';
import { render, cleanup } from 'react-testing-library';

import { Card, CardBody } from './index';

afterEach(cleanup);

test('should render Card', () => {
  const { getByText } = render(<Card>Testing 123</Card>);
  expect(getByText('Testing 123')).toBeTruthy();
});

test('should render Card in hover state', () => {
  const { getByTestId } = render(
    <Card data-testid="card" hover>
      Testing 123
    </Card>
  );
  expect(getByTestId('card')).toBeTruthy();
});

test('should render CardBody', () => {
  const { getByText } = render(<CardBody>Testing 123</CardBody>);
  expect(getByText('Testing 123')).toBeTruthy();
});
