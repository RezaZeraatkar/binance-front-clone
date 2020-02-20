import React, { useState } from 'react';
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
import styled from 'styled-components';

const SvgWrraper = styled.div`
  border: 1px solid
    ${props => (props.active ? '#f5bc00' : props.theme.colors.border.primary)};
`;

function Svg({ children }) {
  const Wrapper = styled.span`
    height: 22px;
    & input {
      height: 22px;
      width: 30px;
      padding: 1px;
      margin-bottom: 3px;
      :focus {
        outline: none;
      }
    }
  `;
  return <Wrapper>{children}</Wrapper>;
}

const { TabPane } = Tabs;

const OrderBook = ({ orderBookData, dailyStatsData }) => {
  const [activeKey, setActiveKey] = useState('1');
  function callback(key) {
    setActiveKey(key);
  }

  return (
    <TabsWrapper className="tabs-wrapper">
      <Tabs onChange={callback} type="card" defaultActiveKey={activeKey}>
        <TabPane
          tab={
            <SvgWrraper active={activeKey === '1'}>
              <Svg>
                <input type="image" src={ordersSvg} alt="orders" />
              </Svg>
            </SvgWrraper>
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
            <SvgWrraper active={activeKey === '2'}>
              <Svg>
                <input type="image" src={asksSvg} alt="asks" />
              </Svg>
            </SvgWrraper>
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
            <SvgWrraper active={activeKey === '3'}>
              <Svg>
                <input type="image" src={bidsSvg} alt="asks" />
              </Svg>
            </SvgWrraper>
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
              scrollToBottom="true"
            />
          </OrderBookWrapper>
        </TabPane>
      </Tabs>
      {/* Groups */}
      <Groups />
    </TabsWrapper>
  );
};

export default OrderBook;
