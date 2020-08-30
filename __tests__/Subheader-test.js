/**
 * @format
 */

import 'react-native';
import React from 'react';
import Subheader from '../src/components/Subheader';

// Note: test renderer must be required after react-native.
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

describe('Subheader', () => {
  it('renders', () => {
    shallow(<Subheader />);
  });
});
