import React from 'react';
import { Table } from 'antd';

// Custom Components
import Price from './Price';
import FavoriteIcon from './FavoriteIcon';

const columns = [
  {
    dataIndex: 'product',
    width: '30%',
  },
  {
    dataIndex: 'price',
    width: '62%',
  },
  {
    dataIndex: 'favorite',
    width: '8%',
  },
];
const data = [
  {
    key: '1',
    product: 'NULS / ETH',
    price: <Price />,
    favorite: <FavoriteIcon />,
  },
  {
    key: '2',
    product: 'NULS / ETH',
    price: <Price />,
    favorite: <FavoriteIcon />,
  },
];

export default function ProductList (props) {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      onRow={(record, rowIndex) => {
        console.log(record, rowIndex);
        return {
          onClick: event => props.showToggle(),
        };
      }}
    />
  );
}
