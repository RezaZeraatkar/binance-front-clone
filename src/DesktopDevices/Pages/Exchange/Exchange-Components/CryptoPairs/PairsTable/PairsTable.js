import React from 'react';
import { Table } from 'antd';
import styled from 'styled-components';

// Components
import pairsDataLoader from './pairsDataLoader/pairsDataLoader';
import PairsHeader from './PairsHeader';

// styles
import TableWrapper from '../../../../../UI/Table/TableWrapper';

const CustomTableSettings = styled.div``;

const columns = [
  {
    dataIndex: 'start',
    width: '5%',
    align: 'left',
  },
  {
    title: 'Pair',
    dataIndex: 'pair',
    width: '30%',
    align: 'left',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    width: '40%',
    align: 'left',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Change',
    dataIndex: 'change',
    width: '25%',
    align: 'left',
    sorter: (a, b) => a.change - b.change,
  },
];

// const data = [];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     pair: `BTC/USDT`,
//     price: 0.002417,
//     change: `0.25%`,
//   });
// }

export default function PairsTable ({ data }) {
  return (
    <TableWrapper>
      <CustomTableSettings>
        <Table
          scroll={{ y: 312 }}
          size='small'
          columns={columns}
          pagination={false}
          dataSource={pairsDataLoader(data)}
          title={() => <PairsHeader />}
          tableLayout='fixed'
        />
      </CustomTableSettings>
    </TableWrapper>
  );
}
