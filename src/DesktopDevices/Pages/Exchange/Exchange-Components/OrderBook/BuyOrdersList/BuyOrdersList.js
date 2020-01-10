import React from 'react';
import { Table } from 'antd';
import styled from 'styled-components';

// styles
import TableWrapper from '../../../../../UI/Table/TableWrapper';

// components
import orderBookDataLoader from '../OrderBookDataLoader/orderBookDataLoader';
import OrderBookLastChange from '../OrderBookLastChange/orderBookLastChange';

const CustomTableSettings = styled.div`
  & .ant-table-wrapper .ant-table-thead {
    display: table-header-group;
  }
  & .ant-table-wrapper .ant-table-tbody tr::after {
    position: absolute;
    display: block;
    content: ' ';
    width: 60%;
    height: 20px;
    background-color: #70a800;
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

function buyOrdersList(props) {
  return (
    <TableWrapper>
      <CustomTableSettings>
        <Table
          size="small"
          columns={columns}
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
