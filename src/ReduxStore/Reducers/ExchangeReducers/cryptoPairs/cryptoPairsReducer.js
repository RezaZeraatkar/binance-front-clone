import * as actionTypes from '../../../Action_Types/Action_Types';

export default function CryptoPairsReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.GET_CRYPTO_PAIRS_ASYNC:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
