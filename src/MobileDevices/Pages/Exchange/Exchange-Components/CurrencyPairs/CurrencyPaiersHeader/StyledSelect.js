import styled from 'styled-components';
import { Select } from 'antd';

const StyledSelect = styled(Select)`
  & div {
    font-size: 12px;
    margin-right: 2px;
    width: 89px;
  }
  & .ant-select-selection {
    border-radius: 0;
  }
`;

export default StyledSelect;
