import styled from 'styled-components';
import { InputNumber as IN } from 'antd';

const InputNumber = styled(IN)`
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
`;

export default InputNumber;
