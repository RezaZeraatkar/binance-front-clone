import React from 'react';

// Components;
import FilterableTable from './FilterableTable';

export default function PairsTable({ data }) {
  const columns = [
    {
      key: 'favorites',
      dataIndex: 'favorites',
      title: '',
    },
    {
      key: 'pair',
      dataIndex: 'pair',
      title: 'Pair',
    },
    {
      key: 'price',
      dataIndex: 'price',
      title: 'Price',
    },
    {
      key: 'change',
      dataIndex: 'change',
      title: 'Change',
    },
  ];

  return <FilterableTable columns={columns} data={data} showHeader="true" />;
}
