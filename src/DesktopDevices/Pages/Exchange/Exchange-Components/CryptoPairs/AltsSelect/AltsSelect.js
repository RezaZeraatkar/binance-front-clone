import React from 'react';

import StyledSelect from '../../../../../UI/Select/StyledSelect';

function handleChange (value) {
  console.log(`selected ${value}`);
}

const { Option } = StyledSelect;

export default function AltsSelect ({ altsData }) {
  // console.log('[ALTSDATA]: ', altsData['2']);
  // const ALTSData = altsData['2'];
  return (
    <StyledSelect defaultValue='ALTS' size='small'>
      <Option value='ALTS'>ALTS</Option>
      <Option value='ETH'>ETH</Option>
      <Option value='TRX'>TRX</Option>
      <Option value='XRP'>XRP</Option>
    </StyledSelect>
  );
}
