import React from 'react';
import ReactDOM from 'react-dom';


import TOS from './TOS';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TOS />, div);
  ReactDOM.unmountComponentAtNode(div);
});
