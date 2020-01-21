import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import TradingHistory from '../../Exchange-Components/TradingHistory/TradingHistory';

// Actions
import getTradeHistoryAction from '../../../../../ReduxStore/Actions/getTradeHistoryAction';

class TradeHistoryContainer extends Component {
  componentDidMount () {
    this.props.getTradeHistory();
  }
  render () {
    return <TradingHistory tradeHistoryData={this.props.tradeHistoryData} />;
  }
}

function mapStateToProps (state) {
  return {
    tradeHistoryData: state.tradeHistory,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    getTradeHistory: () => getTradeHistoryAction(dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TradeHistoryContainer);
