import React from 'react';
import { Row } from 'antd';

// Styles
import ColorizedText from '../../../../../UI/Typography/Text/ColorizedText';

function DataLoader (eachItem, withData) {
  switch (eachItem.type) {
    case 'last_price':
      return (
        <ColorizedText sign='pos'>
          {withData.lastPrice} <span> ${withData.lastPrice}</span>
        </ColorizedText>
      );

    case '24h_change':
      return (
        <ColorizedText sign='pos'>
          {withData.priceChange} {withData.priceChangePercent}
        </ColorizedText>
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

export default function LastPrice ({ statsData, staticData }) {
  console.log('[statsData]: ', statsData);
  console.log('[staticData]: ', staticData);

  const dailyStatTemplate = staticData.map(statItem => (
    <div style={{ flex: '1 1 auto', whiteSpace: 'nowrap' }} key={statItem.id}>
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
      {dailyStatTemplate}
    </Row>
  );
}
