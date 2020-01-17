import * as actionTypes from '../../../Action_Types/Action_Types';

export default function OrderBookReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.GET_ORDER_BOOK_ASYNC:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
