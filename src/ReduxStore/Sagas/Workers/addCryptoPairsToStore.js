import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../../Action_Types/Action_Types';

function * addCryptoPairsToStore (action) {
  try {
    const cryptoPairs = yield call(() =>
      axios.get('./pairs').then(response => response.data),
    );
    yield put({
      type: actionTypes.GET_CRYPTO_PAIRS_ASYNC,
      payload: cryptoPairs,
    });
  } catch (err) {
    console.log('[GET_CRYPTO_PAIRS_ERROR]: ', err);
  }
}

export default addCryptoPairsToStore;
