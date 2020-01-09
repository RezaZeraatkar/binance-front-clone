import React from 'react';

// styles
import OrdersGroupWrapper from '../OrderBookStyles/OrdersGroupWrapper';

export default function Group (props) {
  const groups = [
    { id: 1, page: 5 },
    { id: 2, page: 6 },
    { id: 3, page: 7 },
  ];

  return (
    <OrdersGroupWrapper className='groups'>
      <label>Group</label>
      {groups.map(gp => (
        <span key={gp.id}>{gp.page}</span>
      ))}
    </OrdersGroupWrapper>
  );
}
