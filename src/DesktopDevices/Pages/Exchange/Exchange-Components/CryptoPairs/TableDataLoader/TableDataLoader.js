import React from 'react';
import numeral from 'numeral';

// Styles
import ColorizedText from '../../../../../UI/Typography/Text/ColorizedText';

function OrderBookDataLoader (data) {
  let tableRowTemplate = [];
  const stats = data;
  if (stats) {
    tableRowTemplate = stats.map((row, i) => ({
      key: i,
      price: (
        <ColorizedText sign='neg' fontSize='12px' fontWeight='normal'>
          {numeral(row.price).format('0.00')}
        </ColorizedText>
      ),
      pair: `${numeral(row.quantity).format('0.000000')}`,
      change: `${numeral(row.quantity).format('00,000.00000000')}`,
    }));
  }
  return tableRowTemplate;
}

export default OrderBookDataLoader;
