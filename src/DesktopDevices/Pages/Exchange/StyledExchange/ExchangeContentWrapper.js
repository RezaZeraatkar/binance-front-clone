import styled from 'styled-components';

const ExchangeContentWrapper = styled.div`
  margin: 20px auto;
  padding: 0px 20px;
  width: 90%;
  max-width: 1400px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  & > div:first-child {
    flex: 80%;
  }
  & > div:not(:first-child) {
    flex: 20%;
    margin-left: 5px;
  }
`;

export default ExchangeContentWrapper;
