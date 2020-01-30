// Third Party Libs
import React, { Component } from 'react';
import { Row } from 'antd';

// Exchange-Components
import InfoBar from './Exchange-Components/InfoBar/InfoBar';
import Chart from './Exchange-Components/Chart/Chart';
import OrderForm from './Exchange-Components/OrderForm/OrderForm';
import Table from '../../UI/Table/Table';

// Exchange-Containers
import DailyStatsContainer from './Exchange-Containers/DailyStats-Container/dailyStats-Container';
import OrderBookContainer from './Exchange-Containers/OrderBook-Container/OrderBook-Container';
import CryptoPairsContainer from './Exchange-Containers/CryptoPairs-Container/CryptoPairs-Container';
import TradeHistoryContainer from './Exchange-Containers/TradeHistory-Container/TradeHistory-Container';

// Styles
import StyledExchange from './StyledExchange/StyledExchange';
import ExchangeContentWrapper from './StyledExchange/ExchangeContentWrapper';
import Container from './StyledExchange/Container';
import ExchangeContent from './StyledExchange/ExchangeContent';
import ExchangeLeftContent from './StyledExchange/ExchangeLeftContent';
import ExchangeRightContent from './StyledExchange/ExchangeRightContent';
import ChartAndFormsWrapper from './StyledExchange/ChartAndFormsWrapper';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

class Exchange extends Component {
  state = {
    themeMode: 'light',
  };

  render() {
    return (
      <StyledExchange className="ds-styled-exchange">
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
              <Row>
                <TradeHistoryContainer />
              </Row>
              <Row>recent market activity</Row>
            </ExchangeRightContent>
          </ExchangeContent>
          {/* open orders   |    my 24h order history */}
          <div>open orders | my 24h order history</div>
          <Table columns={columns} dataSource={dataSource} />
        </ExchangeContentWrapper>
      </StyledExchange>
    );
  }
}

export default Exchange;
