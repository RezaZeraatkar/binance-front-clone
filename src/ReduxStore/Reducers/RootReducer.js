import { combineReducers } from 'redux';
// reducers
import ExchangedailyStatsReducer from './ExchangeReducers/DailyStats/exhchangeReducers';
import OrderBookReducer from './ExchangeReducers/OrderBook/orderBookReducer';
import cryptoPairsReducer from './ExchangeReducers/cryptoPairs/cryptoPairsReducer';

const rootReducer = combineReducers({
  dailyStats: ExchangedailyStatsReducer,
  orderBook: OrderBookReducer,
  cryptoPairs: cryptoPairsReducer,
});

export default rootReducer;
