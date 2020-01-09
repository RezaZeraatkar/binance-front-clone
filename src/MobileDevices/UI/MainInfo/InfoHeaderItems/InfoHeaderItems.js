import React from 'react';
import styled from 'styled-components';

const StyledInfoHeaderItems = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1260px;
  position: relative;
  width: 100%;
  margin: auto;
  color: #b6b7b6;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  overflow-y: hidden;
  width: 100%;
  list-style: none;
  margin: 11px 0px;
`;

const Li = styled.li`
  line-height: 24px;
  max-width: 33.33%;
  flex: 1 0 33.33%;
  & > * {
    align-items: center;
    display: flex;
    height: 100%;
    padding: 0px 12px 0px 0px;
  }
`;

const Link = styled.a`
  color: rgb(204, 204, 204);
  font-size: 12px;
  &:visited {
    color: rgb(204, 204, 204);
    font-size: 12px;
  }
  &:hover {
    color: #f0b90b;
  }
`;

const Span = styled.span`
  padding-right: 2em;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const items = [
  {
    text: 'cubex Futures Launches Referral Program for test 1',
    address: 'www.google.com',
    pages: '(12-13)',
  },
  {
    text: 'cubex Futures Launches Referral Program for test 2',
    address: 'www.cubex.com',
    pages: '(12-13)',
  },
  {
    text: 'cubex Futures Launches Referral Program for test 3',
    address: 'www.styled-components.com',
    pages: '(12-13)',
  },
];

function InfoHeaderItems(props) {
  const InfoItems = props.items.map((item, i) => (
    <Li key={item.text}>
      <Link href={item.address} rel="noopener noreferrer" target="_blank">
        <Span>{item.text}</Span>
        <i style={{ flex: '0 1 25%' }}>{item.pages}</i>
      </Link>
    </Li>
  ));

  InfoHeaderItems(items);

  return (
    <StyledInfoHeaderItems>
      <Ul>{InfoItems}</Ul>
    </StyledInfoHeaderItems>
  );
}

export default InfoHeaderItems;
