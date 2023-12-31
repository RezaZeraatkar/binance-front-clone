import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: #ffffff;
`;

export default function Login() {
  return <StyledLink to="/login">Log In</StyledLink>;
}
