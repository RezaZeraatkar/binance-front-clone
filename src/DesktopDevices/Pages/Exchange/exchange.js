// Third Party Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Row } from 'antd';

// Exchange-Components
import InfoBar from './Exchange-Components/InfoBar/InfoBar';
import Chart from './Exchange-Components/Chart/Chart';
import OrderForm from './Exchange-Components/OrderForm/OrderForm';
import RecentMarketActivity from './Exchange-Components/RecentMarketActivity/RecentMarketActivity';

// Exchange-Containers
import DailyStatsContainer from './Exchange-Containers/DailyStats-Container/dailyStats-Container';
import OrderBookContainer from './Exchange-Containers/OrderBook-Container/OrderBook-Container';
import CryptoPairsContainer from './Exchange-Containers/CryptoPairs-Container/CryptoPairs-Container';
import TradeHistoryContainer from './Exchange-Containers/TradeHistory-Container/TradeHistory-Container';

// Actions
import ThemeProviderAction from '../../../ReduxStore/Ui/ThemeProvider/actions';

// Styles
import { GlobalStyles } from '../../../Theme/GlobalTheme/globalStyles';
import { darkMode, lightMode } from '../../../Theme';
import StyledExchange from './StyledExchange/StyledExchange';
import ExchangeContentWrapper from './StyledExchange/ExchangeContentWrapper';
import Container from './StyledExchange/Container';
import ExchangeContent from './StyledExchange/ExchangeContent';
import ExchangeLeftContent from './StyledExchange/ExchangeLeftContent';
import ExchangeRightContent from './StyledExchange/ExchangeRightContent';
import ChartAndFormsWrapper from './StyledExchange/ChartAndFormsWrapper';

class Exchange extends Component {
  render() {
    const themeMode =
      this.props.themeMode === 'LIGHT_MODE' ? lightMode : darkMode;
    return (
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <StyledExchange className="ds-styled-exchange">
          {/* Info Bar */}
          <Row type="flex" style={{ width: '100%' }}>
            <InfoBar />
          </Row>
          {/* Dailystats | orderbooks | Chart | orderforms | CryptoPairs | Trading History | Recent Market Acts
                      |         open orders   |    my 24h order history
          */}
          <ExchangeContentWrapper>
            {/* Dailystats | orderbooks | Chart | orderforms | CryptoPairs | Trading History | Recent Market Acts */}
            <ExchangeContent>
              {/* Dailystats | orderbooks | Chart | orderforms */}
              <ExchangeLeftContent>
                <Row>
                  <Row>
                    <DailyStatsContainer
                      dispatchThemeProvider={this.props.dispatchThemeProvider}
                    />
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
                <Row>
                  <RecentMarketActivity />
                </Row>
              </ExchangeRightContent>
            </ExchangeContent>
            {/* open orders   |    my 24h order history */}
            <div>open orders | my 24h order history</div>
          </ExchangeContentWrapper>
        </StyledExchange>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    themeMode: state.uiState.theme.themeMode,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchThemeProvider: mode => ThemeProviderAction(dispatch, mode),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Exchange);
