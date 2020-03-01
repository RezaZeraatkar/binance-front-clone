import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Span = styled.span`
  color: ${props => props.theme.colors.font.primary};
  font-size: 13px;
  word-break: break-all;
`;

export default function OCOLimitInfo({ text, url }) {
  return (
    <Span>
      <p>{text}</p>
      <Link to={url} style={{ color: '#F0B90B', fontSize: 14 }}>
        view more
      </Link>
    </Span>
  );
}
