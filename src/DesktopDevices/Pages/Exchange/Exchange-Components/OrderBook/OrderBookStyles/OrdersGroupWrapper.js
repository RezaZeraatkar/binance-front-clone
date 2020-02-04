import styled from 'styled-components';

const OrdersGroupWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  margin-top: 10px;
  & label {
    margin-right: 2px;
  }
  & span {
    border: 1px solid #262d33;
    padding: 2px;
    flex-basis: 20%;
    max-width: 40px;
    min-width: 25px;
    text-align: center;
    font-weight: bold;
    background-color: #1a1e22;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => (props.Active ? '#F0B90B' : 'white')};
  }
`;

export default OrdersGroupWrapper;
