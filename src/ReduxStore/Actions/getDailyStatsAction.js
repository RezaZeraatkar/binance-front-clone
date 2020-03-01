import * as actionTypes from '../Action_Types/Action_Types';

const getDailyStatsAction = (dispatch, symbol) =>
  dispatch({ type: actionTypes.GET_DAILY_STATS, symbol });

export default getDailyStatsAction;
