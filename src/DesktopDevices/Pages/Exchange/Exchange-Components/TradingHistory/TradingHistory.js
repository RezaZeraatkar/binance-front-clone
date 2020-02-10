import React from 'react';

// Components;
import TradingHistoryTable from './TradingHistoryTable';
import TradinHistoryDataLoader from './TradeHistoryDataLoader';
import { Title } from '../../../../UI/Typography/Header/Headers';

function TradeHistory({ tradeHistoryData }) {
  const columns = [
    {
      key: 'price',
      dataIndex: 'price',
      title: '',
    },
    {
      key: 'amount',
      dataIndex: 'amount',
      title: '',
    },
    {
      key: 'time',
      dataIndex: 'time',
      title: '',
    },
  ];

  return (
    <>
      <Title>Trading History</Title>
      <TradingHistoryTable
        columns={columns}
        data={TradinHistoryDataLoader(tradeHistoryData)}
        showHeader="false"
      />
    </>
  );
}

export default TradeHistory;
