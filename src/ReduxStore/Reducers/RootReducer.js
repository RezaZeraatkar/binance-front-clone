import { combineReducers } from 'redux';
// reducers
import exchangedailyStatsReducer from './ExchangeReducers/DailyStats/exhchangeReducers';
import orderBookReducer from './ExchangeReducers/OrderBook/orderBookReducer';
import cryptoPairsReducer from './ExchangeReducers/cryptoPairs/cryptoPairsReducer';
import tradeHistoryReducer from './ExchangeReducers/TradeHistory/TradeHistoryReducer';

const rootReducer = combineReducers({
  dailyStats: exchangedailyStatsReducer,
  orderBook: orderBookReducer,
  cryptoPairs: cryptoPairsReducer,
  tradeHistory: tradeHistoryReducer,
});

export default rootReducer;
