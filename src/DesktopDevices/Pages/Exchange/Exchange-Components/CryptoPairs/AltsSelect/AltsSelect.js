import React from 'react';

import StyledSelect from '../../../../../UI/Select/StyledSelect';

// function handleChange (value) {
//   console.log(`selected ${value}`);
// }

// const { Option } = StyledSelect;

export default function AltsSelect({ altsData }) {
  // let [options, setActiveOption] = useState(altsData);
  return (
    <StyledSelect defaultValue="ALTS" size="small" className="active-select">
      {/* {options.map(item => (
        <Option key={item} value={item}>
          {item}
        </Option>
      ))} */}
    </StyledSelect>
  );
}
