import React from 'react';
import styled from 'styled-components';
import { Tooltip } from 'antd';

const MarketStatusAlarm = styled.div`
  color: #6fa703;
  font-size: 1em;
  & > svg {
    font-size: 1.1em;
  }
`;

const text = <span>Market Status: Running</span>;

const OrderBookLastChange = ({ children, className, marketStatus }) => {
  return (
    <MarketStatusAlarm className={className} marketStatus='running'>
      <Tooltip placement='right' title={text}>
        {children}
      </Tooltip>
    </MarketStatusAlarm>
  );
};

export default OrderBookLastChange;
