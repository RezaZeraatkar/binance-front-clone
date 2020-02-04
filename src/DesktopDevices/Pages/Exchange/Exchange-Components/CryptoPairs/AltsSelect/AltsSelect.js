import React, { useState } from 'react';

import StyledSelect from '../../../../../UI/Select/StyledSelect';

// function handleChange (value) {
//   console.log(`selected ${value}`);
// }

const { Option } = StyledSelect;

export default function AltsSelect({ altsData }) {
  let [options, setActiveOption] = useState(altsData);
  console.log('ALTSDATA: ', altsData);
  return (
    <StyledSelect defaultValue="ALTS" size="small">
      {/* {options.map(item => (
        <Option key={item} value={item}>
          {item}
        </Option>
      ))} */}
    </StyledSelect>
  );
}
