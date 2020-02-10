import React, { useState } from 'react';

import StyledSelect from '../../../../../UI/Select/StyledSelect';
import { func } from 'prop-types';

// function handleChange (value) {
//   console.log(`selected ${value}`);
// }

const { Option } = StyledSelect;

export default function Usd$Select({ usdData }) {
  // console.log('[USDDATA]: ', usdData['3']);
  // const ALTSData = usdData['3'];

  return (
    <StyledSelect defaultValue="USD$" size="small" className="active-select">
      <Option value="USD$">USD$</Option>
      <Option value="USDT">USDT</Option>
      <Option value="BUSD">BUSD</Option>
    </StyledSelect>
  );
}
