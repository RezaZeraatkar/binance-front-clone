import React from 'react';
// Components
import SellOrderForm from './OrderForm-Components/SellOrderForm';
import BuyOrderForm from './OrderForm-Components/BuyOrderForm';

// Styles
import OrderFormsWrapper from './OrderFormStyles/OrderFormsWrapper';
import OrderForms from './OrderFormStyles/OrderForms';
import OrderForm from './OrderFormStyles/OrderForm';

export default function LimitForm () {
  return (
    <OrderFormsWrapper className='order-forms-wrapper'>
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
