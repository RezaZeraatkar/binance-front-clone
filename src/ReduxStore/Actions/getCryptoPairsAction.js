import * as actionTypes from '../Action_Types/Action_Types';

const getCryptoPairsAction = dispatch =>
  dispatch({ type: actionTypes.GET_CRYPTO_PAIRS });

export default getCryptoPairsAction;
