/**
 * @format
 */

import 'react-native';
import React from 'react';
import Alert from '../src/components/Alert';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

describe('Alert', () => {
  it('renders', () => {
    shallow(<Alert />);
  });
});
