import React, { useState } from 'react';
import { Radio } from 'antd';
import styled from 'styled-components';

const RadioGroupWrapper = styled(Radio.Group)`
  display: flex !important;
  flex: 60%;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  /* change and volume label containers*/
  & label {
    display: block;
    font-size: 12px;
    color: ${props => props.theme.colors.font.primary};
    margin: 0px;
  }
  /* radio border color */
  & .ant-radio-input:focus + .ant-radio-inner {
    box-shadow: 0 0 0 0 !important;
    border: 1px solid #f0b90b;
  }
  & .ant-radio:hover {
    & span.ant-radio-inner {
      border: 1px solid #f0b90b !important;
    }
  }
  & .ant-radio-inner {
    /* dot background color */
    background-color: ${props => props.theme.colors.background.primary};
    :hover {
      border: 1px solid #f0b90b !important;
    }
  }
  & .ant-radio-checked .ant-radio-inner {
    border: 1px solid #f0b90b;

    /* dot color */
    :after {
      background-color: #f0b90b;
    }
  }
`;

function RadioGroup() {
  const [radioValue, setRadioValue] = useState(1);
  const onRadioChange = e => {
    console.log('radio checked', radioValue);
    setRadioValue(e.target.value);
  };
  return (
    <RadioGroupWrapper onChange={onRadioChange} value={radioValue} size="small">
      <Radio value={1}>Change</Radio>
      <Radio value={2}>Volume</Radio>
    </RadioGroupWrapper>
  );
}

export default RadioGroup;
