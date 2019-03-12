import React from 'react';
import { render, cleanup } from 'react-testing-library';

import { DotNav, DotNavItem } from './index';

afterEach(cleanup);

test('should render', () => {
  const { getAllByTestId } = render(
    <DotNav>
      {[1, 2, 3].map(item => (
        <DotNavItem data-testid="dot-nav-item" key={item} />
      ))}
    </DotNav>
  );
  expect(getAllByTestId('dot-nav-item')).toHaveLength(3);
});

test('should render as active', () => {
  const { getAllByTestId } = render(
    <DotNav>
      <DotNavItem data-testid="dot-nav-item" active />
    </DotNav>
  );
  expect(getAllByTestId('dot-nav-item')).toBeTruthy();
});
