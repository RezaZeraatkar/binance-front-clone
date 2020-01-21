import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../../Action_Types/Action_Types';

function * addTradeHistoryToStore (action) {
  // action.payload is accessible here!
  // console.log(action.symbol);
  try {
    const tradeHistoryData = yield call(() =>
      axios.get('/recent-trades').then(response => response.data),
    );
    // dispatch action to reducer
    yield put({
      type: actionTypes.GET_TRADE_HISTORY_ASYNC,
      payload: tradeHistoryData,
    });
  } catch (err) {
    console.log('[GET_TRADE_HISTORY_ERROR]: ', err);
  }
}

export default addTradeHistoryToStore;
