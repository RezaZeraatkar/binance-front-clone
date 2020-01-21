import React from 'react';
import styled from 'styled-components';
const SymbolWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`;

export default function Symbol ({ symbolData }) {
  return (
    <SymbolWrapper>
      <div
        style={{
          paddingRight: '15px',
        }}
      >
        {symbolData}
      </div>
    </SymbolWrapper>
  );
}
