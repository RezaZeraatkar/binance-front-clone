import React from 'react';
// Components
import SellOrderForm from './SellOrderForm';
import BuyOrderForm from './BuyOrderForm';

// Styles
import OrderFormsWrapper from '../../OrderFormStyles/OrderFormsWrapper';
import OrderForms from '../../OrderFormStyles/OrderForms';
import OrderForm from '../../OrderFormStyles/OrderForm';

export default function Form ({ whichForm }) {
  return (
    <OrderFormsWrapper className='order-forms-wrapper'>
      <OrderForms>
        <OrderForm>
          <BuyOrderForm whichForm={whichForm} />
        </OrderForm>
        <OrderForm>
          <SellOrderForm whichForm={whichForm} />
        </OrderForm>
      </OrderForms>
    </OrderFormsWrapper>
  );
}
