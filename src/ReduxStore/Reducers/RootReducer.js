import { combineReducers } from 'redux';
// Data reducers
import exchangedailyStatsReducer from './ExchangeReducers/DailyStats/exhchangeReducers';
import orderBookReducer from './ExchangeReducers/OrderBook/orderBookReducer';
import cryptoPairsReducer from './ExchangeReducers/cryptoPairs/cryptoPairsReducer';
import tradeHistoryReducer from './ExchangeReducers/TradeHistory/TradeHistoryReducer';

// UI Reducers
import uiRootReducer from '../Ui/uiRootReducer';

const rootReducer = combineReducers({
  dailyStats: exchangedailyStatsReducer,
  orderBook: orderBookReducer,
  cryptoPairs: cryptoPairsReducer,
  tradeHistory: tradeHistoryReducer,
  uiState: uiRootReducer,
});

export default rootReducer;
