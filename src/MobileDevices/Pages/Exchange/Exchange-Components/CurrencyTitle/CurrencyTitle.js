import React from 'react';
import { Typography, Row } from 'antd';
import styled from 'styled-components';

import CaretDownIcon from '../../../../UI/Icons/CaretDown';
const { Text } = Typography;

const StyledText = styled(Text)`
  font-size: 1.1rem;
  color: white !important;
  margin-left: 0.9rem;
  display: block;
  height: 1.1rem;
`;

export default function CurrencyTitle (props) {
  return (
    <Row type='flex' justify='space-between'>
      <StyledText>
        BTC / USDT
        <CaretDownIcon onClick={props.showToggle} type='caret-down' />
      </StyledText>
    </Row>
  );
}
