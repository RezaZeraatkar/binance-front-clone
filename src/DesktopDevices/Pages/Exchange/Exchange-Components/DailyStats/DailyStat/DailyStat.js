import React from 'react';
import { Row } from 'antd';
import numeral from 'numeral';

// Components
import WithLoading from '../../../../../HOCs/withLoading/withLoading';

// Styles
import ColorizedText from '../../../../../UI/Typography/Text/ColorizedText';
import IsPositiveText from '../../../../../UI/Typography/Text/IsPositiveText';

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
    <div style={{ flex: '1 0 auto', whiteSpace: 'nowrap' }} key={statItem.id}>
      <div style={{ fontSize: 12 }}>{statItem.title}</div>
      {DataLoader(statItem, statsData)}
    </div>
  ));

  return (
    <Row
      type='flex'
      style={{
        flex: '80%',
        marginTop: '5px',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        overflow: 'hidden',
      }}
    >
      <WithLoading
        spinner={null}
        isLoading={Object.keys(statsData).length === 0}
      >
        {dailyStatTemplate}
      </WithLoading>
    </Row>
  );
}
