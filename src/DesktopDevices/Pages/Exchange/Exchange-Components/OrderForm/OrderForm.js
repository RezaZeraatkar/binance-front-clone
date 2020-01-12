import React from 'react';
import { Tabs } from 'antd';

// Components
import LimitFormContainer from './Containers/LimitForm-Container';
import MarketFormContainer from './Containers/MarketForm-Container';
import StopLimitFormContainer from './Containers/StopLimitForm-Container';
import OCOFormContainer from './Containers/OCOForm-Container';
import LimitTabs from './OrderForm-Components/Form/LimitTabs';
import LimitInfo from './OrderForm-Components/LimitInfo/LimitInfo';

// styles
import OrderFormsContainer from './OrderFormStyles/OrderFormsContainer';

const { TabPane } = Tabs;

const STOP_LIMIT_INFO =
  'A Stop-Limit order is an order to buy or sell a coin once the price reaches a specified price.';
const OCO_LIMIT_INFO =
  'OCO order:To place a stop-limit order and a limit order at the same time. When either of the order' +
  +' pairs is triggered, the other order will be cancelled. And if either of the order pairs is cancelled,' +
  'the other order will be cancelled, too.';

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
            tabBarGutter={3}
          >
            <TabPane tab='Limit' key='1'>
              <LimitFormContainer />
            </TabPane>
            <TabPane tab='Market' key='2'>
              <MarketFormContainer />
            </TabPane>
            <TabPane
              tab={
                <LimitTabs
                  text='Stop-limit'
                  infoContent={
                    <LimitInfo
                      text={STOP_LIMIT_INFO}
                      url='https://binance.zendesk.com/hc/en-us/articles/115003372072'
                    />
                  }
                />
              }
              key='3'
            >
              <StopLimitFormContainer />
            </TabPane>
            <TabPane
              tab={
                <LimitTabs
                  text='OCO'
                  infoContent={
                    <LimitInfo
                      text={OCO_LIMIT_INFO}
                      url='https://binance.zendesk.com/hc/en-us/articles/360032822231'
                    />
                  }
                  url=''
                />
              }
              key='4'
            >
              <OCOFormContainer />
            </TabPane>
          </Tabs>
        </TabPane>
      </Tabs>
    </OrderFormsContainer>
  );
}
