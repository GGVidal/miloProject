/**
 * @format
 */

import 'react-native';
import React from 'react';
import Searchbar from '../src/components/Searchbar';

// Note: test renderer must be required after react-native.
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

describe('Searchbar', () => {
  it('renders', () => {
    shallow(<Searchbar />);
  });
});
