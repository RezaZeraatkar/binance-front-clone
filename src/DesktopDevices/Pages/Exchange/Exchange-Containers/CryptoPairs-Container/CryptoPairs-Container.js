import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';

// Components
import Cryptopairs from '../../Exchange-Components/CryptoPairs/Cryptopairs';

// actions

class CryptoPairsContainer extends Component {
  componentDidMount () {
    axios.get('/pairs').then(response => console.log(response.data));
  }

  render () {
    return <Cryptopairs />;
  }
}

// function mapStateToProps (state) {
//   return {
//     StatsData: state.dailyStats,
//   };
// }

// function mapDispatchToProps (dispatch) {
//   return {
//     getDailyStats: symbol => getDailyStatsAction(dispatch, symbol),
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CryptoPairsContainer);
export default CryptoPairsContainer;
