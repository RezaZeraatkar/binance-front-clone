import React, { Component } from 'react';
import { Table } from 'antd';
import styled from 'styled-components';

// Components
import pairsDataLoader from './pairsDataLoader/pairsDataLoader';
import PairsHeader from './PairsHeader';

// styles
import TableWrapper from '../../../../../UI/Table/TableWrapper';

const CustomTableSettings = styled.div``;

export default class PairsTable extends Component {
  state = {
    data: [],
    isfavorite: false,
  };
  columns = [
    {
      dataIndex: 'favorite',
      width: '5%',
      align: 'center',
    },
    {
      title: 'Pair',
      dataIndex: 'pair',
      width: '30%',
      align: 'center',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.pair.localeCompare(b.pair),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      width: '40%',
      align: 'center',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Change',
      dataIndex: 'change',
      width: '25%',
      align: 'center',
      sorter: (a, b) => a.change - b.change,
    },
  ];

  addFavoriteHandler = () => {
    this.setState({ isfavorite: !this.state.isfavorite });
  };

  onSearchFilterHandler = searchedText => {
    console.log(searchedText);
  };

  render () {
    const { data } = this.props;

    return (
      <TableWrapper>
        <CustomTableSettings>
          <Table
            scroll={{ y: 312 }}
            size='small'
            columns={this.columns}
            pagination={false}
            dataSource={pairsDataLoader(data)}
            title={() => (
              <PairsHeader onSearchFilter={this.onSearchFilterHandler} />
            )}
            tableLayout='fixed'
          />
        </CustomTableSettings>
      </TableWrapper>
    );
  }
}
