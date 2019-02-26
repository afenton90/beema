import React from 'react';
import { render, cleanup } from 'react-testing-library';

import { Avatar, AvatarHeading, AvatarImage } from './index';

afterEach(cleanup);

test('should render Avatar', () => {
  const { getByTestId } = render(<Avatar data-testid="avatar" />);
  expect(getByTestId('avatar')).toBeTruthy();
});

test('should render AvatarHeading', () => {
  const { getByText } = render(<AvatarHeading>A header</AvatarHeading>);
  expect(getByText('A header')).toBeTruthy();
});

test('should render AvatarImage', () => {
  const { container } = render(
    <AvatarImage
      data-testid="image"
      src="https://avatars3.githubusercontent.com/u/14904083?s=460&v=4"
    />
  );
  expect(container.getElementsByTagName('img')).toHaveLength(1);
});
