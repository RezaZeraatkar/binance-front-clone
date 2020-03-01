import React, { useState } from 'react';
import { Row, Col, Icon } from 'antd';

// Components
import TopTabs from './Exchange-Components/TopTabs/TopTabs';
import CurrencyPairs from './Exchange-Components/CurrencyPairs/CurrencyPairs';

// Styles
import ToggleWrapper from '../../UI/Animations/ToggleWrapper/ToggleWrapper';

const Data = [
  {
    tabName: 'Favorites',
    key: 'Favorites',
    product_name: 'BNB / BTC',
  },
  {
    tabName: 'ALTS',
    key: 'ALTS',
    product_name: 'BNB / BTC',
  },
  {
    tabName: 'BNB',
    key: 'BNB',
    product_name: 'BNB / BTC',
  },
  {
    tabName: 'BTC',
    key: 'BTC',
    product_name: 'BNB / BTC',
  },
  {
    tabName: 'USD$',
    key: 'USD$',
    product_name: 'BNB / BTC',
  },
];

function Exchange (props) {
  const [show, setShow] = useState('down');

  const toggleShowHandler = status => {
    if (status === 'up') {
      return setShow('up');
    } else return setShow('down');
  };

  return (
    <div style={{ userSelect: 'none' }}>
      {/* For Mobile Devices */}
      <Row>
        <Row>
          <Col xs={24} sm={24}>
            <TopTabs showToggle={() => toggleShowHandler('up')} />
          </Col>
          <ToggleWrapper className='pairs-toggle-wrapper' xs={24} toggle={show}>
            <CurrencyPairs
              showToggle={() => toggleShowHandler('down')}
              Data={Data}
            >
              <Icon
                type='up'
                key='down'
                style={{
                  position: 'absolute',
                  top: 8,
                  right: 20,
                  color: 'white',
                  fontSize: '1rem',
                  height: '20px',
                  float: 'right',
                  flex: '0%',
                }}
                onClick={() => toggleShowHandler('down')}
              />
            </CurrencyPairs>
          </ToggleWrapper>
        </Row>
      </Row>
      {/* For Desktop Devices */}
      {/* <div
          style={{
            userSelect: 'none',
          }}
        >
          <Row
            type='flex'
            justify='center'
            style={{ margin: '15px 0' }}
            gutter={4}
          >
            <Col xs={0} sm={0} md={20} lg={15} xl={18}>
              <Row type='flex' justify='start'>
                <Col xs={18} style={{ margin: '10px 0', fontSize: '13px' }}>
                  <CurrencyLastChanges />
                </Col>
                <Col xs={2}>
                  <ThemeMode />
                </Col>
              </Row>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '0 1 308px',
                    marginRight: 4,
                  }}
                >
              <Row>
                <Col xs={0} md={0} lg={8}>
                  <SellOrdersList />
                  <BuyOrdersList />
                </Col>
                <Col xs={24} md={0} lg={16}>
                  <FinancialChart />
                  <RegisterOrder />
                </Col>
              </Row>
              <Row>Open Orders</Row>
              <Row>My 24h Order History</Row>
            </Col>
            <Col xs={0} sm={0} md={0} lg={7} xl={6}>
              <CurrencyPairs />
              <TradeHistory />
              <RecentMarketActs />
            </Col>
          </Row>
        </div> */}
    </div>
  );
}

export default Exchange;
