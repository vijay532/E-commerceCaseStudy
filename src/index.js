import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';

import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>,
  document.getElementById('root')
);
