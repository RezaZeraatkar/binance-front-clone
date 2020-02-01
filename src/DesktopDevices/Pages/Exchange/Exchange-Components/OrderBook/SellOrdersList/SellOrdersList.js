import React from 'react';

// components
import orderBookDataLoader from '../OrderBookDataLoader/orderBookDataLoader';
import Table from '../../../../../UI/Table/Table';
import OrderBookLastChange from '../OrderBookLastChange/orderBookLastChange';

// styles
import TableWrapper from '../../../../../UI/Table/TableWrapper';

const columns = [
  {
    title: 'Price(USDT)',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Amount (BTC)',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Total(USDT)',
    dataIndex: 'total',
    key: 'total',
  },
];

export default function SellOrdersList(props) {
  // function handleOnRowClick(data) {
  //   console.log(data);
  // }

  return (
    <TableWrapper>
      <Table
        type="sell"
        header={props.header}
        columns={columns}
        dataSource={orderBookDataLoader(props)}
        onRowClicked={(record, rowIndex) => console.log(record, rowIndex)}
        footer={() => (
          <OrderBookLastChange
            orders={props.dailyStats}
            showLastChangeStats={props.showLastChangeStats}
          />
        )}
      />
    </TableWrapper>
  );
}
