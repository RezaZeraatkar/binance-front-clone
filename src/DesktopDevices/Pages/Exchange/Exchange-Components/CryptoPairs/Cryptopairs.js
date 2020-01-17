import React from 'react';
import { Tabs } from 'antd';

// styles
import TabsWrapper from '../../../../UI/Tabs/TabsWrapper';
// Components
import Favorites from '../../Exchange-Components/CryptoPairs/Favorites/Favorites';

const { TabPane } = Tabs;

function callback(key) {
  // console.log(key);
}

export default function Cryptopairs({ pairsData }) {
  return (
    <TabsWrapper className="tabs-wrapper">
      <Tabs onChange={callback} type="card" defaultActiveKey="3">
        <TabPane tab="favorites" key="1">
          <Favorites />
        </TabPane>
        <TabPane tab="BNB" key="2"></TabPane>
        <TabPane tab="BTC" key="3"></TabPane>
        <TabPane tab="ALTS" key="4"></TabPane>
        <TabPane tab="USD" key="5"></TabPane>
      </Tabs>
    </TabsWrapper>
  );
}
