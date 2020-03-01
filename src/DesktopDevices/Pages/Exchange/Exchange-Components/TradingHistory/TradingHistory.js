import React from 'react';
import styled from 'styled-components';

// Components;
import TradingHistoryTable from './TradingHistoryTable';
import TradinHistoryDataLoader from './TradeHistoryDataLoader';
import { Title } from '../../../../UI/Typography/Header/Headers';

const StyleTradeHistory = styled.div`
  min-height: 356px;
`;

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
    <StyleTradeHistory>
      <Title>Trading History</Title>
      <TradingHistoryTable
        columns={columns}
        data={TradinHistoryDataLoader(tradeHistoryData)}
        showHeader="false"
      />
    </StyleTradeHistory>
  );
}

export default TradeHistory;
