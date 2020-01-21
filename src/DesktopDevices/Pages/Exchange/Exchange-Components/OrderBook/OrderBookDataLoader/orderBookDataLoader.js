import React from 'react';
import numeral from 'numeral';
import uuidv4 from 'uuid';

// Styles
import ColorizedText from '../../../../../UI/Typography/Text/ColorizedText';

function OrderBookDataLoader (props) {
  let tableRowTemplate = [];
  const { bids, asks, limit } = props;
  if (asks) {
    tableRowTemplate = asks
      .slice(0, limit - 1)
      .reverse()
      .map(ask => ({
        key: uuidv4(),
        price: (
          <ColorizedText sign='neg' fontSize='12px' fontWeight='normal'>
            {numeral(ask.price).format('0.00')}
          </ColorizedText>
        ),
        amount: `${numeral(ask.quantity).format('0.000000')}`,
        total: `${numeral(ask.quantity * ask.price).format('00,000.00000000')}`,
      }));
  } else if (bids) {
    tableRowTemplate = bids.slice(0, limit - 1).map(bid => ({
      key: uuidv4(),
      price: (
        <ColorizedText sign='pos' fontSize='12px' fontWeight='normal'>
          {numeral(bid.price).format('0.00')}
        </ColorizedText>
      ),
      amount: `${numeral(bid.quantity).format('0.000000')}`,
      total: `${numeral(bid.quantity * bid.price).format('00,000.00000000')}`,
    }));
  }
  return tableRowTemplate;
}

export default OrderBookDataLoader;
