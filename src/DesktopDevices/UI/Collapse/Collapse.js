import React, { useState, Fragment } from 'react';
import { FaRegCaretSquareDown, FaRegCaretSquareUp } from 'react-icons/fa';
import styled from 'styled-components';

// Components
import Scrollbar from '../Scrollbar/Scrollbar';

const CollapseContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Panel = styled.div``;
const Content = styled.div`
  display: flex;
  height: 40px;
  border-bottom: 1px solid ${props => props.theme.colors.border.primary};
  border-left: 1px solid ${props => props.theme.colors.border.primary};
  border-right: 1px solid ${props => props.theme.colors.border.primary};
  :first-child {
    border-top: 1px solid ${props => props.theme.colors.border.primary};
  }
  padding: 4px 6px;
  overflow: hidden;
  box-sizing: border-box;
`;

export default function Collapse({ title, content, onPanelClick }) {
  const [open, setOpen] = useState(false);
  const [visibleContent, setVisibleContent] = useState(content.slice(0, 2));
  const [inCollapseContent, setInCollapseContent] = useState(content.slice(3));
  function handleCollapseToggle() {
    if (open) {
      setInCollapseContent(content.slice(3));
      setOpen(!open);
    } else {
      setVisibleContent(content.slice(0, 2));
      setOpen(!open);
    }
  }

  return (
    <CollapseContainer>
      <Header>
        <span>{title}</span>
        {open ? (
          <FaRegCaretSquareUp
            style={{ fontSize: 20, fontWeight: 'bold', cursor: 'pointer' }}
            onClick={handleCollapseToggle}
          />
        ) : (
          <FaRegCaretSquareDown
            style={{ fontSize: 20, fontWeight: 'bold', cursor: 'pointer' }}
            onClick={handleCollapseToggle}
          />
        )}
      </Header>
      <Panel showScroll={open}>
        <Scrollbar
          style={{ height: open ? '200px' : '80px' }}
          hideTracksWhenNotNeeded
        >
          {visibleContent.map(child => (
            <Content
              key={child.props.id}
              onClick={() => onPanelClick(child.props.id)}
            >
              {child}
            </Content>
          ))}
          {open ? (
            <Fragment>
              {inCollapseContent.map(row => (
                <Content
                  key={row.props.id}
                  onClick={() => onPanelClick(row.props.id)}
                >
                  {row}
                </Content>
              ))}
            </Fragment>
          ) : null}
        </Scrollbar>
      </Panel>
    </CollapseContainer>
  );
}
