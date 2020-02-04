import styled from 'styled-components';

const OrderBookLastChange = styled.div`
  display: ${props => (props.showLastChangeStats ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  padding: 0 10px;
  background-color: ${props => props.theme.colors.background.darkish};
  height: 29px;
  line-height: 1;
`;

export default OrderBookLastChange;
