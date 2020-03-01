import * as actionTypes from '../UiActionTypes';

function themeProviderReducer(
  state = { themeMode: actionTypes.LIGHT_MODE },
  action,
) {
  switch (action.type) {
    case actionTypes.LIGHT_MODE:
      return { ...state, themeMode: actionTypes.LIGHT_MODE };
    case actionTypes.DARK_MODE:
      return { ...state, themeMode: actionTypes.DARK_MODE };
    default:
      return {
        ...state,
      };
  }
}
export default themeProviderReducer;
