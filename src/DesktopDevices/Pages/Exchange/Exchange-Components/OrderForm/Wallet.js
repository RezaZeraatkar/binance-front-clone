import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

const WalletContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionType = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #333333;
`;

const WalletWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 38px;
  margin-bottom: 2px;
  color: #333333;
  & > * {
    padding: 2px;
    font-size: 16px;
  }
`;

export default function Wallet ({ type, what, wallet }) {
  return (
    <WalletContainer>
      <ActionType>
        {type} {what}
      </ActionType>
      <WalletWrapper>
        <Icon type='wallet' style={{ width: 20 }} />
        <div>–</div>
        <span style={{ fontSize: 12 }}>{wallet}</span>
      </WalletWrapper>
    </WalletContainer>
  );
}
