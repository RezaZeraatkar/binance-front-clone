import React from 'react';
import { Tabs } from 'antd';

// Components
import LimitFormContainer from './LimitForm-Container';
import MarketForm from './MarketForm';
import StopLimitForm from './StopLimitForm';

// styles
import OrderFormsContainer from './OrderFormStyles/OrderFormsContainer';

const { TabPane } = Tabs;

function callback (key) {
  console.log(key);
}

export default function OrderForm () {
  return (
    <OrderFormsContainer className='order-forms-container'>
      <Tabs
        onChange={callback}
        type='card'
        defaultActiveKey='1'
        className='top-tab'
      >
        <TabPane tab='Exchange' key='1'>
          <Tabs
            onChange={callback}
            type='card'
            className='order-form-tabs-container'
          >
            <TabPane tab='Limit' key='1'>
              <LimitFormContainer />
            </TabPane>
            <TabPane tab='Market' key='2'>
              <MarketForm />
            </TabPane>
            <TabPane tab='Stop-Limit' key='3'>
              <StopLimitForm />
            </TabPane>
          </Tabs>
        </TabPane>
      </Tabs>
    </OrderFormsContainer>
  );
}
