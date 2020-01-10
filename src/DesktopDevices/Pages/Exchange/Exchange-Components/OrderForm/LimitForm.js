import React from 'react';

// Components
import SellOrderForm from './OrderForm-Components/SellOrderForm';
import BuyOrderForm from './OrderForm-Components/BuyOrderForm';

// Styles
import OrderFormsWrapper from './OrderFormStyles/OrderFormsWrapper';
import OrderForms from './OrderFormStyles/OrderForms';
import OrderForm from './OrderFormStyles/OrderForm';

class LimitForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    return (
      <OrderFormsWrapper>
        <OrderForms>
          <OrderForm>
            <BuyOrderForm />
          </OrderForm>
          <OrderForm>
            <SellOrderForm />
          </OrderForm>
        </OrderForms>
      </OrderFormsWrapper>
    );
  }
}

export default LimitForm;
