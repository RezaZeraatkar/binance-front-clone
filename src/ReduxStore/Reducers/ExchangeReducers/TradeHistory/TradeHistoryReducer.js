import * as actionTypes from '../../../Action_Types/Action_Types';

export default function TradeHistoryReducer (state = {}, action) {
  switch (action.type) {
    case actionTypes.GET_TRADE_HISTORY_ASYNC:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
