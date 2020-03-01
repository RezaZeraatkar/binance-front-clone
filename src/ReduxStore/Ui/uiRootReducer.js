import { combineReducers } from 'redux';
import themeProviderReducer from './ThemeProvider/reducers';

const uiRootReducer = combineReducers({
  theme: themeProviderReducer,
});

export default uiRootReducer;
