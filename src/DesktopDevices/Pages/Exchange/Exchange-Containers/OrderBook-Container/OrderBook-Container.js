import React, { Component } from 'react';
import { connect } from 'react-redux';

// component
import OrderBook from '../../Exchange-Components/OrderBook/orderBook';

// Actions
import { getOrderBookAction } from '../../../../../ReduxStore/Actions/getOrderBookAction';

class OrderBookContainer extends Component {
  componentDidMount() {
    this.props.orderBookLoader('BTCUSDT');
    // this.timer = setInterval(() => this.props.orderBookLoader('BTCUSDT'), 1000);
  }
  // componentWillUnmount () {
  //   clearInterval(this.timer);
  //   this.timer = null;
  // }
  render() {
    return this.props.isLoading ? (
      <div>"LOADING"</div>
    ) : (
      <OrderBook
        orderBookData={this.props.orderBookData}
        dailyStatsData={this.props.dailyStatsData}
        isLoading={this.props.isLoading}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    orderBookData: state.orderBook,
    dailyStatsData: state.dailyStats,
    isLoading: state.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    orderBookLoader: symbol => getOrderBookAction(dispatch, symbol),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderBookContainer);
