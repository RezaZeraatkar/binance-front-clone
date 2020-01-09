import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import monitorReducersEnhancer from './Enhancers/MonitorReducers';
import loggerMiddleware from './Middlewares/logger';
import rootReducer from './Reducers/RootReducer';
import rootSaga from './Sagas/RootSaga';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore (preloadedState) {
  const middlewares = [sagaMiddleware];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware);
  }
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  sagaMiddleware.run(rootSaga);

  return store;
}
