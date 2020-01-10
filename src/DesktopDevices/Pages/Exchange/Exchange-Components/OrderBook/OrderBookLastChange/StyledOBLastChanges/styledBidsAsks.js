import React from 'react';
import styled from 'styled-components';
import { FaLongArrowAltUp, FaLongArrowAltDown } from 'react-icons/fa';
import numeral from 'numeral';
import ColorizedText from '../../../../../../UI/Typography/Text/ColorizedText';

const StyledBidsAsks = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const ArrowIcons = styled.span`
  line-height: 0;
  & svg:nth-child(2) {
    display: none;
  }
`;

const MatchedPrice = styled.span`
  font-size: 0.786em;
  font-weight: bold;
  color: #333;
`;

function BidsAsks({ ordersData }) {
  return (
    <StyledBidsAsks>
      <ColorizedText sign="neg">
        <span>{numeral(ordersData.lastPrice).format('0.00')}</span>
        <ArrowIcons>
          <FaLongArrowAltDown
            style={{ fontSize: '0.876em', lineHeight: '100%' }}
          />
          <FaLongArrowAltUp
            style={{ fontSize: '0.876em', lineHeight: '100%' }}
          />
        </ArrowIcons>
      </ColorizedText>
      <MatchedPrice>
        {numeral(ordersData.lastPrice).format('$0,000.00')}
      </MatchedPrice>
    </StyledBidsAsks>
  );
}

export default BidsAsks;
