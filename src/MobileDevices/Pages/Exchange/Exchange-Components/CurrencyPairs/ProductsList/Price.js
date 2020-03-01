import React from 'react';
import styled from 'styled-components';

import { Typography } from 'antd';

import ColorizedText from '../../../../../UI/Typography/Text/ColorizedText';

const { Text } = Typography;

const SmText = styled.span`
  font-size: 0.632rem;
`;

const StyledText = styled(Text)`
  color: white !important;
  margin-left: 0.9rem;
  display: block;
  height: 1.1rem;
`;

const Price = () => {
  return (
    <StyledText>
      <ColorizedText sign='neg'>7,147.18</ColorizedText>
      <ColorizedText sign='neg'>
        <SmText>-57%</SmText>
      </ColorizedText>
    </StyledText>
  );
};

export default Price;
