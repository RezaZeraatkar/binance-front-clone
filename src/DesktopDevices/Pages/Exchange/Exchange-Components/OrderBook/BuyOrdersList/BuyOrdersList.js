import React from 'react';

// styles
import TableWrapper from '../../../../../UI/Table/TableWrapper';
import Table from '../../../../../UI/Table/Table';

// components
import orderBookDataLoader from '../OrderBookDataLoader/orderBookDataLoader';
import OrderBookLastChange from '../OrderBookLastChange/orderBookLastChange';

const columns = [
  {
    title: 'Price(USDT)',
    dataIndex: 'price',
    width: '30%',
    key: 'price',
  },
  {
    title: 'Amount (BTC)',
    dataIndex: 'amount',
    width: '30%',
    key: 'amount',
  },
  {
    title: 'Total(USDT)',
    dataIndex: 'total',
    width: '40%',
    key: 'total',
  },
];

function buyOrdersList(props) {
  return (
    <TableWrapper>
      <Table
        type="buy"
        columns={columns}
        header={props.header}
        dataSource={orderBookDataLoader(props)}
        onRowClicked={(record, rowIndex) => console.log(record, rowIndex)}
        title={() => (
          <OrderBookLastChange
            orders={props.dailyStats}
            showLastChangeStats={props.showLastChangeStats}
          />
        )}
      />
    </TableWrapper>
  );
}
export default buyOrdersList;
