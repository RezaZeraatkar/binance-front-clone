import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component
import Exchange from './exchange';

// Actions

class ExchangeContainer extends Component {
  render () {
    return <Exchange />;
  }
}

function mapStateToProps (state) {}

function mapDispatchToProps (dispatch) {
  dispatch();
}

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeContainer);
