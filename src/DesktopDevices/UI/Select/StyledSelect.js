import { Select } from 'antd';
import styled from 'styled-components';

const styledSelect = styled(Select)`
  & .ant-select-selection {
    border-radius: 0px;
    font-size: 12px;
    color: ${props => props.theme.colors.font.primary};
    border-color: ${props => props.theme.colors.border.primary} !important;
    box-shadow: 0 0 0 0 #d9d9d9 !important;
    background-color: ${props => props.theme.colors.background.primary};
  }
  &.ant-select-focused .ant-select-selection {
    border: 1px solid #f0b90b !important;
  }
  & .ant-select-arrow {
    color: ${props => props.theme.colors.font.primary};
  }
`;

export default styledSelect;
