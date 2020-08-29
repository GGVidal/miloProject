import React from 'react';
import FlatlistItem from '../src/components/FlatlistItem';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<FlatlistItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
