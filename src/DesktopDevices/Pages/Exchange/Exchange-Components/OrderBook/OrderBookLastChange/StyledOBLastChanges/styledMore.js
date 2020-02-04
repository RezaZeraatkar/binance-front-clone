import styled from 'styled-components';
import { Link } from 'react-router-dom';

const OrderBookLastChange = styled(Link)`
  color: ${props => props.theme.colors.font.primary};
  font-size: 0.768em;
  outline: none;
  text-decoration: underline;
  &:hover {
    text-decoration: underline;
  }
`;

export default OrderBookLastChange;
