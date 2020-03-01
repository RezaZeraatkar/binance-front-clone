import React from 'react';

// Components
import { Title } from '../../../../../UI/Typography/Header/Headers';
import OrdersTable from '../OrdersTable/OrdersTable';

// styles
import OrdersWrapper from '../styles/OrdersWrapper';

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: '1',
  },
  {
    title: 'Pair',
    dataIndex: 'pair',
    key: '2',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: '3',
  },
  {
    title: 'Side',
    dataIndex: 'side',
    key: '4',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: '5',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: '6',
  },
  {
    title: 'Filled',
    dataIndex: 'filled',
    key: '7',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: '8',
  },
  {
    title: 'Trigger Conditions',
    dataIndex: 'conditions',
    key: '9',
  },
];

const dataSource = [{}];

export default function OpenOrders() {
  return (
    <OrdersWrapper>
      <Title style={{ margin: '27px 0 16px' }}>My 24h order history</Title>
      <OrdersTable columns={columns} dataSource={dataSource} />
    </OrdersWrapper>
  );
}
