import React from 'react';
import numeral from 'numeral';

// Styles
import IsPositive from '../../../../../UI/Typography/Text/IsPositiveText';

// Helper Function
function normalizeData(asks, bids) {
  let normAsks;
  let normBids;
  // calculate Total Quantities
  if (asks) {
    let asksQtTotal = asks.reduce(
      (total, ask) => Number(ask.quantity) + total,
      0,
    );

    normAsks = asks.map(ask => {
      ask.volumePercentage = numeral(
        (Number(ask.quantity) / asksQtTotal) * 100 + 50,
      ).format('0.00');
      return ask;
    });
  } else {
    let bidsQtTotal = bids.reduce(
      (total, bid) => Number(bid.quantity) + total,
      0,
    );
    normBids = bids.map(bid => {
      bid.volumePercentage = numeral(
        (Number(bid.quantity) / bidsQtTotal) * 100 + 50,
      ).format('0.00');
      return bid;
    });
  }

  return [normAsks, normBids];
}

function OrderBookDataLoader(props) {
  let tableRowTemplate = [];
  let { bids, asks, limit } = props;
  let normAsks;
  let normBids;
  if (asks) {
    // normalize asks and bids
    [normAsks, normBids] = normalizeData(asks, bids);
    tableRowTemplate = normAsks
      .slice(0, limit - 1)
      .reverse()
      .map((ask, i) => {
        return {
          key: i,
          priceVal: ask.price,
          price: (
            <IsPositive sign="-" fontSize="12px" fontWeight="normal">
              {numeral(ask.price).format('0.00')}
            </IsPositive>
          ),
          amount: `${numeral(ask.quantity).format('0.000000')}`,
          total: `${numeral(ask.quantity * ask.price).format(
            '00,000.00000000',
          )}`,
          width: `${ask.volumePercentage > 100 ? 100 : ask.volumePercentage}`,
        };
      });
  } else if (bids) {
    [normAsks, normBids] = normalizeData(asks, bids);
    tableRowTemplate = normBids.slice(0, limit - 1).map((bid, i) => ({
      key: i,
      priceVal: bid.price,
      price: (
        <IsPositive sign="+" fontSize="12px" fontWeight="normal">
          {numeral(bid.price).format('0.00')}
        </IsPositive>
      ),
      amount: `${numeral(bid.quantity).format('0.000000')}`,
      total: `${numeral(bid.quantity * bid.price).format('00,000.00000000')}`,
      width: `${bid.volumePercentage > 100 ? 100 : bid.volumePercentage}`,
    }));
  }
  return tableRowTemplate;
}

export default OrderBookDataLoader;
