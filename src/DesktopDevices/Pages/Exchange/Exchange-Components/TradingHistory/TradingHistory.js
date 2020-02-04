import React from 'react';
import { Table } from 'antd';
import styled from 'styled-components';

// Components
import tradeHistoryDataLoader from './TradeHistoryDataLoader';

// styles
import TableWrapper from '../../../../UI/Table/TableWrapper';

const CustomTableSettings = styled.div`
  & .ant-table-content {
    border: 1px solid ${props => props.theme.colors.border.primary};
    border-top: 0px;
  }
`;

const columns = [
  {
    title: 'Price',
    dataIndex: 'price',
    width: '40%',
    align: 'center',
  },
  {
    title: 'Amount',
    dataIndex: 'qty',
    width: '30%',
    align: 'center',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    width: '30%',
    align: 'center',
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

function TradeHistory({ tradeHistoryData }) {
  return (
    <TableWrapper>
      <CustomTableSettings>
        <Table
          scroll={{ y: 312 }}
          size="small"
          columns={columns}
          pagination={false}
          dataSource={tradeHistoryDataLoader(tradeHistoryData)}
          title={() => (
            <div style={{ fontWeight: 'bold', fontSize: 14, marginTop: 10 }}>
              Trade History
            </div>
          )}
        />
      </CustomTableSettings>
    </TableWrapper>
  );
}

export default TradeHistory;
