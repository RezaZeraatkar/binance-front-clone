import * as actionTypes from '../../../Action_Types/Action_Types';

export default function OrderBookReducer(state = { isLoading: true }, action) {
  switch (action.type) {
    case actionTypes.GET_ORDER_BOOK_DATA:
      return { ...state };
    case actionTypes.GET_ORDER_BOOK_ASYNC:
      return { ...state, ...action.payload, isLoading: false };
    default:
      return state;
  }
}
