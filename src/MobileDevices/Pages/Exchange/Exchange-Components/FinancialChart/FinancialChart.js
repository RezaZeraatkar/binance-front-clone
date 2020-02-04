import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import styled from 'styled-components';

const { TabPane } = Tabs;
const CardTabsWrapperFinancial = styled.div`
  margin-top: 10px;
  & div {
    display: block;
    &.ant-tabs .ant-tabs-bar .ant-tabs-nav-container {
      color: #999999;
      background-color: #1d2226;
    }
    &.ant-tabs .ant-tabs-content {
      height: auto;
    }

    &.ant-tabs .ant-tabs-bar .ant-tabs-nav-container .ant-tabs-nav > div {
      display: flex;
      justify-content: flex-start;

      & .ant-tabs-tab {
        background-color: #1d2226;
        border: 1px solid #2c343c;
        border-top: 0px;
        border-bottom: 0px;
        &:not(:first-child) {
          border-right: 0px;
        }
        &:not(:nth-child(2)) {
          border-right: 0px;
        }
        margin: 0px;
        padding: 0px;
        border-radius: 0px;
        flex-basis: 25%;
        &.ant-tabs-tab-active {
          background-color: #191d21;
        }
      }
    }
  }
`;
// Icon Wrapper Component
function IconWrapper(props) {
  return (
    <span>
      <Icon type={props.type} style={{ fontSize: '1rem' }} />
      {props.children}
    </span>
  );
}

export default class FinancialChart extends Component {
  callback(key) {
    console.log(key);
  }
  render() {
    return (
      <CardTabsWrapperFinancial className="ant-tabs-chart">
        <Tabs onChange={this.callback} type="card">
          <TabPane
            tab={<IconWrapper type="bar-chart">Candle</IconWrapper>}
            key="1"
          >
            <span style={{ color: 'white' }}>Chart</span>
            <br />
            <span style={{ color: 'white' }}>Chart</span>
            <br />
            <span style={{ color: 'white' }}>Chart</span>
            <br />
            <span style={{ color: 'white' }}>Chart</span>
            <br />
            <span style={{ color: 'white' }}>Chart</span>
            <br />
            <span style={{ color: 'white' }}>Chart</span>
            <br />
            <span style={{ color: 'white' }}>Chart</span>
            <br />
            <span style={{ color: 'white' }}>Chart</span>
            <br />
            <span style={{ color: 'white' }}>Chart</span>
            <br />
            <span style={{ color: 'white' }}>Chart</span>
            <br />
            <span style={{ color: 'white' }}>Chart</span>
            <br />
          </TabPane>
          <TabPane
            tab={<IconWrapper type="area-chart">Depth</IconWrapper>}
            key="2"
          >
            <span style={{ color: 'white' }}>Depth</span>
          </TabPane>
        </Tabs>
      </CardTabsWrapperFinancial>
    );
  }
}
