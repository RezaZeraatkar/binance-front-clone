import React from 'react';
import styled from 'styled-components';
import numeral from 'numeral';

import StyledArowIcons from './styledArowIcons';
import ColorizedText from '../../../../../../UI/Typography/Text/ColorizedText';

const StyledBidsAsks = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const MatchedPrice = styled.span`
  font-size: 0.786em;
  font-weight: bold;
  color: ${props => props.theme.colors.font.primary};
  margin-left: 4px;
`;

function BidsAsks({ ordersData }) {
  return (
    <StyledBidsAsks>
      <ColorizedText onData={ordersData.lastPrice} fontSize="18px">
        {numeral(ordersData.lastPrice).format('0.00')}
        <StyledArowIcons onData={ordersData.lastPrice} />
      </ColorizedText>
      <MatchedPrice>
        {numeral(ordersData.lastPrice).format('$0,000.00')}
      </MatchedPrice>
    </StyledBidsAsks>
  );
}

export default BidsAsks;
