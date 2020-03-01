import { Select } from 'antd';
import styled from 'styled-components';

const styledSelect = styled(Select)`
  & .ant-select-selection {
    border-color: ${props =>
      props.active
        ? props.theme.colors.font.favorite
        : props.theme.colors.border.primary} !important;
    border-radius: 0px;
    font-size: 12px;
    color: ${props =>
      props.active
        ? props.theme.colors.font.favorite
        : props.theme.colors.font.primary};
    box-shadow: 0 0 0 0 #d9d9d9 !important;
    background-color: ${props => props.theme.colors.background.primary};
  }
  & .ant-select-arrow {
    color: ${props =>
      props.active
        ? props.theme.colors.font.favorite
        : props.theme.colors.font.primary};
  }
`;

export default styledSelect;
