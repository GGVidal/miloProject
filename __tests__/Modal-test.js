/**
 * @format
 */

import 'react-native';
import React from 'react';
import Modal from '../src/components/Modal';

// Note: test renderer must be required after react-native.
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

describe('Modal', () => {
  it('renders', () => {
    shallow(<Modal />);
  });
});
