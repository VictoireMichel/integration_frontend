/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';

jest.mock('../node_modules/react-native/Libraries/BatchedBridge/NativeModules', () => ({
  ToastExample: {
    show: jest.fn(),
  },
}));


it('renders correctly', () => {
  renderer.create(<App />);
});

