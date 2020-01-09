import { all, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../Action_Types/Action_Types';

// sagas workers === action creators
function * addDailyStatsToStore (action) {
  // action.payload is accessible here!
  // console.log(action.symbol);
  try {
    const dailyStatsData = yield axios
      .get('/daily-stats')
      .then(response => response.data);
    // dispatch action to reducer
    yield put({
      type: actionTypes.GET_DAILY_STATS_ASYNCH,
      payload: dailyStatsData,
    });
  } catch (err) {
    console.log('[GET_DAILY_STATS_ERROR]: ', err);
  }
}

function * addOrderBookToStore (action) {
  try {
    const orderBook = yield axios
      .get('/order-book')
      .then(response => response.data);
    yield put({
      type: actionTypes.GET_ORDER_BOOK_ASYNCH,
      payload: orderBook,
    });
  } catch (err) {
    console.log('[GET_ORDER_BOOK_ERROR]: ', err);
  }
}

export default function * rootSaga () {
  yield all([
    takeLatest(actionTypes.GET_DAILY_STATS, addDailyStatsToStore),
    takeLatest(actionTypes.GET_ORDER_BOOK, addOrderBookToStore),
  ]);
}
