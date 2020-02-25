import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './ReduxStore/ConfigureStore';
// import MobileApp from './MobileDevices/MobileApp';
import DesktopApp from './DesktopDevices/DesktopApp';
import loadPersistedState from './DesktopDevices/utils/loadPersistedState';
import * as serviceWorker from './serviceWorker';

const persistedState = {
  uiState: {
    theme: {
      themeMode: loadPersistedState(),
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
