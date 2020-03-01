import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogo = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

export default function Logo() {
  return (
    <StyledLogo>
      <Link to="/" style={{ color: '#F0B91C', outline: 'none' }}>
        BINANCE
      </Link>
    </StyledLogo>
  );
}
