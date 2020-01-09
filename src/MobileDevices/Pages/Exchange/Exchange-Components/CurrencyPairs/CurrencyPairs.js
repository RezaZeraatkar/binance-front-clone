import React, { Component } from 'react';
import { Tabs } from 'antd';

import ProductsWrapper from '../../../../UI/ProductsWrapper/ProductsWrapper';
import CurrentProduct from './CurrentProduct/CurrentProduct';
import ProductsList from './ProductsList/ProductsList';
import TabsWrapper from './StyledCurrencyPairs/StyledCurrencyPairs';

const { TabPane } = Tabs;

export default class CurrencyPairs extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  callback = key => {
    // console.log(key);
  };

  componentWillUnmount () {
    console.log('compoent unmounted');
  }

  render () {
    return (
      <TabsWrapper className='currency_pairs_Tabs'>
        {/* Currency Pairs */}
        <Tabs defaultActiveKey='2' onChange={this.callback} type='card'>
          {this.props.Data.map(pair => (
            <TabPane tab={pair.tabName} key={pair.key}>
              <ProductsWrapper className='products-wrapper'>
                <CurrentProduct product_name={pair.product_name} />
                <ProductsList showToggle={this.props.showToggle} />
              </ProductsWrapper>
            </TabPane>
          ))}
        </Tabs>
        {/* Children: Toggle Down Botton */}
        {this.props.children}
      </TabsWrapper>
    );
  }
}

// const columns = [
//   {
//     title: '',
//     dataIndex: 'favorite',
//     width: '10%',
//   },
//   {
//     title: 'Pair',
//     dataIndex: 'pair',
//     width: '30%',
//     defaultSortOrder: 'descend',
//     sorter: (a, b) => a.pair.localeCompare(b.pair),
//   },
//   {
//     title: 'Price',
//     dataIndex: 'price',
//     width: '30%',
//     defaultSortOrder: 'descend',
//     sorter: (a, b) => a.price - b.price,
//   },
//   {
//     title: 'Change',
//     dataIndex: 'change',
//     width: '30%',
//     defaultSortOrder: 'descend',
//     sorter: (a, b) => a.change - b.change,
//   },
// ];

// const data = [];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i,
//     favorite: <Icon type='star' />,
//     pair: `BTC/USDT ${i}`,
//     price: `0.00000462`,
//     change: '0.00',
//   });
// }
