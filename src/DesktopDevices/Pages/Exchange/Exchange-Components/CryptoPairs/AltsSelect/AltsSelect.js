import React from 'react';

import StyledSelect from '../../../../../UI/Select/StyledSelect';

// function handleChange (value) {
//   console.log(`selected ${value}`);
// }

const { Option } = StyledSelect;

export default function AltsSelect({ altsData, active }) {
  return (
    <StyledSelect defaultValue="ALTS" size="small" active={active === '4'}>
      <Option key="ALTS" value="ALTS">
        ALTS
      </Option>
      {/* {options.map(item => (
        <Option key={item} value={item}>
          {item}
        </Option>
      ))} */}
    </StyledSelect>
  );
}
