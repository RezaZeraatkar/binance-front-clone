import React from 'react';
import { Row } from 'antd';

// Exchange-Components
import InfoBar from './Exchange-Components/InfoBar/InfoBar';

// Exchange-Containers
import DailyStats from './Exchange-Components/dailyStats/dailyStats-Container';

// Styles
import StyledExchange from './StyledExchange/StyledExchange';
import ExchangeContentWrapper from './StyledExchange/ExchangeContentWrapper';
import OrderBook from './Exchange-Components/OrderBook/OrderBook-Container';
import Container from './StyledExchange/Container';
import OrderForm from './Exchange-Components/OrderForm/OrderForm';

export default function Exchange () {
  return (
    <StyledExchange className='ds-styled-exchange'>
      {/* Info Bar */}
      <Row>
        <InfoBar />
      </Row>
      <ExchangeContentWrapper>
        <div>
          {/* Dailystats ,orderbooks, Chart, orderforms*/}
          <Row>
            <Row>
              <DailyStats />
            </Row>
            <Row>
              <Container>
                <OrderBook />
                <div>
                  <div style={{ minHeight: '463px' }}>Chart</div>
                  <div>
                    <OrderForm />
                  </div>
                </div>
              </Container>
            </Row>
          </Row>
        </div>
        <div>
          {/* crypto Pairs, trade history, recent market activity */}
          <Row>crypto Pairs</Row>
          <Row> trade history</Row>
          <Row>recent market activity</Row>
        </div>
      </ExchangeContentWrapper>
    </StyledExchange>
  );
}
