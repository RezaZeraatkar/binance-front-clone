import React from 'react';
import styled from 'styled-components';
import { Popover } from 'antd';
import { FaQuestionCircle } from 'react-icons/fa';

const LimitTabsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function LimitTabs ({ text, infoContent, url }) {
  return (
    <LimitTabsWrapper>
      <span style={{ marginRight: '8px' }}>{text}</span>
      <div
        style={{
          whiteSpace: 'nowrap',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span style={{ color: '#000', marginRight: 5 }}>|</span>
        <Popover
          className='pop-over-wrapper'
          placement='bottom'
          content={infoContent}
          trigger='click'
          style={{ flex: '30%' }}
        >
          <FaQuestionCircle style={{ color: '#000' }} />
        </Popover>
      </div>
    </LimitTabsWrapper>
  );
}
