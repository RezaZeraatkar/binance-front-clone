// Third Party Libs
import React, { Component } from 'react';
import { Row } from 'antd';

// Exchange-Components
import InfoBar from './Exchange-Components/InfoBar/InfoBar';
import OrderBook from './Exchange-Components/OrderBook/OrderBook-Container';
import Chart from './Exchange-Components/Chart/Chart';
import OrderForm from './Exchange-Components/OrderForm/OrderForm';
import CryptoPairs from './Exchange-Components/CryptoPairs/CryptoPairs-Container';
import TradingHistory from './Exchange-Components/TradingHistory/TradingHistory';

// Exchange-Containers
import DailyStats from './Exchange-Containers/DailyStats-Container/dailyStats-Container';

// Styles
import StyledExchange from './StyledExchange/StyledExchange';
import ExchangeContentWrapper from './StyledExchange/ExchangeContentWrapper';
import Container from './StyledExchange/Container';
import ExchangeContent from './StyledExchange/ExchangeContent';
import ExchangeLeftContent from './StyledExchange/ExchangeLeftContent';
import ExchangeRightContent from './StyledExchange/ExchangeRightContent';
import ChartAndFormsWrapper from './StyledExchange/ChartAndFormsWrapper';

class Exchange extends Component {
  state = {
    themeMode: 'light',
  };

  render () {
    return (
      <StyledExchange className='ds-styled-exchange'>
        {/* Info Bar */}
        <Row>
          <InfoBar />
        </Row>
        {/* Dailystats | orderbooks | Chart | orderforms | CryptoPairs | Trading History | Recent Market Acts
                      |         open orders   |    my 24h order history
          */}
        <ExchangeContentWrapper themeMode={this.state.themeMode}>
          {/* Dailystats | orderbooks | Chart | orderforms | CryptoPairs | Trading History | Recent Market Acts */}
          <ExchangeContent>
            {/* Dailystats | orderbooks | Chart | orderforms */}
            <ExchangeLeftContent>
              <Row>
                <Row>
                  <DailyStats />
                </Row>
                <Row>
                  <Container>
                    <OrderBook />
                    <ChartAndFormsWrapper>
                      <Chart />
                      <OrderForm />
                    </ChartAndFormsWrapper>
                  </Container>
                </Row>
              </Row>
            </ExchangeLeftContent>
            {/* crypto Pairs  | trade history  | recent market activity */}
            <ExchangeRightContent>
              <Row>
                <CryptoPairs />
              </Row>
              <Row>
                <TradingHistory />
              </Row>
              <Row>recent market activity</Row>
            </ExchangeRightContent>
          </ExchangeContent>
          {/* open orders   |    my 24h order history */}
          <div>open orders | my 24h order history</div>
        </ExchangeContentWrapper>
      </StyledExchange>
    );
  }
}

export default Exchange;
