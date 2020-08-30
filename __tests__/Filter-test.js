/**
 * @format
 */

import 'react-native';
import React from 'react';
import Filter from '../src/components/Filter';

// Note: test renderer must be required after react-native.
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

describe('Filter', () => {
  it('renders', () => {
    shallow(<Filter />);
  });
});
