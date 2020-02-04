import React from 'react';
import { Tabs } from 'antd';
// import { Scrollbars } from 'react-custom-scrollbars';

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

function callback(key) {
  // console.log(key);
}

export default function orderBook({ orderBookData, dailyStatsData }) {
  return (
    <TabsWrapper className="tabs-wrapper">
      <Tabs onChange={callback} type="card" defaultActiveKey="1">
        <TabPane
          tab={
            <input
              type="image"
              src={ordersSvg}
              alt="orders"
              style={{ height: '22px', width: '30px' }}
            />
          }
          key="1"
        >
          <OrderBookWrapper className="order-book-wrapper">
            <SellOrdersList
              asks={orderBookData.asks}
              limit={24}
              dailyStats={dailyStatsData}
              showTableHeader={true}
              noScroll
              header={true}
            />
            <BuyOrdersList
              bids={orderBookData.bids}
              dailyStats={dailyStatsData}
              limit={24}
              showLastChangeStats={true}
              noScroll
              header={false}
            />
          </OrderBookWrapper>
        </TabPane>
        <TabPane
          tab={
            <input
              type="image"
              src={asksSvg}
              alt="asks"
              style={{ height: '22px', width: '30px' }}
            />
          }
          key="2"
        >
          <OrderBookWrapper className="order-book-wrapper">
            <BuyOrdersList
              bids={orderBookData.bids}
              dailyStats={dailyStatsData}
              limit={100}
              showLastChangeStats={true}
              noScroll
              fixedHeader
              header={true}
            />
          </OrderBookWrapper>
        </TabPane>
        <TabPane
          tab={
            <input
              type="image"
              src={bidsSvg}
              alt="bids"
              style={{ height: '22px', width: '30px' }}
            />
          }
          key="3"
        >
          <OrderBookWrapper className="order-book-wrapper">
            <SellOrdersList
              asks={orderBookData.asks}
              dailyStats={dailyStatsData}
              limit={100}
              showLastChangeStats={true}
              showTableHeader={true}
              noScroll
              fixedFooter
              header={true}
              scrollToBottom={true}
            />
          </OrderBookWrapper>
        </TabPane>
      </Tabs>
      {/* Groups */}
      <Groups />
    </TabsWrapper>
  );
}
