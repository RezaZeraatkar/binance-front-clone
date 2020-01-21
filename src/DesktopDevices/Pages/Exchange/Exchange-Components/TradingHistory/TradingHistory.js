import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import styled from 'styled-components';

// Actions
import getTradeHistoryAction from '../../../../../ReduxStore/Actions/getTradeHistoryAction';

// Components
// import TableDataLoader from './TableDataLoader/TableDataLoader';

// styles
import TableWrapper from '../../../../UI/Table/TableWrapper';

const CustomTableSettings = styled.div`
  & .ant-table-content {
    border: 1px solid #e6e6e6;
    border-top: 0px;
  }
`;

const columns = [
  {
    dataIndex: 'pair',
    width: '30%',
  },
  {
    dataIndex: 'price',
    width: '30%',
  },
  {
    dataIndex: 'change',
    width: '40%',
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

class TradeHistory extends Component {
  componentDidMount () {
    this.props.getTradeHistory();
  }
  render () {
    console.log(this.props);

    return (
      <TableWrapper>
        <CustomTableSettings>
          <Table
            scroll={{ y: 312 }}
            size='small'
            columns={columns}
            pagination={false}
            dataSource={data}
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
}

function mapStateToProps (state) {
  return {
    tradeHistoryData: state.tradeHistory,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    getTradeHistory: () => getTradeHistoryAction(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TradeHistory);
