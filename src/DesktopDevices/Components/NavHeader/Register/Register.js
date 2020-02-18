import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// ******************** import Custom Styled Components ********************
const StyledButton = styled(Button)`
  border-radius: 4px !important;
  & a:hover {
    color: #212833 !important;
  }
`;

// ******************** Register Component ********************
export default function Register({ breakpoint }) {
  return (
    <StyledButton size="default" type="danger">
      <Link to="/register">Register</Link>
    </StyledButton>
  );
}
