import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: 15px;
  & > div:first-child {
    flex: 25%;
    margin-right: 5px;
  }
  & > div:not(:first-child) {
    flex: 75%;
    margin-left: 5px;
  }
`;

export default Container;
