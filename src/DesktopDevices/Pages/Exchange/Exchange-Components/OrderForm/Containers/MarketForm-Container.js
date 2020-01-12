import React, { Component } from 'react';
import Form from '../OrderForm-Components/Form/Form';

// Form Types
import FormTypes from '../FormTypes';

export default class MarketForm extends Component {
  render () {
    return <Form whichForm={FormTypes.MARKET} />;
  }
}
