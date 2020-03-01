import React from 'react';
import Form from '../OrderForm-Components/Form/Form';

// Form Types
import FormTypes from '../FormTypes';

class LimitFormContainer extends React.Component {
  render () {
    return <Form whichForm={FormTypes.LIMIT} />;
  }
}

export default LimitFormContainer;
