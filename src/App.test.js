import React from 'react';
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils';
import SamuraiJSApp from './App';

test('renders without crashing', () => {
  const div = document.createElement('div')
  act(() => {
    ReactDOM.render(<SamuraiJSApp />, div)
  })
  ReactDOM.unmountComponentAtNode(div)
});
