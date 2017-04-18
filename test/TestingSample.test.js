/* eslint-env browser */
/* global document, it */

import React from 'react';
import ReactDOM from 'react-dom';
import TestingSample from './TestingSample';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestingSample />, div);
});
