import styled from 'styled-components';

const OrderFormsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background.darkish};
  font-size: 12px;
  border: 1px solid ${props => props.theme.colors.border.primary};
  display: border-box;
`;

export default OrderFormsWrapper;
