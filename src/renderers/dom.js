import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import '../styles/index.scss';

import { createStore } from 'redux';
import todoApp from './../redux/reducers';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;


const store = createStore(todoApp,preloadedState);

const rootElement = document.getElementById('root');
ReactDOM.hydrate(
  <Provider store={store}>
    <App initialData={window.__R_DATA.initialData} />
  </Provider>,
  rootElement
);
