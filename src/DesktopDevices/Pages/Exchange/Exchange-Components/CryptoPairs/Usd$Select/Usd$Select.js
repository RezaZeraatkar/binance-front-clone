import React from 'react';

import StyledSelect from '../../../../../UI/Select/StyledSelect';

const { Option } = StyledSelect;

export default function Usd$Select({ usdData, active, onActiveOption }) {
  // console.log('[USDDATA]: ', usdData['3']);
  // const ALTSData = usdData['3'];
  function handleChange(value) {
    const selectedTab = 5;
    onActiveOption(selectedTab);
  }

  return (
    <StyledSelect
      defaultValue="USD$"
      size="small"
      active={active}
      onSelect={handleChange}
    >
      <Option value="USD$">USD$</Option>
      <Option value="USDT">USDT</Option>
      <Option value="BUSD">BUSD</Option>
    </StyledSelect>
  );
}
