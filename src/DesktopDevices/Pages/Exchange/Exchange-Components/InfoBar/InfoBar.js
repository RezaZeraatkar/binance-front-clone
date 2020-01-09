import React from 'react';
import styled from 'styled-components';

const InfoBarWrapper = styled.div`
  background-color: rgb(35, 29, 46);
`;

const StyledInfoBarItems = styled.div`
  background-color: rgb(35, 29, 46);
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: auto;
  max-width: 1460px;
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
    text:
      'Binance Futures Launches XRP/USDT Perpetual Contract With Up to 75x Leverage',
    address: 'https://www.binance.com/en/support/articles/360038497311',
    pages: '(01-06)',
  },
  {
    text: 'Binance Community Coin Vote Round 5 - DREP vs NEW',
    address: 'https://www.binance.com/en/support/articles/360038496731',
    pages: '(01-06)',
  },
  {
    text: 'Notice of Removal of USDC Trading Pairs on 2020/01/07',
    address: 'https://binance.zendesk.com/hc/en-us/articles/360038120032',
    pages: '(01-06)',
  },
];

function InfoBarItems () {
  const InfoItems = items.map(item => (
    <Li key={item.text}>
      <Link href={item.address} rel='noopener noreferrer' target='_blank'>
        <Span>{item.text}</Span>
        <i style={{ flex: '0 1 25%' }}>{item.pages}</i>
      </Link>
    </Li>
  ));
  return (
    <InfoBarWrapper>
      <StyledInfoBarItems className='ds-info-bar'>
        <Ul>{InfoItems}</Ul>
      </StyledInfoBarItems>
    </InfoBarWrapper>
  );
}

export default InfoBarItems;
