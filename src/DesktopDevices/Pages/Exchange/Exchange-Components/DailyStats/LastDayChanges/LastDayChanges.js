import React from 'react';
import numeral from 'numeral';

// Styles
import ColorizedText from '../../../../../UI/Typography/Text/ColorizedText';

export default function LastDayChanges ({ lastDayChangesData }) {
  return (
    <div>
      <div style={{ fontSize: 12 }}>24h Change</div>
      <ColorizedText sign='pos'>
        {numeral(Number(lastDayChangesData.priceChange)).format('0.00')}{' '}
        {Number(lastDayChangesData.priceChangePercent).toFixed(2)}
      </ColorizedText>
    </div>
  );
}
