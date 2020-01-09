import React from 'react';
import numeral from 'numeral';

// Styles
import ColorizedText from '../../../../../UI/Typography/Text/ColorizedText';

function OrderBookDataLoader (props) {
  let tableData = [];
  const bids = props.bids;
  const asks = props.asks;
  const limit = props.limit;
  if (bids) {
    tableData = bids.slice(0, limit - 1).map((bid, i) => ({
      key: i,
      price: (
        <ColorizedText sign='neg' fontSize='12px' fontWeight='normal'>
          {numeral(bid.price).format('0.00')}
        </ColorizedText>
      ),
      amount: `${numeral(bid.quantity).format('0.000000')}`,
      total: `${numeral(bid.quantity * bid.price).format('00,000.00000000')}`,
    }));
  } else if (asks) {
    tableData = asks.slice(0, limit - 1).map((ask, i) => ({
      key: i,
      price: (
        <ColorizedText sign='pos' fontSize='12px' fontWeight='normal'>
          {numeral(ask.price).format('0.00')}
        </ColorizedText>
      ),
      amount: `${numeral(ask.quantity).format('0.000000')}`,
      total: `${numeral(ask.quantity * ask.price).format('00,000.00000000')}`,
    }));
  }
  return tableData;
}

export default OrderBookDataLoader;
