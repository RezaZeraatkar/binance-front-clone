import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & button {
    flex: 1 1 auto;
    font-size: 12px;
    border-radius: 0px;
    color: rgb(51, 51, 51);
    :not(:last-child) {
      margin-right: 3px;
    }
  }
`;

export default ButtonWrapper;
