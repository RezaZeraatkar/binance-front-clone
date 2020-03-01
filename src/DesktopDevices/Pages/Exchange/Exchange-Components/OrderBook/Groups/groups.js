import React from 'react';
import { Select } from 'antd';

// styled components
import StyledSelect from '../../../../../UI/Select/StyledSelect';
import GroupsWrapper from './StyledGroupsWrapper';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default function groups() {
  return (
    <GroupsWrapper>
      <div className="groups-label">groups</div>
      <StyledSelect defaultValue="2" onChange={handleChange} size="small">
        <Option value="0">0 decimals</Option>
        <Option value="1">1 decimals</Option>
        <Option value="2">2 decimals</Option>
      </StyledSelect>
    </GroupsWrapper>
  );
}
