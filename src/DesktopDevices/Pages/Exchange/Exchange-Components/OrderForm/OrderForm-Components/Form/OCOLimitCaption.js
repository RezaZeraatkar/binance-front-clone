import React from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';

const OCOLimitCaptionWrapper = styled.div`
  font-weight: bold;
  color: #333333;
  font-size: 12px;
  & svg {
    font-size: 10px;
    font-weight: 900;
  }
`;

export default function OCOLimitCaption ({ cap }) {
  return (
    <OCOLimitCaptionWrapper>
      <Icon type='right' /> {cap}
    </OCOLimitCaptionWrapper>
  );
}
