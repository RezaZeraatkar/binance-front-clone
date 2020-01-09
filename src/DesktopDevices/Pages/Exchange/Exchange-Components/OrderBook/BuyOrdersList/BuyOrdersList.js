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
    display: none;
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
    dataIndex: 'price',
  },
  {
    dataIndex: 'amount',
  },
  {
    dataIndex: 'total',
  },
];

function sellOrdersList (props) {
  return (
    <TableWrapper>
      <CustomTableSettings>
        <Table
          size='small'
          columns={columns}
          dataSource={orderBookDataLoader(props)}
          pagination={false}
          title={() => (
            <OrderBookLastChange orders={props.dailyStats} show={props.show} />
          )}
        />
      </CustomTableSettings>
    </TableWrapper>
  );
}
export default sellOrdersList;
