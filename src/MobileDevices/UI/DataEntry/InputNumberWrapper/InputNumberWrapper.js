import styled from 'styled-components';

const InputNumberWrapper = styled.div`
  position: relative;
  width: 100%;
  & .ant-input-number {
    background-color: #1f2833;
    width: 100%;
    border-radius: 0;
    border: 1px solid #262d33;
    /* for Mobile Devices */
    & .ant-input-number-handler-wrap {
      display: none;
    }
  }
`;

export default InputNumberWrapper;
