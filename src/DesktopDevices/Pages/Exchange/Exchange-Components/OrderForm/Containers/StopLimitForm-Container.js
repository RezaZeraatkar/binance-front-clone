import React, { Component } from 'react';
import Form from '../OrderForm-Components/Form/Form';

// Form Types
import FormTypes from '../FormTypes';

export default class StopLimitForm extends Component {
  render () {
    return <Form whichForm={FormTypes.STOP_LIMIT} />;
  }
}
