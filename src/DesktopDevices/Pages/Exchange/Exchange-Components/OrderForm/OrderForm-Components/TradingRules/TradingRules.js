import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// custom components
import Popover from '../../../../../../UI/Popover/Popover';

const StyledTradingRules = styled.div`
  position: absolute;
  color: ${props => props.theme.colors.font.primary};
  cursor: pointer;
  top: 15px;
  right: 1px;
`;

const Contnet = styled.div`
  /* TooltipTitle */
  padding: 0;
  /* container */
  & > div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* Row */
    & > div {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      /* Col */
      & div {
        color: ${props => props.theme.colors.font.primary};
        float: left;
        font-size: 12px;
        :first-child {
          padding: 0 24px 0 0;
        }
        :last-child {
          text-align: right;
        }
      }
    }
  }
`;

const content = (
  <Contnet>
    <div>
      <div>
        <div>Minimum Trade Amount:</div>
        <div>0.000001 BTC </div>
      </div>
      <div>
        <div>Min Price Movement:</div>
        <div>0.01 USDT</div>
      </div>
      <div>
        <div>Minimum Order Size:</div>
        <div>10 USDT</div>
      </div>
      <div>
        <div>Maximum Market Order Amount:</div>
        <div>3200 BTC</div>
      </div>
      <div>
        <Link to="/trade-rule" style={{ color: '#f0b90b' }}>
          View More >
        </Link>
      </div>
    </div>
  </Contnet>
);

export default function TradingRules() {
  return (
    <Popover content={content} overlayClassName="popover-trading-rules-overlay">
      <StyledTradingRules>Trading Rules</StyledTradingRules>
    </Popover>
  );
}
