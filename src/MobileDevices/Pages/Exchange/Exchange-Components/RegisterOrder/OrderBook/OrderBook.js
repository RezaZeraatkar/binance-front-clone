import React, { Component } from 'react';
import BuyOrdersList from './BuyOrdersList/BuyOrdersList';
import SellOrdersList from './SellOrdersList/SellOrdersList';
import Group from './Group/Group';

// Styles
import OrderBookWrapper from './OrderBookStyles/OrderBookWrapper';

export default class OrderBook extends Component {
  render () {
    return (
      <OrderBookWrapper>
        <SellOrdersList />
        <BuyOrdersList />
        <Group />
      </OrderBookWrapper>
    );
  }
}
