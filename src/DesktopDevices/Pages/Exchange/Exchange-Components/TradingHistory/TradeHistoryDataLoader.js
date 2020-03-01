import React from 'react';
// import numeral from 'numeral';

// Styles
import TimeFormatter from '../../../../UI/Time/TimeFormatter';
// import ColorizedText from '../../../../../../UI/Typography/Text/ColorizedText';

function tradeHistoryDataLoader(data) {
  if (Object.keys(data).length !== 0) {
    const tableRow = Object.values(data).map((matchedPrice, idx) => {
      return {
        key: idx,
        price: matchedPrice.price,
        amount: matchedPrice.qty,
        time: <TimeFormatter time={matchedPrice.time} />,
      };
    });
    return tableRow;
  } else {
    return [];
  }
}

export default tradeHistoryDataLoader;
