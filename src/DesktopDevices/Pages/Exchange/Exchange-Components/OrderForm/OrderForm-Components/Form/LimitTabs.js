import React from 'react';
import styled from 'styled-components';
import { Popover } from 'antd';
import { FaQuestionCircle } from 'react-icons/fa';

const LimitTabsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SeperatorLine = styled.span`
  color: ${props => props.theme.colors.font.primary};
  margin-right: 5px;
`;

const StyledFaQuestionCircle = styled(FaQuestionCircle)`
  color: ${props => props.theme.colors.font.primary};
  background-color: ${props => props.theme.colors.background.primary};
`;

const StyledPopover = styled.div`
  flex: 30%;
`;

export default function LimitTabs({ text, infoContent, url }) {
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
        <SeperatorLine>|</SeperatorLine>
        <StyledPopover>
          <Popover
            className="pop-over-wrapper"
            placement="bottom"
            content={infoContent}
            trigger="click"
          >
            <StyledFaQuestionCircle />
          </Popover>
        </StyledPopover>
      </div>
    </LimitTabsWrapper>
  );
}
