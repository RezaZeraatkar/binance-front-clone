import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Cryptopairs from '../../Exchange-Components/CryptoPairs/Cryptopairs';

// actions
import getCryptoPairsAction from '../../../../../ReduxStore/Actions/getCryptoPairsAction';

class CryptoPairsContainer extends Component {
  componentDidMount() {
    this.props.getCryptoPairs();
  }

  render() {
    return <Cryptopairs pairsData={this.props.pairsData} />;
  }
}

function mapStateToProps(state) {
  return {
    pairsData: state.cryptoPairs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCryptoPairs: () => getCryptoPairsAction(dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CryptoPairsContainer);
