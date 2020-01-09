import styled from 'styled-components';

const ExchangeContentWrapper = styled.div`
  margin: 20px auto;
  padding: 0px 20px;
  width: 90%;
  max-width: 1400px;
  display: flex;
  justify-content: space-around;
  & > div:first-child {
    flex: 80%;
    margin-right: 5px;
  }
  & > div:not(:first-child) {
    flex: 20%;
    margin-left: 5px;
  }
`;

export default ExchangeContentWrapper;
