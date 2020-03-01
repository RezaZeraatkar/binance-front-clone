import React from 'react';
import { Button } from 'antd';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background-color: transparent !important;
  border: none !important;
  color: white !important;
  font-size: 24px !important;
  margin-left: 10px;
  :hover {
    background-color: transparent;
  }
`;

export default function BurgerButton({ showDrawerClick }) {
  return (
    <StyledButton type="primary" onClick={showDrawerClick}>
      <GiHamburgerMenu />
    </StyledButton>
  );
}
