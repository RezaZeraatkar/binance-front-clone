import { Select } from 'antd';
import styled from 'styled-components';

const styledSelect = styled(Select)`
  & .ant-select-selection {
    border-radius: 0px;
    font-size: 12px;
    color: #333333;
    border-color: #d9d9d9 !important;
    box-shadow: transparent;
    box-shadow: 0 0 0 0 #d9d9d9 !important;
  }
  &.ant-select-focused .ant-select-selection {
    border: 1px solid #f0b90b !important;
  }
`;

export default styledSelect;
