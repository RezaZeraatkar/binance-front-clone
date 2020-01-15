import React from 'react';
import { Table } from 'antd';
import styled from 'styled-components';

// Components
// import TableDataLoader from './TableDataLoader/TableDataLoader';

// styles
import TableWrapper from '../../../../UI/Table/TableWrapper';

const CustomTableSettings = styled.div``;

const columns = [
  {
    title: 'Pair',
    dataIndex: 'pair',
    width: '30%',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    width: '30%',
  },
  {
    title: 'Change',
    dataIndex: 'change',
    width: '40%',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    pair: `BTC/USDT`,
    price: 0.002417,
    change: `0.25%`,
  });
}

export default function Favorites () {
  return (
    <TableWrapper>
      <CustomTableSettings>
        <Table
          scroll={{ y: 312 }}
          size='small'
          columns={columns}
          pagination={false}
          dataSource={data}
        />
      </CustomTableSettings>
    </TableWrapper>
  );
}
