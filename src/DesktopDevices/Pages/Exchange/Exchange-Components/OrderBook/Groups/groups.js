import React from 'react';
import { Select } from 'antd';

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
      <div style={{ marginRight: '2px' }}>groups</div>
      <div>
        <Select
          defaultValue='2'
          style={{ width: 100, fontSize: 12, border: 0, borderRadius: 0 }}
          onChange={handleChange}
          size='small'
        >
          <Option value='0'>0 Decimal</Option>
          <Option value='1'>1 Decimal</Option>
          <Option value='2'>2 Decimals</Option>
        </Select>
      </div>
    </div>
  );
}
