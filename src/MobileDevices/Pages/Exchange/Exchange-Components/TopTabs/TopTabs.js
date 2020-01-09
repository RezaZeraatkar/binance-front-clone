import React, { Component } from 'react';
import { Tabs, Row } from 'antd';
import styled from 'styled-components';
import CurrencyLastChanges from '../CurrencyLastChanges/CurrencyLastChanges';
import FinancialChart from '../FinancialChart/FinancialChart';
import TradeHistory from '../TradeHistory/TradeHistory';
import RegisterOrder from '../RegisterOrder/RegisterOrder';
import FooterOrderButtons from '../FooterOrderButtons/FooterOrderButtons';
import Theme from '../../../../../Theme/ThemeProvider';

const TabsWrapper = styled.div`
  margin-top: 64px;
  & div {
    /* Overriding ant design styles */
    & .ant-tabs-bar {
      background-color: #1f2833;
      color: white;
      margin-bottom: 0px;
      border-bottom: 0px;
    }
    & .ant-tabs-content .ant-tabs-tabpane {
      background-color: #14171a;
    }
    & .ant-tabs-nav-wrap {
      width: 100%;
    }
    & .ant-tabs-nav {
      width: 100%;
      & .ant-tabs-ink-bar {
        background-color: unset;
      }
    }
    & .ant-tabs-nav div {
      text-align: center;
      display: flex;
      justify-content: space-evenly;
      & > .ant-tabs-tab {
        flex-basis: 33%;
        margin-right: 0px;
        &.ant-tabs-tab-active {
          color: ${Theme.Colors.WarningColor};
          border-bottom: 3px solid ${Theme.Colors.WarningColor};
        }
      }
    }
  }
`;
// .ant-tabs-tab
const { TabPane } = Tabs;

export default class TopTabs extends Component {
  callback (key) {
    console.log(key);
  }
  render () {
    return (
      <TabsWrapper>
        <Tabs defaultActiveKey='1' onChange={this.callback}>
          <TabPane tab='Charts' key='1'>
            <Row>
              <CurrencyLastChanges showToggle={this.props.showToggle} />
            </Row>
            <Row>
              <FinancialChart />
            </Row>
            <Row>
              <TradeHistory />
            </Row>
            <FooterOrderButtons />
          </TabPane>
          <TabPane tab='Trade' key='2'>
            <RegisterOrder showToggle={this.props.showToggle} />
          </TabPane>
          <TabPane tab='Open Orders' key='3'>
            Open Orders / My 24h Order History
          </TabPane>
        </Tabs>
      </TabsWrapper>
    );
  }
}
