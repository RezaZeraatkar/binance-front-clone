import React, { Component } from 'react';
import { connect } from 'react-redux';

// Daily Stats Component
import DailyStats from './dailyStats';

// Actions
import { getDailyStatsAction } from '../../../../../ReduxStore/Actions/getDailyStatsAction';

class dailyStats extends Component {
  componentDidMount () {
    this.props.DailyStatsLoader('BTCUSD');
  }
  render () {
    return <DailyStats dailyStatsData={this.props.dailyStatsData} />;
  }
}

function mapStateToProps (state) {
  return {
    dailyStatsData: state.dailyStats,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    DailyStatsLoader: symbol => getDailyStatsAction(dispatch, symbol),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(dailyStats);
