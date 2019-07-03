import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { App } from 'components/App';
import { createStore } from 'redux';
import todoApp from './../redux/reducers';
import { Provider } from 'react-redux';

const preloadedState = [];
const store = createStore(todoApp,preloadedState);

export async function serverRenderer() {
  const initialData = {
    appName: 'Reactful',
  };

  const pageData = {
    title: `Hello ${initialData.appName}`,
  };


  return Promise.resolve({
    initialData,
    initialMarkup: ReactDOMServer.renderToString(
      <Provider store={store}>
        <App initialData={initialData} />
      </Provider>
    ),
    pageData,
  });
}
