import React, { Component } from 'react';
import { Tabs } from 'antd';
import { connect } from 'react-redux';

// styles
import TabsWrapper from '../../../../UI/Tabs/TabsWrapper';
// Components
import Favorites from './Favorites/Favorites';

// actions
import getDailyStatsAction from '../../../../../ReduxStore/Actions/getDailyStatsAction';

const { TabPane } = Tabs;
function callback (key) {
  // console.log(key);
}

class CryptoPairsContainer extends Component {
  componentDidMount () {
    this.props.getDailyStats('BTCUSDT');
  }
  render () {
    console.log('[Pairs] ', this.props);

    return (
      <TabsWrapper className='tabs-wrapper'>
        <Tabs onChange={callback} type='card' defaultActiveKey='3'>
          <TabPane tab='favorites' key='1'>
            <Favorites data={this.props.StatsData} />
          </TabPane>
          <TabPane tab='BNB' key='2'></TabPane>
          <TabPane tab='BTC' key='3'></TabPane>
          <TabPane tab='ALTS' key='4'></TabPane>
          <TabPane tab='USD' key='5'></TabPane>
        </Tabs>
      </TabsWrapper>
    );
  }
}

function mapStateToProps (state) {
  return {
    StatsData: state.dailyStats,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    getDailyStats: symbol => getDailyStatsAction(dispatch, symbol),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CryptoPairsContainer);
