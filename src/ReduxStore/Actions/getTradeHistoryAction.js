import * as actionTypes from '../Action_Types/Action_Types';

const getTradeHistoryAction = (dispatch, symbol) =>
  dispatch({ type: actionTypes.GET_TRADE_HISTORY, symbol });
export default getTradeHistoryAction;
