import styled from 'styled-components';
import { InputNumber as IN } from 'antd';

const InputNumber = styled(IN)`
  &.ant-input-number {
    position: relative;
    width: 100%;
    font-size: 12px;
    flex: 82%;
    align-items: center;
    border-radius: 0px;
    border: 1px solid ${props => props.theme.colors.border.primary} !important;
    background-color: ${props => props.theme.colors.background.primary};
  }
  &.ant-input-number-focused {
    box-shadow: none;
    border-color: #f0b90b !important;
  }

  & input {
    color: ${props => props.theme.colors.font.primary};
  }
  /* Input Number Suffix */
  &::after {
    content: ${props => `"${props.suffix}"`};
    position: absolute;
    display: block;
    top: 0;
    right: 25px;
    font-size: 12px;
    color: #cccccc;
    line-height: 2.1;
  }
  & .ant-input-number-handler-wrap {
    display: flex;
    flex-direction: column;
    align-items: center !important;
    width: 16px;
    border-radius: 0px;
    & span {
      display: flex;
      justify-content: center;
      & i {
        padding-left: 3px;
      }
    }
  }
`;

export default InputNumber;
