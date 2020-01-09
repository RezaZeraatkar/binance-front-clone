import React, { Component } from 'react';
import { connect } from 'react-redux';

// component
import OrderBook from './orderBook';

// Actions
import { getOrderBookAction } from '../../../../../ReduxStore/Actions/getOrderBookAction';

class OrderBookContainer extends Component {
  componentDidMount () {
    this.props.orderBookLoader('BTCUSDT');
  }
  render () {
    console.log(this.props);
    return (
      <OrderBook
        orderBookData={this.props.orderBookData}
        dailyStatsData={this.props.dailyStatsData}
      />
    );
  }
}

function mapStateToProps (state) {
  return {
    orderBookData: state.orderBook,
    dailyStatsData: state.dailyStats,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    orderBookLoader: symbol => getOrderBookAction(dispatch, symbol),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderBookContainer);
