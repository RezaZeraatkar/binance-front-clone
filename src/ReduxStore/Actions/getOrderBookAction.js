import * as actionTypes from '../Action_Types/Action_Types';

export const getOrderBookAction = (dispatch, symbol) =>
  dispatch({ type: actionTypes.GET_ORDER_BOOK, symbol });
