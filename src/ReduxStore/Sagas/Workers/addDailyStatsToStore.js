import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../../Action_Types/Action_Types';

function * addDailyStatsToStore (action) {
  // action.payload is accessible here!
  // console.log(action.symbol);
  try {
    const dailyStatsData = yield call(() =>
      axios.get('/daily-stats').then(response => response.data),
    );
    // dispatch action to reducer
    yield put({
      type: actionTypes.GET_DAILY_STATS_ASYNC,
      payload: dailyStatsData,
    });
  } catch (err) {
    console.log('[GET_DAILY_STATS_ERROR]: ', err);
  }
}

export default addDailyStatsToStore;
