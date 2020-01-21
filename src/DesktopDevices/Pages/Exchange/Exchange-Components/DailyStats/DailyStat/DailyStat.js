import React from 'react';
import styled from 'styled-components';
import numeral from 'numeral';

// Components
import WithLoading from '../../../../../HOCs/withLoading/withLoading';

// Styles
import ColorizedText from '../../../../../UI/Typography/Text/ColorizedText';
import IsPositiveText from '../../../../../UI/Typography/Text/IsPositiveText';

const DailyStatWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 0%;
  justify-content: center;
`;
const Content = styled.div`
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  flex-basis: 100%;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
`;
const DailyStatItemEachItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  justify-content: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  height: 100%;
`;

function generateSign (price) {
  if (price > 0) {
    return '+';
  } else if (price < 0) {
    return '-';
  } else {
    return '';
  }
}

function DataLoader (eachItem, withData) {
  switch (eachItem.type) {
    case 'last_price':
      return (
        <ColorizedText onData={withData.lastPrice}>
          {numeral(withData.lastPrice).format('0,000.00')}
          <IsPositiveText
            sign='neutral'
            fontSize='12px'
            style={{ marginLeft: 4 }}
          >
            ${numeral(withData.lastPrice).format('0,000.00')}
          </IsPositiveText>
        </ColorizedText>
      );
    case '24h_change':
      return (
        <IsPositiveText sign={generateSign(withData.priceChange)}>
          {numeral(withData.priceChange).format('0.00')}{' '}
          {Number(withData.priceChangePercent).toFixed(2)}
        </IsPositiveText>
      );
    case '24h_high':
      return <ColorizedText>{withData.highPrice}</ColorizedText>;
    case '24h_low':
      return <ColorizedText>{withData.lowPrice}</ColorizedText>;
    case '24h_volume':
      return <ColorizedText>{withData.volume}</ColorizedText>;
    default:
      return null;
  }
}

export default function DailyStat ({ statsData, staticData }) {
  const dailyStatTemplate = staticData.map(statItem => (
    <DailyStatItemEachItem key={statItem.id}>
      <div style={{ fontSize: 12 }}>{statItem.title}</div>
      {DataLoader(statItem, statsData)}
    </DailyStatItemEachItem>
  ));

  return (
    <DailyStatWrapper>
      <Content>
        <WithLoading
          spinner={null}
          isLoading={Object.keys(statsData).length === 0}
        >
          {dailyStatTemplate}
        </WithLoading>
      </Content>
    </DailyStatWrapper>
  );
}
