import React from 'react';
import { Tabs } from 'antd';

// Components
import LimitForm from './LimitForm';
import MarketForm from './MarketForm';
import StopLimitForm from './StopLimitForm';

// styles

const { TabPane } = Tabs;

function callback (key) {
  console.log(key);
}

export default function OrderForm () {
  return (
    <Tabs onChange={callback} type='card' defaultActiveKey='1'>
      <TabPane tab='Exchange' key='1'>
        <Tabs onChange={callback} type='card'>
          <TabPane tab='Limit' key='1'>
            <LimitForm />
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
  );
}
