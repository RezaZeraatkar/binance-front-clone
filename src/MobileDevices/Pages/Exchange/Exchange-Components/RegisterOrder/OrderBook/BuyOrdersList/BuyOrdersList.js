import React, { Component } from 'react';
import { Table } from 'antd';
import styled from 'styled-components';

// styles
import { OrdersListWrapper } from '../OrderBookStyles/OrdersListWrapper';
import TableWrapper from '../../../../../../UI/Table/TableWrapper';
import ColorizedText from '../../../../../../UI/Typography/Text/ColorizedText';

const CustomTableSettings = styled.div`
  & .ant-table-wrapper .ant-table-thead tr {
    & th {
      display: none;
    }
    & th:not(:first-child) {
      text-align: right;
    }
  }

  & .ant-table-wrapper .ant-table-tbody tr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    border: 0.5px solid transparent;
  }

  & .ant-table-wrapper .ant-table-tbody tr::after {
    position: absolute;
    display: block;
    content: ' ';
    height: 100%;
    width: 40%;
    background-color: #619200;
    opacity: 0.1;
    right: 0;
  }

  & .ant-table-wrapper .ant-table-tbody tr td:not(:first-child) {
    text-align: right;
  }
`;

const columns = [
  {
    dataIndex: 'price',
    width: '50%',
  },
  {
    dataIndex: 'amount',
    width: '50%',
  },
];

const data = [];
for (let i = 0; i < 9; i++) {
  data.push({
    key: i,
    price: <ColorizedText sign="pos">0.00000462</ColorizedText>,
    amount: `192.18`,
  });
}

export default class SellOrdersList extends Component {
  render() {
    return (
      <OrdersListWrapper>
        <TableWrapper>
          <CustomTableSettings>
            <Table
              size="small"
              columns={columns}
              dataSource={data}
              pagination={false}
              // title={() => <b>Trade History</b>}
            />
          </CustomTableSettings>
        </TableWrapper>
      </OrdersListWrapper>
    );
  }
}
