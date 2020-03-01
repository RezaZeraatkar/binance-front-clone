import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../Action_Types/Action_Types';

// sagas workers === action creators
import addDailyStatsToStore from './Workers/addDailyStatsToStore';
import addOrderBookToStore from './Workers/addOrderBookToStore';
import addCryptoPairsToStore from './Workers/addCryptoPairsToStore';
import addTradeHistoryToStore from './Workers/addTradeHistoryToStore';

export default function* rootSaga() {
  yield all([
    takeLatest(actionTypes.GET_DAILY_STATS, addDailyStatsToStore),
    takeLatest(actionTypes.GET_ORDER_BOOK, addOrderBookToStore),
    takeLatest(actionTypes.GET_CRYPTO_PAIRS, addCryptoPairsToStore),
    takeLatest(actionTypes.GET_TRADE_HISTORY, addTradeHistoryToStore),
  ]);
}
