import React from 'react';
import { Tabs } from 'antd';

// Components
import OrderBookWrapper from './OrderBookStyles/OrderBookWrapper';
import SellOrdersList from './SellOrdersList/SellOrdersList';
import BuyOrdersList from './BuyOrdersList/BuyOrdersList';
import Groups from './Groups/groups';

// styles
import TabsWrapper from '../../../../UI/Tabs/TabsWrapper';

// assets
import ordersSvg from '../../../../assets/ordersSvg.svg';
import asksSvg from '../../../../assets/asksSvg.svg';
import bidsSvg from '../../../../assets/bidsSvg.svg';

const { TabPane } = Tabs;

function callback (key) {
  console.log(key);
}

export default function orderBook ({ orderBookData, dailyStatsData }) {
  return (
    <TabsWrapper>
      <Tabs onChange={callback} type='card' defaultActiveKey='1'>
        <TabPane
          tab={
            <input
              type='image'
              src={ordersSvg}
              alt='orders'
              style={{ height: '22px', width: '30px' }}
            />
          }
          key='1'
        >
          <OrderBookWrapper>
            <SellOrdersList
              bids={orderBookData.bids}
              limit={20}
              dailyStats={dailyStatsData}
            />
            <BuyOrdersList
              asks={orderBookData.asks}
              dailyStats={dailyStatsData}
              limit={20}
              show={true}
            />
          </OrderBookWrapper>
        </TabPane>
        <TabPane
          tab={
            <input
              type='image'
              src={asksSvg}
              alt='asks'
              style={{ height: '22px', width: '30px' }}
            />
          }
          key='2'
        >
          <BuyOrdersList
            asks={orderBookData.asks}
            dailyStats={dailyStatsData}
            limit={100}
            show={true}
          />
        </TabPane>
        <TabPane
          tab={
            <input
              type='image'
              src={bidsSvg}
              alt='bids'
              style={{ height: '22px', width: '30px' }}
            />
          }
          key='3'
        >
          <SellOrdersList
            bids={orderBookData.bids}
            dailyStats={dailyStatsData}
            limit={100}
            show={true}
          />
        </TabPane>
      </Tabs>
      {/* Groups */}
      <Groups />
    </TabsWrapper>
  );
}
