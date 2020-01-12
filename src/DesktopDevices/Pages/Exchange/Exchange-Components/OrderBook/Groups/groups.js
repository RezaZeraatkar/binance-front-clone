import React from 'react';
import { Select } from 'antd';

// styled components
import StyledSelect from '../../../../../UI/Select/StyledSelect';

const { Option } = Select;

function handleChange (value) {
  console.log(`selected ${value}`);
}

export default function groups () {
  return (
    <div
      style={{
        position: 'absolute',
        top: '4px',
        right: '4px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{ marginRight: '2px', color: '#999999' }}>groups</div>
      <div>
        <StyledSelect defaultValue='2' onChange={handleChange} size='small'>
          <Option value='0'>0 decimal</Option>
          <Option value='1'>1 decimal</Option>
          <Option value='2'>2 decimals</Option>
        </StyledSelect>
      </div>
    </div>
  );
}
