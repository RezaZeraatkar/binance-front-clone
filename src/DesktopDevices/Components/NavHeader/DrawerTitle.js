import React from 'react';
import styled from 'styled-components';
import Login from './Login/Login';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  height: 125px;
  padding: 25px 0;
`;
const RegisterButton = styled(Button)`
  width: 80%;
  border-radius: 4px !important;
  font-weight: 700 !important;
  color: #212833;
  font-size: 14px;
`;

export default function DrawerTitle() {
  return (
    <Title>
      <Login />
      <RegisterButton type="danger">
        <Link to="/register">Register</Link>
      </RegisterButton>
    </Title>
  );
}
