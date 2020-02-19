import React from 'react';

import StyledSelect from '../../../../../UI/Select/StyledSelect';

// function handleChange (value) {
//   console.log(`selected ${value}`);
// }

const { Option } = StyledSelect;

export default function AltsSelect({ altsData, active, onActiveOption }) {
  // let [options, setActiveOption] = useState(altsData);
  function handleChange(value) {
    const selectedTab = 4;
    onActiveOption(selectedTab);
  }
  return (
    <StyledSelect
      defaultValue="ALTS"
      size="small"
      active={active}
      onFocus={handleChange}
    >
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
