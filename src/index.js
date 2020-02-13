import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './ReduxStore/ConfigureStore';
import './index.css';
// import MobileApp from './MobileDevices/MobileApp';
import DesktopApp from './DesktopDevices/DesktopApp';
import * as serviceWorker from './serviceWorker';

const getPersitedThemeMode = () => {
  const themeMode = window.localStorage.getItem('theme') || 'LIGHT_MODE';
  return themeMode;
};

const persistedState = {
  uiState: {
    theme: {
      themeMode: getPersitedThemeMode(),
    },
  },
};

const store = configureStore(persistedState);

ReactDOM.render(
  <Provider store={store}>
    <DesktopApp />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
