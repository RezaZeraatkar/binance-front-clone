import React from 'react';
import { Table } from 'antd';
import styled from 'styled-components';

// styles
import TableWrapper from '../../../../../UI/Table/TableWrapper';

// components
import orderBookDataLoader from '../OrderBookDataLoader/orderBookDataLoader';
import OrderBookLastChange from '../OrderBookLastChange/orderBookLastChange';

const CustomTableSettings = styled.div`
  .ant-table-wrapper .ant-table-thead tr th span {
    display: ${props => (props.noTitle ? 'none' : 'inline-block')};
  }
  & .ant-table-wrapper .ant-table-tbody tr::after {
    position: absolute;
    display: block;
    content: ' ';
    width: 60%;
    height: 19px;
    background-color: #70a800;
    opacity: 0.1;
    right: 0;
  }
`;

const columns1 = [
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

const columns2 = [
  {
    dataIndex: 'price',
    width: '30%',
  },
  {
    dataIndex: 'amount',
    width: '30%',
  },
  {
    dataIndex: 'total',
    width: '40%',
  },
];

function buyOrdersList (props) {
  return (
    <TableWrapper>
      <CustomTableSettings noTitle={props.noTitle}>
        <Table
          scroll={props.fixedHeader ? { y: 882 } : false}
          size='small'
          columns={props.noTitle ? columns2 : columns1}
          dataSource={orderBookDataLoader(props)}
          pagination={false}
          title={() => (
            <OrderBookLastChange
              orders={props.dailyStats}
              showLastChangeStats={props.showLastChangeStats}
            />
          )}
        />
      </CustomTableSettings>
    </TableWrapper>
  );
}
export default buyOrdersList;
