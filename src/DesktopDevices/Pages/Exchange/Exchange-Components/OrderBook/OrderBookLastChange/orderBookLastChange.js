import React from 'react';
import { FaSignal } from 'react-icons/fa';

// Styled
import StyledOrderBookLastChange from './StyledOBLastChanges/styledOrderBookLastChange';
import BidsAsks from './StyledOBLastChanges/styledBidsAsks';
import More from './StyledOBLastChanges/styledMore';
import MarketStatus from './StyledOBLastChanges/styledMarketStatus';

export default function orderBookLastChange ({ orders, show }) {
  return (
    <StyledOrderBookLastChange show={show}>
      <BidsAsks ordersData={orders} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flex: '0 0 26%',
        }}
      >
        <More to='en/orderbook/btcusd'>More</More>
        <MarketStatus>
          <FaSignal />
        </MarketStatus>
      </div>
    </StyledOrderBookLastChange>
  );
}
