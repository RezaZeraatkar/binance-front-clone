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
    defaultSortOrder: 'ascend',
    sorter: (a, b) => a.pair.localeCompare(b.pair),
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
