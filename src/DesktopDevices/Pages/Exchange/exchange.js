// Third Party Libs
import React, { Component } from 'react';
import { Row } from 'antd';

// Exchange-Components
import InfoBar from './Exchange-Components/InfoBar/InfoBar';
import Chart from './Exchange-Components/Chart/Chart';
import OrderForm from './Exchange-Components/OrderForm/OrderForm';
// import TradingHistory from './Exchange-Components/TradingHistory/TradingHistory';

// Exchange-Containers
import DailyStatsContainer from './Exchange-Containers/DailyStats-Container/dailyStats-Container';
import OrderBookContainer from './Exchange-Containers/OrderBook-Container/OrderBook-Container';
import CryptoPairsContainer from './Exchange-Containers/CryptoPairs-Container/CryptoPairs-Container';

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
                  <DailyStatsContainer />
                </Row>
                <Row>
                  <Container>
                    <OrderBookContainer />
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
                <CryptoPairsContainer />
              </Row>
              <Row>{/* <TradingHistory /> */}</Row>
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
