import React from 'react';
// import numeral from 'numeral';

import FavoriteIcon from './FavoriteIcon';

// // Styles
// import ColorizedText from '../../../../../../UI/Typography/Text/ColorizedText';

function pairsDataLoader(data) {
  let allPairs = [];
  const tableRow = Object.keys(data).map(symbol => {
    if (symbol === 'ALTS' || symbol === 'USD') {
      Object.keys(data[symbol]).forEach(pair => {
        allPairs.push(...data[symbol][pair]);
      });
      return allPairs.map(pair => ({
        key: `${pair.symbol}`,
        favorites: (
          <FavoriteIcon
            id={pair.symbol}
            symbol={pair.symbol}
            isFavorite={pair.isFavorite}
          />
        ),
        pair: `${pair.symbol}`,
        price: pair.lastPrice,
        change: pair.priceChangePercent,
      }));
    } else {
      return data[symbol].map(pair => {
        return {
          key: `${pair.symbol}`,
          favorites: (
            <FavoriteIcon
              id={pair.symbol}
              symbol={pair.symbol}
              isFavorite={pair.isFavorite}
            />
          ),
          pair: `${pair.symbol}`,
          price: pair.lastPrice,
          change: pair.priceChangePercent,
        };
      });
    }
  });

  return tableRow[0];
}

export default pairsDataLoader;
