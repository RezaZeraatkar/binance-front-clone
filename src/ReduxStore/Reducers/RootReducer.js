import { combineReducers } from 'redux';
// reducers
import ExchangedailyStatsReducer from './ExchangeReducers/DailyStats/exhchangeReducers';
import OrderBookReducer from './ExchangeReducers/OrderBook/orderBookReducer';

const rootReducer = combineReducers({
  dailyStats: ExchangedailyStatsReducer,
  orderBook: OrderBookReducer,
});

export default rootReducer;
