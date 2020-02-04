import React, { Component } from 'react';
import styled from 'styled-components';
import { Table, Tabs } from 'antd';
import Theme from '../../../../../Theme/ThemeProvider';
import TableWrapper from '../../../../UI/Table/TableWrapper';
import ColorizedText from '../../../../UI/Typography/Text/ColorizedText';

const { TabPane } = Tabs;

const CardTabsWrapper = styled.div`
  margin-bottom: 20%;
  & div {
    &.ant-tabs .ant-tabs-bar .ant-tabs-nav-container {
      color: #999999;
      background-color: #12161c;
      border-bottom: 2px solid #000;
    }

    &.ant-tabs .ant-tabs-bar .ant-tabs-nav-container .ant-tabs-nav > div {
      display: flex;
      justify-content: space-around;

      & .ant-tabs-tab {
        background-color: #12161c;
        border: 0px;
        border-radius: 0px;
        flex-basis: 25%;
        &.ant-tabs-tab-active {
          background-color: #12161c;
          border-bottom: 4px solid ${Theme.Colors.WarningColor};
        }
      }
    }
  }
`;

const TableCustomSettings = styled.div`
  & .ant-table-wrapper .ant-table-tbody tr {
    text-align: center;
  }
  & .ant-table-wrapper .ant-table-thead tr th {
    text-align: center;
  }
`;

const columns = [
  {
    title: 'Price',
    dataIndex: 'price',
    width: '30%',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    width: '30%',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    width: '30%',
  },
];

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    price: <ColorizedText sign="pos">7,253.32</ColorizedText>,
    amount: <span>0.307198</span>,
    time: <span style={{ color: 'rgba(255,255,255,0.5)' }}>12:29:32</span>,
  });
}
export default class TradeHistory extends Component {
  render() {
    return (
      <CardTabsWrapper className="ant-tabs-trade-history">
        <Tabs onChange={this.callback} type="card">
          <TabPane tab="Trade History" key="1">
            <TableWrapper>
              <TableCustomSettings>
                <Table
                  size="small"
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  // title={() => <b>Trade History</b>}
                />
              </TableCustomSettings>
            </TableWrapper>
          </TabPane>
          <TabPane tab="Trading Analysis" key="2">
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
            <span style={{ color: 'white' }}>Trading Analysis charts</span>
            <br />
          </TabPane>
        </Tabs>
      </CardTabsWrapper>
    );
  }
}
