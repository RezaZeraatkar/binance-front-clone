import * as actionTypes from '../Action_Types/Action_Types';

export const getDailyStatsAction = (dispatch, symbol) =>
  dispatch({ type: actionTypes.GET_DAILY_STATS, symbol });
