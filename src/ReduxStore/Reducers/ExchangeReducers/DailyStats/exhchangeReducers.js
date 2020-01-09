import * as actionTypes from '../../../Action_Types/Action_Types';

export default function ExchangedailyStatsReducer (state = {}, action) {
  switch (action.type) {
    case actionTypes.GET_DAILY_STATS_ASYNCH:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
