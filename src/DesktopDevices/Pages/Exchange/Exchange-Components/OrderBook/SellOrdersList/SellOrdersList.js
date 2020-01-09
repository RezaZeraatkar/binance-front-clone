import React from 'react';
import { Table } from 'antd';
import styled from 'styled-components';

// components
import orderBookDataLoader from '../OrderBookDataLoader/orderBookDataLoader';
import OrderBookLastChange from '../OrderBookLastChange/orderBookLastChange';

// styles
import TableWrapper from '../../../../../UI/Table/TableWrapper';

const CustomTableSettings = styled.div`
  & .ant-table-wrapper .ant-table-tbody tr::after {
    position: absolute;
    display: block;
    content: ' ';
    width: 60%;
    height: 20px;
    background-color: rgb(229, 87, 87);
    opacity: 0.1;
    right: 0;
  }
`;

const columns = [
  {
    title: 'Price(USDT)',
    dataIndex: 'price',
  },
  {
    title: 'Amount (BTC)',
    dataIndex: 'amount',
  },
  {
    title: 'Total(USDT)',
    dataIndex: 'total',
  },
];

export default function SellOrdersList (props) {
  return (
    <TableWrapper>
      <CustomTableSettings>
        <Table
          size='small'
          columns={columns}
          pagination={false}
          dataSource={orderBookDataLoader(props)}
          footer={() => (
            <OrderBookLastChange show={props.show} orders={props.dailyStats} />
          )}
        />
      </CustomTableSettings>
    </TableWrapper>
  );
}
