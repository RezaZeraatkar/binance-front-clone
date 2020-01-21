import React, { Component } from 'react';
import { connect } from 'react-redux';

// Daily Stats Component
import DailyStats from '../../Exchange-Components/DailyStats/dailyStats';

// Actions
import getDailyStatsAction from '../../../../../ReduxStore/Actions/getDailyStatsAction';

class dailyStats extends Component {
  state = {
    staticData: [
      {
        id: 'lastprice',
        type: 'last_price',
        title: 'Last Price',
      },
      {
        id: '24hchange',
        type: '24h_change',
        title: '24h Change',
      },
      {
        id: '24hhigh',
        type: '24h_high',
        title: '24h High',
      },
      {
        id: '24hlow',
        type: '24h_low',
        title: '24h Low',
      },
      {
        id: '24hvolume',
        type: '24h_volume',
        title: '24h Volume',
      },
    ],
  };
  componentDidMount () {
    this.props.getDailyStats('BTCUSD');
    this.tick = setInterval(() => {
      this.props.getDailyStats('BTCUSD');
    }, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.tick);
  }

  render () {
    return (
      <DailyStats
        dailyStatsData={this.props.dailyStatsData}
        staticData={this.state.staticData}
      />
    );
  }
}

function mapStateToProps (state) {
  return {
    dailyStatsData: state.dailyStats,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    getDailyStats: symbol => getDailyStatsAction(dispatch, symbol),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(dailyStats);
