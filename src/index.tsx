import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import "@fontsource/roboto"


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

