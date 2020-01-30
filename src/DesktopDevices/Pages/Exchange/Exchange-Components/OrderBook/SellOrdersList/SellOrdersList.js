import React from 'react';
import { Table } from 'antd';
import styled from 'styled-components';

// components
import orderBookDataLoader from '../OrderBookDataLoader/orderBookDataLoader';
import OrderBookLastChange from '../OrderBookLastChange/orderBookLastChange';

// styles
import TableWrapper from '../../../../../UI/Table/TableWrapper';

const CustomTableSettings = styled.div``;

const columns = [
  {
    title: 'Price(USDT)',
    dataIndex: 'price',
    width: '30%',
  },
  {
    title: 'Amount (BTC)',
    dataIndex: 'amount',
    width: '30%',
  },
  {
    title: 'Total(USDT)',
    dataIndex: 'total',
    width: '40%',
  },
];

export default function SellOrdersList(props) {
  return (
    <TableWrapper>
      <CustomTableSettings>
        <Table
          scroll={props.fixedFooter ? { y: 882 } : false}
          size="small"
          columns={columns}
          pagination={false}
          dataSource={orderBookDataLoader(props)}
          footer={() => (
            <OrderBookLastChange
              showLastChangeStats={props.showLastChangeStats}
              orders={props.dailyStats}
            />
          )}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {}, // click row
              onDoubleClick: event => {}, // double click row
              onContextMenu: event => {}, // right button click row
              onMouseEnter: event => {}, // mouse enter row
              onMouseLeave: event => {}, // mouse leave row
            };
          }}
        />
      </CustomTableSettings>
    </TableWrapper>
  );
}
