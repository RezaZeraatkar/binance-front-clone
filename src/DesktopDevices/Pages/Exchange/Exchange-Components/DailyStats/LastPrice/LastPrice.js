import React from 'react';
import numeral from 'numeral';

// Styles
import ColorizedText from '../../../../../UI/Typography/Text/ColorizedText';

export default function LastPrice ({ lastPriceData }) {
  return (
    <div>
      <div style={{ fontSize: 12 }}>Last Price</div>
      <ColorizedText sign='neg'>
        {numeral(Number(lastPriceData)).format('0,000.00')}
      </ColorizedText>
    </div>
  );
}
